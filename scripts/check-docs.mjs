// Static checks for the documentation site. Run before pushing: `node scripts/check-docs.mjs`.
// - Local links and images must exist with exact letter case (CI builds on a case-sensitive file system).
// - Root-relative and help.datafor.com.cn links must match a page permalink.
// - Permalinks must be unique.
// - English pages must not contain CJK text outside code blocks (warning only).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docs = path.join(root, 'docs');
const slash = value => value.replaceAll('\\', '/');
const skipDirs = new Set(['.vuepress', 'zh']);

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) return skipDirs.has(entry.name) ? [] : walk(file);
    return [file];
  });
}

// Exact-case existence check, segment by segment.
function existsExact(absolute) {
  const relative = path.relative(root, absolute);
  if (relative.startsWith('..')) return fs.existsSync(absolute);
  let current = root;
  for (const segment of relative.split(path.sep)) {
    if (!segment) continue;
    let names;
    try { names = fs.readdirSync(current); } catch { return false; }
    if (!names.includes(segment)) return false;
    current = path.join(current, segment);
  }
  return true;
}

const normalizeRoute = value => {
  let route = value.trim().replace(/\/{2,}/g, '/');
  if (!route.startsWith('/')) route = '/' + route;
  route = route.replace(/\/index\.html$/, '/').replace(/\.html$/, '/');
  if (!route.endsWith('/')) route += '/';
  return route;
};

const markdown = walk(docs).filter(file => file.endsWith('.md'));
const pages = markdown.map(file => {
  const text = fs.readFileSync(file, 'utf8').replace(/^﻿/, '').replace(/\r\n/g, '\n');
  const front = text.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  const permalink = front.match(/^permalink:\s*(.+)$/m)?.[1]?.trim().replace(/^["']|["']$/g, '');
  return { file, text, permalink };
});

const routes = new Map();
const problems = [];
const warnings = [];
// Unquoted frontmatter values containing ": " break the YAML parser and the whole build.
for (const page of pages) {
  const front = page.text.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? '';
  for (const line of front.split('\n')) {
    const m = line.match(/^(\w+):\s+([^"'\s[{|>].*)$/);
    if (m && /:\s/.test(m[2])) problems.push(`${slash(path.relative(root, page.file))}: frontmatter "${m[1]}" contains ": " and must be quoted`);
  }
}
for (const page of pages) {
  if (!page.permalink) continue;
  const route = normalizeRoute(page.permalink);
  if (routes.has(route)) problems.push(`duplicate permalink ${route}: ${slash(path.relative(root, routes.get(route)))} and ${slash(path.relative(root, page.file))}`);
  routes.set(route, page.file);
}
// Pages without a permalink are served by their path.
for (const page of pages) {
  const byPath = '/' + slash(path.relative(docs, page.file)).replace(/\.md$/, '.html');
  routes.set(normalizeRoute(byPath), page.file);
  routes.set(normalizeRoute('/' + slash(path.relative(docs, page.file))), page.file);
}

function references(text) {
  const refs = [];
  const body = text.replace(/^---\n[\s\S]*?\n---/, '').replace(/```[^\n]*\n[\s\S]*?```/g, '').replace(/`[^`\n]*`/g, '');
  for (const match of body.matchAll(/(!?)\[[^\]]*\]\((<[^>]+>|[^\s)]+)(?:\s+"[^"]*")?\)/g)) {
    refs.push({ type: match[1] ? 'image' : 'link', target: match[2].replace(/^<|>$/g, '') });
  }
  for (const match of body.matchAll(/<(img|a)\b[^>]*?\b(?:src|href)=["']([^"']+)["'][^>]*>/gi)) {
    refs.push({ type: match[1].toLowerCase() === 'img' ? 'image' : 'link', target: match[2] });
  }
  return { refs, body };
}

let checked = 0;
for (const page of pages) {
  const rel = slash(path.relative(root, page.file));
  const { refs, body } = references(page.text);
  for (const ref of refs) {
    let target = ref.target;
    const help = target.match(/^https?:\/\/help\.datafor\.com\.cn(\/[^\s]*)?$/i);
    if (help) target = help[1] || '/';
    else if (/^(?:https?:|data:|mailto:|tel:|\/\/)/i.test(target)) continue;
    if (target.startsWith('#')) continue;
    let pathname;
    try { pathname = decodeURIComponent(target.split(/[?#]/)[0]); } catch { problems.push(`${rel}: invalid URL ${ref.target}`); continue; }
    checked++;
    if (ref.type === 'link' && pathname.startsWith('/')) {
      if (routes.has(normalizeRoute(pathname))) continue;
      const asFile = path.join(docs, pathname);
      if (pathname.endsWith('.md') && existsExact(asFile)) continue;
      const pub = path.join(docs, '.vuepress/public', pathname);
      if (existsExact(pub)) continue;
      problems.push(`${rel}: link to unknown route ${ref.target}`);
      continue;
    }
    const resolved = pathname.startsWith('/') ? path.join(docs, '.vuepress/public', pathname) : path.resolve(path.dirname(page.file), pathname);
    if (!existsExact(resolved)) problems.push(`${rel}: missing ${ref.type} ${ref.target}`);
  }
  // VuePress compiles pages as Vue templates: "{{" outside code is parsed as an expression and breaks the build.
  const prose = body.replace(/<!--[\s\S]*?-->/g, '');
  if (/\{\{/.test(prose) && !/v-pre/.test(page.text)) problems.push(`${rel}: "{{" outside code; wrap it in backticks`);
  if (/\/docs\/(documentation|release)\//.test(slash(page.file))) {
    const cjk = prose.match(/[㐀-鿿豈-﫿]+/g);
    if (cjk) warnings.push(`${rel}: CJK text ${[...new Set(cjk)].slice(0, 5).join(' ')}`);
  }
}

// Sidebar and navbar links in the VuePress config must point to an existing page or route.
for (const configFile of ['docs.ts', 'release.ts', 'api.ts', 'navbar.ts']) {
  const file = path.join(docs, '.vuepress', configFile);
  if (!fs.existsSync(file)) continue;
  // Skip commented-out lines and the unused zh locale (its note link is "/documenation").
  const text = fs.readFileSync(file, 'utf8').split(/\r?\n/).filter(line => !line.trim().startsWith('//')).join('\n');
  for (const match of text.matchAll(/link:\s*"([^"]+)"/g)) {
    const link = match[1];
    if (/^https?:/.test(link) || link === '/documenation') continue;
    checked++;
    if (link.endsWith('.md')) {
      if (!existsExact(path.join(docs, link))) problems.push(`.vuepress/${configFile}: link to missing page ${link}`);
    } else if (!routes.has(normalizeRoute(link)) && !existsExact(path.join(docs, link)) && !/^\/(documentation|api|release)\/?$/.test(link)) {
      problems.push(`.vuepress/${configFile}: link to unknown route ${link}`);
    }
  }
}

console.log(`pages ${pages.length}, references checked ${checked}, problems ${problems.length}, warnings ${warnings.length}`);
for (const p of problems) console.log('ERROR ' + p);
if (process.argv.includes('--warnings')) for (const w of warnings) console.log('WARN  ' + w);
if (problems.length) process.exitCode = 1;
