---
title: Heat matrix
permalink: /documentation/Visualization/Heat-Matrix/
createTime: 2026/10/06 20:51:07
---

# Heat matrix

Cross two dimensions and use cell color to compare a measure. A heat matrix is useful for finding patterns across region and product, day and hour, or team and metric category.

## Build regional category sales

1. Add **Components → Charts → Heat matrix** and choose an **Analysis model** in **Data**.
2. Set **X axis** to Region, **Y axis** to Category L1, and **Measure** to Net Sales. Use equivalent fields in your model.
3. Set **Filters** to Year = 2025. Each cell now represents sales for one region/category combination.
4. Add optional fields to **Tooltips** for context. Check the values before choosing the color scale.

![Heat matrix with Region, Category L1 and Net Sales](../images/current/heat-matrix-data.jpg)

## Choose what colors compare

Open **Style → Color scale → Normalize**.

| Mode | Meaning of the darkest cell |
| --- | --- |
| **Overall** | High relative to all cells in the matrix. Use for absolute comparisons. |
| **By row** | High within its own row. Use to find the strongest region for each product category in this example. |
| **By column** | High within its own column. Use to compare product categories within each region. |

Normalization changes colors only. With row or column normalization, two equally dark cells need not have equal values. The color legend changes to **Low–High** rather than a single numeric range.

![Heat matrix normalization choices](../images/current/heat-matrix-normalize.jpg)

**Range → Auto** uses the data minimum and maximum. Use **Fixed** with explicit bounds to keep colors comparable across charts or filter states. Fixed range settings do not apply to row/column normalization.

Choose a sequential **Color scheme** for low-to-high values. Use a diverging scheme for values around a meaningful **Midpoint**, such as zero variance. Do not rely on red/green alone to communicate status.

## Make cells readable

- **Cells** controls gap and corner radius. Leave enough space for the selected category count.
- **Data labels** shows the actual values. **Auto contrast** helps labels remain visible on dark and light cells.
- Keep **Color legend** visible so readers can interpret the scale.
- Missing-value cells use the configured **Empty cell color** and diagonal stripes. They are different from a measured zero.
- **X axis** and **Y axis** offer query/name/total ordering. A total used for ordering is not an additional displayed measure.

The X-axis supports drilling; the Y-axis does not. Prefer limiting members on X: a Y-axis row limit can select different top members within each X category and produce an uneven matrix.

## Verify the comparison

Save and open **Preview**. Hover a cell and check its row, column and value. Switch normalization only when you intend to change the comparison question. If a dark cell seems unexpectedly small, check the normalization mode before assuming a calculation error.
