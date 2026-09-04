---
title: What-if Analysis
permalink: /documentation/Analysis/What-if-Analysis/
tags: null
description: null
createTime: 2026/09/04 00:23:30
---

# What-if Analysis

What-if analysis recalculates an existing measure under an explicit assumption. It is deterministic scenario analysis, not a forecast.

This example uses the **Retail Chain Operations** model and its **Net Sales** measure to test a uniform price adjustment. It assumes sales volume, product mix, returns, discounts, and all other drivers remain unchanged. If those drivers respond to price, use a model that represents that response instead of treating this result as a prediction.

## 1. Create the scenario input

Create a Report Parameter with these settings:

| Field | Value |
| --- | --- |
| **Name** | `Price Adjustment Rate` |
| **Type** | **Numeric** |
| **Suggested values** | **Any value** |
| **Default value** | `0` |

The value represents percentage points: `10` means a 10% increase and `-10` means a 10% decrease.

<div align="left"><img src="./images/analysis-report-parameters.png" alt="Report Parameters window containing the Price Adjustment Rate scenario input" width="100%" /></div>

For the complete parameter workflow, see [Creating Parameters](/documentation/Analysis/Creating-Parameters/).

## 2. Create the scenario measure

In the target component's Measures picker, select **Create calculated measure > New measure**. Create a report-level measure named `Scenario Net Sales` with this MDX formula:

```mdx
[Measures].[Net Sales] * (1 + ParamRef("Price Adjustment Rate") / 100)
```

Use the same currency format as **Net Sales**.

Start from a valid aggregated business measure. Do not substitute an expression such as aggregated unit price multiplied by aggregated quantity; that usually differs from summing transaction-level sales.

If your parameter stores decimal rates such as `0.10` instead of percentage points such as `10`, remove `/ 100` from the formula.

## 3. Add the control and result

1. Add **Numeric Slider** from **Components > Parameters**.
2. Bind it to `Price Adjustment Rate`.
3. Set a useful range, for example minimum `-20`, maximum `20`, and step `1`.
4. Add a Measure or other chart component and bind `Scenario Net Sales`.
5. Optionally set the component title to `Scenario Net Sales (${Price Adjustment Rate}%)`.
6. Open **Preview**, test the range, and save the report.

## 4. Validate the result

Use the base **Net Sales** value as the control case:

| Parameter value | Expected result |
| --- | --- |
| `-20` | `0.80 × Net Sales` |
| `0` | `1.00 × Net Sales` |
| `20` | `1.20 × Net Sales` |

Test at least these three points. If the result does not follow the expected multiplier, check the parameter unit, formula, and selected measure before sharing the report.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| `Unknown parameter` appears when the component queries. | Match the parameter name exactly, including case and spaces. |
| The parameter is absent from Numeric Slider. | It must be **Numeric** with **Any value**. |
| The result does not change. | Confirm the slider and `ParamRef()` reference the same parameter and the component uses `Scenario Net Sales`. |
| The formula can be saved but the component query fails. | Review the MDX and referenced measure names; some formula errors appear only when the component runs its query. |

See [Using Parameters in Calculated Measures](/documentation/Analysis/Using-Parameters-in-Calculated-Measures/) for `ParamRef()` rules.
