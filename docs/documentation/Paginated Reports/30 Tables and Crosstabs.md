---
title: Tables and Crosstabs
permalink: /documentation/Paginated-Reports/Tables-and-Crosstabs/
description: Columns, groups, subtotals and grand totals of a table; parent-child tables for balance sheets and other indented statements, including the account form; rows, columns, measures and totals of a crosstab; how totals are calculated, especially "By model"; conditional formats; and the table style templates.
createTime: 2026/10/28 10:00:00
---

# Tables and Crosstabs

The body of a paginated report holds one data block: a **table** (a list of rows, optionally grouped) or a **crosstab** (rows by columns with measures in the cells). Select it by clicking a data cell on the canvas; its properties have a **Data** tab and a **Style** tab.

## Table

![Table Data tab: grand total row with its label, no-data message, the Region group with its Header and Subtotal tags, and four columns with their totals; Avg. Order Value carries one conditional format](./images/designer-table-data.png)

### Columns

Add a column by dragging a field onto the table or into **Columns** in the panel, with **+** next to **Columns**, or with the field's context menu. Each column row shows its total (for example **Σ Sum** or **Σ By model**) and the number of conditional formats it has. Click a column, on the canvas or in the list, to edit it:

| Property | Notes |
| --- | --- |
| **Field**, **Title** | The dataset field and the header text. Double-clicking the header on the canvas renames it too. |
| **Width** (mm) | Leave empty to share the remaining width equally with the other automatic columns. The sum of all widths must stay within the usable page width, or the save fails. |
| **Align** | Left, center or right. Numbers default to right. |
| **Format** | A number pattern such as `#,##0.00` or `0.0%`, or a date pattern such as `yyyy-MM-dd`. |
| **Sort** | None, ascending or descending. Rows are sorted inside their group; several sorted columns apply in column order. |
| **Total** | How the column is summed in subtotals and the grand total; see [Totals](#totals). |
| **Font and color** | Font, size, bold, italic, underline, text colour and background of the detail cells. |
| **Conditional formats** | Rules that colour this column's cells; see [Conditional formats](#conditional-formats). |

Arrows in the panel header move the column; the trash icon removes it; **Group by this column** turns it into a group. On the canvas, drag a header to reorder, drag its right edge to resize, and click the sort mark to change the sort. A column whose field is no longer in the dataset is shown in red; see [When fields disappear](/documentation/Paginated-Reports/Datasets-and-Parameters/#when-fields-disappear).

### Groups

A group breaks the rows by a field, in the order of the **Groups** strip above the table and the **Groups** list in the panel. Add one by dropping a field on either, or with **+**. Tags in the list show which options are on (**Header**, **Subtotal**, **Page break**); **Change to column** turns a group back into a column. Each group has:

| Property | Notes |
| --- | --- |
| **Group title row** | A row `Region: East China` before the group's rows. The colon follows the interface language. |
| **Subtotal row**, **Subtotal label** | A row after the group with the totals of the columns that have a **Total** setting. Default label *Subtotal*. |
| **Page break after group** | Each group starts a new page; in a formatted Excel export each group becomes its own sheet, named after the group value. |
| **Restart page numbers for each group** | With a page break: page numbers (and the total) count from 1 in every group. |
| **Space after group** | Blank space in millimetres after the subtotal row. |

A detail table without groups is simply a table with no entries in the strip.

### Grand total and no-data message

- **Grand total row** adds a final row with the totals of the whole table; **Grand total label** changes its text (default *Total*). When the first column itself has a total, the label and the value share the first cell.
- **Show a message when there is no data** prints a text instead of an empty table when the dataset returns no rows; the default text follows the interface language.
- **Repeat header on each page** is on for every table: column headers are printed at the top of each page the table continues on.

### Totals

The **Total** setting of a column (and the aggregate of a crosstab measure) decides how subtotals and the grand total are calculated:

| Setting | Calculation |
| --- | --- |
| **None** | No value in total rows. |
| **Sum**, **Count**, **Average**, **Min**, **Max** | Calculated by the report engine over the detail rows of the group or the whole table. Text columns can only be counted. |
| **By model** | Model datasets only. The report asks the analysis model for the value at the group level, so the model's own aggregation applies. Blank on an SQL dataset. |

Use **By model** for measures that cannot be added up: averages, distinct counts, ratios and other calculated measures. Summing an *Average Order Value* column would give a meaningless number; **By model** returns the average over all orders in the region, the same figure a dashboard pivot table shows. The designer chooses the default when you add a model field (Sum for sums and counts, Min and Max as in the model, By model for the rest) and warns when you pick Sum, Count or Average for such a measure. The canvas shows **Σ** for engine totals and the setting's name for the others.

### Conditional formats

Conditional formats belong to a column: select the column and click **+** next to **Conditional formats**. A rule colours the column's cells by value: choose a condition (**Less than**, **Less or equal**, **Greater than**, **Greater or equal**, **Equals**, **Not equals**, **Between**, **In**, **Contains**, **Is empty**), the value(s) and the look: text colour, background, bold, italic, with presets such as *Red text* or *Light green fill*. Rules apply to detail cells; the first matching rule wins.

## Parent-child table

A table can arrange its rows as a tree instead of groups: each row has its own ID and the ID of its parent, rows are indented under their parents, and parents are totalled from the rows below them. This is how balance sheets, cash flow statements, income statements with intermediate totals, organization lists and bills of materials are laid out, with branches of different depths in one indented column.

![Balance Sheet in the designer: Assets, Current Assets and Non-current Assets indented, Total Current Assets and Total Assets rows; the table's Data tab on the right with the Parent-child hierarchy section](./images/designer-tree-table.png)

### Set it up

The quickest way is the wizard's **Parent-child** layout (see [Creating a Paginated Report](/documentation/Paginated-Reports/Creating-a-Paginated-Report/#build-the-first-table-with-the-wizard)). On an existing table, select it and tick **Data › Parent-child hierarchy › Arrange rows as a parent-child hierarchy**; the node and parent fields are filled in when their names make them obvious (for example *item_id* and *parent_id*). Groups and a parent-child hierarchy cannot be combined; remove the groups first.

<img src="./images/designer-tree-panel.png" alt="Parent-child hierarchy settings: Structure dataset ds2, node and parent fields in the structure, Order of siblings Line No, ID field in the table's dataset, Totals On a separate row after the children, Total row label Total {name}, Indent per level 5 mm, Show levels down to All, and Side by side (account form)" width="300" align="right" />

| Setting | Notes |
| --- | --- |
| **Node field** | The ID of each row, for example the account code. |
| **Parent field** | The ID of the row's parent, in the same numbering as the node field. A row whose parent is empty, or not in the data, goes to the top level. |
| **Order of siblings** | A field to sort children of the same parent by, such as a line number, or **Dataset order**. |
| **Totals** | **On a separate row after the children** (default), **On the parent row**, or **No totals**. |
| **Total row label**, **Top-level total row label** | Text of the total rows; `{name}` is the parent's name, so `Total {name}` prints *Total Current Assets*. The default follows the report language. |
| **Indent per level** | Millimetres per level in the first column; default 5. |
| **Show levels down to** | Print only the top levels, for a summary version. Deeper rows are not printed but are still added into the totals. |
| **Structure dataset** | Where the tree comes from when parents have no data rows of their own; see below. |

Both ID fields are compared by value. In a model, use levels without a separate display name for them and add the name as its own column; a level that shows display names returns the names, not the codes. When rows cannot be placed under their parent, a note above the canvas and under the parent field says so, for example *17 rows have parents (A1, A2, L1…) that are not in the data and are placed at the top level*.

<br clear="all" />

### Columns and totals

The first column is indented by level; other columns are not. A column's **Total** decides what parent and total rows show:

| Total | Parent or total row shows |
| --- | --- |
| **Sum**, **Count**, **Average**, **Min**, **Max** | The aggregate over all **lowest-level** rows below it. A value stored on the parent row itself is ignored. |
| **None** | The parent row's own value. Use it when the data already stores totals on the parent items. |
| **By model** | Left empty. |

A ratio column, such as a change in percent, therefore needs **None** and a value for each row in the data. A text placeholder such as `{=Sum(amount)}` adds up every row of the dataset, so do not use it for a figure the table already totals.

Parent rows use the **Group header row** style of the [table style](#table-style), total rows the **Subtotal** style and the top-level total the **Total** style, so templates and accent colours apply as usual.

### When parents have no data: the structure dataset

![A structure dataset lists every account with ID, parent and name; the table's dataset has balances for the lowest accounts only; the printed table takes the tree from the structure, matches the balances by ID and adds Total Current Assets 1,490, Total Non-current Assets 800 and Total Assets 2,290](./images/parent-child-structure.svg)

A general ledger has balances only for the lowest accounts. A model dataset returns only rows with data, so *Current Assets* or *Assets* never appear and every balance lands at the top level. Add a **structure dataset**: a second dataset that lists every node with its ID, parent and name. The tree is taken from it, and the table's rows are matched to it by ID.

- In **Structure dataset**, choose **New from the same model**, or click **New structure dataset from the same model** under the note. The designer adds a dataset on the same model with only the hierarchy levels and no measures, and fills in **Node field in the structure**, **Parent field in the structure** and **ID field in the table's dataset**. For an SQL dataset, first add an SQL dataset that returns IDs, parents and names with **+** next to **Datasets**, then choose it here.
- In the model, put ID, parent ID, name and line number in **one** multi-level hierarchy. Separate attribute hierarchies are joined through the fact table, which drops the parents without data again.
- Columns can also take fields of the structure dataset, such as the name: **+** next to **Columns** › **Add a field of the structure dataset**.
- Rows of the table's dataset whose ID is not in the structure are not printed, and a note says how many.

### Account form: side by side

**Side by side (account form)** puts some top-level nodes on the left and the rest on the right: the statutory layout of a balance sheet, with assets on the left and liabilities and equity on the right. The halves are aligned so that both totals land on the same last row.

![Balance sheet in account form in the viewer: Assets on the left, Liabilities and Equity on the right, Total Assets and Total Liabilities and Equity both 3,010,284 on the last row](./images/tree-account-form-viewer.png)

- **Top-level IDs on the right**: the IDs of the top-level nodes for the right half, separated by commas. Empty means the second half of the top-level nodes.
- **Gap between the halves** in millimetres; default 6.
- The columns are printed twice, so their widths count twice against the usable page width. Use landscape paper; the wizard switches to it when you tick the option there.
- There is no grand total row in this layout.

### What the canvas and exports show

The canvas draws the real tree from the first 60 rows, with the parameters' default values, and redraws half a second after you change a setting. On a parent-child table, column headers on the canvas can be selected but not dragged, resized or renamed; use the property panel. PDF, HTML and the formatted Excel export keep the indentation (Excel as cell indent levels). The CSV and flat Excel exports write the rows in tree order with an extra **Level** column and no indentation in the names.

The *Halden Group - Balance Sheet* samples in **Public › Samples › Paginated Reports** show both layouts with a structure dataset.

## Crosstab

![Crosstab in the viewer: regions on rows, quarters on columns, Net Sales and GM % per cell, subtotal and total columns and a total row](./images/viewer-crosstab.png)

A crosstab has **Row dimensions**, **Column dimensions** and **Measures**. Drop fields onto the three zones on the canvas or into the lists in the **Data** tab, or use **+** next to each list. The arrow on a dimension (**Move to column dimensions** / **Move to row dimensions**) moves it to the other axis; **Show total row** and **Show total column** switch the totals.

| Setting | Notes |
| --- | --- |
| **Total** on a row or column dimension | Adds a *Total* row or column for that level; inner levels get *Subtotal*. With several row dimensions, the total label spans all inner row header columns. Total rows of the outermost row dimension use the **Total** style, those of inner levels the **Subtotal** style, as in tables. |
| **Aggregate** of a measure | Sum, Count, Average, Min, Max or **By model**, with the same meaning as for table columns. Totals of ratios should be **By model**. |
| **Format** of a measure | Number pattern. |
| **Row header width** (mm), **Cell width** (mm) | On the **Style** tab. The canvas draws the crosstab at these widths. |
| **Fit to page width** | Off for new crosstabs: value columns keep the cell width, so the layout is predictable. On: they shrink down to 8 mm when there are many columns. When the table is narrower than the paper, value columns are widened to fill it either way. |
| **Row height** | Overrides the density of the style template. |

Things to know:

- A crosstab never breaks horizontally across pages. When the sample data makes it wider than the page, the canvas says so (*the crosstab is about N mm wide, more than the usable width*) and offers **Widen paper to N mm**, which switches to a custom paper size that fits. The number of columns depends on the data, so also consider filtering the column dimension or swapping rows and columns. Columns beyond the paper are cut in PDF and print.
- The dimension values on the column axis repeat at the top of every page; the column dimension title is printed once.
- With one measure, its title is not repeated under every column member. With several, each column member gets one sub-column per measure.
- Dimension members sort naturally: `2`, `10`, `11` rather than `10`, `11`, `2`; dates from a date hierarchy sort chronologically.
- In the formatted Excel export every cell is kept; the flat export writes one row per row member × column member × measure.

## Table style

The **Style** tab gives tables and crosstabs the same look system as the dashboard pivot table: a **template**, an **accent** colour and a **density**, followed by the individual style items.

![Style tab with the template picker open: Classic, Minimal, Banded rows, Bold header, Bold header banded, Contrast bands, Grid, Three-line and None](./images/designer-table-style-templates.png)

- **Templates:** Classic, Minimal, Banded rows, Bold header, Bold header banded, Contrast bands, Grid, Three-line, None. New reports start with **Minimal**.
- **Accent:** eight presets (navy, blue, teal, green, amber, red, violet, graphite) or a custom colour. Classic, Three-line and None ignore it.
- **Density:** Compact, Standard or Spacious, which set the row height (5, 6 or 7.5 mm).
- The sections below (**Grid**, **Header**, **Body**, **Group header row** or **Row headers**, **Subtotal**, **Total**) show the values the template produces. Change any of them: grid line width and colour, direction (all, horizontal only, vertical only, none), top and bottom rules, odd and even row fills, header background, font size, colour, bold, italic and alignment, the dividers under the header and above the total, row height and padding. A changed item shows ↺ to return to the template value; **Reset to template style** clears all of them.
- Report-level defaults for template, accent and density are set in **Report properties › Table style**; a block inherits them unless it chooses its own.

Templates affect colours, lines and row height only. Column widths, alignment, number formats, fonts and conditional formats are kept when you switch templates. The same look is written to the formatted Excel export.

## Related topics

- [Datasets and Parameters](/documentation/Paginated-Reports/Datasets-and-Parameters/)
- [Page Layout, Header and Footer](/documentation/Paginated-Reports/Page-Layout-Header-and-Footer/)
- [Viewing, Pagination and Export](/documentation/Paginated-Reports/Viewing-Pagination-and-Export/)
- [Table Styles in dashboards](/documentation/Visualization/Table-Styles/)
