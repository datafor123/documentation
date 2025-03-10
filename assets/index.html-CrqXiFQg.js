import{_ as t,c as a,a as o,o as r}from"./app-DZ4ntR-d.js";const i="/assets/1739533856509-CfyPbkH4.png",s="/assets/1721974037609-aoyKFl6G.png",d="/assets/1721974712812-OHWbOSw9.png",n={};function p(l,e){return r(),a("div",null,e[0]||(e[0]=[o('<p>Optimibi provides a suite of REST APIs that allow users to interact with reports via HTTP requests.</p><h2 id="open-a-blank-report-designer" tabindex="-1"><a class="header-anchor" href="#open-a-blank-report-designer"><span>Open a Blank Report Designer</span></a></h2><p><code>http://localhost:28080/datafor/plugin/datafor/api/createDo</code></p><h2 id="open-a-report" tabindex="-1"><a class="header-anchor" href="#open-a-report"><span>Open a Report</span></a></h2><p><strong>URL Format</strong>: http://<code>&lt;datafor-server&gt;</code>/datafor/plugin/datafor/api/<code>&lt;mode&gt;</code>/<code>&lt;report id&gt;</code>?<code>&lt;parameter&gt;&amp;&lt;parameter&gt;</code></p><h3 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span>Parameters:</span></a></h3><ul><li><p><code>&lt;datafor-server&gt;</code>: The datafor server address.</p></li><li><p><code>&lt;mode&gt;</code>: The mode for opening the report, with three options:</p><ul><li><strong>edit</strong>: Opens the report in edit mode.</li><li><strong>open</strong>: Opens the report in view mode.</li><li><strong>integrate</strong>: Opens the report in embed mode, typically used for embedding the report in other pages via an iframe.</li></ul></li><li><p><code>&lt;report id&gt;</code>: The ID of the report.</p></li><li><p><code>&lt;parameter&gt;</code>: Parameters for <strong>integrate mode</strong> URL:</p><ul><li><strong>__compact=true</strong>: Removes the report page&#39;s outer margins.</li><li><strong>__clean=true</strong>: Removes the default shadow effect of the report page.</li><li><strong>__forceAdjust=true</strong>: Adjusts the report width to fit the container.</li></ul><p><strong>Note: &quot;__&quot; represents two consecutive underscore characters.</strong></p></li></ul><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h3><ul><li><p>Open the report in edit mode: <code>http://localhost:28080/datafor/plugin/datafor/api/edit/L2hvbWUvYWRtaW4vZXhhbXBsZTEuZGF0YWZvcg==</code></p></li><li><p>Open the report in view mode: <code>http://localhost:28080/datafor/plugin/datafor/api/open/L2hvbWUvYWRtaW4vZXhhbXBsZTEuZGF0YWZvcg==</code></p></li><li><p>Open the report in embed mode: <code>http://localhost:28080/datafor/plugin/datafor/api/integrate/L2hvbWUvYWRtaW4vZXhhbXBsZTEuZGF0YWZvcg==</code></p></li><li><p>Open the report in embed mode and remove the page&#39;s outer margins: <code>http://localhost:28080/datafor/plugin/datafor/api/integrate/L2hvbWUvYWRtaW4vZXhhbXBsZTEuZGF0YWZvcg==?__compact=true</code></p></li><li><p>Open the report in embed mode, remove the page&#39;s border shadow, and adjust the width to fit the iframe container: <code>http://localhost:28080/datafor/plugin/datafor/api/integrate/L2hvbWUvYWRtaW4vZXhhbXBsZTEuZGF0YWZvcg==?__clean=true&amp;__forceAdjust=true</code></p></li></ul><h2 id="how-to-retrieve-a-report-id" tabindex="-1"><a class="header-anchor" href="#how-to-retrieve-a-report-id"><span>How to Retrieve a Report ID</span></a></h2><h3 id="method-1-copy-from-url" tabindex="-1"><a class="header-anchor" href="#method-1-copy-from-url"><span>Method 1: Copy from URL</span></a></h3><ol><li><p>Open the report in a new window</p><div align="left"><img src="'+i+'" width="100%"></div></li><li><p>The report ID can be found in the browser&#39;s address bar.</p><div align="left"><img src="'+s+'" width="100%"></div></li></ol><h3 id="method-2-generate-using-code" tabindex="-1"><a class="header-anchor" href="#method-2-generate-using-code"><span>Method 2: Generate using code</span></a></h3><ol><li><p>Use the API to get the file path.</p><p>For example:</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>http://localhost:28080/datafor/plugin/datafor-modeler/api/repo/files/children?pathId=/public&amp;filter=*|FILES</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div align="left"><img src="'+d+'" width="100%"></div></li><li><p>Encode the path using the Base64 method</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>window.btoa(unescape(encodeURIComponent(&quot;/public/123.datafor&quot;))).replace(/\\+/g, &quot;-&quot;).replace(/\\//g, &quot;_&quot;);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol>',14)]))}const h=t(n,[["render",p],["__file","index.html.vue"]]),m=JSON.parse('{"path":"/documentation/Embedded/Reports-REST-API/","title":"Reports REST API","lang":"en-US","frontmatter":{"title":"Reports REST API","permalink":"/documentation/Embedded/Reports-REST-API/","tags":null,"description":null,"createTime":"2025/03/10 18:53:06"},"headers":[],"readingTime":{"minutes":1.13,"words":340},"git":{},"filePathRelative":"documentation/Embedded/50 调用报表.md"}');export{h as comp,m as data};
