import{_ as e,c as d,a as s,o as r}from"./app-DZ4ntR-d.js";const a={};function o(n,t){return r(),d("div",null,t[0]||(t[0]=[s('<p><strong>Method</strong><br><code>GET</code></p><p><strong>Request URL</strong></p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/plugin/datafor-modeler/api/repo/files/download</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Authorization</strong><br> The current user must have administrator authority over the folder.</p><hr><h2 id="query-parameters" tabindex="-1"><a class="header-anchor" href="#query-parameters"><span><strong>Query Parameters</strong></span></a></h2><table><thead><tr><th>Name</th><th>Location</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>pathId</code></td><td>query</td><td>string</td><td>No</td><td>The path of the folder to be downloaded.</td></tr><tr><td><code>withManifest</code></td><td>query</td><td>string</td><td>No</td><td>Whether to include a manifest file in the download.</td></tr></tbody></table><hr><h2 id="response-examples" tabindex="-1"><a class="header-anchor" href="#response-examples"><span><strong>Response Examples</strong></span></a></h2><h4 id="✅-success-response" tabindex="-1"><a class="header-anchor" href="#✅-success-response"><span>✅ <strong>Success Response</strong></span></a></h4><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><h2 id="http-responses" tabindex="-1"><a class="header-anchor" href="#http-responses"><span><strong>HTTP Responses</strong></span></a></h2><table><thead><tr><th>HTTP Status Code</th><th>Meaning</th><th>Description</th></tr></thead><tbody><tr><td>200</td><td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK</a></td><td>Folder download initiated successfully.</td></tr><tr><td>400</td><td>Bad Request</td><td>Invalid request format or missing parameters.</td></tr><tr><td>401</td><td>Unauthorized</td><td>Authentication required.</td></tr><tr><td>403</td><td>Forbidden</td><td>User lacks the required permissions.</td></tr><tr><td>404</td><td>Not Found</td><td>Specified folder does not exist.</td></tr><tr><td>500</td><td>Internal Server Error</td><td>Unexpected error occurred.</td></tr></tbody></table><hr><h2 id="response-headers" tabindex="-1"><a class="header-anchor" href="#response-headers"><span><strong>Response Headers</strong></span></a></h2><table><thead><tr><th>Status</th><th>Header</th><th>Type</th><th>Format</th><th>Description</th></tr></thead><tbody><tr><td>200</td><td>Content-Type</td><td>string</td><td></td><td>Response content type.</td></tr></tbody></table>',17)]))}const h=e(a,[["render",o],["__file","index.html.vue"]]),l=JSON.parse('{"path":"/api/Folders/Download%20folder/","title":"Download folder","lang":"en-US","frontmatter":{"title":"Download folder","permalink":"/api/Folders/Download folder/","tags":["api","Folders"],"description":null,"createTime":"2025/03/10 18:53:06"},"headers":[],"readingTime":{"minutes":0.46,"words":137},"git":{},"filePathRelative":"api/Folders/Download folder.md"}');export{h as comp,l as data};
