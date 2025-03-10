import{_ as d,c as e,a as r,o}from"./app-Ciz165Io.js";const s={};function a(n,t){return o(),e("div",null,t[0]||(t[0]=[r('<p><strong>Method</strong><br><code>POST</code></p><p><strong>Request URL</strong></p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">/plugin/datafor/api/cube/query/execute</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Authorization</strong><br> Authentication is required to use this API. For details on the authentication method, see<br><a href="/api/index/#_5-authentication-security" target="_blank" rel="noopener noreferrer">Authorization</a>.</p><p><strong>Content Type</strong><br><code>application/x-www-form-urlencoded</code></p><hr><h2 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span><strong>Description</strong></span></a></h2><p>This API executes an OLAP query against the specified cube. Users can define query parameters, filtering, sorting, and aggregation operations to retrieve structured data for analytical purposes.</p><hr><h2 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters"><span><strong>Parameters</strong></span></a></h2><h3 id="query-parameters" tabindex="-1"><a class="header-anchor" href="#query-parameters"><span><strong>Query Parameters</strong></span></a></h3><table><thead><tr><th>Name</th><th>Location</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>_test</code></td><td>query</td><td>string</td><td>No</td><td>Test parameter for debugging purposes (if applicable).</td></tr></tbody></table><h3 id="body-parameters-schema" tabindex="-1"><a class="header-anchor" href="#body-parameters-schema"><span><strong>Body Parameters Schema</strong></span></a></h3><table><thead><tr><th>Name</th><th>Location</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>cube</code></td><td>body</td><td>object</td><td><strong>Yes</strong></td><td>The cube metadata used for the query.</td></tr><tr><td>├── <code>uniqueName</code></td><td>body</td><td>string</td><td><strong>Yes</strong></td><td>The unique identifier of the cube.</td></tr><tr><td>├── <code>name</code></td><td>body</td><td>string</td><td><strong>Yes</strong></td><td>The name of the cube.</td></tr><tr><td>├── <code>connection</code></td><td>body</td><td>string</td><td><strong>Yes</strong></td><td>The connection associated with the cube.</td></tr><tr><td>├── <code>catalog</code></td><td>body</td><td>string</td><td><strong>Yes</strong></td><td>The catalog that contains the cube.</td></tr><tr><td>├── <code>schema</code></td><td>body</td><td>string</td><td><strong>Yes</strong></td><td>The schema that defines the cube structure.</td></tr><tr><td>├── <code>caption</code></td><td>body</td><td>string</td><td><strong>Yes</strong></td><td>The display name of the cube.</td></tr><tr><td>├── <code>visible</code></td><td>body</td><td>boolean</td><td><strong>Yes</strong></td><td>Indicates whether the cube is visible.</td></tr><tr><td><code>queryModel</code></td><td>body</td><td>object</td><td><strong>Yes</strong></td><td>Defines the structure of the query.</td></tr><tr><td>├── <code>axes</code></td><td>body</td><td>object</td><td><strong>Yes</strong></td><td>Specifies the axes of the OLAP query.</td></tr><tr><td>│ ├── <code>FILTER</code></td><td>body</td><td>object</td><td><strong>Yes</strong></td><td>Defines filter settings.</td></tr><tr><td>│ │ ├── <code>mdx</code></td><td>body</td><td>null</td><td><strong>Yes</strong></td><td>Multidimensional expression (MDX) for filtering.</td></tr><tr><td>│ │ ├── <code>filters</code></td><td>body</td><td>array</td><td><strong>Yes</strong></td><td>A list of filter conditions.</td></tr><tr><td>│ │ ├── <code>sortOrder</code></td><td>body</td><td>null</td><td><strong>Yes</strong></td><td>Sorting order for the filter axis.</td></tr><tr><td>│ │ ├── <code>location</code></td><td>body</td><td>string</td><td><strong>Yes</strong></td><td>The location of the axis (e.g., &quot;FILTER&quot;).</td></tr><tr><td>│ │ ├── <code>hierarchies</code></td><td>body</td><td>array</td><td><strong>Yes</strong></td><td>Specifies the hierarchy of the axis.</td></tr><tr><td>│ │ ├── <code>nonEmpty</code></td><td>body</td><td>boolean</td><td><strong>Yes</strong></td><td>Determines whether to exclude empty results.</td></tr><tr><td>│ ├── <code>COLUMNS</code></td><td>body</td><td>object</td><td><strong>Yes</strong></td><td>Defines the column axis.</td></tr><tr><td>│ ├── <code>ROWS</code></td><td>body</td><td>object</td><td><strong>Yes</strong></td><td>Defines the row axis.</td></tr><tr><td>├── <code>details</code></td><td>body</td><td>object</td><td><strong>Yes</strong></td><td>Specifies additional details about the query.</td></tr><tr><td>│ ├── <code>axis</code></td><td>body</td><td>string</td><td><strong>Yes</strong></td><td>The target axis for details.</td></tr><tr><td>│ ├── <code>measures</code></td><td>body</td><td>array</td><td><strong>Yes</strong></td><td>A list of measures included in the query.</td></tr><tr><td>│ │ ├── <code>caption</code></td><td>body</td><td>string</td><td><strong>Yes</strong></td><td>The display name of the measure.</td></tr><tr><td>│ │ ├── <code>name</code></td><td>body</td><td>string</td><td><strong>Yes</strong></td><td>The name of the measure.</td></tr><tr><td>│ │ ├── <code>uniqueName</code></td><td>body</td><td>string</td><td><strong>Yes</strong></td><td>The unique name of the measure.</td></tr><tr><td>│ │ ├── <code>type</code></td><td>body</td><td>string</td><td><strong>Yes</strong></td><td>The type of measure (e.g., &quot;EXACT&quot;, &quot;CALCULATED&quot;).</td></tr><tr><td>│ │ ├── <code>sort</code></td><td>body</td><td>integer</td><td><strong>Yes</strong></td><td>The sorting order of the measure.</td></tr><tr><td>├── <code>calculatedMeasures</code></td><td>body</td><td>array</td><td>No</td><td>A list of calculated measures.</td></tr><tr><td>├── <code>calculatedMembers</code></td><td>body</td><td>array</td><td>No</td><td>A list of calculated members.</td></tr><tr><td><code>queryType</code></td><td>body</td><td>string</td><td><strong>Yes</strong></td><td>The type of query being executed (e.g., &quot;OLAP&quot;).</td></tr><tr><td><code>properties</code></td><td>body</td><td>object</td><td><strong>Yes</strong></td><td>Additional query properties.</td></tr><tr><td>├── <code>datafor.query.sum.bottom</code></td><td>body</td><td>boolean</td><td><strong>Yes</strong></td><td>Whether to include sum at the bottom of the query result.</td></tr><tr><td>├── <code>datafor.query.sum.name</code></td><td>body</td><td>string</td><td><strong>Yes</strong></td><td>Label for the subtotal row.</td></tr><tr><td>├── <code>datafor.query.total.name</code></td><td>body</td><td>string</td><td><strong>Yes</strong></td><td>Label for the grand total row.</td></tr><tr><td>├── <code>datafor.client.timezone</code></td><td>body</td><td>string</td><td><strong>Yes</strong></td><td>The timezone for the client request.</td></tr><tr><td>├── <code>datafor.client.locale</code></td><td>body</td><td>string</td><td><strong>Yes</strong></td><td>The locale for the client request.</td></tr><tr><td><code>parameters</code></td><td>body</td><td>object</td><td>No</td><td>A dictionary of parameters used in the query.</td></tr><tr><td><code>parameterDefs</code></td><td>body</td><td>array</td><td>No</td><td>Definitions of dynamic parameters.</td></tr><tr><td>├── <code>name</code></td><td>body</td><td>string</td><td>No</td><td>The name of the parameter.</td></tr><tr><td>├── <code>defaults</code></td><td>body</td><td>string</td><td>No</td><td>The default value for the parameter.</td></tr><tr><td>├── <code>type</code></td><td>body</td><td>integer</td><td>No</td><td>The parameter type.</td></tr><tr><td>├── <code>datatype</code></td><td>body</td><td>integer</td><td>No</td><td>The data type of the parameter.</td></tr><tr><td>├── <code>source</code></td><td>body</td><td>integer</td><td>No</td><td>The source of the parameter.</td></tr></tbody></table><hr><h2 id="response-examples" tabindex="-1"><a class="header-anchor" href="#response-examples"><span><strong>Response Examples</strong></span></a></h2><h3 id="successful-response-http-200" tabindex="-1"><a class="header-anchor" href="#successful-response-http-200"><span><strong>Successful Response (HTTP 200)</strong></span></a></h3><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><hr><h2 id="http-responses" tabindex="-1"><a class="header-anchor" href="#http-responses"><span><strong>HTTP Responses</strong></span></a></h2><table><thead><tr><th>HTTP Status Code</th><th>Meaning</th><th>Description</th><th>Data Schema</th></tr></thead><tbody><tr><td>200</td><td><a href="https://tools.ietf.org/html/rfc7231#section-6.3.1" target="_blank" rel="noopener noreferrer">OK</a></td><td>Request was successful</td><td>Inline</td></tr></tbody></table><hr>',22)]))}const c=d(s,[["render",a],["__file","index.html.vue"]]),h=JSON.parse('{"path":"/api/Parameters/parameter%20in%20execute/","title":"parameter in execute","lang":"en-US","frontmatter":{"title":"parameter in execute","permalink":"/api/Parameters/parameter in execute/","tags":["api","Parameters"],"description":null,"createTime":"2025/03/10 19:04:05"},"headers":[],"readingTime":{"minutes":1.86,"words":557},"git":{},"filePathRelative":"api/Parameters/parameter in execute.md"}');export{c as comp,h as data};
