import{_ as t,c as s,a,o as n}from"./app-9c0YdfaY.js";const i="/documentation/assets/1739506840470(1)-Cl9yp_BP.png",o="/documentation/assets/1739506758329-ej5piKnC.png",r="/documentation/assets/1739506962152-XMmzUTVX.png",l="/documentation/assets/1739507155878-B9Wn2vXr.png",p="/documentation/assets/w5pfw-7adbc-DjQdhLV7.gif",d="/documentation/assets/1739507391896-I_qTMLTt.png",h="/documentation/assets/1739507811838-BzvDeghU.png",c="/documentation/assets/1739507587596-DwJw8k-1.png",g={};function u(m,e){return n(),s("div",null,e[0]||(e[0]=[a('<h2 id="what-are-table-relationships" tabindex="-1"><a class="header-anchor" href="#what-are-table-relationships"><span>What Are Table Relationships?</span></a></h2><p><strong>Table relationships</strong> connect different data tables, allowing users to perform cross-table queries, aggregations, and calculations without manually writing SQL joins.</p><h3 id="supported-join-types" tabindex="-1"><a class="header-anchor" href="#supported-join-types"><span><strong>Supported Join Types</strong></span></a></h3><p>When establishing table relationships, the following <strong>four types of joins</strong> are supported:</p><ul><li><p><strong>Inner Join</strong> (default): Returns only matching data from both tables.</p></li><li><p><strong>Left Join</strong>: Returns all data from the left table; unmatched records from the right table are filled with NULL.</p></li><li><p><strong>Right Join</strong>: Returns all data from the right table; unmatched records from the left table are filled with NULL.</p></li><li><p><strong>Full Join</strong>: Returns all data from both tables, with NULL values for unmatched records.</p><div align="left"><img src="'+i+'" width="60%"></div></li></ul><h3 id="supported-relationship-types" tabindex="-1"><a class="header-anchor" href="#supported-relationship-types"><span><strong>Supported Relationship Types</strong></span></a></h3><p>Supports <strong>one-to-one (1:1)</strong> and <strong>one-to-many (1:N)</strong> relationships, determined by the <strong>&quot;Key values are unique &quot;</strong> toggle:</p><ul><li><p><strong>Enabled</strong> → The field has unique values, representing the <strong>&quot;1&quot;</strong> side.</p></li><li><p><strong>Disabled</strong> → The field has non-unique values, representing the <strong>&quot;N&quot;</strong> side.</p><div align="left"><img src="'+o+'" width="60%"></div></li></ul><h3 id="support-for-composite-keys" tabindex="-1"><a class="header-anchor" href="#support-for-composite-keys"><span><strong>Support for Composite Keys</strong></span></a></h3><p>Datafor allows multiple fields to be combined into a <strong>composite key</strong> to establish table relationships. This is useful when no single field uniquely identifies records. For example:</p><ul><li><p>The <code>sales_fact</code> table may need to use both <code>customer_id</code> and <code>store_id</code> as a composite key to match records in the <code>customer</code> table.</p></li><li><p>Users can click the <strong>&quot;➕ Field&quot;</strong> button to add multiple fields for matching, improving data association accuracy.</p><div align="left"><img src="'+r+'" width="60%"></div></li></ul><h2 id="how-to-create-table-relationships" tabindex="-1"><a class="header-anchor" href="#how-to-create-table-relationships"><span>How to Create Table Relationships?</span></a></h2><h3 id="step-1" tabindex="-1"><a class="header-anchor" href="#step-1"><span>Step 1:</span></a></h3><p>Select the desired model and open the <strong>Model Editor</strong>.</p><div align="left"><img src="'+l+'"></div><h3 id="step-2" tabindex="-1"><a class="header-anchor" href="#step-2"><span>Step 2:</span></a></h3><p>Drag and drop fields to connect <strong>primary keys (PKs)</strong> and <strong>foreign keys (FKs)</strong> to establish relationships between tables.</p><div align="left"><img src="'+p+'"></div><h3 id="step-3" tabindex="-1"><a class="header-anchor" href="#step-3"><span>Step 3：</span></a></h3><p>Define join types, primary and foreign key fields, and relationship types based on the data model.</p><div align="left"><img src="'+d+'"></div><h3 id="step-4" tabindex="-1"><a class="header-anchor" href="#step-4"><span>Step 4:</span></a></h3><ul><li>Click <strong>OK</strong> to close the relationship settings.</li></ul><h2 id="modifying-and-deleting-table-relationships" tabindex="-1"><a class="header-anchor" href="#modifying-and-deleting-table-relationships"><span>Modifying and Deleting Table Relationships</span></a></h2><h3 id="modifying-table-relationships" tabindex="-1"><a class="header-anchor" href="#modifying-table-relationships"><span>Modifying Table Relationships</span></a></h3><p>Double-click the relationship line or right-click it and select <strong>Edit</strong> from the context menu.</p><div align="left"><img src="'+h+'" width="50%"></div><h3 id="deleting-table-relationships" tabindex="-1"><a class="header-anchor" href="#deleting-table-relationships"><span>Deleting Table Relationships</span></a></h3><p>Right-click the relationship line and select <strong>Delete</strong> from the context menu.</p><div align="left"><img src="'+c+'" width="50%"></div>',30)]))}const b=t(g,[["render",u],["__file","index.html.vue"]]),y=JSON.parse('{"path":"/documentation/Model/Establishing-Table-Relationships/","title":"Establishing Table Relationships","lang":"en-US","frontmatter":{"title":"Establishing Table Relationships","permalink":"/documentation/Model/Establishing-Table-Relationships/","tags":null,"description":null,"createTime":"2025/03/11 02:13:14"},"headers":[],"readingTime":{"minutes":1.39,"words":418},"git":{},"filePathRelative":"documentation/Model/25 建立表关系（Relationships）.md"}');export{b as comp,y as data};
