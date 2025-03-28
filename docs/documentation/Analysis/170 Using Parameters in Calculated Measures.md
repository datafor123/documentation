---
title: Using Parameters in Calculated Measures
permalink: /documentation/Analysis/Using-Parameters-in-Calculated-Measures/
---

# Using Parameters in Calculated Measures

In calculated measures, you can reference parameter values using the ParamRef function: `ParamRef("ParameterName")`.

**For example:**

Calculated Measure: Forecast Sales

**Formula**:

```DAX
[Measures].[Last Year Sales] * ParamRef("Sales Growth Rate")
```