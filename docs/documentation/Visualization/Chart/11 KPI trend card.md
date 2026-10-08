---
title: KPI trend card
permalink: /documentation/Visualization/KPI-Trend-Card/
createTime: 2026/10/06 20:51:07
---

# KPI trend card

Combine a current value, a trend and a status comparison. Use it for a metric tracked over ordered periods, such as daily sales or monthly response time. Its highlighted value is the last valid actual value in the returned sequence, not the sum of the trend.

## Build a monthly KPI

1. Add **Components → Charts → KPI trend card** and select an **Analysis model** in **Data**.
2. Bind **Trend dimension** to a month/date field and **Actual value** to the metric.
3. Bind **Target value** to a target measure when targets vary by period. Otherwise enter a **Static target** for a fixed benchmark.
4. Set **Filters** and keep the trend in chronological order. Include the year in the period context.
5. Check that actual and target use the same unit and aggregation grain.

For a sales example, each point should represent one month's sales and that month's target. A full-year target is not an appropriate direct comparison with a single month's actual.

The retail example uses **Month**, **Net Sales**, **Static target = 300000**, and **Year = 2025**. December sales are **310,129.32**, so the target comparison is **+3.38%**.

![Monthly KPI data binding and a fixed target](../images/current/kpi-trend-data.jpg)

## Choose the status rule

Open **Style → KPI → Baseline**:

| Baseline | Comparison |
| --- | --- |
| **Auto** | Uses an available target; otherwise uses the previous valid actual value. |
| **Target value** | Evaluates the latest actual against the target. |
| **Previous value** | Evaluates change from the previous valid actual value. |

With the same example, **Previous value** compares December with November's **343,807.18** and displays **−9.80%**. The headline actual remains **310,129.32**; changing the baseline changes the comparison, not the actual.

![KPI baseline and direction settings](../images/current/kpi-trend-status.jpg)

Set **Direction** to **Higher is better**, **Lower is better**, or **Follow measure** as appropriate. Lower response time should not receive the same favorable direction as higher sales. Equal or unavailable comparisons should not be interpreted as a success merely because a trend is visible.

## Format the headline and context

- **Marker value** controls the value's font, alignment, unit, decimal places and status icon.
- **Target label** controls whether and how the comparison label is displayed. Name the reference accurately.
- **Date** shows the trend date context. Keep it visible so readers can assess freshness.
- **KPI → Area opacity** controls the background trend's prominence.
- **Tooltip** provides detail without crowding the card.

## Check before sharing

Save and open **Preview**. Compare the highlighted value with the final valid observation in a table at the same time grain. Check the target or previous value used as the baseline.

**Current limitation with missing final-period data:** when the last returned period has a target but no actual, the card can display an earlier actual and its target while labeling them with the final period's date. Verify the date and actual together in the component's **More → Data preview**. Filter to completed periods or use a table to show the missing value explicitly; do not treat the headline as the final period's result. A partially loaded current month is also not directly comparable with a completed month unless that is the intended question.

Use a **Measure card** for an aggregate over the entire selected period, and a **Line chart** when readers need a full axis and precise trend inspection.
