import{_ as e,c as a,a as s,o as d}from"./app-1YGVVx1Y.js";const i="/assets/image-20250317155546756-DKuKnFo6.png",r="/assets/image-20250317160153152-CZXiN_W3.png",o="/assets/image-20250317160725504-CU3l8R7g.png",n={};function l(h,t){return d(),a("div",null,t[0]||(t[0]=[s('<h4 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span><strong>Overview</strong></span></a></h4><p>The <strong>Show Items with No Data</strong> feature in Datafor allows report components such as tables and charts to display dimension values even if they do not have corresponding data. This ensures completeness in data visualization and prevents missing key insights.</p><h2 id="_1-use-cases" tabindex="-1"><a class="header-anchor" href="#_1-use-cases"><span><strong>1. Use Cases</strong></span></a></h2><p>This feature is useful in the following scenarios:</p><ul><li><strong>Time Series Analysis</strong>: Ensures all dates appear on the timeline, even if there is no data for certain days.</li><li><strong>Categorical Analysis</strong>: Displays all product categories, customers, or regions, even if they have no recorded data.</li><li><strong>Data Quality Monitoring</strong>: Helps identify missing data for certain categories, facilitating further investigation.</li></ul><h2 id="_2-how-to-enable-show-items-with-no-data" tabindex="-1"><a class="header-anchor" href="#_2-how-to-enable-show-items-with-no-data"><span><strong>2. How to Enable &quot;Show Items with No Data&quot;</strong></span></a></h2><ol><li><p>Select a <strong>chart</strong> or table component.</p></li><li><p>In the <strong>Fields</strong> panel, locate the dimension field you want to display even when it has no data (e.g., product category, date).</p></li><li><p>Open the field’s menu and select <strong>&quot;Show Items with No Data&quot;</strong>.</p><div align="left"><img src="'+i+'" width="53%"></div></li><li><p>The report will now display all values for the selected field, even those without data.</p></li></ol><h2 id="_3-example-scenarios" tabindex="-1"><a class="header-anchor" href="#_3-example-scenarios"><span><strong>3. Example Scenarios</strong></span></a></h2><h3 id="example-data" tabindex="-1"><a class="header-anchor" href="#example-data"><span><strong>Example Data</strong></span></a></h3><table><thead><tr><th>Date</th><th>Product</th><th>Sales</th></tr></thead><tbody><tr><td>2024-03-01</td><td>A</td><td>100</td></tr><tr><td>2024-03-01</td><td>B</td><td>(empty)</td></tr><tr><td>2024-03-02</td><td>A</td><td>(empty)</td></tr><tr><td>2024-03-02</td><td>B</td><td>200</td></tr><tr><td>2024-03-02</td><td>C</td><td>(empty)</td></tr><tr><td>2024-03-03</td><td>B</td><td>(empty)</td></tr><tr><td>2024-03-03</td><td>C</td><td>150</td></tr><tr><td>2024-03-03</td><td>D</td><td>(empty)</td></tr><tr><td>2024-03-03</td><td>E</td><td>(empty)</td></tr><tr><td>2024-03-04</td><td>A</td><td>180</td></tr><tr><td>2024-03-04</td><td>E</td><td>(empty)</td></tr><tr><td>2024-03-05</td><td>A</td><td>(empty)</td></tr><tr><td>2024-03-05</td><td>B</td><td>(empty)</td></tr><tr><td>2024-03-05</td><td>C</td><td>220</td></tr><tr><td>2024-03-05</td><td>D</td><td>(empty)</td></tr><tr><td>2024-03-05</td><td>E</td><td>(empty)</td></tr><tr><td>2024-03-06</td><td>C</td><td>(empty)</td></tr><tr><td>2024-03-06</td><td>D</td><td>(empty)</td></tr><tr><td>2024-03-06</td><td>E</td><td>(empty)</td></tr><tr><td>2024-03-07</td><td>A</td><td>(empty)</td></tr><tr><td>2024-03-07</td><td>B</td><td>(empty)</td></tr><tr><td>2024-03-07</td><td>C</td><td>(empty)</td></tr></tbody></table><h3 id="example-1-time-series-sales-data" tabindex="-1"><a class="header-anchor" href="#example-1-time-series-sales-data"><span><strong>Example 1: Time Series Sales Data</strong></span></a></h3><ul><li><p><strong>Configuration</strong>: Enable the <strong>&quot;Show Items with No Data&quot;</strong> option for the <strong>Date</strong> field.</p></li><li><p><strong>Effect</strong>:</p><ul><li>A line chart will display all dates, ensuring gaps do not appear in the timeline due to missing data.</li><li>Even if sales data is missing for some dates, the entire time range remains visible.</li></ul></li></ul><div align="left"><img src="'+r+'" width="90%"></div><h3 id="example-2-product-sales-analysis" tabindex="-1"><a class="header-anchor" href="#example-2-product-sales-analysis"><span><strong>Example 2: Product Sales Analysis</strong></span></a></h3><ul><li><p><strong>Configuration</strong>: Enable the <strong>&quot;Show Items with No Data&quot;</strong> option for the <strong>Product</strong> field.</p></li><li><p><strong>Effect</strong>:</p><ul><li>The table or matrix visualization will list all products, even if some products have no sales data.</li><li>This ensures a complete view of all available categories for analysis.</li></ul></li></ul><div align="left"><img src="'+o+'" width="90%"></div>',16)]))}const m=e(n,[["render",l]]),g=JSON.parse('{"path":"/documentation/Analysis/Show-Items-with-No-Data/","title":"Show Items with No Data","lang":"en-US","frontmatter":{"title":"Show Items with No Data","permalink":"/documentation/Analysis/Show-Items-with-No-Data/","createTime":"2025/03/28 05:18:30"},"headers":[],"readingTime":{"minutes":1.48,"words":444},"git":{},"filePathRelative":"documentation/Analysis/180 Show Items with No Data.md"}');export{m as comp,g as data};
