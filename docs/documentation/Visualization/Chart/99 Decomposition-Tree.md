---
title: Decomposition tree
permalink: /documentation/Visualization/Decomposition-Tree/
createTime: 2026/09/03 10:57:16
---

# Decomposition tree

Break one metric down by explanatory dimensions.

## Set up the data

1. Choose **Components → Charts → Decomposition tree** and place it on the canvas.
2. Select the chart and choose an **Analysis model** in **Data**.
3. Use **+** beside each field slot to select the following fields, then click **Back**.

| Data slot | Choose |
| --- | --- |
| **Analyze** | Measure to investigate. |
| **Explain by** | Dimensions available for splitting the result. |
| **Color / Tooltips / Icon** | Optional context and node presentation. |

Use **Filters** to restrict this component’s data. Check the result before styling it.

## Explore a path

1. Start with the root total, click its **+** control, and choose an **Explain by** field.
2. Select a member and add another split to investigate its contribution.
3. Remove a later level to choose a different path. Use **Drill Reset** to return to the saved default path.

Under **Style → Analysis settings**, **Smart split** offers **High value** and **Low value** recommendations from unused dimensions. **Absolute** compares member values directly; **Relative** compares a value with the absolute average for its candidate dimension. Use a manual split if a candidate is unavailable under the current filters.

Choose **Data bars → Scale to** deliberately: **Level maximum** compares peers, **Parent value** compares children with their parent, and **Visible tree maximum** uses a common reference for the visible tree.

## Format the tree

Use **Analysis settings**, **Tree layout**, **Nodes**, **Connectors**, **Data bars**, **Category labels**, **Values**, and **Level headers**.

Example: analyze Net Sales by Region, Store, and Product Category. A breakdown shows association; it does not establish a cause.

Save the report and use **Preview** to check labels, hover details, and the filtered result.

See [component filters](/documentation/Analysis/Component-Level-Filtering/) and [linked components](/documentation/Visualization/Filter-Subscriptions/).
