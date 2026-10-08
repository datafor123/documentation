---
title: Area
permalink: /documentation/Visualization/Area/
createTime: 2026/10/06 20:51:07
---

# Area

Show a trend with a filled area to emphasize its magnitude. Use a line chart when precise comparison between several overlapping series matters more than the filled shape.

## Build the chart

1. Add **Components → Charts → Area** and select an **Analysis model** in **Data**.
2. Set **X-axis** to Month and **Measures** to Net Sales.
3. Start without a Legend field. Add Region only if the resulting overlapping areas remain readable. For several measures, use compatible units and check the available Legend/Color slots after binding.
4. Set **Filters**, for example Year = 2025, and verify the months are chronological.
5. Add useful context to **Tooltips**, such as order count. Open **Style** after the data is correct.

Use a zero baseline when the filled area is intended to represent magnitude. A truncated axis can exaggerate differences.

## Format and interpret

Use **Plot area** for the filled appearance, **Data labels** for selected values, and **Legend** to identify the series. Keep the legend and color assignments consistent across periods and related charts. For ordinary Area, **Transparency** controls opacity; it does not apply when the gradient option is enabled.

If one area hides another, reduce the number of series or switch to Line. Transparency helps visibility but does not make overlapping areas additive.

Use **X axis** to keep time labels readable, **Y axis** for meaningful units, and **Zoom slider** for a long series. Do not label every point when the labels obscure the shape.

## Check the result

Save and open **Preview**. Hover several periods and confirm the time grain and values against a table with the same filters.

- Unexpected totals or shares: check duplicate/overlapping series and the measure aggregation.
- Missing periods: distinguish absent data from an actual zero.
- A sharp boundary change: check whether categories appeared or disappeared under the current filters.
- Different results from another chart: align period, filters and included series before comparing.

Choose **Stacked area** for parts that should add to a total.
