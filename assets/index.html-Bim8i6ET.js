import{_ as e,c as r,a,o as s}from"./app-1YGVVx1Y.js";const d="/assets/image-20250327211250415-CII0u6Gb.png",o="/assets/image-20250327211259080-DXiDMaFN.png",n={};function i(l,t){return s(),r("div",null,t[0]||(t[0]=[a('<h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview"><span>Overview</span></a></h2><p>A <strong>Clustered Column Chart</strong> displays values for different sub-categories grouped (clustered) side-by-side within each main category along the X-axis. This type of chart is useful for comparing multiple series <strong>within</strong> and <strong>across</strong> categories.</p><p>Unlike stacked charts, clustered charts do not aggregate values into a single bar — instead, each series retains its own bar for direct comparison.</p><h3 id="when-to-use" tabindex="-1"><a class="header-anchor" href="#when-to-use"><span>When to Use</span></a></h3><ul><li>To <strong>compare multiple series</strong> across a shared category.</li><li>To highlight <strong>relative performance</strong> of sub-categories.</li><li>To avoid stacking when <strong>aggregated values are not meaningful</strong>.</li><li>When the goal is to <strong>preserve series independence</strong> visually.</li></ul><h2 id="data-structure" tabindex="-1"><a class="header-anchor" href="#data-structure"><span>Data Structure</span></a></h2><p>Clustered Column Charts support two data formats:</p><h3 id="method-1-wide-table-format-multiple-measures" tabindex="-1"><a class="header-anchor" href="#method-1-wide-table-format-multiple-measures"><span><strong>Method 1: Wide Table Format (Multiple Measures)</strong></span></a></h3><p>Each sub-category (e.g., Type A, Type B...) is stored in its own column. Each row represents one main category (e.g., Q1, Q2...).</p><p><strong>Component Configuration</strong>:</p><ul><li><strong>X-Axis</strong>: Category</li><li><strong>Measures</strong>: Type A, Type B, Type C, Type D</li></ul><p><strong>Example Data</strong>:</p><table><thead><tr><th>Category</th><th>Type A</th><th>Type B</th><th>Type C</th><th>Type D</th></tr></thead><tbody><tr><td>Q1</td><td>30</td><td>70</td><td>20</td><td>65</td></tr><tr><td>Q2</td><td>40</td><td>30</td><td>20</td><td>10</td></tr><tr><td>Q3</td><td>60</td><td>60</td><td>30</td><td>10</td></tr><tr><td>Q4</td><td>25</td><td>35</td><td>85</td><td>15</td></tr></tbody></table><p><strong>Chart Example</strong>:</p><div align="left"><img src="'+d+'" width="100%"></div><h3 id="method-2-long-table-format-dimension-measure" tabindex="-1"><a class="header-anchor" href="#method-2-long-table-format-dimension-measure"><span><strong>Method 2: Long Table Format (Dimension + Measure)</strong></span></a></h3><p>Each row represents a unique combination of main category and sub-category, with the corresponding measure value.</p><p><strong>Component Configuration</strong>:</p><ul><li><strong>X-Axis</strong>: Category</li><li><strong>Legend</strong>: Type</li><li><strong>Measure</strong>: Sales</li></ul><p><strong>Example Data</strong>:</p><table><thead><tr><th>Category</th><th>Type</th><th>Sales</th></tr></thead><tbody><tr><td>Q1</td><td>Type A</td><td>40</td></tr><tr><td>Q1</td><td>Type B</td><td>55</td></tr><tr><td>Q1</td><td>Type C</td><td>25</td></tr><tr><td>Q2</td><td>Type A</td><td>50</td></tr><tr><td>Q2</td><td>Type B</td><td>30</td></tr><tr><td>Q2</td><td>Type C</td><td>15</td></tr><tr><td>Q3</td><td>Type A</td><td>30</td></tr><tr><td>Q3</td><td>Type B</td><td>40</td></tr><tr><td>Q3</td><td>Type C</td><td>70</td></tr><tr><td>Q4</td><td>Type A</td><td>35</td></tr><tr><td>Q4</td><td>Type B</td><td>45</td></tr><tr><td>Q4</td><td>Type C</td><td>30</td></tr></tbody></table><p><strong>Chart Example</strong>:</p><div align="left"><img src="'+o+'" width="100%"></div><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><ul><li>Bars for each sub-category are rendered <strong>side-by-side</strong> within each main category group.</li><li>Colors are used to differentiate sub-categories.</li><li>Enables <strong>direct comparison</strong> between sub-categories without stacking.</li><li>Supports tooltips, filters, and style customizations.</li></ul>',25)]))}const g=e(n,[["render",i]]),h=JSON.parse('{"path":"/documentation/Visualization/Clustered-Column-Chart/","title":"Clustered Column","lang":"en-US","frontmatter":{"title":"Clustered Column","permalink":"/documentation/Visualization/Clustered-Column-Chart/","createTime":"2025/03/28 05:18:31"},"headers":[],"readingTime":{"minutes":1.16,"words":347},"git":{},"filePathRelative":"documentation/Visualization/Chart/42 Clustered-Column.md"}');export{g as comp,h as data};
