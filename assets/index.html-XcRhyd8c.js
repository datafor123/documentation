import{_ as t,c as s,a as n,o as a}from"./app-DZ4ntR-d.js";const o={};function r(i,e){return a(),s("div",null,e[0]||(e[0]=[n(`<p><strong>Method</strong><br><code>GET</code></p><p><strong>Request URL</strong></p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/j_spring_security_check</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Description</strong><br> This endpoint allows a user to log in. Upon successful login, the server responds with a 302 redirect to the specified location.</p><p><strong>Content Type</strong><br> Typically <code>application/x-www-form-urlencoded</code> when submitting form data (though it is uncommon to send a request body with <code>GET</code>).</p><hr><h3 id="parameters-schema" tabindex="-1"><a class="header-anchor" href="#parameters-schema"><span><strong>Parameters Schema</strong></span></a></h3><table><thead><tr><th>Name</th><th>Location</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><strong>j_username</strong></td><td>body</td><td>string</td><td>No</td><td>The username for login (e.g., <code>admin</code>)</td></tr><tr><td><strong>j_password</strong></td><td>body</td><td>string</td><td>No</td><td>The password for login (e.g., <code>password</code>)</td></tr></tbody></table><h3 id="request-example" tabindex="-1"><a class="header-anchor" href="#request-example"><span><strong>Request Example</strong></span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>j_username: admin</span></span>
<span class="line"><span>j_password: password</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="response-examples" tabindex="-1"><a class="header-anchor" href="#response-examples"><span><strong>Response Examples</strong></span></a></h2><p><strong>302 Response</strong><br> The server responds with an HTTP 302 (Found) and redirects the user.</p><h2 id="http-responses" tabindex="-1"><a class="header-anchor" href="#http-responses"><span><strong>HTTP Responses</strong></span></a></h2><table><thead><tr><th>HTTP Status Code</th><th>Meaning</th><th>Description</th><th>Data schema</th></tr></thead><tbody><tr><td>302</td><td><a href="https://tools.ietf.org/html/rfc7231#section-6.4.3" target="_blank" rel="noopener noreferrer">Found</a></td><td>Redirect to <code>/datafor</code></td><td>Inline</td></tr></tbody></table><h3 id="headers" tabindex="-1"><a class="header-anchor" href="#headers"><span><strong>Headers</strong></span></a></h3><p><strong>Request Headers</strong></p><ul><li><strong>Cookie</strong>: Session cookie for identifying the user’s session.</li></ul><p><strong>Response Headers</strong></p><ul><li><strong>Location</strong>: The URL the client is redirected to (e.g., <code>/datafor</code> if login is successful).</li></ul>`,20)]))}const h=t(o,[["render",r],["__file","index.html.vue"]]),p=JSON.parse('{"path":"/api/Authentication/Login/","title":"Login","lang":"en-US","frontmatter":{"title":"Login","permalink":"/api/Authentication/Login/","tags":["api","Authentication"],"description":null,"createTime":"2025/03/10 18:53:06"},"headers":[],"readingTime":{"minutes":0.54,"words":163},"git":{},"filePathRelative":"api/Authentication/Login.md"}');export{h as comp,p as data};
