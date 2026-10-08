---
title: Box plot
permalink: /documentation/Visualization/Box-Plot/
createTime: 2026/10/06 20:51:07
---

# Box plot

Compare the spread of a measure across observations, optionally separated into groups. For example, compare the distribution of store sales in each region, rather than comparing only each region's total.

![Observation grain for Scatter, Box plot and Histogram](../images/current/observation-grain-concept.svg)

## Choose the observation first

1. Add **Components → Charts → Box plot** and select an **Analysis model** in **Data**.
2. Bind **Sample** to Store, **Group** to Region, and **Measure** to Net Sales.
3. Set **Filters**, such as Year = 2025. Each store contributes its sales for that filtered period as one observation.
4. Add supporting fields to **Tooltips** if needed. Omit **Group** for a single distribution.

**Sample** is required. It defines the observation grain: choosing Store gives a distribution of store-level values, while choosing an order identifier gives a different distribution. Do not assume this chart always uses individual source rows.

The example below uses **Retail Chain Operations**, **Store** as Sample, **Region** as Group, **Net Sales** as Measure, and **Year = 2025**. Each point represents one store's total for the year. East China has enough observations to show a box; the smaller regional groups appear as individual points. Those points are not necessarily outliers.

![Store sales grouped by region with current Data bindings](../images/current/box-plot-data.jpg)

## Read the box

The box spans the lower to upper quartile, covering the middle half of the observations. Its internal line marks the median. Whiskers and outlier points depend on the selected rule.

Open **Style → Box → Whiskers**:

| Rule | Interpretation |
| --- | --- |
| **1.5 × IQR** | Uses the interquartile range to identify observations beyond the whiskers. |
| **Min to max** | Extends to the observed extremes. |
| **5th to 95th percentile** | Shows a central 90% range. |
| **10th to 90th percentile** | Shows a central 80% range. |

![Current Box settings and whisker rules](../images/current/box-plot-whiskers.jpg)

Keep the same rule across groups you compare. A point marked as an outlier is not automatically a data error.

## Format and validate

Use **Orientation** for vertical or horizontal boxes, **Box width** to fit the group slots, and **Show mean** to add a diamond for the average. Under **Outliers**, control point visibility, size and color. Hiding outlier points does not change the underlying observations.

Save and open **Preview**. Inspect the tooltip's sample count, quartiles, median and extremes. Small groups may appear as points instead of a full box; check sample size before comparing their spread.

In the saved example, hovering over East China shows **5 samples**, a median of **171.92K**, lower/upper quartiles of **154.92K / 205.71K**, and **0 outliers**. These are the chart's rounded display values.

![Saved Box plot Preview with East China sample statistics](../images/current/box-plot-preview.jpg)

If every box collapses to a line, check whether observations really have identical values or whether the Sample field aggregates too coarsely. Use **Histogram** to inspect the shape of one numeric distribution, and **Scatter** to compare two measures observation by observation.
