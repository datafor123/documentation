---
title: Stacked column
permalink: /documentation/Visualization/Stacked-Column-Chart/
description: Show category totals and their composition with stacked columns, including stack totals, a threshold for small segment labels and stacks with negative values.
createTime: 2026/09/01 22:03:26
---

# Stacked column

Vertical columns whose segments add up to the category total. Read the overall heights first, then the mix of segments. Only the bottom segment has a shared baseline; to compare one series across categories, use a [Clustered column](/documentation/Visualization/Clustered-Column-Chart/). For shares instead of amounts, use a [100% stacked column](/documentation/Visualization/100-Stacked-Column-Chart/).

## Build a sales breakdown

1. In **Components → Charts → Column & bar**, click **Stacked column**, then click the canvas. A new chart is 400 × 300 px.
2. In **Data**, choose an **Analysis model** and fill the field groups. Click **Back** after each selection.
3. Set **Filters** to a defined period, such as Year = 2025. Keep months in chronological order and include the year when comparing several years.

| Field group | Example | Purpose |
| --- | --- | --- |
| **X-axis** | Month | One column per member. |
| **Legend** | Region | One segment per member. |
| **Measures** | Net Sales | The amount that is stacked. |
| **Tooltips** | Order Count | Extra values in the tooltip; not drawn. |

Use either one measure split by a **Legend** field, or several measures that are separate parts of one total. Do not stack a total together with its own components: that counts the same value twice. With several measures, **Legend** and **Color** are not available and the measure names identify the segments.

![Clustered, stacked and 100% stacked views of the same illustrative values](../images/current/chart-comparison-concept.svg)

## Totals and segment labels

Open **Style → Data labels** and turn on **Show**:

| Option | Effect | Default |
| --- | --- | --- |
| **Position** | **Inside top**, **Center** or **Inside bottom** of each segment. | **Inside top** |
| **Show total** | Sum of the segments at the top of each column. When the category's net value is negative, the total is drawn below the negative part of the stack. Needs **Show**. | On for new charts, off in older reports |
| **Hide labels below (%)** | Hides the label of a segment whose share of its column is below this value (0–20). The share is the segment divided by the sum of the absolute segment values in that column. | 0 (all labels) |
| **Display units**, **Decimal places** | Format of segment labels and totals. | **Auto** for new charts |

- The total is the net value: positive and negative segments are added. A positive net total always sits on top of the positive part of the stack, even when the last series is negative.
- Totals use the measure format with the label's **Display units** and **Decimal places**. With a unit and **Auto** decimals, labels and totals share about three significant digits (1.85M, 0.97M, 0.50M).
- No total is shown when the stacked measures have different formats, for example an amount and a percentage.
- Series hidden in the legend are left out of totals and shares.
- Space is kept above the columns so the longest total is not cut off.
- An **Average** reference line label can overlap a total label; move the line label or turn off **Show total**.

Inside labels that do not fit their segment are hidden; see [Data labels](/documentation/Visualization/Clustered-Column-Chart/#data-labels).

## Axis, negative values and corners

- **Mixed signs.** The value axis includes 0 and covers, per category, the sum of the positive segments above 0 and the sum of the negative segments below 0. With +100, +80 and −50 in one column the axis reaches 180, not the net 130, so no stack is cut off.
- **Percentage measures.** A measure formatted as a percentage gets a percentage axis whose ticks match the tooltips (for example 0%–300%).
- **Round corners** (**Style → Bar**) rounds only the outer end of each stack: the top of a positive stack, the bottom of a negative one. Inner segments stay square. If the outermost series is hidden in the legend, the segment below it is not rounded.
- **Hiding a series** in the legend rescales the axis and recalculates totals and the **Hide labels below (%)** shares.
- In **Analytics**, statistic lines default to **Calculate over → Category totals** on stacked charts; see [Reference lines](/documentation/Analysis/Chart-Reference-Lines/).

Fixed axis bounds, **Scale**, tooltips and switching to a bar chart work as on the [Clustered column](/documentation/Visualization/Clustered-Column-Chart/#value-axis).

## Reports from earlier versions

- **Show total** stays off; turn it on in **Data labels**.
- Axes now start at 0 and cover the positive and negative sums, so some axes change when the report is opened.
- Percentage axes were 100 times too small (0%–3% while the tooltip showed 54%); they now match the values.
- Labels inside segments that do not fit are now hidden.

## Check the result

Save and open **Preview**. Hover a column and compare its segments and total with a table using the same filters.

- If a total looks too large, check for overlapping measures or duplicated categories.
- With positive and negative segments, the column height is not the total: read the total label, which shows the net value, and inspect both sides of zero.
- If series disappear after a chart-type change, recheck the data slots.

Related: [Stacked bar](/documentation/Visualization/Stacked-Bar-Chart/) · [Clustered column](/documentation/Visualization/Clustered-Column-Chart/) · [Display Units](/documentation/Visualization/Display-Units/) · [Component filters](/documentation/Analysis/Component-Level-Filtering/)
