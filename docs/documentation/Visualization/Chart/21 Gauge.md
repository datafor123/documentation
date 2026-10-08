---
title: Gauge
permalink: /documentation/Visualization/Gauge/
createTime: 2026/10/06 20:51:07
---

# Gauge

Show a value within a bounded scale.

## Set up the data

1. Choose **Components → Charts → Gauge** and place it on the canvas.
2. Select the chart and choose an **Analysis model** in **Data**.
3. Use **+** beside each field slot to select the following fields, then click **Back**.

| Data slot | Choose |
| --- | --- |
| **Series** | Optional grouping. |
| **Measure** | Value to display. |
| **Minimum value / Maximum Value** | Scale bounds. |
| **Target** | Optional target measure. |

Use **Filters** to restrict this component’s data. Check the result before styling it.

## Make it readable

Use **Theme**, **Position**, **Series**, **Measure value**, **Target value**, and **Scale axis**.

Choose meaningful fixed business bounds when comparing gauges. An automatically changing scale can obscure differences.

Save the report and use **Preview** to check labels, hover details, and the filtered result.

See [component filters](/documentation/Analysis/Component-Level-Filtering/) and [linked components](/documentation/Visualization/Filter-Subscriptions/).
