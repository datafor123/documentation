---
title: Using Parameters in Calculated Measures
permalink: /documentation/Analysis/Using-Parameters-in-Calculated-Measures/
description: Read a parameter in an MDX calculated measure with ParamRef() or ${name} text substitution.
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

## Create the measure

Create a report-level measure with **New measure → New measure** in the component's Measures picker; **Insert parameter** adds a `ParamRef()` for the parameter you pick. See [Calculated Measures](/documentation/Analysis/Calculated-Measures/) for the steps and [What-if Analysis](/documentation/Analysis/What-if-Analysis/) for a complete example with a slider. A name that does not match a parameter gives *Unknown parameter* when the component queries.

Related: [Creating Parameters](/documentation/Analysis/Creating-Parameters/) · [Bind Filters to Parameters](/documentation/Analysis/Parameter-Controllers/)
