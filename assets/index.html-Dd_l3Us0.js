import{_ as t,c as e,a as i,o as a}from"./app-DZ4ntR-d.js";const d={};function n(r,s){return a(),e("div",null,s[0]||(s[0]=[i(`<p><strong>Method</strong><br><code>GET</code></p><p><strong>Request URL</strong></p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/datafor/plugin/datafor-modeler/api/lineage/schema</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Authorization</strong><br> The current user must have read access to the specified model.</p><hr><h2 id="query-parameters" tabindex="-1"><a class="header-anchor" href="#query-parameters"><span><strong>Query Parameters</strong></span></a></h2><table><thead><tr><th>Name</th><th>Location</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>includeOthers</code></td><td>query</td><td>string</td><td>No</td><td>Whether to include additional related objects.</td></tr><tr><td><code>schema</code></td><td>query</td><td>string</td><td>No</td><td>The name of the model to retrieve lineage for.</td></tr></tbody></table><hr><h2 id="response-examples" tabindex="-1"><a class="header-anchor" href="#response-examples"><span><strong>Response Examples</strong></span></a></h2><h4 id="✅-success-response" tabindex="-1"><a class="header-anchor" href="#✅-success-response"><span>✅ <strong>Success Response</strong></span></a></h4><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">data</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    {</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">      &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">schema</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;"> &quot;</span><span style="--shiki-light:#B56959;--shiki-dark:#C98A7D;">workshop-model</span><span style="--shiki-light:#B5695977;--shiki-dark:#C98A7D77;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">      &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">files</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> [],</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">      &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">otherFiles</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> []</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">    }</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">  ],</span></span>
<span class="line"><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">  &quot;</span><span style="--shiki-light:#998418;--shiki-dark:#B8A965;">success</span><span style="--shiki-light:#99841877;--shiki-dark:#B8A96577;">&quot;</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="http-responses" tabindex="-1"><a class="header-anchor" href="#http-responses"><span><strong>HTTP Responses</strong></span></a></h2><table><thead><tr><th>HTTP Status Code</th><th>Meaning</th><th>Description</th></tr></thead><tbody><tr><td>200</td><td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK</a></td><td>Model lineage retrieved successfully.</td></tr><tr><td>400</td><td>Bad Request</td><td>Invalid request format or missing parameters.</td></tr><tr><td>401</td><td>Unauthorized</td><td>Authentication required.</td></tr><tr><td>403</td><td>Forbidden</td><td>User lacks the required permissions.</td></tr><tr><td>404</td><td>Not Found</td><td>Specified model does not exist.</td></tr><tr><td>500</td><td>Internal Server Error</td><td>Unexpected error occurred.</td></tr></tbody></table><hr><h2 id="response-data-schema" tabindex="-1"><a class="header-anchor" href="#response-data-schema"><span><strong>Response Data Schema</strong></span></a></h2><table><thead><tr><th>Name</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>success</code></td><td>boolean</td><td>Yes</td><td><code>true</code> if the request was successful, <code>false</code> otherwise.</td></tr><tr><td><code>data</code></td><td>array[object]</td><td>Yes</td><td>List of model lineage details.</td></tr><tr><td><code>data[].schema</code></td><td>string</td><td>No</td><td>Name of the schema (model).</td></tr><tr><td><code>data[].files</code></td><td>array[string]</td><td>No</td><td>List of files associated with the schema.</td></tr><tr><td><code>data[].otherFiles</code></td><td>array[string]</td><td>No</td><td>Additional related files.</td></tr><tr><td><code>msg</code></td><td>string</td><td>No</td><td>Response message (if applicable).</td></tr></tbody></table>`,17)]))}const h=t(d,[["render",n],["__file","index.html.vue"]]),o=JSON.parse(`{"path":"/api/Lineage/Get%20model's%20lineage/","title":"Get model's lineage","lang":"en-US","frontmatter":{"title":"Get model's lineage","permalink":"/api/Lineage/Get model's lineage/","tags":["api","Lineage","Models"],"description":null,"createTime":"2025/03/10 18:53:06"},"headers":[],"readingTime":{"minutes":0.67,"words":200},"git":{},"filePathRelative":"api/Lineage/Get model's lineage.md"}`);export{h as comp,o as data};
