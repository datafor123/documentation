---
title: Stacked column
permalink: /documentation/Visualization/Stacked-Column-Chart/
createTime: 2026/09/01 22:03:26
---

# Stacked column

Use vertical columns to compare totals and their composition. The full length shows the total; each segment shows one contribution.

## Build a sales-breakdown chart

1. Add **Components → Charts → Stacked column**, select it, and choose an **Analysis model** in **Data**.
2. Use **+** to choose the fields below. Click **Back** after each selection.

| Slot | Example | Purpose |
| --- | --- | --- |
| **X-axis** | Month | One position per category or period. |
| **Measures** | Net Sales | The amount to compare. |
| **Legend** | Region | Segments within each column. |
| **Tooltips** | Optional order count or quantity | Context without adding another plotted measure. |

3. Set **Filters** to a defined period, such as Year = 2025. Keep months in chronological order; include year when comparing more than one year.
4. Check the category and series values before opening **Style**.

Use either one measure split by a **Legend** dimension, or multiple compatible measures representing separate parts. Do not stack an overall total together with its own components: that counts the same value twice. The **Legend** and **Color** slots can disappear when several measures are assigned; the measure names then identify the series.

![Clustered, stacked and 100% stacked views of the same illustrative values](../images/current/chart-comparison-concept.svg)

## Read and format the chart

Compare the overall lengths first, then the mix of segments. Only the segment next to zero has a shared baseline; use a clustered chart to compare small differences within another segment.

- **Bar** controls the mark presentation and spacing. Increase the chart size before squeezing many categories into it.
- **Data labels** are useful for a small number of values; use **Tooltip** for a dense chart.
- **Y axis** is the value axis. Use a zero baseline for length comparisons and a display unit appropriate to the values.
- **X axis** contains category labels. Check label spacing and rotation, especially for dates.
- Keep the **Legend** visible for multiple series. Use the same series colors across related charts.

## Validate and troubleshoot

Save and open **Preview**. Hover at least one category and compare its values with the source or a table using the same filters.

- If the total looks too large, check for overlapping measures or duplicated categories.
- For positive and negative data, inspect both sides of zero; do not interpret the entire mark as a simple positive whole.
- If series disappear after a chart-type change, recheck the data slots.

Choose a 100% stacked chart for shares, or a clustered chart for individual series comparisons. See [component filters](/documentation/Analysis/Component-Level-Filtering/).
