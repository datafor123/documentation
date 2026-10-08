---
title: Range column
permalink: /documentation/Visualization/Range-Column-Chart/
createTime: 2026/09/01 22:03:26
---

# Range column

Show a lower and upper value for each category. A column spans the interval between them, rather than starting at zero. Use it for observed minimum/maximum values, planned ranges or other clearly defined bounds.

## Build a range comparison

1. Add **Components → Charts → Range column** and choose an **Analysis model** in **Data**.
2. Put the category, such as Product, in **Category field**.
3. Put the lower-bound measure in **Minimum value** and the upper-bound measure in **Maximum value**.
4. Set **Filters** to a common period and population. Add optional **Color** or **Tooltips** fields for context.

For example, use Minimum Selling Price and Maximum Selling Price by Product. Both measures must use the same units, and the lower value should not exceed the upper value. Prepare the intended minimum/maximum aggregations in the model instead of assuming that any two numeric fields define those statistics.

## Read the interval

The lower endpoint is the minimum, the upper endpoint is the maximum, and their difference is the range. A tall range column means a wide interval; it does not mean a large total. Two columns can have the same height but different absolute levels.

Use **Style → Bar** to adjust column presentation and **Data labels** to show endpoints when there is room. **X axis** identifies categories; **Y axis** sets the value scale and units. Use consistent bounds across comparisons and **Tooltip** for exact endpoint values.

## Validate the bounds

Save and open **Preview**. Check several intervals against a table using the same category grain and filters. Include a narrow range, a wide range and a category with a missing bound.

If a range is reversed or absent, inspect the source values and measure definitions. If the endpoints are identical, a collapsed interval may be a valid zero-width range. Do not label the range as uncertainty or a confidence interval unless those are actually the statistics supplied by the data.

Use **Box plot** for median, quartiles and outliers, or **Clustered column** to compare two separate measures without implying an interval.
