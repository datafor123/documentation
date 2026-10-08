---
title: Sankey
permalink: /documentation/Visualization/Sankey-Chart/
createTime: 2026/09/01 22:03:26
---

# Sankey

Show how a quantity flows between categories. Link width represents the measure moving from a source to a target. Use it for transitions, allocations or transfers; use a hierarchy chart when the relationship is simply parent and child.

## Prepare source, target and weight

1. Add **Components → Charts → Sankey** and choose an **Analysis model** in **Data**.
2. Put the origin dimension in **Source**, the destination dimension in **Target**, and the flow quantity in **Measure**.
3. Set **Filters** to the required population and period.
4. Inspect a source-target table with the same measure before relying on the diagram.

For example, a channel-transition dataset could contain Previous Channel, Current Channel and Customer Count. These are illustrative field roles; use the equivalent fields in your own model. Each source-target pair needs a meaningful, non-negative weight.

Do not use percentages with different denominators as if they were additive flows. Decide whether one customer can contribute to several links; repeated transitions and unique-customer counts answer different questions.

## Make paths readable

Use **Style → Data labels** for node names and **Tooltip** for exact values. Give the chart enough width for the stages and enough height for the node count. Filter low-value paths or focus on one part of the process when labels and links overlap excessively.

Keep names distinguishable when the same label can occur at different stages. A Source named Other and a Target named Other may be hard to interpret without stage context.

## Validate the flow

Save and open **Preview**. Hover links and check their endpoints and weights against the source-target table. Follow a few paths from left to right and verify that their direction matches the business definition.

Incoming and outgoing amounts need not balance if the dataset covers only part of the process or uses different populations. Investigate the scope before describing missing flow as loss. If the diagram cannot form a useful flow, check self-links, cycles, missing endpoints and negative values, then simplify the model or use a table.

Use **Funnel** for a sequential stage-total comparison, **Sunburst** for a hierarchy, and **Decomposition tree** for interactive dimensional breakdowns.
