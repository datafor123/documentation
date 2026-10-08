---
title: 100% stacked bar
permalink: /documentation/Visualization/100-Stacked-Bar-Chart/
createTime: 2026/09/01 22:03:26
---

# 100% stacked bar

Compare each category’s percentage breakdown with horizontal bars.

## Set up the data

1. Choose **Components → Charts → 100% stacked bar** and place it on the canvas.
2. Select the chart and choose an **Analysis model** in **Data**.
3. Use **+** beside each field slot to select the following fields, then click **Back**.

| Data slot | Choose |
| --- | --- |
| **Y-axis** | Category or time field. |
| **Legend** | Optional field that splits the measure into series. |
| **Measures** | Numeric measure to compare. |
| **Color / Tooltips** | Optional color encoding and extra hover detail. |

Use **Filters** to restrict this component’s data. Check the result before styling it.

## Make it readable

Use **X axis**, **Y axis**, **Gridlines**, **Legend**, and **Data labels** to keep the chart readable. Use **Tooltip** for details that do not need a permanent label.

Use meaningful parts of the same whole. The bar length does not communicate the original total.

Save the report and use **Preview** to check labels, hover details, and the filtered result.

See [component filters](/documentation/Analysis/Component-Level-Filtering/) and [linked components](/documentation/Visualization/Filter-Subscriptions/).
