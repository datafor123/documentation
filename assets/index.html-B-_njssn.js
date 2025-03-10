import{_ as t,c as i,a as e,o as a}from"./app-DZ4ntR-d.js";const n={};function h(d,s){return a(),i("div",null,s[0]||(s[0]=[e(`<p><strong>Method</strong><br><code>GET</code></p><p><strong>Request URL</strong></p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/plugin/datafor-auth/api/roles/list</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Authorization</strong><br> Authentication is <strong>required</strong> to use this API.</p><hr><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span><strong>Description</strong></span></a></h2><p>This API retrieves a list of roles available in the system. Roles define user permissions and access levels.</p><hr><h2 id="query-parameters" tabindex="-1"><a class="header-anchor" href="#query-parameters"><span><strong>Query Parameters</strong></span></a></h2><table><thead><tr><th>Name</th><th>Location</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>type</code></td><td>query</td><td>string</td><td>No</td><td>The type of roles to filter (optional).</td></tr></tbody></table><hr><h2 id="response-examples" tabindex="-1"><a class="header-anchor" href="#response-examples"><span><strong>Response Examples</strong></span></a></h2><h3 id="successful-response-http-200" tabindex="-1"><a class="header-anchor" href="#successful-response-http-200"><span><strong>Successful Response (HTTP 200)</strong></span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">data</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">total</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">success</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">    &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">list</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">        &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">authority</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">DEV</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">        &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">loadDate</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">2024-08-05T14:59:32</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">        &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">type</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">0</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">      }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    ]</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  },</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">success</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="http-responses" tabindex="-1"><a class="header-anchor" href="#http-responses"><span><strong>HTTP Responses</strong></span></a></h2><table><thead><tr><th>HTTP Status Code</th><th>Meaning</th><th>Description</th><th>Data Schema</th></tr></thead><tbody><tr><td>200</td><td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK</a></td><td>Request was successful</td><td>Inline</td></tr></tbody></table><h3 id="response-data-schema-http-200" tabindex="-1"><a class="header-anchor" href="#response-data-schema-http-200"><span><strong>Response Data Schema (HTTP 200)</strong></span></a></h3><table><thead><tr><th>Name</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>data</code></td><td>object</td><td><strong>Yes</strong></td><td>Contains the roles list.</td></tr><tr><td>├── <code>total</code></td><td>integer</td><td><strong>Yes</strong></td><td>The total number of roles.</td></tr><tr><td>├── <code>list</code></td><td>array</td><td><strong>Yes</strong></td><td>A list of role objects.</td></tr><tr><td>│ ├── <code>authority</code></td><td>string</td><td>No</td><td>The name of the role.</td></tr><tr><td>│ ├── <code>loadDate</code></td><td>string</td><td>No</td><td>The date when the role was created or updated.</td></tr><tr><td>│ ├── <code>type</code></td><td>string</td><td>No</td><td>The role type.</td></tr><tr><td><code>success</code></td><td>boolean</td><td><strong>Yes</strong></td><td>Indicates whether the request was successful.</td></tr></tbody></table><hr><h2 id="enum-values" tabindex="-1"><a class="header-anchor" href="#enum-values"><span><strong>Enum Values</strong></span></a></h2><table><thead><tr><th>Name</th><th>Value</th></tr></thead><tbody><tr><td><code>type</code></td><td><code>0</code></td></tr><tr><td><code>type</code></td><td><code>2</code></td></tr></tbody></table>`,22)]))}const r=t(n,[["render",h],["__file","index.html.vue"]]),p=JSON.parse('{"path":"/api/Roles/Get%20roles/","title":"Get roles","lang":"en-US","frontmatter":{"title":"Get roles","permalink":"/api/Roles/Get roles/","tags":["api","Roles"],"description":null,"createTime":"2025/03/10 18:53:06"},"headers":[],"readingTime":{"minutes":0.63,"words":188},"git":{},"filePathRelative":"api/Roles/Get roles.md"}');export{r as comp,p as data};
