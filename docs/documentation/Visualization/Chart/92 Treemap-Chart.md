---
title: Treemap
permalink: /documentation/Visualization/Treemap/
createTime: 2026/09/01 22:03:26
---

# Treemap

Show the contribution of categories as rectangles. Rectangle area represents the measure; nesting provides context. Treemaps fit more categories than a pie, but close values are easier to compare in a bar chart.

## Build a category breakdown

1. Add **Components → Charts → Treemap**, then choose an **Analysis model** in **Data**.
2. Put a broad category, such as Product Category, in **Series**.
3. Put the next level, such as Product, in **Detail**. Start with fewer members before adding a dense level.
4. Put Net Sales in **Measure**. Add optional **Color** and **Tooltips** fields only when they help explain the rectangles.
5. Set a period in **Filters** and inspect the hierarchy and values.

Use non-negative, additive values. Rectangle size is not a suitable representation of a mixture of percentages, currencies and counts. If a parent and its children appear inconsistent, inspect their field relationships and measure aggregation in a table.

## Make the hierarchy readable

Open **Style** and use **Series**, **Data labels**, and **Plot** to control the grouping and rectangle presentation.

- **Color by parent** gives child blocks shades of their parent color. Turn it off when you want palette colors for individual blocks.
- Use spacing to separate rectangles without consuming most of the available area.
- The minimum block setting is an area threshold in pixels. A small block can disappear because there is too little display space; that does not establish that its data value is zero.
- Choose labels that fit: **Name** for recognition or **Name and value** when there is enough room. Keep exact values available in the tooltip.

Resize the component before hiding too many labels. A large parent containing many tiny children may need a filter or a separate detail view.

## Check the result

Save and open **Preview**. Compare a large and a small rectangle with their tooltip values. Apply the intended report filters and inspect whether labels and child blocks remain useful.

If a category is missing, check filters, the selected hierarchy levels and the minimum block setting. If many rectangles have similar sizes, use a sorted bar chart for ranking. Use **Sunburst** when the sequence of hierarchy levels is more important than packing many values into the available space.
