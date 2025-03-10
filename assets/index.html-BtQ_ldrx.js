import{_ as a,c as t,a as r,o as s}from"./app-DZ4ntR-d.js";const i="/assets/1740473637719-Bi8ypsy7.png",n="/assets/1722158494698-Cnb5YSfh.png",o="/assets/1722160279827-CPZ2_ib0.png",l="/assets/1722160320635-CvropN3H.png",p="/assets/1722160356099-B5SI4QKA.png",d="/assets/1722160386665-DTYlnXSH.png",c="/assets/1722160409355-DYLyq2v1.png",m="/assets/1722160433034-M_aAIm95.png",u="/assets/1722160477723-Dy50fnbx.png",h={};function g(f,e){return s(),t("div",null,e[0]||(e[0]=[r('<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2><p>Optimibi provides a powerful dynamic parameters feature that allows users to achieve flexible and interactive data analysis in reports and data models. Users can define parameters&#39; names, data types, and value sources (such as manual input, list values, or query values), and use these parameters in the analysis model to filter data or create calculated fields. In reports, parameters can be used with parameter controllers, enabling users to dynamically change the display of data by adjusting parameter values in real-time, thus enhancing interactivity and personalization of the reports.</p><p>Optimibi includes two types of parameters: <strong>Global Parameters</strong> and <strong>Report Parameters</strong>.</p><p><strong>Global Parameters</strong>: Global parameters are defined within the analysis model or project and can be reused across multiple reports and analyses. Key features include:</p><ul><li><strong>Unified Management</strong>: Global parameters can be centrally managed, and modifying a global parameter&#39;s value will update all instances where it is referenced.</li><li><strong>Consistency</strong>: Ensures that the same parameter settings are used across different reports and analysis models, maintaining consistency.</li></ul><p><strong>Report Parameters</strong>: Report parameters are used exclusively within a specific report, with their scope limited to the report in which they are created. Key features include:</p><ul><li><strong>Local Control</strong>: Report parameters are only effective within the specific report, and modifying a report parameter will only affect that report.</li></ul><h2 id="creating-global-parameters" tabindex="-1"><a class="header-anchor" href="#creating-global-parameters"><span>Creating Global Parameters</span></a></h2><ol><li><p>Open the Global Parameters Management</p><div align="left"><img src="'+i+'" width="100%"></div></li><li><p>Click the <code>New</code> button</p><div align="left"><img src="'+n+'" width="100%"></div></li><li><p>In the <strong>&quot;Manage Parameters&quot;</strong> window that appears, fill in the following information:</p><ul><li><p><strong>Name</strong>: Provide a name for the parameter.</p></li><li><p><strong>Description</strong>: Provide a description for the parameter.</p></li><li><p><strong>Type</strong>: Select the data type for the parameter (e.g., Text, Number).</p></li><li><p><strong>Suggested Values</strong>: Choose the source of the parameter values:</p><ul><li><strong>Any Value</strong>: Manually input parameter values.</li><li><strong>List Values</strong>: Define a set of predefined values for users to choose from.</li><li><strong>Query Values</strong>: Use the first column of a query result as the parameter values.</li></ul></li></ul><div align="left"><img src="'+o+'" width="75%"></div></li><li><p>Save the Parameter</p><p>After completing the settings, click <strong>&quot;OK&quot;</strong> to save the parameter.</p></li></ol><h2 id="creating-report-parameters" tabindex="-1"><a class="header-anchor" href="#creating-report-parameters"><span>Creating Report Parameters</span></a></h2><p><strong>Method 1</strong>:</p><ol><li><p>Enter the Report Designer and select the “Parameter Management” button on the toolbar.</p><div align="left"><img src="'+l+'" width="100%"></div></li><li><p>In the &quot;Parameter Management&quot; window that appears, select the &quot;New&quot; button.</p><div align="left"><img src="'+p+'" width="75%"></div></li><li><p>Follow steps 3 and 5 of creating a &quot;Global Parameter&quot; to create and save the parameter.</p></li></ol><p><strong>Method 2</strong>:</p><ol><li><p>Select the “Parameter Controller” component.</p><div align="left"><img src="'+d+'" width="35%"></div></li><li><p>Add the parameter controller to the canvas and click the &quot;Select Parameter&quot; button on the data panel.</p><div align="left"><img src="'+c+'" width="75%"></div></li><li><p>Select the &quot;New Parameter&quot; button.</p><div align="left"><img src="'+m+'" width="75%"></div></li><li><p>Follow steps 3 and 5 of creating a &quot;Global Parameter&quot; to create and save the parameter.</p></li></ol><h2 id="using-parameters" tabindex="-1"><a class="header-anchor" href="#using-parameters"><span>Using Parameters</span></a></h2><h3 id="using-parameters-in-calculated-measures" tabindex="-1"><a class="header-anchor" href="#using-parameters-in-calculated-measures"><span>Using Parameters in Calculated Measures</span></a></h3><p>In calculated measures, you can reference parameter values using the ParamRef function: <code>ParamRef(&quot;ParameterName&quot;)</code>.</p><p><strong>For example:</strong></p><p>Calculated Measure: Forecast Sales</p><p><strong>Formula</strong>:</p><div class="language-dax line-numbers-mode" data-ext="dax" data-title="dax"><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>[Measures].[Last Year Sales] * ParamRef(&quot;Sales Growth Rate&quot;)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="using-parameters-in-component-titles" tabindex="-1"><a class="header-anchor" href="#using-parameters-in-component-titles"><span>Using Parameters in Component Titles</span></a></h3><p>In component titles, reference parameters using: ${&quot;ParameterName&quot;}.</p><div align="left"><img src="'+u+'" width="100%"></div><h3 id="switching-tabs-with-parameters" tabindex="-1"><a class="header-anchor" href="#switching-tabs-with-parameters"><span>Switching Tabs with Parameters</span></a></h3><p>Refer to: <a href="https://Optimibi123.github.io/docs/60%20visualizer/visualization-parameter-driven" target="_blank" rel="noopener noreferrer">Parameter-driven Tab Switching</a></p>',26)]))}const b=a(h,[["render",g],["__file","index.html.vue"]]),w=JSON.parse('{"path":"/documentation/Analysis/Parameters/","title":"Parameters","lang":"en-US","frontmatter":{"title":"Parameters","permalink":"/documentation/Analysis/Parameters/","createTime":"2025/03/10 18:53:06"},"headers":[],"readingTime":{"minutes":1.95,"words":586},"git":{},"filePathRelative":"documentation/Analysis/100_参数.md"}');export{b as comp,w as data};
