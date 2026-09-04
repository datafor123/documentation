---
title: Using Parameters in Component Titles
permalink: /documentation/Analysis/Using-Parameters-in-Component-Titles/
createTime: 2026/09/04 00:23:33
---

# Using Parameters in Component Titles

Insert a parameter's current value in a component title with this placeholder:

```text
${ParameterName}
```

For example:

```text
Scenario Net Sales (${Price Adjustment Rate}%)
```

When `Price Adjustment Rate` is `10`, the title becomes `Scenario Net Sales (10%)`.

## Configure the title

1. Create the parameter and set a valid **Default value**.
2. Open the component's title text setting.
3. Enter static text and one or more `${...}` placeholders.
4. Add a Parameter Controller if viewers should change the value.
5. Run the component in **Preview**, then save the report.

## Rules

- The name inside `${...}` must match the parameter name exactly, including case and spaces.
- Do not add padding spaces inside the braces. Use `${Price Adjustment Rate}`, not `${ Price Adjustment Rate }`.
- A title can contain multiple parameter placeholders.
- If there is no current runtime value, the saved **Default value** is used. If no matching definition or default is available, the placeholder resolves to an empty value.
- Title placeholders are not MDX. Use `${ParameterName}` in titles and `ParamRef("ParameterName")` in calculated measures.
- The resolved title is returned with a successful component query. Do not rely on a fixed fallback title when that query fails.

See [Creating Parameters](/documentation/Analysis/Creating-Parameters/) for parameter scope and controller compatibility.
