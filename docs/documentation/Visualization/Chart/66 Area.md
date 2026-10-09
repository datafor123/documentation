---
title: Area
permalink: /documentation/Visualization/Area/
description: Show a trend as a filled area. Bind a time or category field and measures, then set area transparency, data labels, axes, zoom and reference lines.
createTime: 2026/10/06 20:51:07
---

# Area

An area chart is a line chart with the area below the line filled, to emphasise volume over time. Use **Line** when several overlapping series must be compared precisely, and **Stacked area** when the series are parts of one total.

## Build the chart

1. In **Components → Charts → Line & area**, add **Area** and select an **Analysis model** in **Data**.
2. Set **X-axis** to Month and **Measures** to Net Sales.
3. Start without a **Legend** field. Add Region only if the overlapping areas stay readable. For several measures, use compatible units; **Color** takes a field only while there is one measure.
4. Set **Filters**, for example Year = 2025, and check that the months are in order.
5. Add context to **Tooltips**, such as order count. Open **Style** once the data is correct.

A new Area chart is placed at 400 × 300 px, with **Area transparency** 60 % and data-label **Display units** set to **Auto**.

## Settings that matter

All in the **Style** tab.

| Setting | Effect | Default |
| --- | --- | --- |
| **Plot area → Line width** | Width of the line along the top of the area. | 2 px |
| **Plot area → Gradient** | Fills the area with a gradient instead of a flat colour. | Off |
| **Plot area → Area transparency** | 0 % is opaque; higher values let overlapping series show through. Not used when **Gradient** is on. | 60 % for new charts, 32 % for charts that never set it |
| **Plot area → Line type** | **Straight**, **Smooth** or **Step**. | Straight |
| **Data labels → Show**, **Font** | Values at the points. Labels stay inside the plot area; labels that would overlap are hidden. | Off |
| **Data labels → Display units**, **Decimal places** | Compact numbers such as 1.2M. See [Display Units and Decimal Places](/documentation/Visualization/Display-Units/). | Auto for new charts, otherwise Follow measure format |
| **Y axis → Y-axis min value**, **Y-axis max value** | Fixed bounds. Empty = automatic range, which always includes 0. | Empty |
| **Y axis → Scale** | Tick unit (**Auto**, K, M, B, T, %). | Auto |
| **Zoom slider → Zoom** | Adds a zoom slider for long series. | Off |
| **Tooltip** | **Sort**, **Show total**, **Show percentage**, **Highlight hovered series**. See [Tooltips](/documentation/Visualization/Tooltips-for-Chart-Components/). | Series order, off, off, on |

With several measures, the default Y-axis name joins them with "and", for example *Net Sales and Cost*. Reference lines and bands are added in the **Analytics** tab; see [Reference lines](/documentation/Analysis/Chart-Reference-Lines/).

## How it behaves

- **Zero baseline.** The automatic Y-axis range starts at 0 for positive data (ends at 0 for negative data), so the filled area represents magnitude. Type a minimum or maximum to override it.
- **Clicking points.** A click within about 8 px of a point selects that point for [cross-filtering](/documentation/Analysis/Cross-Filtering/), [drill down](/documentation/Analysis/Drill-down/), jumps and the [data point menu](/documentation/Analysis/Exploratory%20Analysis/). A click far from every point clears the selection.
- **Single point.** When filters leave one point, it is drawn as a 6 px dot.
- **Category X axis.** The area runs from one edge of the plot to the other. See [X axis type](/documentation/Visualization/X-Axis-Type-Settings/).
- **Gaps.** A period without a value breaks the area. **Stacked area** stacks missing values as 0 instead.
- **Overlap.** Transparency helps visibility but does not make overlapping areas additive. If one area hides another, reduce the number of series or switch to **Line**.

## Reports from earlier versions

- The automatic Y-axis range now includes 0, so existing charts can change shape. Charts that had the older zero-alignment option switched off keep their range.
- **Area transparency** stays at 32 %, the opacity used before, and **Display units** stays **Follow measure format**.

## Check the result

Save and open **Preview**. Hover several periods and compare the values with a table using the same filters.

- Unexpected totals: check duplicate series and the measure aggregation.
- Missing periods: tell absent data apart from an actual zero.
- A sharp change: check whether categories appeared or disappeared under the current filters.

Related: [Stacked area](/documentation/Visualization/Stacked0-Area-Chart/) · [100% stacked area](/documentation/Visualization/Stacked-Ratio-Chart/) · [Line](/documentation/Visualization/Line-Chart/) · [Legends](/documentation/Visualization/Legends/) · [Colors](/documentation/Visualization/Colors/)
