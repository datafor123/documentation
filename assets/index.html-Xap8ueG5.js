import{_ as e,c as a,a as r,o as d}from"./app-1YGVVx1Y.js";const o="/assets/image-20250327202538865-dYFvZNIi.png",s="/assets/image-20250327202558078-BynJpOql.png",n={};function i(l,t){return d(),a("div",null,t[0]||(t[0]=[r('<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2><p>A <strong>Stacked Bar Chart</strong> displays data using horizontal bars stacked by series. It helps visualize the <strong>total value</strong> of each category along with the <strong>individual contribution</strong> of each sub-category, making it ideal for composition analysis when vertical space is limited or when horizontal labels are more readable.</p><h3 id="when-to-use" tabindex="-1"><a class="header-anchor" href="#when-to-use"><span>When to Use</span></a></h3><ul><li>To analyze both <strong>total values</strong> and <strong>component contributions</strong>.</li><li>To show part-to-whole relationships across categories.</li><li>When your category labels are long or need more space.</li><li>To emphasize <strong>horizontal comparisons</strong>.</li></ul><hr><h2 id="data-structure" tabindex="-1"><a class="header-anchor" href="#data-structure"><span>Data Structure</span></a></h2><p>Stacked Bar Charts support two standard data structures:</p><hr><h3 id="method-1-wide-table-format-multiple-measures" tabindex="-1"><a class="header-anchor" href="#method-1-wide-table-format-multiple-measures"><span><strong>Method 1: Wide Table Format (Multiple Measures)</strong></span></a></h3><p>Each sub-category (e.g., Type A, Type B...) is a separate column, and each row represents one bar (e.g., Q1, Q2...).</p><p><strong>Component Configuration</strong>:</p><ul><li><strong>Y-Axis</strong>: Category</li><li><strong>Measures</strong>: Type A, Type B, Type C, Type D</li></ul><p><strong>Example Data</strong>:</p><table><thead><tr><th>Category</th><th>Type A</th><th>Type B</th><th>Type C</th><th>Type D</th></tr></thead><tbody><tr><td>Q1</td><td>30</td><td>70</td><td>20</td><td>65</td></tr><tr><td>Q2</td><td>40</td><td>30</td><td>20</td><td>10</td></tr><tr><td>Q3</td><td>60</td><td>60</td><td>30</td><td>10</td></tr><tr><td>Q4</td><td>25</td><td>35</td><td>85</td><td>15</td></tr></tbody></table><p><strong>Chart Example</strong>:</p><div align="left"><img src="'+o+'" width="100%"></div><hr><h3 id="method-2-long-table-format-dimension-measure" tabindex="-1"><a class="header-anchor" href="#method-2-long-table-format-dimension-measure"><span><strong>Method 2: Long Table Format (Dimension + Measure)</strong></span></a></h3><p>Each row includes a category–type pair and a numeric value. This normalized format is common in real-world datasets.</p><p><strong>Component Configuration</strong>:</p><ul><li><strong>Y-Axis</strong>: Category</li><li><strong>Legend</strong>: Type</li><li><strong>Measure</strong>: Sales</li></ul><p><strong>Example Data</strong>:</p><table><thead><tr><th>Category</th><th>Type</th><th>Sales</th></tr></thead><tbody><tr><td>Q1</td><td>Type A</td><td>40</td></tr><tr><td>Q1</td><td>Type B</td><td>55</td></tr><tr><td>Q1</td><td>Type C</td><td>25</td></tr><tr><td>Q2</td><td>Type A</td><td>50</td></tr><tr><td>Q2</td><td>Type B</td><td>30</td></tr><tr><td>Q2</td><td>Type C</td><td>15</td></tr><tr><td>Q3</td><td>Type A</td><td>30</td></tr><tr><td>Q3</td><td>Type B</td><td>40</td></tr><tr><td>Q3</td><td>Type C</td><td>70</td></tr><tr><td>Q4</td><td>Type A</td><td>35</td></tr><tr><td>Q4</td><td>Type B</td><td>45</td></tr><tr><td>Q4</td><td>Type C</td><td>30</td></tr></tbody></table><p><strong>Chart Example</strong>:</p><div align="left"><img src="'+s+'" width="100%"></div><hr><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><ul><li>The <strong>total length</strong> of each bar represents the overall value.</li><li><strong>Colors</strong> differentiate sub-categories within each bar.</li><li>You can enable <strong>data labels</strong> and adjust <strong>label position</strong> (left, right, inside).</li><li>Works well for <strong>categorical comparisons</strong>, especially when category names are long.</li><li>Supports additional options such as filters, colors, tooltips, and time axis.</li></ul>',28)]))}const p=e(n,[["render",i]]),g=JSON.parse('{"path":"/documentation/Visualization/Stacked-Bar-Chart/","title":"Stacked Bar","lang":"en-US","frontmatter":{"title":"Stacked Bar","permalink":"/documentation/Visualization/Stacked-Bar-Chart/","createTime":"2025/03/28 05:18:31"},"headers":[],"readingTime":{"minutes":1.17,"words":352},"git":{},"filePathRelative":"documentation/Visualization/Chart/55 Stacked-Bar-Chart.md"}');export{p as comp,g as data};
