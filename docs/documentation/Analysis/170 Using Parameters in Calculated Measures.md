---
title: Using Parameters in Calculated Measures
permalink: /documentation/Analysis/Using-Parameters-in-Calculated-Measures/
---

# Using Parameters in Calculated Measures

Use `ParamRef()` in an MDX calculated measure to read a parameter's runtime value:

```mdx
ParamRef("ParameterName")
```

The parameter name must be a quoted string constant and must match the definition exactly, including case and spaces. `ParamRef()` returns the current runtime value; when no current value is available, it uses the parameter's **Default value**.

## Example

For a Numeric parameter named `Price Adjustment Rate` that stores percentage points:

```mdx
[Measures].[Net Sales] * (1 + ParamRef("Price Adjustment Rate") / 100)
```

If the parameter stores a decimal rate such as `0.10`, use:

```mdx
[Measures].[Net Sales] * (1 + ParamRef("Price Adjustment Rate"))
```

## Create the report-level measure

For an interactive Report Parameter, keep the dependent measure on the report page:

1. Create the Report Parameter and set its **Type**, value source, and **Default value**.
2. Open the target component's Measures picker.
3. Select **Create calculated measure > New measure**.
4. Enter a unique name, the MDX formula, and the correct result format.
5. Add the measure to the component and bind a compatible Parameter Controller.
6. Test the component in **Preview** and save the report.

A report-level calculated measure is stored on that page and can be used by page components that use the same analysis model. Use a model-level calculated measure for governed logic that does not depend on a report-local definition.

## Common issues

| Symptom | Cause or action |
| --- | --- |
| `Unknown parameter '<name>'` | The definition is missing or the name, case, or spaces do not match. |
| A numeric expression fails | Use a **Numeric** parameter and verify whether it stores percentage points or a decimal rate. |
| The result does not update | Confirm the controller binding, `ParamRef()` name, and the measure selected by the result component. |
| The formula saves but the component query fails | Correct the MDX or referenced measure names. Some errors are exposed only when the query runs. |
| A removed parameter is still referenced | Update every `ParamRef()` formula before deleting the parameter; references are not guaranteed to be repaired automatically. |

See [Creating Parameters](/documentation/Analysis/Creating-Parameters/), [What-if Analysis](/documentation/Analysis/What-if-Analysis/), and [Calculated Measures](/documentation/Analysis/Calculated-Measures/) for the related workflows.
