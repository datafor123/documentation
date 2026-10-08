import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Repository checks only: this inventory does not validate current product behavior.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const docs = path.join(root, 'docs');
const slash = value => value.replaceAll('\\', '/');
function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? (entry.name === '.vuepress' ? [] : walk(file)) : [file];
  });
}
const markdown = walk(docs).filter(file => file.endsWith('.md'));
const sources = markdown.map(file => {
  const text = fs.readFileSync(file, 'utf8');
  return {
    file, text,
    title: text.match(/^title:\s*(.+)$/m)?.[1]?.trim() ?? path.basename(file),
    permalink: text.match(/^permalink:\s*(.+)$/m)?.[1]?.trim(),
  };
});
const routes = new Set(sources.flatMap(source => [
  source.permalink,
  '/' + slash(path.relative(docs, source.file)),
  '/' + slash(path.relative(docs, source.file)).replace(/\.md$/, '.html'),
]).filter(Boolean));
const isScoped = file => /\/documentation\/(Visualization|Analysis)\//.test(slash(file))
  || /\/documentation\/Start\/(10 |20 )/.test(slash(file))
  || slash(file).endsWith('/documentation/Console/10 Quick tour of the User Console.md');
function references(text) {
  // Current repository syntax: Markdown links/images and HTML img/a attributes.
  const refs = [];
  const body = text.replace(/```[^\n]*\n[\s\S]*?```/g, '');
  for (const match of body.matchAll(/(!?)\[[^\]]*\]\((<[^>]+>|[^\s)]+)(?:\s+"[^"]*")?\)/g)) {
    refs.push({ type: match[1] ? 'image' : 'link', target: match[2].replace(/^<|>$/g, '') });
  }
  for (const match of body.matchAll(/<(img|a)\b[^>]*?\b(?:src|href)=["']([^"']+)["'][^>]*>/gi)) {
    refs.push({ type: match[1].toLowerCase() === 'img' ? 'image' : 'link', target: match[2] });
  }
  return refs;
}
function resolveReference(file, reference) {
  const { target, type } = reference;
  if (/^(?:https?:|data:|mailto:|tel:|\/\/)/i.test(target)) return { ...reference, status: 'external-not-checked' };
  if (target.startsWith('#')) return { ...reference, status: 'anchor-not-checked' };
  let pathname;
  try { pathname = decodeURIComponent(target.split(/[?#]/)[0]); }
  catch { return { ...reference, status: 'invalid-url' }; }
  if (type === 'link' && pathname.startsWith('/') && routes.has(pathname)) {
    return { ...reference, status: 'route-exists' };
  }
  const resolved = pathname.startsWith('/')
    ? path.join(docs, '.vuepress/public', pathname)
    : path.resolve(path.dirname(file), pathname);
  return {
    ...reference,
    status: fs.existsSync(resolved) ? 'file-exists' : 'missing',
    resolved: slash(path.relative(root, resolved)),
  };
}
const pages = sources.filter(source => isScoped(source.file)).map(source => ({
  file: slash(path.relative(root, source.file)),
  title: source.title,
  permalink: source.permalink ?? null,
  productVerification: 'not-assessed-by-static-check; see audits/live-visualizer/README.md',
  references: references(source.text).map(reference => resolveReference(source.file, reference)),
}));
const allReferences = pages.flatMap(page => page.references);
const result = {
  scope: 'Visualizer, Analysis, two report-design walkthroughs, and Console entry points',
  limitations: [
    'Checks file and permalink existence, not current product behavior or screenshot content.',
    'External URLs, fragment anchors, CSS assets, and reference-style Markdown links are not validated.',
    'Live UI evidence and screenshot review are tracked separately in audits/live-visualizer/README.md.',
  ],
  summary: {
    pages: pages.length,
    imageReferences: allReferences.filter(reference => reference.type === 'image').length,
    missingReferences: allReferences.filter(reference => reference.status === 'missing' || reference.status === 'invalid-url').length,
  },
  pages,
};
const output = JSON.stringify(result, null, 2) + '\n';
const outputIndex = process.argv.indexOf('--output');
if (outputIndex >= 0) {
  const destination = process.argv[outputIndex + 1];
  if (!destination) throw new Error('--output requires a destination filename');
  // Write UTF-8 directly: PowerShell native-command pipelines may recode filenames.
  fs.writeFileSync(path.resolve(destination), output, 'utf8');
  process.stdout.write(JSON.stringify(result.summary) + '\n');
} else {
  process.stdout.write(output);
}
if (result.summary.missingReferences) process.exitCode = 1;
