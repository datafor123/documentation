---
title: 100% stacked column
permalink: /documentation/Visualization/100-Stacked-Column-Chart/
description: Compare the composition of categories with columns normalised to 100%, including share labels, tooltips with values, and how negative values and zeros are shown.
createTime: 2026/09/01 22:03:26
---

# 100% stacked column

Vertical columns normalised to a whole: each segment is a share of its category total. Use it to compare the mix across categories whose totals differ. Equal column heights do not mean equal sales; use a [Stacked column](/documentation/Visualization/Stacked-Column-Chart/) when absolute totals matter.

## Build a sales-mix chart

1. In **Components → Charts → Column & bar**, click **100% stacked column**, then click the canvas. A new chart is 400 × 300 px.
2. In **Data**, choose an **Analysis model** and fill the field groups. Click **Back** after each selection.
3. Set **Filters** to a defined period, such as Year = 2025. Keep months in chronological order and include the year when comparing several years.

| Field group | Example | Purpose |
| --- | --- | --- |
| **X-axis** | Month | One column per member. |
| **Legend** | Region | One segment per member. |
| **Measures** | Net Sales | Value used to calculate each share. |
| **Tooltips** | Order Count | Extra values in the tooltip; not drawn. |

Use either one measure split by a **Legend** field, or several measures that are separate parts of one total. Do not stack a total together with its own components. With several measures, **Legend** and **Color** are not available.

![Clustered, stacked and 100% stacked views of the same illustrative values](../images/current/chart-comparison-concept.svg)

Read each segment as a share of its column: 30 out of 100 and 300 out of 1,000 both fill 30%. Keep the raw value in the tooltip, or add a separate total chart, when volume matters.

## Labels, tooltips and copied values

| Option | Effect | Default |
| --- | --- | --- |
| **Data labels → Show** | Labels on the segments. | Off |
| **Data labels → Content** | **Percent** (share of the column) or **Value** (the measure value). | **Percent** |
| **Data labels → Position** | **Inside top**, **Center**, **Inside bottom**. | **Inside top** |
| **Data labels → Font** | Size, colour, bold, italic. | – |
| **Tooltip → Show Tooltip** | Turns the data tooltip on or off. | On |

- There is no **Display units**, **Decimal places**, **Show total** or **Hide labels below (%)**. Format raw values through the measure's **Format**.
- The tooltip shows the share followed by the value, for example *34.5% (334,626.13)*.
- Right-click → **Copy value** copies what the label shows: the share by default, the value when **Content** is **Value**.
- Labels inside segments that do not fit are hidden; new charts choose dark or light label text by segment colour. See [Data labels](/documentation/Visualization/Clustered-Column-Chart/#data-labels).

## Negative values and zeros

- Shares are calculated on the sum of the **absolute** values in the column. Negative segments are drawn below 0 and the axis extends down to the most negative category. Without negative values the axis is 0–100%.
- The tooltip of a negative segment reads, for example, *-33.3% of the absolute total (-50)*. A category whose values are all 0 shows *All values are 0 (0)*.
- This also works with a date field on a continuous X axis.

## Axis and legend

- The value axis is fixed at 0–100% (extended below 0 for negative values) and has no minimum or maximum inputs.
- Hiding a series in the legend does not renormalise the others: the remaining segments keep their share of all series and no longer fill the column. Show all series to compare full columns.
- **Round corners** (**Style → Bar**) rounds only the outer end of each stack.
- **Analytics** offers fixed lines (0–100) and bands, but no statistic lines; see [Reference lines](/documentation/Analysis/Chart-Reference-Lines/).
- Switching to a 100% stacked bar keeps axis and label settings on the matching axis; see [Switch between column and bar charts](/documentation/Visualization/Clustered-Column-Chart/#switch-between-column-and-bar-charts).

## Reports from earlier versions

- Negative segments used to be hidden below the axis; they are now drawn below 0 and the axis extends.
- Labels inside segments that do not fit are now hidden.
- The **Show Tooltip** switch is new; it is on for existing charts.

## Check the result

Save and open **Preview**. Hover a segment and compare the value with a table using the same filters.

- If every category looks equally important, inspect the raw totals: normalisation deliberately removes volume differences.
- If a share is unexpected, check the included series, empty values and filters, and whether some values are negative.
- If series disappear after a chart-type change, recheck the data slots.

Related: [100% stacked bar](/documentation/Visualization/100-Stacked-Bar-Chart/) · [Stacked column](/documentation/Visualization/Stacked-Column-Chart/) · [Tooltips](/documentation/Visualization/Tooltips-for-Chart-Components/) · [Component filters](/documentation/Analysis/Component-Level-Filtering/)
