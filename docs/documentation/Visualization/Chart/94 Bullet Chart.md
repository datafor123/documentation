---
title: Bullet
permalink: /documentation/Visualization/Bullet-Chart/
createTime: 2026/09/01 22:03:26
---

# Bullet

Compare actual performance with a target and qualitative ranges in a compact display. The value bar shows actual performance; a marker identifies the target; background ranges provide context.

## Build actual versus target by region

1. Add **Components → Charts → Bullet** and choose an **Analysis model** in **Data**.
2. Put Region in **Category**, Net Sales in **Value**, and Sales Target in **Target value**.
3. If your model supplies range boundaries, bind **Minimum**, **Normal**, **Satisfactory**, **Good**, **Excellent**, and **Maximum** as needed.
4. Set **Filters** to the same period for actual, target and thresholds.

Thresholds are boundary values, not extra performance bars. Keep them ordered and in the same units as actual and target. A model target repeated for every transaction can aggregate incorrectly; check the returned target per category.

## Use fixed targets and relative thresholds

If no usable target measure is supplied, **Style → Data values → Target value** provides a fixed target.

Under **Percentage settings (Based on target value)**, enter percentages as whole numbers: **80** means 80% of the target. A corresponding threshold measure with a value takes precedence over its percentage setting. Percentage thresholds have no effect without a target.

For a target of 100, illustrative boundaries of 0, 60, 80, 100, 110 and 120 define an increasing set of ranges. Choose boundaries appropriate to your business; the labels Normal, Good and Excellent do not determine the numeric thresholds for you.

## Format the comparison

- **Direction** switches between horizontal and vertical layouts.
- **Colors** distinguishes the actual bar, target marker and ranges. Keep the actual and target easy to see against the background.
- **Scale** controls ticks. Reduce **Scale count** if numbers overlap.
- **Category labels** controls name visibility and label width.
- **Tooltip labels** lets you name the thresholds in business terms.

## Check boundary behavior

Save and open **Preview**. Compare one category's actual, target and thresholds with a table. Inspect values below target, at target and beyond the last range. Check that a higher value really is better for the chosen metric; range labels should not imply success for rising defect counts.

If ranges look wrong, inspect the data-bound threshold first, then the fallback percentage. If the target marker is missing, check for a missing/zero target and the displayed scale.
