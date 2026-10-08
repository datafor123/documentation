---
title: List box
permalink: /documentation/Visualization/List-Box/
createTime: 2026/09/01 22:03:26
---

# List box

Let readers choose from a visible list of dimension or parameter values.

1. Add **Components → Filters → List box**.
2. For model data, choose **Analysis model** and **Field**. For a parameter, select it from the field picker’s parameter section.
3. Set **Default value**. Choose **Multiple selection** if readers may select several values; use **Show 'All'** when an unrestricted selection is appropriate.
4. Under **Actions → Interactions → Linked components**, select the components this filter should update.
5. Use **Style → List box** and **Search** to format the control.
6. Preview, select a value, and check every linked component.

Use **Dropdown** for the same selection task when space is limited. A parameter used by a list must supply a list of values; an unrestricted Numeric parameter belongs in a Numeric slider.

See [filter components](/documentation/Visualization/Filters/) and [parameter controllers](/documentation/Analysis/Parameter-Controllers/).
