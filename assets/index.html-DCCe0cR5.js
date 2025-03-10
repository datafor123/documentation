import{_ as a,c as s,a as i,o as n}from"./app-DZ4ntR-d.js";const t="/assets/1722348626665-C3uGg_zd.png",l="/assets/1722348665939-B1p2k1_h.png",r="/assets/1722348715735-DL01r-rn.png",d="/assets/1722348749787-CiK-XJl1.png",c={};function u(o,e){return n(),s("div",null,e[0]||(e[0]=[i(`<p>Optimibi offers robust calculated measures functionality, allowing users to define complex calculation logic for use in reports and dashboards.</p><h2 id="what-are-calculated-measures" tabindex="-1"><a class="header-anchor" href="#what-are-calculated-measures"><span>What are Calculated Measures?</span></a></h2><p>Calculated measures are user-defined metrics created by performing calculations on existing data to generate new values. These calculations can be simple, like sums or averages, or more complex, like time intelligence calculations and custom business logic. Calculated measures enable users to create dynamic and flexible analyses based on specific business requirements.</p><h2 id="defining-calculated-measures-with-mdx" tabindex="-1"><a class="header-anchor" href="#defining-calculated-measures-with-mdx"><span>Defining Calculated Measures with MDX</span></a></h2><p>MDX (Multidimensional Expressions) is a specialized language for querying and manipulating multidimensional data. Optimibi uses MDX to define calculated measures, providing users with powerful calculation and analysis capabilities. MDX offers a range of functions and operators to handle complex multidimensional data calculation needs.</p><p>[MDX Functions](https://Optimibi123.github.io/docs/en/120 advanced/advanced-mdx)</p><h3 id="example-simple-calculated-measure" tabindex="-1"><a class="header-anchor" href="#example-simple-calculated-measure"><span>Example: Simple Calculated Measure</span></a></h3><p>For example, you can create a simple calculated measure to calculate total sales:</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>SUM([Sales].[Amount])</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="example-time-intelligence-calculated-measure" tabindex="-1"><a class="header-anchor" href="#example-time-intelligence-calculated-measure"><span>Example: Time Intelligence Calculated Measure</span></a></h3><p>MDX also supports complex time intelligence calculations. For instance, you can create a calculated measure to calculate year-over-year growth:</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>([Measures].[Sales Amount], [Date].[Calendar].CurrentMember) - </span></span>
<span class="line"><span>([Measures].[Sales Amount], [Date].[Calendar].CurrentMember.PrevYear)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="creating-calculated-measures-in-optimibi" tabindex="-1"><a class="header-anchor" href="#creating-calculated-measures-in-optimibi"><span>Creating Calculated Measures in Optimibi</span></a></h2><h3 id="creating-in-the-analysis-model" tabindex="-1"><a class="header-anchor" href="#creating-in-the-analysis-model"><span>Creating in the Analysis Model</span></a></h3><div align="left"><img src="`+t+'" width="72%"></div><h3 id="creating-in-the-report-edit-view" tabindex="-1"><a class="header-anchor" href="#creating-in-the-report-edit-view"><span>Creating in the Report Edit View</span></a></h3><div align="left"><img src="'+l+'" width="72%"></div><h2 id="using-calculated-measures-in-reports" tabindex="-1"><a class="header-anchor" href="#using-calculated-measures-in-reports"><span>Using Calculated Measures in Reports</span></a></h2><p>Once created, calculated measures can be used in Optimibi&#39;s reports and dashboards.</p><h3 id="example-using-a-calculated-measure-in-a-dashboard" tabindex="-1"><a class="header-anchor" href="#example-using-a-calculated-measure-in-a-dashboard"><span>Example: Using a Calculated Measure in a Dashboard</span></a></h3><p>You can add the previously created <code>Current year margin%</code> calculated measure to a dashboard.</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="Copy code" data-copied="Copied"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>SUM([Sales].[Amount])</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div align="left"><img src="'+r+'" width="90%"></div><p>In this way, you can view and analyze the changes in margin percentage in real-time on your dashboard.</p><div align="left"><img src="'+d+'" width="72%"></div><h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2><p>Optimibi&#39;s calculated measures functionality, using the MDX language, provides users with powerful data calculation and analysis capabilities.</p>',27)]))}const m=a(c,[["render",u],["__file","index.html.vue"]]),h=JSON.parse('{"path":"/documentation/Analysis/Calculated-Measures/","title":"Calculated Measures","lang":"en-US","frontmatter":{"title":"Calculated Measures","permalink":"/documentation/Analysis/Calculated-Measures/","tags":null,"description":null,"createTime":"2025/03/10 18:53:06"},"headers":[],"readingTime":{"minutes":1.16,"words":347},"git":{},"filePathRelative":"documentation/Analysis/80_计算度量.md"}');export{m as comp,h as data};
