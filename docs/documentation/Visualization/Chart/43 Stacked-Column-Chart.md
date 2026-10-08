---
title: Stacked column
permalink: /documentation/Visualization/Stacked-Column-Chart/
createTime: 2026/09/01 22:03:26
---

# Stacked column

Compare totals and their composition across categories.

## Set up the data

1. Choose **Components → Charts → Stacked column** and place it on the canvas.
2. Select the chart and choose an **Analysis model** in **Data**.
3. Use **+** beside each field slot to select the following fields, then click **Back**.

| Data slot | Choose |
| --- | --- |
| **X-axis** | Category or time field. |
| **Legend** | Optional field that splits the measure into series. |
| **Measures** | Numeric measure to compare. |
| **Color / Tooltips** | Optional color encoding and extra hover detail. |

Use **Filters** to restrict this component’s data. Check the result before styling it.

## Make it readable

Use **X axis**, **Y axis**, **Gridlines**, **Legend**, and **Data labels** to keep the chart readable. Use **Tooltip** for details that do not need a permanent label.

Example: Month on X-axis, Product Category in Legend, and Sales in Measures. Compare totals by overall column height.

Save the report and use **Preview** to check labels, hover details, and the filtered result.

See [component filters](/documentation/Analysis/Component-Level-Filtering/) and [linked components](/documentation/Visualization/Filter-Subscriptions/).
