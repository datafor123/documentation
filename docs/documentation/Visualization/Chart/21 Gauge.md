---
title: Gauge
permalink: /documentation/Visualization/Gauge/
createTime: 2026/10/06 20:51:07
---

# Gauge

Show a value against a defined scale and optional target. A gauge is useful when the scale has a meaningful business range, such as capacity utilization. For several category comparisons, a **Bullet** chart usually uses space more efficiently.

## Build a performance gauge

1. Add **Components → Charts → Gauge** and select an **Analysis model** in **Data**.
2. Bind **Measure** to the actual metric.
3. Set **Minimum value** and **Maximum Value** to define the intended scale, and **Target** if there is a benchmark.
4. Add **Series** only when you need one gauge per category, for example Region.
5. Apply **Filters** so the actual, bounds and target describe the same population and period.

Maximum must be greater than minimum. A target and a scale maximum are different concepts: a target can be 80 while the capacity scale extends to 100. For percentage measures, use the same underlying units throughout—0.8 and 1 for a rate stored as a decimal.

## Format the scale and target

Use **Style → Theme** for the gauge presentation and **Position** to fit it in the component. Keep enough space for category names when Series creates several gauges.

| Style section | What to check |
| --- | --- |
| **Series** | Category labels identify each gauge. |
| **Measure value** | Actual value uses the correct unit and precision. |
| **Target value** | Target label, difference and achievement communicate the intended benchmark. |
| **Scale axis** | Tick labels, units and range remain readable. |

Use **Display units → Follow measure format** where the model format should be preserved. Auto units are useful for large amounts; they are not a replacement for a correct percentage format.

## Read and validate

Read the actual value together with its bounds and target. Two gauges using different scales cannot be compared by pointer angle alone. For fair category comparisons, give them a common range when the business meaning allows it.

Save and open **Preview**. Inspect an ordinary result, a value near a boundary and a filtered result. An out-of-range value is a signal to check the data and chosen scale, not automatically a reason to extend the maximum. If a gauge is empty or reports invalid bounds, verify numeric inputs and that maximum exceeds minimum.
