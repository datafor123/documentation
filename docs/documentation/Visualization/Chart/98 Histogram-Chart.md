---
title: Histogram
permalink: /documentation/Visualization/Histogram-Chart/
createTime: 2026/09/03 09:56:42
---

# Histogram

Show how numeric observations are distributed across intervals.

## Set up the data

1. Choose **Components → Charts → Histogram** and place it on the canvas.
2. Select the chart and choose an **Analysis model** in **Data**.
3. Use **+** beside each field slot to select the following fields, then click **Back**.

| Data slot | Choose |
| --- | --- |
| **Value** | Numeric field whose distribution you want to inspect. |

Use **Filters** to restrict this component’s data. Check the result before styling it.

## Make it readable

Each detail row is one sample. Its raw numeric value is binned before aggregation; nulls are excluded. Do not interpret bins as a distribution of already grouped category totals.

Under **Style → Distribution**, configure:

| Setting | Use |
| --- | --- |
| **Frequency → Count** | Number of valid observations per interval. |
| **Frequency → Percentage** | Share of valid observations after filtering. |
| **Bins → Auto** | Explore the distribution with automatically chosen bins. |
| **Bins → Number of bins** | Set **Number** from 2 to 100. |
| **Bins → Bin width** | Set a positive **Width** in the field’s units. |

Use **Bars → Spacing** to control the gap between intervals. Hover a bar to inspect its range and frequency. If the field cannot be binned by the server, choose an eligible physical numeric field; a calculated measure is not a substitute for row-level observations.

Changing binning changes the apparent distribution. Compare results using the same filter and bin settings.

Save the report and use **Preview** to check labels, hover details, and the filtered result.

See [component filters](/documentation/Analysis/Component-Level-Filtering/) and [linked components](/documentation/Visualization/Filter-Subscriptions/).
