---
title: Grouped donuts
permalink: /documentation/Visualization/Grouped-Donut-Chart/
createTime: 2026/09/01 22:03:26
---

# Grouped donuts

Compare composition across several groups.

## Set up the data

1. Choose **Components → Charts → Grouped donuts** and place it on the canvas.
2. Select the chart and choose an **Analysis model** in **Data**.
3. Use **+** beside each field slot to select the following fields, then click **Back**.

| Data slot | Choose |
| --- | --- |
| **Details (Slices)** | Categories within each donut. |
| **Grouping (Donuts)** | Field that creates separate donuts. |
| **Measures** | Measure controlling slice size. |
| **Color / Tooltips** | Optional color and hover detail. |

Use **Filters** to restrict this component’s data. Check the result before styling it.

## Make it readable

Use **Grouping labels** to identify each donut and **Plot area** to control its presentation.

Example: Product Category in Details, Region in Grouping, and Sales in Measures. Use the same slice colors across groups.

Save the report and use **Preview** to check labels, hover details, and the filtered result.

See [component filters](/documentation/Analysis/Component-Level-Filtering/) and [linked components](/documentation/Visualization/Filter-Subscriptions/).
