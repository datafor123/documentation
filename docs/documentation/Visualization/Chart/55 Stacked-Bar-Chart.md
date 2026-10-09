---
title: Stacked bar
permalink: /documentation/Visualization/Stacked-Bar-Chart/
description: Show totals and their composition with horizontal stacked bars when category names are long, including stack totals and a threshold for small segment labels.
createTime: 2026/09/01 22:03:26
---

# Stacked bar

Horizontal bars whose segments add up to the category total. Use it instead of a [Stacked column](/documentation/Visualization/Stacked-Column-Chart/) when category names are long or there are many categories. Read the total lengths first, then the mix; only the first segment (next to zero) has a shared baseline.

## Build a sales breakdown

1. In **Components → Charts → Column & bar**, click **Stacked bar**, then click the canvas. A new chart is 400 × 300 px.
2. In **Data**, choose an **Analysis model** and fill the field groups. Click **Back** after each selection.
3. Set **Filters** to a defined period, such as Year = 2025.

| Field group | Example | Purpose |
| --- | --- | --- |
| **Y-axis** | Region | One bar per member. |
| **Legend** | Product Category | One segment per member. |
| **Measures** | Net Sales | The amount that is stacked. |
| **Tooltips** | Order Count | Extra values in the tooltip; not drawn. |

Use either one measure split by a **Legend** field, or several measures that are separate parts of one total. Do not stack a total together with its own components. With several measures, **Legend** and **Color** are not available.

![Clustered, stacked and 100% stacked views of the same illustrative values](../images/current/chart-comparison-concept.svg)

## Totals and segment labels

Open **Style → Data labels** and turn on **Show**:

| Option | Effect | Default |
| --- | --- | --- |
| **Position** | **Inside left**, **Center** or **Inside right** of each segment. | **Inside left** |
| **Show total** | Sum of the segments at the right end of each bar; to the left of the negative part when the category's net value is negative. Needs **Show**. | On for new charts, off in older reports |
| **Hide labels below (%)** | Hides the label of a segment whose share of its bar is below this value (0–20). | 0 (all labels) |
| **Display units**, **Decimal places** | Format of segment labels and totals. | **Auto** for new charts |

The total is the net value, is formatted like the labels, is left out when the stacked measures have different formats, and excludes series hidden in the legend. Details: [Stacked column](/documentation/Visualization/Stacked-Column-Chart/#totals-and-segment-labels).

Space is kept to the right so the longest total is not cut off. A value typed into **Bar → Right margin** replaces this automatic space, so a long total can then be clipped; clear the box to return to automatic.

## Bar and axis settings

| Group → option | Effect | Default |
| --- | --- | --- |
| **Bar → Space (%)** | Gap between bars (5–90). | 50 |
| **Bar → Round corners** | Rounds only the outer end of each stack (right for positive, left for negative); inner segments stay square. | **None** |
| **Bar → Right margin** | Space in px to the right of the plot. Empty = automatic; **0** = no margin. | Empty (**Auto**) |
| **X axis → Scale**, **X-axis min value**, **X-axis max value** | Value-axis unit and fixed bounds. | **Auto**, empty |
| **Y axis → Label width** | Width of the category labels (40–800 px). | 50 px |

- With positive and negative segments, the axis covers the sum of the positives to the right of 0 and of the negatives to the left, per category.
- A measure formatted as a percentage gets a percentage axis that matches the tooltips.
- Hiding a series in the legend rescales the axis and recalculates totals.
- Other value-axis, label and chart-switch behaviour: see [Clustered column](/documentation/Visualization/Clustered-Column-Chart/#value-axis).

## Reports from earlier versions

- **Show total** stays off; turn it on in **Data labels**.
- Axes now start at 0 and cover the positive and negative sums; percentage axes are no longer 100 times too small.
- **X axis → Scale** now takes effect, and **Right margin** = 0 removes the margin.
- Labels inside segments that do not fit are now hidden.

## Check the result

Save and open **Preview**. Hover a bar and compare its segments and total with a table using the same filters.

- If a total looks too large, check for overlapping measures or duplicated categories.
- With positive and negative segments, the bar length is not the total: read the total label (net value) and inspect both sides of zero.
- If category names are cut off, increase **Y axis → Label width**.

Related: [Stacked column](/documentation/Visualization/Stacked-Column-Chart/) · [Clustered bar](/documentation/Visualization/Clustered-Bar-Chart/) · [100% stacked bar](/documentation/Visualization/100-Stacked-Bar-Chart/) · [Component filters](/documentation/Analysis/Component-Level-Filtering/)
