---
title: Linking and Cascading Filters
permalink: /documentation/Visualization/Filter-Subscriptions/
description: Choose which components a filter affects, make filters narrow each other's choices, and diagnose unexpected results.
createTime: 2026/09/01 22:03:26
---

# Linking and Cascading Filters

A filter affects only the components checked under **Actions → Interactions → Linked components**. Other filters on the page can follow it too, so that their lists show only the values that are still available (cascading).

![Dropdown Interactions: Cascade other filters and Linked components](./images/dropdown-actions.png)

## Link a filter to components

1. Select the filter and open **Actions → Interactions**.
2. Open **Linked components** and check the targets. The badge shows how many are linked, for example **2 linked**.
3. Preview the report, change the filter and check each target.

A component on another analysis model can be linked when that model has the filtered field. Leave a headline KPI unlinked if it must always show the unfiltered total.

The Date component uses **Filter all components** instead of a manual list by default; see [Date](/documentation/Visualization/Datepicker/).

## Cascade filters

Turn on **Cascade other filters** in a filter's Interactions to add every other filter on the same analysis model to its Linked components in one step. Filters that already filter this one (which would create a loop) and filters bound to a parameter are skipped. Turning the switch off removes those filters again.

The switch is available on Dropdown, List box, Button group, Radio/Checkbox, Paginate and Search.

When a reader changes an upstream filter, each downstream filter first reloads its members under the new condition:

- Selections that still exist are kept; selections that no longer exist are removed.
- A downstream filter left with no selection filters as All, or takes its first item when it is a required single selection.
- The charts then query once, so they do not flash an empty state in between.

Selections in filters on hidden tabs, and filters whose member query fails, are not checked and are cleared instead.

## Example: Region narrows City

1. Add a Dropdown on **Region** and a Dropdown on **City**, both on **Retail Chain Operations**.
2. On the Region dropdown, turn on **Cascade other filters**.
3. In Preview, choose **East China**. The City list now shows only East China cities; a city chosen earlier stays selected if it is in East China.

## Diagnose an unexpected result

| Symptom | Check |
| --- | --- |
| A chart does not change. | The chart is not in the filter's Linked components, or its model lacks the field. |
| A chart becomes empty. | Hover the chart and open **Conditions** to see every condition applied; the combination may have no rows. |
| A summary changes unexpectedly. | Remove it from the filter's Linked components. |
| A downstream filter lost its selection. | The value no longer exists under the upstream selection. |

![The Conditions list of a chart: Region, Channel Type and Day](./images/conditions-popover.png)

For filters across different models, see [Cross-Model Analysis](/documentation/Analysis/Cross-Model/).
