import{_ as e,c as a,a as r,o}from"./app-1YGVVx1Y.js";const s="/assets/image-20250327170330881-CNZtj_S3.png",d="/assets/image-20250327170257047-6oIOX_m-.png",n={};function i(l,t){return o(),a("div",null,t[0]||(t[0]=[r('<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2><p>A <strong>100% Stacked Bar Chart</strong> displays the relative percentage of multiple data series stacked in a single bar, with the total always equaling 100%. It allows you to compare the proportion of categories across different groups, regardless of the total values.</p><p>This chart is useful when the focus is on <strong>percentage contribution</strong> rather than actual values, such as analyzing product mix, sales channel contribution, or regional share.</p><h3 id="when-to-use" tabindex="-1"><a class="header-anchor" href="#when-to-use"><span>When to Use</span></a></h3><ul><li>To compare <strong>proportions</strong> of components within categories.</li><li>To normalize data where total values differ but <strong>percentage distribution matters</strong>.</li><li>To show <strong>trends in composition</strong> across multiple groups (e.g., quarters, regions).</li></ul><h2 id="data-structure" tabindex="-1"><a class="header-anchor" href="#data-structure"><span>Data Structure</span></a></h2><p>100% Stacked Bar Charts support two ways of defining data:</p><h3 id="method-1-wide-table-format-multiple-measures" tabindex="-1"><a class="header-anchor" href="#method-1-wide-table-format-multiple-measures"><span><strong>Method 1: Wide Table Format (Multiple Measures)</strong></span></a></h3><p>Each category (e.g., Q1, Q2...) has separate columns for each series to be stacked (e.g., Type A, Type B...). The chart aggregates values from each column and normalizes them to percentages.</p><p><strong>Component Configuration</strong>:</p><ul><li><strong>X-Axis</strong>: Category</li><li><strong>Measures</strong>: Type A, Type B, Type C, Type D</li></ul><p><strong>Example Data</strong>:</p><table><thead><tr><th>Category</th><th>Type A</th><th>Type B</th><th>Type C</th><th>Type D</th></tr></thead><tbody><tr><td>Q1</td><td>30</td><td>50</td><td>20</td><td>10</td></tr><tr><td>Q2</td><td>40</td><td>30</td><td>20</td><td>10</td></tr><tr><td>Q3</td><td>20</td><td>40</td><td>30</td><td>10</td></tr><tr><td>Q4</td><td>25</td><td>35</td><td>25</td><td>15</td></tr></tbody></table><p><strong>Chart Example</strong>:</p><div align="left"><img src="'+s+'" width="100%"></div><h3 id="method-2-long-table-format-dimension-measure" tabindex="-1"><a class="header-anchor" href="#method-2-long-table-format-dimension-measure"><span><strong>Method 2: Long Table Format (Dimension + Measure)</strong></span></a></h3><p>Each row represents a category–type pair with its value. This format is more normalized and scalable, especially for large or dynamic datasets.</p><p><strong>Component Configuration</strong>:</p><ul><li><strong>X-Axis</strong>: Category</li><li><strong>Legend</strong>: Type</li><li><strong>Measures</strong>: Sales</li></ul><p><strong>Example Data</strong>:</p><table><thead><tr><th>Category</th><th>Type</th><th>Sales</th></tr></thead><tbody><tr><td>Q1</td><td>Type A</td><td>40</td></tr><tr><td>Q1</td><td>Type B</td><td>35</td></tr><tr><td>Q1</td><td>Type C</td><td>25</td></tr><tr><td>Q2</td><td>Type A</td><td>50</td></tr><tr><td>Q2</td><td>Type B</td><td>30</td></tr><tr><td>Q2</td><td>Type C</td><td>20</td></tr><tr><td>Q3</td><td>Type A</td><td>30</td></tr><tr><td>Q3</td><td>Type B</td><td>40</td></tr><tr><td>Q3</td><td>Type C</td><td>30</td></tr><tr><td>Q4</td><td>Type A</td><td>35</td></tr><tr><td>Q4</td><td>Type B</td><td>35</td></tr><tr><td>Q4</td><td>Type C</td><td>30</td></tr></tbody></table><p><strong>Chart Example</strong>:</p><div align="left"><img src="'+d+'" width="100%"></div><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><ul><li>The <strong>total value of each bar equals 100%</strong>, regardless of actual numeric totals.</li><li><strong>Tooltips</strong> typically show both percentage and raw value.</li><li>Ideal for showing <strong>composition</strong> where absolute differences are less important than <strong>proportional contribution</strong>.</li><li>You can use <strong>Color</strong> settings to control the color scheme for each segment.</li></ul>',25)]))}const h=e(n,[["render",i]]),g=JSON.parse('{"path":"/documentation/Visualization/100-Stacked-Bar-Chart/","title":"100% Stacked Bar","lang":"en-US","frontmatter":{"title":"100% Stacked Bar","permalink":"/documentation/Visualization/100-Stacked-Bar-Chart/","createTime":"2025/03/28 05:18:31"},"headers":[],"readingTime":{"minutes":1.28,"words":384},"git":{},"filePathRelative":"documentation/Visualization/Chart/60 100-Stacked-Bar-Chart.md"}');export{h as comp,g as data};
