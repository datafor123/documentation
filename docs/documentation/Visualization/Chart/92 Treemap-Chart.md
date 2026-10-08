---
title: Treemap
permalink: /documentation/Visualization/Treemap/
createTime: 2026/09/01 22:03:26
---

# Treemap

Compare values using nested rectangles.

## Set up the data

1. Choose **Components → Charts → Treemap** and place it on the canvas.
2. Select the chart and choose an **Analysis model** in **Data**.
3. Use **+** beside each field slot to select the following fields, then click **Back**.

| Data slot | Choose |
| --- | --- |
| **Series** | Outer grouping. |
| **Detail** | Items within the group. |
| **Measure** | Value controlling rectangle size. |
| **Color / Tooltips** | Optional encoding and detail. |

Use **Filters** to restrict this component’s data. Check the result before styling it.

## Make it readable

Use **Series** and **Data labels** to identify the hierarchy.

Use non-negative measures and a manageable number of groups. Use a table when very small items must remain readable.

Save the report and use **Preview** to check labels, hover details, and the filtered result.

See [component filters](/documentation/Analysis/Component-Level-Filtering/) and [linked components](/documentation/Visualization/Filter-Subscriptions/).
