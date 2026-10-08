---
title: Bullet
permalink: /documentation/Visualization/Bullet-Chart/
createTime: 2026/09/01 22:03:26
---

# Bullet

Compare an actual value with a target and performance ranges.

## Set up the data

1. Choose **Components → Charts → Bullet** and place it on the canvas.
2. Select the chart and choose an **Analysis model** in **Data**.
3. Use **+** beside each field slot to select the following fields, then click **Back**.

| Data slot | Choose |
| --- | --- |
| **Category** | Item being measured. |
| **Value** | Actual result. |
| **Target value** | Comparison target. |
| **Minimum / Normal / Satisfactory / Good / Excellent / Maximum** | Measures defining range boundaries. |

Use **Filters** to restrict this component’s data. Check the result before styling it.

## Make it readable

Use **Direction**, **Colors**, **Data values**, **Percentage settings**, **Scale**, and **Category labels**.

Define ordered range boundaries in the same unit as the actual value. Do not assume a higher value always means better performance.

If the **Target value** measure is missing or empty, use the fixed target under **Style → Data values**. **Percentage settings** defines thresholds relative to that target: enter **80** for 80% of the target. A populated threshold measure takes precedence over its percentage setting. Percentages need a target value to have meaning.

For example, a target of 100 with Normal 60%, Satisfactory 80%, and Good 100% creates thresholds at 60, 80, and 100. Use **Tooltip labels** to give these ranges the business names readers recognize.

Save the report and use **Preview** to check labels, hover details, and the filtered result.

See [component filters](/documentation/Analysis/Component-Level-Filtering/) and [linked components](/documentation/Visualization/Filter-Subscriptions/).
