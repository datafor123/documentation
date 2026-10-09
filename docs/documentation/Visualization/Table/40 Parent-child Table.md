---
title: Parent-child table
permalink: /documentation/Visualization/Parent-Child-Table/
description: Build an expandable tree from an ID column and a parent ID column, such as an organisation chart or a chart of accounts.
createTime: 2026/10/09 14:00:00
---

# Parent-child table

A **Parent-child table** builds a tree from records that point to their parent: an employee and their manager, an account and its parent account, a department and the department above it. The depth does not need to be known in advance.

If your hierarchy is stored as separate level columns (category, subcategory, product), use the [Tree table](/documentation/Visualization/Hierarchy-Table/) instead.

## Build a parent-child table

1. In **Components → Charts → Tables**, click **Parent-child table**, then click the canvas.
2. On **Data**, choose the **Analysis model** and fill the fields:

| Field | Put here | Example |
| --- | --- | --- |
| **Parent** | The parent ID | `manager_id` |
| **Child** | The record's own ID | `employee_id` |
| **Caption** | The text shown for each node | `employee_name` |
| **Fields** | Measures or other attributes shown as columns | Headcount, Salary |

3. Set **Style → Expand levels** to choose how many levels are open when the report loads. Leave it empty to open the whole tree.

Records whose parent is empty, or whose parent ID does not exist as a child ID, become top-level rows.

## How values are shown

- A parent row shows the value of its own record. The table does not add up the values of its children.
- If the data contains a cycle (A is the parent of B and B is the parent of A), the first record of the cycle is shown at the top level and the others below it.
- If no record has a parent, the table shows *No row has a parent: check that the parent ID and child ID fields use the same set of IDs*. Check that both fields use the same IDs, for example both employee numbers and not one number and one name.

## Style and limits

- [Table Styles](/documentation/Visualization/Table-Styles/), **Grid** (including **Row height** and **Fit columns to width**), **Header** and **Grand total** work as on the Table.
- The field menu offers rename, number format and row limit only. Conditional formatting, data bars and icons are not available.
- **Export as Excel** and **Export as csv** write the query rows (parent ID, child ID, caption, fields), not the indented tree.

Related: [Tree table](/documentation/Visualization/Hierarchy-Table/) · [Table](/documentation/Visualization/Table/)
