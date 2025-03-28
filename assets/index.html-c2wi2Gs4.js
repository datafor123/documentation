import{_ as e,c as r,a,o as d}from"./app-1YGVVx1Y.js";const o="/assets/image-20250327180750721-DVjdr_wC.png",s="/assets/image-20250327181037595-BS51fLpa.png",n={};function i(l,t){return d(),r("div",null,t[0]||(t[0]=[a('<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2><p>A <strong>100% Stacked Column Chart</strong> visualizes the percentage distribution of multiple data series in vertical bars. Each bar represents a category, and its height is always 100%, divided by segments that show the relative contribution of each series.</p><p>This chart is ideal for highlighting <strong>compositional differences</strong> across groups, such as regional market share, category-based breakdowns, or survey responses.</p><h3 id="when-to-use" tabindex="-1"><a class="header-anchor" href="#when-to-use"><span>When to Use</span></a></h3><ul><li>To compare <strong>percentage composition</strong> between categories.</li><li>To visualize <strong>distribution trends</strong> without concern for absolute values.</li><li>To normalize different categories and compare their <strong>internal structure</strong>.</li></ul><hr><h2 id="data-structure" tabindex="-1"><a class="header-anchor" href="#data-structure"><span>Data Structure</span></a></h2><p>100% Stacked Column Charts support two primary data formats:</p><hr><h3 id="method-1-wide-table-format-multiple-measures" tabindex="-1"><a class="header-anchor" href="#method-1-wide-table-format-multiple-measures"><span><strong>Method 1: Wide Table Format (Multiple Measures)</strong></span></a></h3><p>Each column represents a separate category value, and each row corresponds to one bar in the chart. Each measure (e.g., Type A, Type B) contributes to the height of the column, which totals to 100%.</p><p><strong>Component Configuration</strong>:</p><ul><li><strong>X-Axis</strong>: Category</li><li><strong>Measures</strong>: Type A, Type B, Type C, Type D</li></ul><p><strong>Example Data</strong>:</p><table><thead><tr><th>Category</th><th>Type A</th><th>Type B</th><th>Type C</th><th>Type D</th></tr></thead><tbody><tr><td>Q1</td><td>30</td><td>50</td><td>20</td><td>10</td></tr><tr><td>Q2</td><td>40</td><td>30</td><td>20</td><td>10</td></tr><tr><td>Q3</td><td>20</td><td>40</td><td>30</td><td>10</td></tr><tr><td>Q4</td><td>25</td><td>35</td><td>25</td><td>15</td></tr></tbody></table><p><strong>Chart Example</strong>:</p><div align="left"><img src="'+o+'" width="100%"></div><hr><h3 id="method-2-long-table-format-dimension-measure" tabindex="-1"><a class="header-anchor" href="#method-2-long-table-format-dimension-measure"><span><strong>Method 2: Long Table Format (Dimension + Measure)</strong></span></a></h3><p>Each row includes one category-type pair with a value, allowing for more flexible and scalable datasets. Useful when data is in normalized or transactional format.</p><p><strong>Component Configuration</strong>:</p><ul><li><strong>X-Axis</strong>: Category</li><li><strong>Legend</strong>: Type</li><li><strong>Measures</strong>: Sales</li></ul><p><strong>Example Data</strong>:</p><table><thead><tr><th>Category</th><th>Type</th><th>Sales</th></tr></thead><tbody><tr><td>Q1</td><td>Type A</td><td>40</td></tr><tr><td>Q1</td><td>Type B</td><td>35</td></tr><tr><td>Q1</td><td>Type C</td><td>25</td></tr><tr><td>Q2</td><td>Type A</td><td>50</td></tr><tr><td>Q2</td><td>Type B</td><td>30</td></tr><tr><td>Q2</td><td>Type C</td><td>20</td></tr><tr><td>Q3</td><td>Type A</td><td>30</td></tr><tr><td>Q3</td><td>Type B</td><td>40</td></tr><tr><td>Q3</td><td>Type C</td><td>30</td></tr><tr><td>Q4</td><td>Type A</td><td>35</td></tr><tr><td>Q4</td><td>Type B</td><td>35</td></tr><tr><td>Q4</td><td>Type C</td><td>30</td></tr></tbody></table><p><strong>Chart Example</strong>:</p><div align="left"><img src="'+s+'" width="100%"></div><hr><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><ul><li>Each column totals to <strong>100%</strong>, regardless of the raw values.</li><li><strong>Colors</strong> represent different data series (e.g., Type A, B, C...).</li><li>Use <strong>tooltips</strong> to display both raw values and percentages.</li><li>Supports <strong>filters</strong>, <strong>color mapping</strong>, and <strong>time axis</strong> for dynamic exploration.</li></ul>',29)]))}const p=e(n,[["render",i]]),g=JSON.parse('{"path":"/documentation/Visualization/100-Stacked-Column-Chart/","title":"100% Stacked Column","lang":"en-US","frontmatter":{"title":"100% Stacked Column","permalink":"/documentation/Visualization/100-Stacked-Column-Chart/","createTime":"2025/03/28 05:18:31"},"headers":[],"readingTime":{"minutes":1.22,"words":367},"git":{},"filePathRelative":"documentation/Visualization/Chart/45 100-Stacked-Column-Chart.md"}');export{p as comp,g as data};
