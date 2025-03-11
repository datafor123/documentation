import{_ as s,c as a,a as i,o as n}from"./app-aipgZPhT.js";const t="/assets/gnix5-j1hnn-Cpw771U8.gif",r="/assets/1722504262167-DoOqS242.png",o="/assets/1722504381269-CdfS3dpt.png",l="/assets/1722504437457-DC1MiUcc.png",d="/assets/1722504494630-C2k1nC_4.png",c="/assets/1722504556314-DcM29Soy.png",p="/assets/1722504617543-VXLo1Bos.png",u="/assets/1722504680025-Dopf4zS5.png",m="/assets/1722504714258(1)-CT9NPRN1.png",g="/assets/1722505167138-MULlr_5l.png",h="/assets/1722505237854--Epgmc_f.png",f={};function v(_,e){return n(),a("div",null,e[0]||(e[0]=[i('<p>What-if analysis is a predictive analysis method used to evaluate the impact of changes in specific variables under different assumptions or scenarios.</p><div align="left"><img src="'+t+'" width="76%"></div><p>Below is a detailed example demonstrating how to use What-If parameters in Datafor for sales forecast analysis:</p><h3 id="scenario-sales-forecast-analysis" tabindex="-1"><a class="header-anchor" href="#scenario-sales-forecast-analysis"><span>Scenario: Sales Forecast Analysis</span></a></h3><h4 id="background" tabindex="-1"><a class="header-anchor" href="#background"><span>Background</span></a></h4><p>A retail company wants to forecast the impact of different pricing strategies on future sales revenue. They aim to understand how adjusting product prices will affect sales quantities and total revenue.</p><h4 id="objective" tabindex="-1"><a class="header-anchor" href="#objective"><span>Objective</span></a></h4><p>Use Datafor&#39;s What-If parameter feature to simulate the impact of different price adjustment scenarios on sales revenue.</p><h3 id="steps" tabindex="-1"><a class="header-anchor" href="#steps"><span>Steps</span></a></h3><ol><li><p><strong>Create a Parameter Controller</strong></p><div align="left"><img src="'+r+'" width="100%"></div></li><li><p><strong>Create What-If Parameter</strong></p><ul><li>Select the parameter controller, click the &quot;Add Data&quot; button in the data panel, and choose &quot;New Parameter&quot;.</li></ul><div align="left"><img src="'+o+'"></div><ul><li>Name the parameter &quot;Price Adjustment Percentage&quot; with a default value of &quot;0&quot;.</li></ul><div align="left"><img src="'+l+'" width="50%"></div><ul><li>Select the created &quot;Price Adjustment Percentage&quot; parameter.</li></ul><div align="left"><img src="'+d+'" width="100%"></div><ul><li>Define the slider&#39;s value range in the style panel, with a minimum of -0.2, maximum of 0.2, and a step size of 0.01.</li></ul><div align="left"><img src="'+c+'" width="100%"></div></li><li><p><strong>Create a Gauge Component</strong></p><p>Select the analysis model &quot;<strong>workshop-model</strong>&quot;.</p><div align="left"><img src="'+p+'" width="100%"></div></li><li><p><strong>Add Measures</strong></p><p>In the data panel, click the &quot;Add Data&quot; button.</p><div align="left"><img src="'+u+'" width="30%"></div></li><li><p><strong>Create Calculated Measures</strong></p><div align="left"><img src="'+m+'" width="30%"></div><ul><li><p>Measure Name: <strong>Adjusted Price</strong></p><p>Formula:</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>[Measures].[sales_fact.UNIT_PRICE] * (1 + ParamRef(&quot;Price Adjustment Percentage&quot;))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>Measure Name: <strong>Adjusted Sales Amount</strong></p><p>Formula:</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>[Measures].[sales_fact.QUANTITY] * [Measures].[Adjusted Price]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul></li><li><p><strong>Select &quot;Adjusted Sales Revenue&quot; as the Measure for the Gauge Component</strong></p><div align="left"><img src="'+g+'" width="100%"></div><ul><li>Adjust the dashboard component&#39;s style by setting the <strong>Minimum Value (0)</strong> and <strong>Maximum Value (3000000)</strong>.</li></ul><div align="left"><img src="'+h+'" width="100%"></div></li><li><p><strong>Interactive Analysis</strong></p><p>Adjust the &quot;<strong>Price Adjustment Percentage</strong>&quot; parameter to dynamically view changes in <strong>Adjusted Sales Revenue</strong> under different price adjustment scenarios.</p><div align="left"><img src="'+t+'" width="100%"></div></li></ol>',10)]))}const b=s(f,[["render",v],["__file","index.html.vue"]]),A=JSON.parse('{"path":"/documentation/Analysis/What-if-Analysis/","title":"What-if Analysis","lang":"en-US","frontmatter":{"title":"What-if Analysis","permalink":"/documentation/Analysis/What-if-Analysis/","tags":null,"description":null,"createTime":"2025/03/11 05:35:43"},"headers":[],"readingTime":{"minutes":1.38,"words":414},"git":{},"filePathRelative":"documentation/Analysis/150_What-if.md"}');export{b as comp,A as data};
