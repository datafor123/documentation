---
title: Sunburst
permalink: /documentation/Visualization/Sunburst/
createTime: 2026/10/06 20:51:07
---

# Sunburst

Show a hierarchy as concentric rings. Inner segments represent broader groups; outer segments show their descendants. Segment size represents the measure, while the path from the center outward identifies the hierarchy.

## Build a hierarchy view

1. Add **Components → Charts → Sunburst** and choose an **Analysis model** in **Data**.
2. Add the hierarchy dimensions to **Axis** in parent-to-child order. For example, use Product Category, Product Subcategory, then Product.
3. Put Net Sales in **Measure** and set a period in **Filters**.
4. Start with two levels. Add another only if the outer ring still has enough room for useful labels.

Choose fields that form a meaningful hierarchy in your model. Two unrelated dimensions can create combinations, but they do not automatically become a business hierarchy. Use non-negative, additive values for a part-to-whole interpretation.

## Format rings and labels

Use **Style → Position** to place the chart, and **Plot area** to adjust its diameter and center opening. Leave space around the perimeter for labels.

**Color by parent** shades child segments using their parent color, making branches easier to follow. **Data labels** controls label visibility and font. **Trailing label** places the label at the end of a branch outside the chart; allow enough padding for it.

Keep **Tooltip** available when a segment is too narrow to label. Do not reduce the entire chart to unreadably small text just to display every leaf name.

## Read and check a branch

Follow one inner segment outward to see how its contribution is divided. Compare siblings at the same hierarchy level. A child's share of its parent and its share of the entire chart answer different questions; check the tooltip's proportion context before quoting a percentage.

Save and open **Preview**. Inspect one branch and compare its values with a table using the same hierarchy and filters. If a branch looks unexpectedly large, check field order and whether its measure is additive. If leaves are missing or illegible, reduce depth, filter the data, or enlarge the component.

Use **Grouped donuts** for parallel group compositions and **Treemap** for a compact rectangular hierarchy view.
