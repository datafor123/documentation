---
title: 100% stacked area
permalink: /documentation/Visualization/Stacked-Ratio-Chart/
description: Show how the share of each series changes over time, with every period scaled to 100%. Covers negative and missing values, share labels and the fixed 0–100% axis.
createTime: 2026/09/01 22:03:26
---

# 100% stacked area

Show how the share of each series changes over time. Every period that has data is scaled to 100%, so differences in total volume are hidden. Earlier versions called this chart *Stacked ratio chart*.

## Build the chart

1. In **Components → Charts → Line & area**, add **100% stacked area** and select an **Analysis model** in **Data**.
2. Set **X-axis** to Month and **Measures** to Net Sales.
3. Set **Legend** to Region to get one band per region. For several measures, use compatible units; **Color** takes a field only while there is one measure.
4. Set **Filters**, for example Year = 2025, and check that the months are in order.
5. Add raw values to **Tooltips**, such as order count, so readers can see volume as well as share.

Each series must be a distinct part of the whole. Do not stack total sales with regional sales. Rates and averages are usually unsuitable, because their sum has no meaning.

A new 100% stacked area is placed at 400 × 300 px.

## Settings that matter

All in the **Style** tab.

| Setting | Effect | Default |
| --- | --- | --- |
| **Data labels → Show**, **Font** | Each series' share with one decimal, for example *10.7%*, drawn inside its own band. There are no Display units or Decimal places. | Off |
| **Plot area → Area transparency** | 0 % is opaque; higher values let the layers show through. Not used when **Gradient** is on. | 32 % |
| **Plot area → Line width**, **Gradient**, **Line type** | Line on each band edge, gradient fill, **Straight** / **Smooth** / **Step**. | 2 px, off, Straight |
| **Y axis** | Labels, axis name and font. The range is always 0–100% and extends below 0 when there are negative values; there is no **Scale**, **Y-axis min value** or **Y-axis max value**. | — |
| **Tooltip → Show Tooltip** | The only tooltip option: no sort, total or percentage settings. | On |

In the **Analytics** tab you can add fixed lines (0–100), vertical lines and bands, but no average or other statistic lines. See [Reference lines](/documentation/Analysis/Chart-Reference-Lines/).

## How shares are calculated

| Data | Result |
| --- | --- |
| Positive values | Share of the period total. |
| Negative values | Share of the sum of absolute values. Negative bands are drawn below 0. The tooltip reads, for example, *-33.3% of the absolute total (-50)*. |
| All values of a period are 0 | The tooltip reads *All values are 0*. |
| A series has no value, others do | The missing value counts as 0. It has no label or tooltip row and cannot be clicked. |
| The whole period is empty | The period is left blank and the bands are joined across it. |

- Hiding a series with the legend does **not** rescale the others to 100%: the remaining shares stay as calculated over all series.
- Right-click a point and choose **Copy value** to copy the share shown, for example *10.7%*. See [Data point menu](/documentation/Analysis/Exploratory%20Analysis/).

## Reports from earlier versions

- A Y-axis unit, minimum or maximum saved in the chart (including a unit carried over from switching from **Stacked area**) is ignored; the axis always runs 0–100%.
- Negative values are now drawn below 0 instead of being cut off at 0%.

## Check the result

Save and open **Preview**. Hover several periods and confirm the shares against a table with the same filters.

- Unexpected shares: check overlapping series and the measure aggregation.
- Missing periods: tell absent data apart from an actual zero.
- A sharp boundary change: check whether categories appeared or disappeared under the current filters.

Read band thickness as the share in that period. A region can gain share while its sales fall, if the total falls faster. Pair the chart with a total-sales chart or keep raw values in the tooltip.

Related: [Stacked area](/documentation/Visualization/Stacked0-Area-Chart/) when total volume must stay visible · [100% stacked column](/documentation/Visualization/100-Stacked-Column-Chart/) · [Legends](/documentation/Visualization/Legends/)
