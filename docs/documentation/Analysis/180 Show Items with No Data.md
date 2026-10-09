---
title: "Show Items with No Data"
permalink: /documentation/Analysis/Show-Items-with-No-Data/
createTime: 2026/09/01 22:03:26
---

# Show Items with No Data

Keep dimension members visible when they have no measure result in the current query context.

1. Select the chart or table and open **Data**.
2. Open the dimension field’s **More** menu.
3. Select **Show items with no data**.
4. Preview a period or group with known missing results and compare the displayed members.

This is useful for checking inactive products or dates without transactions. It does not create missing dimension members, repair source data, or mean that an empty measure should be interpreted as zero.

Filters still define the intended analysis population. Check the model’s dimension coverage and relationships if an expected member is absent.

| Setting | Applies to |
| --- | --- |
| **Show items with no data** (dimension) | Members without results stay in the chart or table. |
| **Empty values as** (measure, Table, Pivot table and Measure card) | Empty cells show a placeholder such as `-`. |
| **Empty data message** (Style → Empty data) | The whole result is empty. See [Empty Data and Error Messages](/documentation/Visualization/Empty-Data-and-Errors/). |
| **Show blank main value as** (Measure card) | The card has no value. |
