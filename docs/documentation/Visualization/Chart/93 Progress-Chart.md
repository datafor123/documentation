---
title: Ring progress
permalink: /documentation/Visualization/Progress-Chart/
description: Show one measure's progress toward a target as a ring; target measure or fixed target, ring settings, labels and conditional colors.
createTime: 2026/09/01 22:03:26
---

# Ring progress

Show one measure's progress toward a target as a ring. Use it for a completion or achievement question with a meaningful denominator. Use [Gauge](/documentation/Visualization/Gauge/) when readers also need a scale with tick values.

## Set actual and target

1. Add **Components → Charts → Cards & KPI → Ring progress** (a new ring is 260 × 240 px, one ring and a name line) and choose an **Analysis model** in **Data**.
2. Put the actual amount in **Progress Measure** and the target in **Target Measure**.
3. If you use a fixed target instead of a target measure, enter it in **Style → Plot Area → Target Value**.
4. Set **Filters** so actual and target cover the same period and population.

For example, 75 completed items against a target of 100 represents 75% achievement. A decimal rate of 0.75 must be compared with a target of 1, not 100. Avoid a zero target: a meaningful progress percentage needs a valid denominator.

The automatic title names only the Progress Measure, not the target.

## Make the meaning visible

| Option (Style) | Effect | Default |
| --- | --- | --- |
| **Plot Area → Diameter** | Size of the ring, 10–100%. | 95% |
| **Plot Area → Ring Thickness** | Thickness of the ring, 1–30%. | 10% |
| **Plot Area → Inner Padding** | Inner padding of the ring, as a percentage of the ring width (−50 to 100%). | 0% |
| **Plot Area → Corner Radius** | Rounded ends of the progress ring. | Off |
| **Plot Area → Ring Background** | Color of the unfinished part of the ring. | #E0E0E0 |
| **Plot Area → Target Value** | Fixed target, used when no Target Measure is bound. | Empty |
| **Plot Area → Progress Direction** | **Clockwise** or **Counterclockwise**. | Clockwise |
| **Data colors → Conditional Color** | Ring color by condition; see below. | |
| **Data labels → Label contents** | **Hidden**, **Value** or **Percentage** in the center. | Percentage |
| **Data labels → Percentage Precision** | Decimals of the percentage. | 2 |
| **Data labels → Show Name**, **Name**, **Name Font** | A name line under the value. If **Name** is empty, the Progress Measure's name is shown. | Show Name on for new rings; off in reports from earlier versions |
| **Data labels → Sub-label**, **Sub-label Font** | Adds the Progress Measure and/or the Target Measure value, so readers can see the amounts behind the percentage. | None |

Use a concise name such as Order completion. The ring has no **Show Tooltip** switch.

**Conditional Color** opens a dialog where you choose the **Configuration Type**, **Value** or **Percentage**, and add ranges with a **Start Value**, an **End Value** (blank means −∞ or +∞) and a **Color**. A percentage condition and a value condition are different: check the selected type and test the boundary values. Use conditional colors only when the thresholds have a clear meaning.

## Verify more than the ring shape

Save and open **Preview**. Check a partial result and a result at or above target. Read the numeric label and underlying values: above 100% the ring is simply full, so it cannot show how far a result exceeds the target.

If the percentage is unexpected, compare the actual and target in a table with identical filters. Check units, zero or missing targets and whether the target measure repeats at a finer grain.

When the actual value is empty, the ring shows the empty-data message instead of 0.00%, also with a fixed target. **Style → Empty data** only changes the text; see [Empty data and error messages](/documentation/Visualization/Empty-Data-and-Errors/).

Clicking the ring does not filter, drill or highlight anything, but a script under **Actions → Events → Plot area click** runs.

## Reports from earlier versions

- **Ring Background** is now applied. Earlier versions drew the unfinished part in the palette's second color (often red), so such rings look different.
- **Show Name** stays off unless you turn it on.
- A ring without an actual value shows the empty-data message instead of 0.00%.
- The automatic title no longer includes the target measure.
