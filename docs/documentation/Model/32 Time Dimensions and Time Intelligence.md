---
title: Time Semantics and Default Time Settings
permalink: /documentation/Model/Time-Dimensions-and-Time-Intelligence/
---

# Time Semantics and Default Time Settings

Datafor has three time settings with different purposes. Configure the setting used by each consumer; one setting does not substitute for another.

| Setting | Configure it on | What it controls |
| --- | --- | --- |
| Time **Semantic role** | An Attribute | Identifies Year, Quarter, Month, Week, or Date levels for time-aware report and MDX behavior. |
| **Default time field** | A Measure or calculated measure | Tells the Agent which date context to use for that Measure. |
| **Default time dimension** | Model properties | Stores the model's designated time Dimension as model metadata. It does not choose the Agent's date field or replace Attribute time roles. |

## Configure a time Dimension

1. Select the Dimension in the model tree.
2. Set **Dimension category** to **Time**.
3. Include the Attributes needed for the intended calendar or fiscal time structure.
4. Create a hierarchy in broad-to-detailed order, such as **Year → Quarter → Month → Day**, with **Time: Date** assigned to the Day Attribute.

<div align="left"><img src="./images/analysis-model-time-dimension.png" alt="Date Dimension configured with the Time category and an expanded date hierarchy" width="60%" /></div>

For each time Attribute, select the matching **Semantic role**:

| Attribute meaning | Semantic role |
| --- | --- |
| Year | **Time: Year** |
| Quarter | **Time: Quarter** |
| Month | **Time: Month** |
| Week | **Time: Week** |
| Calendar date or day | **Time: Date** |

<div align="left"><img src="./images/analysis-model-time-semantic-roles.png" alt="Year Attribute configured with the Time: Year Semantic role" width="60%" /></div>

If a source date is stored as formatted text or a numeric code, set its **Source column format** under the Attribute's advanced settings to match the stored value. A caption such as “Year” does not make an Attribute time-aware; assign the Semantic role.

## Set the model's Default time dimension

With no model-tree object selected, use **Model properties > Default time dimension** to designate the primary time Dimension in model metadata.

<div align="left"><img src="./images/analysis-model-default-time-dimension.png" alt="Model properties with Date selected as the Default time dimension" width="60%" /></div>

This setting does not control the Agent's date selection, and it is not a fallback for a Measure's **Default time field**. If the selected Dimension is later removed, the value can appear as **no longer exists**; clear or reselect it and review **Model diagnostics**.

If the intended Dimension is not available in the list, confirm that it is visible and contains at least one Attribute, then set **Dimension category** to **Time**. Assign the time Semantic roles as a separate step so its Attributes work correctly in time-aware queries.

## Set the Agent's time field for each Measure

Select a Measure or calculated measure, expand **Business semantics**, and choose its **Default time field**. Select the Attribute or hierarchy level that represents when that Measure occurs.

<div align="left"><img src="./images/analysis-model-measure-default-time-field.png" alt="Measure Business semantics with the Default time field list open" width="60%" /></div>

Examples:

- Net sales normally use the order or transaction date.
- Refund Measures may use return date rather than order date.
- Inventory snapshots use the snapshot date.

Set this value independently for Measures with different date meanings. The Agent reads the Measure-level setting; changing only the model's **Default time dimension** does not change that behavior.

## Models with several date roles

When one date source serves several roles:

1. Clone the date table and give each alias a role-specific name, such as **Order Date** or **Ship Date**.
2. Create a separate relationship from each alias to the correct fact-table key.
3. Expose role-specific Dimensions and hierarchies.
4. Assign each Measure's **Default time field** to the correct role.

See [Advanced Relationship Modeling](/documentation/Model/Advanced-Relationship-Modeling/) for role-playing aliases.

## Time-intelligence checks

- Keep hierarchy levels ordered from the broadest period to the individual date.
- Assign an explicit time Semantic role to every time level used in calculations.
- Verify the Source column format when the source does not use a native date value.
- Test year-to-date, quarter-to-date, and period-comparison calculations at more than one hierarchy level.
- When multiple time hierarchies exist, select explicit time fields in Measures and calculation templates. Zero-argument YTD and QTD functions use the first eligible time hierarchy; the model's **Default time dimension** does not choose it.
- Review **Model diagnostics** after renaming or removing a time Dimension, Attribute, hierarchy, or level.

## Troubleshooting

| Symptom | Check |
| --- | --- |
| A time Dimension is missing from **Default time dimension** | Visibility, at least one Attribute, and the **Time** category; then verify its time Semantic roles. |
| The Agent uses the wrong date | The affected Measure's **Default time field**, not only the model setting. |
| Time calculations use the wrong hierarchy | Time Semantic roles, hierarchy order, and explicit time-field selections. |
| A setting shows **no longer exists** | Reselect or clear the stale reference, then run Diagnostics. |

## Related topics

- [Creating Hierarchies](/documentation/Model/Creating-Hierarchy/)
- [Measures and Calculated Measures](/documentation/Model/Measures-and-Calculated-Measures/)
- [Business Semantics for AI](/documentation/Model/Business-Semantics-for-AI/)
- [Model Diagnostics](/documentation/Model/Model-Diagnostics/)
- [Advanced Relationship Modeling](/documentation/Model/Advanced-Relationship-Modeling/)
- [Quick Calculated Measures](/documentation/Analysis/Quick-Calculated-Measures/)
- [MDX Functions](/documentation/Advanced/MDX-Functions/)
