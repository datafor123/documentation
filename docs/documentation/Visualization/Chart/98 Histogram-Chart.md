---
title: Histogram
permalink: /documentation/Visualization/Histogram-Chart/
createTime: 2026/09/03 09:56:42
---

# Histogram

Show how numeric observations are distributed across intervals. Use it to inspect common values, spread, skew and unusual tails—for example, the distribution of transaction amounts. Use a bar chart for totals by named category.

![Observation grain for Scatter, Box plot and Histogram](../images/current/observation-grain-concept.svg)

## Bind row-level values

1. Add **Components → Charts → Histogram** and choose an **Analysis model** in **Data**.
2. Put an eligible physical numeric field, such as transaction amount, in **Value**.
3. Set **Filters** to the population and period you want to inspect.
4. Start with **Style → Distribution → Bins → Auto** and inspect the result before choosing a fixed interval.

Each detail row is a sample. Its raw numeric value is binned before aggregation; nulls are excluded. This is not a histogram of already grouped regional totals. A calculated aggregate measure is not a substitute for row-level observations.

## Choose bins and frequency

| Distribution setting | Effect |
| --- | --- |
| **Frequency → Count** | Number of valid observations in each interval. |
| **Frequency → Percentage** | Share of valid observations after filtering. |
| **Bins → Auto** | Automatically chooses intervals for exploration. |
| **Bins → Number of bins** | Set **Number** from 2 to 100. More bins reveal detail but can make the result noisy. |
| **Bins → Bin width** | Set a positive **Width** in the Value field's units. Useful for consistent business intervals. |

For amounts measured in dollars, a width of 100 means intervals of 100 dollars, not 100 observations. Hover bars to read their actual interval boundaries rather than assuming where the first bin begins.

Changing bins can reveal or hide apparent peaks. Compare populations using the same bin settings and filters; use percentages when the population sizes differ and the question concerns shape rather than count.

## Format and check

Use **Bars → Spacing** to control gaps. **X axis** describes value intervals; **Y axis** describes frequency. Keep those roles clear in the title and labels. Use **Data labels** only when they fit and **Tooltip** for exact ranges and frequencies.

Save and open **Preview**. Check a low, central and high interval. Counts should describe the eligible, filtered observations; percentage totals may differ slightly from 100% because of rounding.

If the chart cannot bin the selected field, choose a supported physical numeric field. If one extreme value compresses the rest, inspect it before filtering it out. If all observations fall into one interval, check the width, numeric type and actual data range.
