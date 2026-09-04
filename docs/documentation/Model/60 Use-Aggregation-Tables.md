---
title: Aggregation Tables (Legacy)
permalink: /documentation/Model/Use-Aggregation-Tables/
createTime: 2026/09/03 22:49:32
---

# Aggregation Tables (Legacy)

The current Analysis Model designer does not provide the aggregation-table mapping workflow available in earlier releases. The former **Manage aggregations** action and its mapping editor are not present, so you cannot configure automatic routing from a detail fact table to an aggregate table in the current designer.

This page keeps the existing URL so links from older release notes remain valid. Do not use screenshots or procedures from earlier versions to edit a current model.

## Current alternative

If a report must query pre-aggregated data:

1. Create and maintain the aggregate table or view in the database.
2. Add it to the Analysis Model as a normal physical table.
3. Define its relationships, Dimensions, and Measures for its actual grain.
4. Use that table explicitly in the model or report design.

This approach treats the aggregate as a separate modeled fact source. It does not configure automatic substitution between a detail table and an aggregate table.

## Models created in an earlier release

The current designer has no controls for inspecting or editing legacy aggregation mappings. Before changing such a model, make a copy, test representative reports, and compare their generated SQL. Whether existing metadata continues to execute depends on the model and runtime version; the current designer alone cannot verify it.

## Related topics

- [Working with Tables and the Canvas](/documentation/Model/Working-with-Tables-and-the-Canvas/)
- [Establishing Table Relationships](/documentation/Model/Establishing-Table-Relationships/)
- [Measures and Calculated Measures](/documentation/Model/Measures-and-Calculated-Measures/)
