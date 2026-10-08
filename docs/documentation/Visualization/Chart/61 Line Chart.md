---
title: Line
permalink: /documentation/Visualization/Line-Chart/
createTime: 2026/09/01 22:03:26
---

# Line

Use a line to show change across ordered values, usually time. A line connects adjacent categories; it does not prove what happened between observations. Use a bar chart for an unordered ranking.

## Build a sales trend

1. Add **Components → Charts → Line** and choose an **Analysis model** in **Data**.
2. Put a month or date field in **X-axis**, and Net Sales in **Measures**.
3. To compare regions, add Region to **Legend**. Alternatively, add several compatible measures to **Measures**. With multiple measures, the Legend/Color binding options can change.
4. Set **Filters** to the required period. Use a year-month field or a year filter so January from different years is not combined unintentionally.
5. Check the field order: a text month name can sort alphabetically instead of chronologically. Use the field's **More function** menu to review sorting.

**Tooltips** adds supporting values without another line. **Time axis** is a separate optional binding; do not use it as a substitute for the visible X-axis categories.

## Choose how points are connected

In **Style → Line**, choose **Line type**:

| Type | Use |
| --- | --- |
| **Straight** | Default choice for recorded observations. |
| **Smooth** | Emphasize the overall shape; a curve may imply values between recorded points. |
| **Step** | Show a level that changes between observations. The step changes halfway between points. |

Adjust **Line width** and **Symbol size** so readers can see both the trend and individual observations. Keep series count low enough to follow each line.

Use **X axis** for readable period labels and **Y axis** for bounds and units. A restricted Y-axis range makes small changes look larger: use consistent bounds across charts you expect readers to compare. Use [Combo](/documentation/Visualization/Combo%20Chart/) for measures with different units.

## Check missing points and dense data

Save and open **Preview**, then hover the first, middle and last periods. Confirm the actual values and the date granularity.

- A gap or missing period may mean no matching data, not zero. Check the source and filters before interpreting it as a fall.
- A flat line can be a scale problem or repeated aggregation. Inspect a table at the same date grain.
- Too many labels: reduce label frequency or use **Zoom slider** to inspect a portion of the series.
- A surprising spike: check the measure definition and whether the period is complete.

Use an [Area chart](/documentation/Visualization/Area/) to emphasize magnitude, and a stacked area chart for additive contributions to a total.
