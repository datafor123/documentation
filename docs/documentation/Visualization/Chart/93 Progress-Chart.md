---
title: Ring progress
permalink: /documentation/Visualization/Progress-Chart/
createTime: 2026/09/01 22:03:26
---

# Ring progress

Show one measure's progress toward a target as a ring. Use it for a completion or achievement question with a meaningful denominator. Use **Gauge** when readers also need a scale with tick values.

## Set actual and target

1. Add **Components → Charts → Ring progress** and choose an **Analysis model** in **Data**.
2. Put the actual amount in **Progress Measure** and the target in **Target Measure**.
3. If you use a fixed target instead of a target measure, configure **Target Value** in the chart's style settings.
4. Set **Filters** so actual and target cover the same period and population.

For example, 75 completed items against a target of 100 represents 75% achievement. A decimal rate of 0.75 must be compared with a target of 1, not 100. Avoid a zero target: a meaningful progress percentage needs a valid denominator.

## Make the meaning visible

Under **Style → Plot Area**, adjust **Ring Thickness**, **Inner Padding**, **Corner Radius**, **Ring Background**, and **Progress Direction**. These settings affect presentation, not the measure or target.

Use **Data labels** to show the percentage and choose **Percentage Precision**. Enable **Show Name** and use a concise name such as Order completion. A **Sub-label** can display the Progress Measure or Target Measure so readers can see the actual amount behind the percentage.

In **Data colors**, use conditional colors only when the thresholds have a clear meaning. A percentage condition and a value condition are different: check the selected configuration type and test the boundary values.

## Verify more than the ring shape

Save and open **Preview**. Check a partial result and a result at or above target. Read the numeric label and underlying values; a full ring alone cannot communicate how far a result exceeds the target.

If the percentage is unexpected, compare the actual and target in a table with identical filters. Check units, zero/missing targets and whether the target measure repeats at a finer grain. If the card shows no data, use **Empty data** to communicate that state instead of making it look like 0% completion.
