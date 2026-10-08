---
title: Combo
permalink: /documentation/Visualization/Combo Chart/
createTime: 2026/09/01 22:03:26
---

# Combo

Use columns and lines to compare related metrics on the same categories: sales and margin rate, orders and average order value, or actual and target. Use a [Line chart](/documentation/Visualization/Line-Chart/) when every series has the same role.

## Build sales and margin by region

1. Add **Components → Charts → Combo** to the canvas.
2. Select it, open **Data**, and choose an **Analysis model**.
3. Click **+** in each slot, choose a field, then click **Back**. For the retail example, use this mapping:

| Slot | Example | Result |
| --- | --- | --- |
| **X-axis** | Region | One position per region, shared by both chart types. |
| **Column measures** | Net Sales | Sales columns. |
| **Line measures** | Gross Margin Rate | A percentage line across the same regions. |
| **Tooltips** | Optional supporting measures | Extra detail on hover without another series. |
| **Filters** | Year = 2025 | The same period for both metrics. |

Use your model's equivalent fields. Gross margin rate should divide aggregated gross margin by aggregated sales; averaging individual transaction percentages can give a different result.

![Combo fields: Region, Net Sales and Gross Margin Rate](../images/current/combo-data.jpg)

The example has separate sales and percentage axes. East China has the largest sales column; North China has the highest margin rate. The vertical position of a line point cannot be compared directly with a column on a different scale.

## Configure the two axes

Open **Style → Y axis**.

| Setting | How to use it |
| --- | --- |
| **Merge left and right axis** | Leave off for different units, such as currency and percentage. Merge only when the measures share a meaningful unit and scale. |
| **Y-axis (line chart) position** | Choose the side used by the line axis. The example uses **Right**. |
| **Left/Right Y-axis min/max value** | Leave automatic for exploration, or enter explicit bounds for a consistent comparison. Maximum must exceed minimum. |
| **Show axis name**, **Left/Right axis name** | Identify each metric and its unit. |
| **Left/Right axis unit** | Shorten large values without changing the underlying measure. |

Enter bounds in the measure's stored units. For a rate stored as a decimal, **0.4** to **0.5** displays **40%** to **50%**, as shown below. Entering 40 and 50 would produce the wrong scale. A narrow percentage range emphasizes small differences: make the displayed bounds clear.

![Combo percentage axis bounds](../images/current/combo-axes.jpg)

## Control the columns, lines and labels

- **Column type → Stacked** stacks the column measures; it does not stack the lines. Use it only for additive parts of the same total.
- **Line** controls line appearance. Use visible points when there are few categories; avoid a smooth curve if it would imply unobserved values.
- **Data labels → Data labels on** selects **All**, **Columns**, or **Lines**. Label just one type when labels overlap.
- Keep the **Legend** visible when there is more than one measure. Add precise values through **Tooltip** instead of crowding the plot.
- An **Analytics** reference line has an **Axis** choice: **Bar axis** or **Line axis**. A sales target belongs to the sales axis; a margin target belongs to the rate axis.

## Check the result

Save, then open **Preview**. Hover a category and confirm both values and units. Apply a report filter and check both series again.

| Symptom | Check |
| --- | --- |
| Line is almost flat | Check units, axis merging and fixed bounds before changing the data. |
| A measure is drawn in the wrong form | Move it to **Column measures** or **Line measures**. Recheck these slots after changing chart type. |
| Percentage is 100 times too large | Check whether the source stores 0.42 or 42 and whether its measure format is a percentage. |
| Color slot disappears | With multiple measures, review series styling and the legend; the available data slots change with the binding. |
| Result differs from another chart | Match the measure definition, category grain and [component filters](/documentation/Analysis/Component-Level-Filtering/). |
