---
title: Parameter Controllers
permalink: /documentation/Analysis/Parameter-Controllers/
createTime: 2026/09/04 13:35:56
---

# Parameter Controllers

A parameter controller lets a reader change a report input. Its effect comes from the formulas, text, navigation, or filters that use that input.

## Choose a compatible control

| Parameter | Control |
| --- | --- |
| Numeric with Any value | **Numeric slider** |
| Text or Numeric with a list of suggested values | **Dropdown** or **List box** |
| Date | **Date**, using its parameter configuration |

These controls are in **Components → Filters**. The field picker lists **Report parameters**, **Global parameters**, and supported system variables.

List-based controls require candidate values. The picker marks an Any value parameter as unsuitable for a dropdown, list, or button when it has no value list.

## Example: a growth slider

1. Create a report parameter named **GrowthRate**, with **Type → Numeric**, **Suggested values → Any value**, and **Default value → 0.1**.
2. Add **Numeric slider**.
3. In **Data**, set **Data source → Parameter** and select **GrowthRate**.
4. Set **Minimum Value**, **Maximum Value**, and **Step** in the same panel. For this decimal rate, use `-0.2`, `0.2`, and `0.01`.
5. Preview the report and move the slider, or type a value and press **Enter**. Check the formula or text that uses the value.

![Numeric slider bound to GrowthRate with an explicit range](../Visualization/images/current/scenario-slider-settings.jpg)

For a complete formula and verified comparison, follow [What-if Analysis](/documentation/Analysis/What-if-Analysis/). **Data source → Model field** instead binds Numeric slider to a numeric field for [range filtering](/documentation/Visualization/Number-Range-Filter/).

A current controller value and a saved parameter default serve different purposes. Save the report definition and reopen it to verify the intended starting value.
