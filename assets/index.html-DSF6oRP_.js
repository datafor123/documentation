import{_ as n,c as d,a as t,b as i,d as e,e as r,f as h,r as o,o as l}from"./app-DZ4ntR-d.js";const p={};function k(c,s){const a=o("RouteLink");return l(),d("div",null,[s[4]||(s[4]=t('<h3 id="method" tabindex="-1"><a class="header-anchor" href="#method"><span><strong>Method</strong></span></a></h3><p><code>POST</code></p><h3 id="request-url" tabindex="-1"><a class="header-anchor" href="#request-url"><span><strong>Request URL</strong></span></a></h3><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/plugin/datafor-modeler/api/mondrian/upgrade</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="authorization" tabindex="-1"><a class="header-anchor" href="#authorization"><span><strong>Authorization</strong></span></a></h3>',5)),i("p",null,[s[1]||(s[1]=e("Use of this API requires authentication. For details about the authentication method, see")),s[2]||(s[2]=i("br",null,null,-1)),r(a,{to:"/api/index/#_5-authentication-security"},{default:h(()=>s[0]||(s[0]=[e("Authorization")])),_:1}),s[3]||(s[3]=e("."))]),s[5]||(s[5]=t(`<h3 id="content-type" tabindex="-1"><a class="header-anchor" href="#content-type"><span><strong>Content Type</strong></span></a></h3><p><code>application/json</code></p><hr><h3 id="upgrading-model-from-version-4-0-to-4-1" tabindex="-1"><a class="header-anchor" href="#upgrading-model-from-version-4-0-to-4-1"><span><strong>Upgrading Model from Version 4.0 to 4.1</strong></span></a></h3><h4 id="new-features-in-version-4-1" tabindex="-1"><a class="header-anchor" href="#new-features-in-version-4-1"><span><strong>New Features in Version 4.1</strong></span></a></h4><ul><li>Support for specifying join types</li><li>Support for one-to-many and many-to-many relationships</li></ul><hr><h3 id="preconditions" tabindex="-1"><a class="header-anchor" href="#preconditions"><span><strong>Preconditions</strong></span></a></h3><ul><li>The current user <strong>must</strong> have administrative privileges for the model.</li></ul><hr><h3 id="request-example" tabindex="-1"><a class="header-anchor" href="#request-example"><span><strong>Request Example</strong></span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">xml</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">&lt;?xml version=</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">1.0</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">?&gt;&lt;Schema name=</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">Demo</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> metamodelVersion=</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">4.0</span><span style="--shiki-light:#A65E2B;--shiki-dark:#C99076;">\\&quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;"> ... &lt;/Schema&gt;</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>Name</th><th>Location</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>body</code></td><td>body</td><td>object</td><td>No</td><td>Request payload containing the model schema XML.</td></tr><tr><td>├── <code>xml</code></td><td>body</td><td>string</td><td><strong>Yes</strong></td><td>The XML representation of the model to be upgraded.</td></tr></tbody></table><hr><h3 id="response-examples" tabindex="-1"><a class="header-anchor" href="#response-examples"><span><strong>Response Examples</strong></span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">msg</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">success</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">success</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h3 id="http-responses" tabindex="-1"><a class="header-anchor" href="#http-responses"><span><strong>HTTP Responses</strong></span></a></h3><table><thead><tr><th>HTTP Status Code</th><th>Meaning</th><th>Description</th><th>Data Schema</th></tr></thead><tbody><tr><td>200</td><td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK</a></td><td>The request was successful.</td><td>Inline</td></tr></tbody></table><hr><h3 id="response-data-schema-http-200" tabindex="-1"><a class="header-anchor" href="#response-data-schema-http-200"><span><strong>Response Data Schema (HTTP 200)</strong></span></a></h3><table><thead><tr><th>Name</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>msg</code></td><td>string</td><td>No</td><td>Response message.</td></tr><tr><td><code>success</code></td><td>boolean</td><td><strong>Yes</strong></td><td>Indicates whether the request was successful.</td></tr></tbody></table>`,22))])}const g=n(p,[["render",k],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/api/Models/Upgrade%20a%20model/","title":"Upgrade a model","lang":"en-US","frontmatter":{"title":"Upgrade a model","permalink":"/api/Models/Upgrade a model/","tags":["api","Models"],"description":null,"createTime":"2025/03/10 18:53:06"},"headers":[],"readingTime":{"minutes":0.6,"words":179},"git":{},"filePathRelative":"api/Models/Upgrade a model.md"}');export{g as comp,m as data};
