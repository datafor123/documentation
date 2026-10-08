---
title: Scatter
permalink: /documentation/Visualization/Scatter-Plot/
createTime: 2026/09/01 22:03:26
---

# Scatter

Compare two numeric measures to find clusters, unusual observations and possible relationships. Each point represents a member of the **Marker** field. A pattern is evidence of association, not proof that one variable causes the other.

![Observation grain for Scatter, Box plot and Histogram](../images/current/observation-grain-concept.svg)

## Build sales versus margin

1. Add **Components → Charts → Scatter** and choose an **Analysis model** in **Data**.
2. Map the fields below, then set a common period in **Filters**.

| Slot | Example | Purpose |
| --- | --- | --- |
| **Marker** | Store | Defines what one point represents. |
| **X Axis** | Net Sales | Horizontal position. |
| **Y Axis** | Gross Margin Rate | Vertical position. |
| **Size** | Optional order count | Adds bubble size as a third measure. |
| **Legend** | Optional Region | Separates groups of points. |
| **Color / Tooltips** | Optional context | Helps identify and inspect points. |

Use a store identifier that distinguishes stores with the same name. Without the intended Marker grain, the chart may show a few aggregated points instead of individual stores.

## Set scales and bubble size

Use **Style → X axis** and **Y axis** to label units and review bounds. Sales and margin rate can use different units here because they occupy different axes; make both explicit.

Under **Bubble**, set minimum and maximum bubble sizes so points remain visible without hiding their neighbors. If Size is bound, explain what it represents in the title or supporting text. Do not interpret the diameter as a precise value comparison.

Use **Data labels** sparingly for a dense plot. Keep store identity and precise values in **Tooltip**. **Legend** and **Zoom slider** help inspect grouped or dense data, but filtering to a relevant population is often clearer.

## Read and check the result

Start with the overall spread, then inspect individual outliers. A store can have high sales but a low margin rate; that is a different finding from high margin amount.

Save and open **Preview**. Hover points from different regions and compare their X/Y values with a table at the same Store grain. If points overlap, reduce bubble size, narrow the filters or add space. If many points share exactly one coordinate, check measure aggregation and missing values before concluding the relationship is real.
