---
title: Measure card
permalink: /documentation/Visualization/Measure/
createTime: 2026/09/01 22:03:26
---

# Measure card

Display one aggregated result prominently, with up to two comparisons. Use it for a total, rate or average whose scope is clear—for example, net sales for the selected year. Use a **KPI trend card** when readers also need the time trend.

## Build an actual-versus-target card

1. Add **Components → Charts → Measure card** and choose an **Analysis model** in **Data**.
2. Put Net Sales in **Measure**.
3. Optionally put Sales Target in **Comparison #1** and a comparable prior-period sales measure in **Comparison #2**.
4. Set **Filters** to the intended period and population. Choose **Time axis** when configuring a time-based comparison.
5. Check each measure independently before formatting the comparison.

The comparison slots identify the reference measures. Merely putting a measure in Comparison #1 does not make it “last month”: use the correct model measure or time-comparison configuration. Actual and reference must have compatible units and scope.

## Choose what the comparison displays

Open **Style → Comparison #1 settings** or **Comparison #2 settings** and select **Value type**:

| Type | Use |
| --- | --- |
| **Value** | Display the reference value itself. |
| **Change** | Display the difference between the main and reference values. |
| **Growth%** | Display relative change. Check how a zero or missing reference is presented. |

Give the comparison a clear caption such as Target or Prior year, and use appropriate **Display units**. Under **Main value**, choose a readable font and unit; rounding changes the display, not the underlying calculation.

## Set favorable direction

In **Comparison color**, set **Comparison direction** deliberately:

- **Higher is better** for metrics such as sales.
- **Lower is better** for metrics such as response time or defect rate.
- **Follow measure** to use the model's direction.
- **Neutral** when a change should not imply good or bad performance.

Arrows describe the numeric direction of change; color describes whether that change is favorable. A downward arrow can therefore be favorable for a lower-is-better metric.

Use **Layout** to position the comparisons, and **Empty data** to distinguish missing data from a genuine zero.

## Verify the card

Save and open **Preview**. Compare the main value and both references with a table using the same filters. Test a filter selection with no result and, for Growth%, a zero reference. If the result is unexpectedly large, inspect aggregation before changing display units. If the status color is wrong, check comparison direction before reversing colors manually.
