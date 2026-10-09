---
title: Stacked area
permalink: /documentation/Visualization/Stacked0-Area-Chart/
description: Show how additive parts and their total change over time. Covers missing values, negative values, area transparency, data labels and tooltip totals.
createTime: 2026/09/01 22:03:26
---

# Stacked area

Show how additive contributions and their combined total change over time. The top edge is the total; the thickness of a band is that series' contribution.

## Build the chart

1. In **Components → Charts → Line & area**, add **Stacked area** and select an **Analysis model** in **Data**.
2. Set **X-axis** to Month and **Measures** to Net Sales.
3. Set **Legend** to Region to get one band per region. For several measures, use compatible units; **Color** takes a field only while there is one measure.
4. Set **Filters**, for example Year = 2025, and check that the months are in order.
5. Add context to **Tooltips**, such as order count.

Each series must be a distinct part of the whole. Do not stack total sales on top of regional sales. Rates and averages are usually unsuitable, because their sum has no meaning.

A new Stacked area is placed at 400 × 300 px, with data-label **Display units** set to **Auto**.

## Settings that matter

All in the **Style** tab.

| Setting | Effect | Default |
| --- | --- | --- |
| **Plot area → Area transparency** | 0 % is opaque; higher values let the layers show through. Not used when **Gradient** is on. | 32 % |
| **Plot area → Line width**, **Gradient**, **Line type** | Line on each band edge, gradient fill, **Straight** / **Smooth** / **Step**. | 2 px, off, Straight |
| **Data labels → Show**, **Font** | Value of each band at each point. The top layer's labels are grey because they sit on the background; lower layers use the near-white font colour. A font colour you set is used for all layers. | Off |
| **Data labels → Display units**, **Decimal places** | See [Display Units and Decimal Places](/documentation/Visualization/Display-Units/). | Auto for new charts, otherwise Follow measure format |
| **Y axis → Y-axis min value**, **Y-axis max value**, **Scale** | Fixed bounds and tick unit. The automatic range always includes 0. | Empty, Auto |
| **Tooltip → Show total**, **Show percentage** | Adds the period total and each series' share. Needs a **Legend** field. See [Tooltips](/documentation/Visualization/Tooltips-for-Chart-Components/). | Off |

There is no **Show total** or **Hide labels below (%)** under Data labels; those exist on stacked column and bar charts. Reference lines are added in the **Analytics** tab; on stacked charts **Calculate over** defaults to **Category totals**, which match the top edge. See [Reference lines](/documentation/Analysis/Chart-Reference-Lines/).

## How it behaves

- **Missing values are stacked as 0.** If a series has no value in a period, the band continues at zero thickness instead of breaking or collapsing onto the layer below. These filled points have no label and no tooltip row, and cannot be clicked. **Area** and **Line** break at gaps instead.
- **Negative values.** Series are added in series order, so the top edge is the net total, the same figure as the tooltip total. A negative band overlaps the layer below it. The Y axis covers both the positive and the negative sums of each period.
- **Shares with negative values.** **Show percentage** divides by the sum of absolute values; negative rows read, for example, *-16.5% of the absolute total*. The total row stays the net total.
- **Percentage measures.** A measure formatted as a percentage gets a percent axis, but only when every measure on the axis is a percentage.
- **Label colour after hiding a series.** If you hide the top series with the legend, the labels of the new top layer turn grey only at the next redraw, for example after a filter change.
- **Order.** The tooltip and legend list the series in series order, which is the reverse of the visual stack (the first series is at the bottom).
- **Clicking points.** As on [Area](/documentation/Visualization/Area/): a click within about 8 px of a point selects it, and a single remaining point is drawn as a dot.

## Reports from earlier versions

- Bands that used to break at missing values now continue as zero.
- Stacks that mix positive and negative values are drawn in series order, with the net total on top.
- The automatic Y-axis range now includes 0.
- With the default label colour, the top layer's labels turn grey.

## Check the result

Save and open **Preview**. Hover several periods and compare the total and the series values with a table using the same filters.

- Unexpected totals: check overlapping series and the measure aggregation.
- Missing periods: a stacked area shows an absent value as 0, so confirm in a table whether the value is missing or really zero.
- A sharp change in a band: check whether categories appeared or disappeared under the current filters.

Read a band's thickness, not its top edge, as the series value. Inner bands do not share a baseline; compare close values with **Line** or a clustered chart.

Related: [100% stacked area](/documentation/Visualization/Stacked-Ratio-Chart/) to compare shares · [Area](/documentation/Visualization/Area/) · [Line](/documentation/Visualization/Line-Chart/) · [Legends](/documentation/Visualization/Legends/)
