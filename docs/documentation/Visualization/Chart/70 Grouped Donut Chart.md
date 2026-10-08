---
title: Grouped donuts
permalink: /documentation/Visualization/Grouped-Donut-Chart/
createTime: 2026/09/01 22:03:26
---

# Grouped donuts

Compare the composition of several groups using one donut per group. For example, show the product-category mix separately for each region. A slice's percentage belongs to its own donut, not to all groups combined.

## Build regional product mix

1. Add **Components → Charts → Grouped donuts** and choose an **Analysis model** in **Data**.
2. Set the following fields using **+**, then **Back**:

| Slot | Example | Meaning |
| --- | --- | --- |
| **Grouping (Donuts)** | Region | One donut for each region. |
| **Details (Slices)** | Product Category | Slices repeated within each donut. |
| **Measures** | Net Sales | Size of the slices. |
| **Color** | Product Category, if member color mapping is needed | Keep equivalent slices identifiable. |
| **Tooltips** | Optional quantity or order count | Supporting detail. |

3. Restrict **Filters** to one comparable period, such as Year = 2025.
4. Check that each donut represents the intended group. Swapping the two dimension slots changes the question the chart answers.

Use additive, non-negative measures. A rate is not usually a meaningful slice weight. Limit the number of groups and categories so each donut can be read.

## Format the small multiples

In **Style → Plot area**, adjust **Center radius** to control the hole and **Spacing** to separate the donuts. **Grouping labels** identifies each group in the center. Keep these labels visible so readers know which donut they are reading.

Use **Data labels** for the most useful information and **Legend** for repeated slice names. Check that a category has a consistent color across groups. Add space or reduce categories before shrinking labels.

The **Sunburst** option combines the pies into a nested view. Use separate donuts when comparing groups is the main task; use the dedicated Sunburst chart when a multi-level hierarchy is the main message.

## Read and validate

Two equal-looking slices can represent very different sales amounts because their group totals differ. Compare the tooltip values or pair the donuts with a total-sales chart when volume matters.

Save and open **Preview**. Hover the same category in two groups and check both its amount and its group share. If a donut is empty, inspect the group filter, missing values and zero totals. If a category is absent in one group, verify the data before treating it as a zero.

Use a **100% stacked bar** when there are many groups or precise side-by-side composition comparisons are more important than the circular layout.
