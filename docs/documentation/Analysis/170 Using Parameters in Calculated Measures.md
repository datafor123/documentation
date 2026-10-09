---
title: Using Parameters in Calculated Measures
permalink: /documentation/Analysis/Using-Parameters-in-Calculated-Measures/
createTime: 2026/09/04 00:23:35
---

# Using Parameters in Calculated Measures

Use `ParamRef()` in an MDX calculated measure to read a parameter's runtime value:

```mdx
ParamRef("ParameterName")
```

The parameter name must be a quoted string constant and must match the definition exactly, including case and spaces. `ParamRef()` returns the current runtime value; when no current value is available, it uses the parameter's **Default value**.

## Example

For a Numeric parameter named `GrowthRate` that stores a decimal rate (`0.1` means 10%):

```mdx
[Measures].[Net Sales] * (1 + ParamRef("GrowthRate"))
```

If you instead store percentage points (`10` means 10%), divide by `100`:

```mdx
[Measures].[Net Sales] * (1 + ParamRef("GrowthRate") / 100)
```

## `${name}` text substitution

A formula can also contain `${name}`. Datafor replaces it with the parameter value (the bound filter's value, otherwise the default) before the formula is parsed. Because it is plain text substitution, quote text values yourself:

```mdx
IIf([Store].CurrentMember.Name = "${Region}", [Measures].[Net Sales], NULL)
```

```mdx
[Measures].[Net Sales] * (1 + ${GrowthRate})
```

Use `ParamRef()` when the value is a number you compute with, and `${name}` when you need the value inside a string or an MDX expression.

## Create the report-level measure

For an interactive Report Parameter, keep the dependent measure on the report page:

1. Create the Report Parameter and set its **Type**, value source, and **Default value**.
2. Open the target component's Measures picker.
3. Select **New measure → New measure**.
4. Enter a unique **Caption**, the MDX **Formula**, and the result **Format**. **Insert parameter** inserts a `ParamRef()` reference for the selected parameter.
5. Add the measure to the component and bind a filter to the parameter (**Data → Data source → Parameter**).
6. Test the component in **Preview** and save the report.

A report-level calculated measure is stored on that page and can be used by page components that use the same analysis model. Use a model-level calculated measure for governed logic that does not depend on a report-local definition.

![A report measure that reads GrowthRate](../Visualization/images/current/scenario-measure.jpg)

## Common issues

| Symptom | Cause or action |
| --- | --- |
| `Unknown parameter '<name>'` | The definition is missing or the name, case, or spaces do not match. |
| A numeric expression fails | Use a **Numeric** parameter and verify whether it stores percentage points or a decimal rate. |
| The result does not update | Confirm the controller binding, `ParamRef()` name, and the measure selected by the result component. |
| The formula saves but the component query fails | Correct the MDX or referenced measure names. Some errors are exposed only when the query runs. |
| A removed parameter is still referenced | Update every `ParamRef()` formula before deleting the parameter; references are not guaranteed to be repaired automatically. |

See [Creating Parameters](/documentation/Analysis/Creating-Parameters/), [What-if Analysis](/documentation/Analysis/What-if-Analysis/), and [Calculated Measures](/documentation/Analysis/Calculated-Measures/) for the related workflows.
