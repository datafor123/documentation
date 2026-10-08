---
title: Clustered bar
permalink: /documentation/Visualization/Clustered-Bar-Chart/
createTime: 2026/09/01 22:03:26
---

# Clustered bar

Use horizontal bars to rank categories with long names. Each bar or column has a common baseline, making individual values easy to compare.

## Build a sales-comparison chart

1. Add **Components → Charts → Clustered bar**, select it, and choose an **Analysis model** in **Data**.
2. Use **+** to choose the fields below. Click **Back** after each selection.

| Slot | Example | Purpose |
| --- | --- | --- |
| **Y-axis** | Region | One row per category. |
| **Measures** | Net Sales | The amount to compare. |
| **Legend** | Product Category | Optional series shown side by side. |
| **Tooltips** | Optional order count or quantity | Context without adding another plotted measure. |

3. Set **Filters** to a defined period, such as Year = 2025. Start with a manageable number of categories.
4. Check the category and series values before opening **Style**.

For several measures, add them to **Measures** instead of using a Legend field. Keep their units compatible; use a [Combo chart](/documentation/Visualization/Combo%20Chart/) for sales and a percentage rate. The **Legend** and **Color** slots can disappear when several measures are assigned; the measure names then identify the series.

![Clustered, stacked and 100% stacked views of the same illustrative values](../images/current/chart-comparison-concept.svg)

## Read and format the chart

Compare endpoints against the same value axis. For a ranking, use the category field’s **More function** menu to set the order and check that the largest value appears where readers expect it.

- **Bar** controls the mark presentation and spacing. Increase the chart size before squeezing many categories into it.
- **Data labels** are useful for a small number of values; use **Tooltip** for a dense chart.
- **X axis** is the value axis. Use a zero baseline for length comparisons and a display unit appropriate to the values.
- **Y axis** contains category labels. Leave room for long names.
- Keep the **Legend** visible for multiple series. Use the same series colors across related charts.

## Validate and troubleshoot

Save and open **Preview**. Hover at least one category and compare its values with the source or a table using the same filters.

- If values overlap, reduce series count or give the chart more space.
- If categories are missing, check filters and any row limit before changing the axis.
- If series disappear after a chart-type change, recheck the data slots.

Choose a stacked chart for totals and composition, or a horizontal bar chart when names are too long. See [component filters](/documentation/Analysis/Component-Level-Filtering/).
