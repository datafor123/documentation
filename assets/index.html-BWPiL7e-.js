import{_ as t,c as s,a,o as i}from"./app-DZ4ntR-d.js";const n={};function r(d,e){return i(),s("div",null,e[0]||(e[0]=[a(`<p><strong>Method</strong><br><code>POST</code></p><p><strong>Request URL</strong></p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/plugin/datafor-auth/api/user/delete</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Authorization</strong><br> Use of this API requires authentication. The current user&#39;s user type must be <strong>Administrator</strong>.</p><p><strong>Content Type</strong><br><code>application/x-www-form-urlencoded</code></p><hr><h3 id="request-example" tabindex="-1"><a class="header-anchor" href="#request-example"><span><strong>Request Example</strong></span></a></h3><div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">username</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> dev</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="parameters-schema" tabindex="-1"><a class="header-anchor" href="#parameters-schema"><span><strong>Parameters Schema</strong></span></a></h3><table><thead><tr><th>Name</th><th>Location</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td>body</td><td>body</td><td>object</td><td>no</td><td>none</td></tr><tr><td>├── username</td><td>body</td><td>string</td><td>yes</td><td>The username of the user to delete.</td></tr></tbody></table><hr><h3 id="response-examples" tabindex="-1"><a class="header-anchor" href="#response-examples"><span><strong>Response Examples</strong></span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">success</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">username</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">dev</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="http-responses" tabindex="-1"><a class="header-anchor" href="#http-responses"><span><strong>HTTP Responses</strong></span></a></h2><table><thead><tr><th>HTTP Status Code</th><th>Meaning</th><th>Description</th><th>Data schema</th></tr></thead><tbody><tr><td>200</td><td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK</a></td><td>The request was successful.</td><td>Inline</td></tr></tbody></table><h3 id="response-data-schema-http-200" tabindex="-1"><a class="header-anchor" href="#response-data-schema-http-200"><span><strong>Response Data Schema (HTTP 200)</strong></span></a></h3><table><thead><tr><th>Name</th><th>Type</th><th>Required</th><th>Restrictions</th><th>Description</th></tr></thead><tbody><tr><td><code>success</code></td><td>boolean</td><td><strong>Yes</strong></td><td>none</td><td>Whether the operation was successful.</td></tr><tr><td><code>username</code></td><td>string</td><td><strong>No</strong></td><td>none</td><td>The username of the deleted user.</td></tr></tbody></table>`,18)]))}const l=t(n,[["render",r],["__file","index.html.vue"]]),o=JSON.parse('{"path":"/api/Users/Delete%20a%20user/","title":"Delete a user","lang":"en-US","frontmatter":{"title":"Delete a user","permalink":"/api/Users/Delete a user/","tags":["api","Users"],"description":null,"createTime":"2025/03/10 18:53:06"},"headers":[],"readingTime":{"minutes":0.44,"words":132},"git":{},"filePathRelative":"api/Users/Delete a user.md"}');export{l as comp,o as data};
