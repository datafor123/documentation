---
title: Decomposition tree
permalink: /documentation/Visualization/Decomposition-Tree/
createTime: 2026/09/03 10:57:16
---

# Decomposition tree

Explore one measure by splitting it across dimensions. Use it to investigate where a result is concentrated, such as which regions, stores or product categories contribute to sales. A split shows a breakdown, not a causal explanation.

## Configure the analysis

1. Add **Components → Charts → Decomposition tree** and choose an **Analysis model** in **Data**.
2. Put Net Sales in **Analyze**.
3. Add Region, Store and Product Category to **Explain by**. These are the dimensions users can choose when expanding nodes.
4. Set **Filters** to the population and period to investigate. Add **Color**, **Tooltips**, or **Icon** only when useful for node context.
5. Check the root value against a table with the same measure and filters.

Start with a small, useful set of dimensions. Very high-cardinality fields can create more branches than users can inspect.

## Follow a path

1. Click the root node's **+** and choose Region.
2. Choose a region, then add a Store split beneath that branch.
3. Add another available dimension to investigate the selected subset.
4. Remove a later level to choose a different path. Use **Drill Reset** to return to the saved default path.

Every level inherits the selections above it. A Store value under East China is not a store total for all regions. Recheck the path after changing a report filter.

## Use Smart split deliberately

Under **Style → Analysis settings**, **Smart split** offers **High value** and **Low value** recommendations from unused dimensions.

| Mode | How it compares candidates |
| --- | --- |
| **Absolute** | Compares member values directly. Useful for finding the largest or smallest result. |
| **Relative** | Compares a member value with the absolute average of its candidate dimension. Useful for finding a value that stands out within that dimension. |

A relative recommendation need not have the largest absolute sales. A high/low recommendation also does not mean good/bad performance. Use a manual split when the business question specifies a dimension or a candidate is unavailable under the current filters.

## Set a meaningful bar scale

In **Style → Data bars → Scale to**:

- **Level maximum** compares peers within a level.
- **Parent value** compares children with their parent.
- **Visible tree maximum** uses a common reference across the visible tree.

These choices change bar lengths, not the measure values. For ratios, averages and distinct counts, child values may not add to their parent; do not read every bar as an additive contribution.

Use **Tree layout**, **Nodes**, **Connectors**, **Category labels**, **Values**, and **Level headers** to keep the path readable. Leave enough width for category names.

## Verify interaction

Save and open **Preview**. Expand a manual path, try a Smart split, change a filter and reset the drill. Confirm the root and selected branch values against the same filtered table. If a dimension is missing from the split menu, check **Explain by**, dimensions already used in the path, and the current data result.
