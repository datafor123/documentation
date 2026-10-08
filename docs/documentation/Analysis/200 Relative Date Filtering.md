---
title: Relative Date Filtering
permalink: /documentation/Analysis/Relative-Date-Filtering/
createTime: 2026/09/01 22:03:26
---

# Relative Date Filtering

A relative condition selects a period around a reference time, so the report does not need a manually updated date list.

## Apply it to one component

1. Select the chart and open **Data → Filters → +**.
2. Select a date or time-level field.
3. Change **Filter type** to **Relative**.
4. Choose **Reference time**, the **Relative time condition**, the number of periods, and the unit.
5. Click **Apply** and inspect the result.

![Relative filter on a Year field](../Visualization/images/current/relative-date.jpg)

The screenshot uses **(Current time)**, **is in the last**, **1**, and **calendar year**. Choose a field and unit appropriate to the question. A calendar period and a rolling interval can have different boundaries.

## Let readers choose a period

Add a **Date** component. Under **Data**, set its field and choose **Default value → Relative**. Configure the window, then its linked targets.

## Check the boundaries

Compare the filtered result with a small table of dates and values. Check the first and last included dates, especially near month, quarter, and year boundaries. If historical data disappears, first check whether the reference time points beyond the dates available in the model.
