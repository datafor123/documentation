---
title: 100% stacked bar
permalink: /documentation/Visualization/100-Stacked-Bar-Chart/
description: Compare percentage composition across named categories with horizontal bars normalised to 100%, including share labels, tooltips with values and negative values.
createTime: 2026/09/01 22:03:26
---

# 100% stacked bar

Horizontal bars normalised to a whole: each segment is a share of its category total. Use it to compare the mix across categories with long names. Equal bar lengths do not mean equal sales; use a [Stacked bar](/documentation/Visualization/Stacked-Bar-Chart/) when absolute totals matter.

## Build a sales-mix chart

1. In **Components → Charts → Column & bar**, click **100% stacked bar**, then click the canvas. A new chart is 400 × 300 px.
2. In **Data**, choose an **Analysis model** and fill the field groups. Click **Back** after each selection.
3. Set **Filters** to a defined period, such as Year = 2025.

| Field group | Example | Purpose |
| --- | --- | --- |
| **Y-axis** | Region | One bar per member. |
| **Legend** | Product Category | One segment per member. |
| **Measures** | Net Sales | Value used to calculate each share. |
| **Tooltips** | Order Count | Extra values in the tooltip; not drawn. |

Use either one measure split by a **Legend** field, or several measures that are separate parts of one total. With several measures, **Legend** and **Color** are not available.

![Clustered, stacked and 100% stacked views of the same illustrative values](../images/current/chart-comparison-concept.svg)

## Labels and layout

| Group → option | Effect | Default |
| --- | --- | --- |
| **Data labels → Show** | Labels on the segments. | Off |
| **Data labels → Label content type** | **Show percentage** (share of the bar) or **Show value** (the measure value). | **Show percentage** |
| **Data labels → Position** | **Inside left**, **Center**, **Inside right**. | **Inside left** |
| **Bar → Space (%)**, **Round corners** | Gap between bars; rounding of the outer end of each stack. | 20, **None** |
| **Bar → Right margin** | Space in px to the right of the plot. Empty = automatic; **0** = no margin. | Empty (**Auto**) |
| **X axis → Show axis name** | Shows the value-axis title (the measure name). | On for new charts, off in older reports |
| **Y axis → Label width** | Width of the category labels (40–800 px). | 50 px |
| **Tooltip → Show Tooltip** | Turns the data tooltip on or off. | On |

- The label option names differ from the [100% stacked column](/documentation/Visualization/100-Stacked-Column-Chart/) (**Content** → **Value** / **Percent**) but work the same way.
- There is no **Display units**, **Decimal places**, **Show total** or **Hide labels below (%)**, and the X axis has no minimum or maximum inputs.
- The tooltip shows the share followed by the value, for example *34.5% (334,626.13)*. Right-click → **Copy value** copies what the label shows.

## Negative values and hidden series

- Shares are calculated on the sum of the absolute values in the bar. Negative segments are drawn to the left of 0 and the axis extends to the most negative category; without negatives the axis is 0–100%.
- Tooltips read, for example, *-33.3% of the absolute total (-50)*, or *All values are 0 (0)* for a category whose values are all zero.
- Hiding a series in the legend does not renormalise the others: the remaining segments keep their share of all series and no longer fill the bar.

Labels inside segments that do not fit are hidden; see [Data labels](/documentation/Visualization/Clustered-Column-Chart/#data-labels). **Analytics** offers fixed lines (0–100) and bands; see [Reference lines](/documentation/Analysis/Chart-Reference-Lines/).

## Reports from earlier versions

- Negative segments used to be hidden; they are now drawn to the left of 0.
- The value-axis name stays hidden; turn on **X axis → Show axis name** if needed.
- The category field group is now called **Y-axis** (was *X-Axis*); the field itself is unchanged.
- Labels inside segments that do not fit are now hidden.

## Check the result

Save and open **Preview**. Hover a segment and compare the value with a table using the same filters.

- If every category looks equally important, inspect the raw totals: normalisation removes volume differences.
- If a share is unexpected, check the included series, empty values, negative values and filters.

Related: [100% stacked column](/documentation/Visualization/100-Stacked-Column-Chart/) · [Stacked bar](/documentation/Visualization/Stacked-Bar-Chart/) · [Clustered bar](/documentation/Visualization/Clustered-Bar-Chart/) · [Component filters](/documentation/Analysis/Component-Level-Filtering/)
