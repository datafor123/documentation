import{_ as e,c as a,a as r,o}from"./app-1YGVVx1Y.js";const s="/assets/image-20250312224607027-DiAt8P8t.png",i={};function n(d,t){return o(),a("div",null,t[0]||(t[0]=[r('<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2><p>A <strong>Combo Chart</strong> is a combination of a bar chart and a line chart. It is useful for comparing multiple measures, where some are represented as columns and others as lines.</p><h3 id="when-to-use" tabindex="-1"><a class="header-anchor" href="#when-to-use"><span>When to Use</span></a></h3><ul><li>To <strong>compare two different measures</strong> with different scales (e.g., store sales vs. margin percentage).</li><li>To <strong>analyze trends and distributions</strong> in the same visualization.</li><li>To <strong>highlight relationships</strong> between two numerical variables.</li></ul><h2 id="data-structure" tabindex="-1"><a class="header-anchor" href="#data-structure"><span>Data Structure</span></a></h2><p>A <strong>Combo Chart</strong> requires:</p><ul><li><strong>X-Axis</strong>: A time-based or categorical field (e.g., <code>the_date(Day)</code>).</li><li><strong>Column Measures</strong>: One or more numerical fields representing the bar values (e.g., <code>store_sales</code>, <code>store_invoice</code>).</li><li><strong>Line Measures</strong>: One or more numerical fields representing the trend lines (e.g., <code>Margin</code>, <code>store_cost</code>).</li><li><strong>Color(Optional)</strong>: Assign different colors for better distinction.</li><li><strong>Tooltips(Optional)</strong>: Show additional details when hovering over data points.</li><li><strong>Filters (Optional)</strong>: Used to refine the displayed data (e.g., filtering by month, category, or region).</li></ul><h3 id="example-data-structure" tabindex="-1"><a class="header-anchor" href="#example-data-structure"><span>Example Data Structure</span></a></h3><table><thead><tr><th>the_date(Day)</th><th>store_sales</th><th>store_invoice</th><th>Margin</th></tr></thead><tbody><tr><td>1997-08-01</td><td>1200</td><td>900</td><td>155%</td></tr><tr><td>1997-08-02</td><td>1100</td><td>870</td><td>150%</td></tr><tr><td>1997-08-03</td><td>1000</td><td>850</td><td>145%</td></tr><tr><td>1997-08-04</td><td>950</td><td>820</td><td>140%</td></tr><tr><td>1997-08-05</td><td>1300</td><td>1000</td><td>160%</td></tr><tr><td>1997-08-06</td><td>500</td><td>400</td><td>135%</td></tr></tbody></table><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><p>The following example visualizes <strong>store sales, store_cost as columns and margin as a line</strong> over a period of time.</p><div align="left"><img src="'+s+'" width="100%"></div>',12)]))}const h=e(i,[["render",n]]),c=JSON.parse('{"path":"/documentation/Visualization/Combo%20Chart/","title":"Combo","lang":"en-US","frontmatter":{"title":"Combo","permalink":"/documentation/Visualization/Combo Chart/","createTime":"2025/03/28 05:18:31"},"headers":[],"readingTime":{"minutes":0.78,"words":235},"git":{},"filePathRelative":"documentation/Visualization/Chart/62 Combo-Chart.md"}');export{h as comp,c as data};
