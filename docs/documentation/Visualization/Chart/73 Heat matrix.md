---
title: Heat matrix
permalink: /documentation/Visualization/Heat-Matrix/
createTime: 2026/10/06 20:51:07
---

# Heat matrix

Compare values at the intersections of two categories.

## Set up the data

1. Choose **Components → Charts → Heat matrix** and place it on the canvas.
2. Select the chart and choose an **Analysis model** in **Data**.
3. Use **+** beside each field slot to select the following fields, then click **Back**.

| Data slot | Choose |
| --- | --- |
| **X axis** | Horizontal category. |
| **Y axis** | Vertical category. |
| **Measure** | Value encoded by cell color. |
| **Tooltips** | Optional hover detail. |

Use **Filters** to restrict this component’s data. Check the result before styling it.

## Make it readable

Use **Color scale**, **Cells**, **Data labels**, and **Color legend**.

Keep the color scale comparable when comparing multiple matrices. Distinguish empty cells from zero values.

Save the report and use **Preview** to check labels, hover details, and the filtered result.

See [component filters](/documentation/Analysis/Component-Level-Filtering/) and [linked components](/documentation/Visualization/Filter-Subscriptions/).
