import{_ as i,c as t,a as e,o as n}from"./app-Ciz165Io.js";const o="/documentation/assets/image-20250225151846201-DV1rGmxP.png",s="/documentation/assets/1740467980012-CmlaZeX6.png",r="/documentation/assets/1740468083520-D6gH5vdd.png",l="/documentation/assets/1740468229235-DHDb9K_b.png",d="/documentation/assets/1740468477357-w4D148Nd.png",c={};function p(h,a){return n(),t("div",null,a[0]||(a[0]=[e('<h2 id="what-is-a-data-dictionary" tabindex="-1"><a class="header-anchor" href="#what-is-a-data-dictionary"><span>What is a Data Dictionary?</span></a></h2><p>A <strong>Data Dictionary</strong> in OptimiBI is a data mapping table composed of key-value pairs:</p><ul><li><strong>Key</strong>: Used to associate with other data fields.</li><li><strong>Value</strong>: Used to replace the original field values within the analysis model.</li></ul><p>Using a data dictionary allows you to manage data display content flexibly and consistently.</p><h2 id="when-to-use-a-data-dictionary" tabindex="-1"><a class="header-anchor" href="#when-to-use-a-data-dictionary"><span>When to Use a Data Dictionary</span></a></h2><p>Sometimes you may want to display meaningful descriptions instead of raw values or codes stored in your database. There are two ways to achieve this:</p><ul><li><strong>Method 1: Direct Caption Field</strong><ul><li>If the display value exists within your current data table, directly set it as the Caption Field for the dimension.</li></ul></li><li><strong>Method 2: Using a Data Dictionary</strong> (Recommended in the following scenarios): <ul><li>The corresponding display field is missing in the database.</li><li>The display field is located in another table or data source.</li></ul></li></ul><h2 id="creating-a-data-dictionary" tabindex="-1"><a class="header-anchor" href="#creating-a-data-dictionary"><span>Creating a Data Dictionary</span></a></h2><p>Follow these steps to create a data dictionary:</p><ol><li><p>Navigate to the <strong>Tools &gt; Dictionary</strong> page.</p></li><li><p>Click the <strong>New Data Dictionary</strong> button.</p><div align="left"><img src="'+o+'"></div></li><li><p>Enter a name for the data dictionary, select the <strong>Datasource</strong>, and write the required SQL query.</p><p>The first column returned by the SQL query is considered the <strong>Key</strong>, and the second column is the corresponding <strong>Value</strong>.</p><div align="left"><img src="'+s+'" width="63%"></div></li><li><p>Click <strong>Save</strong> to complete the creation.</p></li></ol><h2 id="how-to-apply-a-data-dictionary" tabindex="-1"><a class="header-anchor" href="#how-to-apply-a-data-dictionary"><span><strong>How to Apply a Data Dictionary</strong></span></a></h2><p>The data dictionary is used to replace original values of dimension fields within analysis models.</p><h3 id="assigning-a-data-dictionary-in-analysis-models" tabindex="-1"><a class="header-anchor" href="#assigning-a-data-dictionary-in-analysis-models"><span>Assigning a Data Dictionary in Analysis Models</span></a></h3><ol><li><p>Open your analysis model in the OptimiBI console.</p></li><li><p>Select the dimension field that requires a data dictionary.</p></li><li><p>In the <strong>Attributes</strong> panel on the right side, click on <strong>Member Formatter</strong>.</p><div align="left"><img src="'+r+'" width="48%"></div></li><li><p>Choose the data dictionary you created earlier from the available options.</p><div align="left"><img src="'+l+'" width="72%"></div></li><li><p>Save and publish your analysis model.</p></li></ol><h3 id="viewing-data-dictionary-results-in-reports" tabindex="-1"><a class="header-anchor" href="#viewing-data-dictionary-results-in-reports"><span>Viewing Data Dictionary Results in Reports</span></a></h3><p>Fields linked to a data dictionary will display the corresponding dictionary values in your reports.</p><div align="left"><img src="'+d+'" width="67%"></div><h2 id="summary" tabindex="-1"><a class="header-anchor" href="#summary"><span>Summary</span></a></h2><p>The data dictionary is a powerful feature in OptimiBI, allowing you to define and unify display values flexibly, especially useful when the database structure is incomplete or when consolidating display fields across multiple tables or data sources. By following the steps above, you can effectively create, manage, and optimize the data display using data dictionaries.</p>',19)]))}const g=i(c,[["render",p],["__file","index.html.vue"]]),u=JSON.parse('{"path":"/documentation/Tools/Data-Dictionary/","title":"Data Dictionary","lang":"en-US","frontmatter":{"title":"Data Dictionary","permalink":"/documentation/Tools/Data-Dictionary/","tags":null,"createTime":"2025/03/10 19:04:05"},"headers":[],"readingTime":{"minutes":1.44,"words":433},"git":{},"filePathRelative":"documentation/Tools/10 数据字典.md"}');export{g as comp,u as data};
