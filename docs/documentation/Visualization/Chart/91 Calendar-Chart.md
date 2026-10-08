---
title: Calendar chart
permalink: /documentation/Visualization/Calendar-Chart/
createTime: 2026/09/01 22:03:26
---

# Calendar chart

Show daily values in a calendar layout.

## Set up the data

1. Choose **Components → Charts → Calendar chart** and place it on the canvas.
2. Select the chart and choose an **Analysis model** in **Data**.
3. Use **+** beside each field slot to select the following fields, then click **Back**.

| Data slot | Choose |
| --- | --- |
| **Date** | Date field identifying each day. |
| **Measure** | Daily value. |
| **Color / Tooltips** | Optional encoding and hover details. |

Use **Filters** to restrict this component’s data. Check the result before styling it.

## Make it readable

Use **Year**, **Month**, **Weekday**, and **Plot area** to format the calendar.

Confirm the date granularity and aggregation. A missing day is not necessarily a zero.

Save the report and use **Preview** to check labels, hover details, and the filtered result.

See [component filters](/documentation/Analysis/Component-Level-Filtering/) and [linked components](/documentation/Visualization/Filter-Subscriptions/).
