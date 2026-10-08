---
title: Stacked area
permalink: /documentation/Visualization/Stacked0-Area-Chart/
createTime: 2026/09/01 22:03:26
---

# Stacked area

Show how additive contributions and their combined total change over time. The top boundary represents the total; the thickness of a band represents its contribution.

## Build the chart

1. Add **Components → Charts → Stacked area** and select an **Analysis model** in **Data**.
2. Set **X-axis** to Month and **Measures** to Net Sales.
3. Set **Legend** to Region to create one band per region. For several measures, use compatible units and check the available Legend/Color slots after binding.
4. Set **Filters**, for example Year = 2025, and verify the months are chronological.
5. Add useful context to **Tooltips**, such as order count. Open **Style** after the data is correct.

Each series must be a distinct part of the whole. Do not combine total sales with regional sales in the same stack. Rates and averages are usually unsuitable for stacking because their sum has no useful meaning.

## Format and interpret

Use **Plot area** for the filled appearance, **Data labels** for selected values, and **Legend** to identify the series. Keep the legend and color assignments consistent across periods and related charts. For ordinary Area, **Transparency** controls opacity; it does not apply when the gradient option is enabled.

Read a band’s thickness, not its top boundary, as the individual series value. Interior bands do not share a baseline, so compare close values with a line or clustered chart.

Use **X axis** to keep time labels readable, **Y axis** for meaningful units, and **Zoom slider** for a long series. Do not label every point when the labels obscure the shape.

## Check the result

Save and open **Preview**. Hover several periods and confirm the time grain and values against a table with the same filters.

- Unexpected totals or shares: check duplicate/overlapping series and the measure aggregation.
- Missing periods: distinguish absent data from an actual zero.
- A sharp boundary change: check whether categories appeared or disappeared under the current filters.
- Different results from another chart: align period, filters and included series before comparing.

Choose **100% stacked area** to compare shares, or **Line** to compare individual trends.
