---
title: Scatter
permalink: /documentation/Visualization/Scatter-Plot/
createTime: 2026/09/01 22:03:26
---

# Scatter

Compare two numeric measures and identify clusters or outliers.

## Set up the data

1. Choose **Components → Charts → Scatter** and place it on the canvas.
2. Select the chart and choose an **Analysis model** in **Data**.
3. Use **+** beside each field slot to select the following fields, then click **Back**.

| Data slot | Choose |
| --- | --- |
| **Marker** | Field identifying the individual points. |
| **Legend** | Optional grouping for the points. |
| **X Axis / Y Axis** | The two measures to compare. |
| **Size** | Optional measure controlling bubble size. |
| **Color / Tooltips** | Optional encoding and extra context. |

Use **Filters** to restrict this component’s data. Check the result before styling it.

## Make it readable

Use **Bubble**, **X axis**, **Y axis**, and **Zoom slider** to improve readability. **Analytics** provides reference lines and a diagonal.

Choose Marker deliberately: it sets the level at which points are compared. Include its label in hover details.

Save the report and use **Preview** to check labels, hover details, and the filtered result.

See [component filters](/documentation/Analysis/Component-Level-Filtering/) and [linked components](/documentation/Visualization/Filter-Subscriptions/).
