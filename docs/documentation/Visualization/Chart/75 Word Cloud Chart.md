---
title: Word cloud
permalink: /documentation/Visualization/Word-Cloud-Chart/
createTime: 2026/09/01 22:03:26
---

# Word cloud

Use word size to give a quick impression of category weight, such as frequently mentioned topics or high-volume product names. Use a bar chart when readers need an exact ranking.

## Map words and weights

1. Add **Components → Charts → Word cloud** and choose an **Analysis model** in **Data**.
2. Put a short text category in **Word** and a non-negative weight in **Measure**. For example, use Topic and Mention Count.
3. Apply **Filters** to the relevant period or population.
4. Check a few word values in the tooltip or a companion table before styling.

The Word field should already contain the categories you want to display. Do not assume that binding a paragraph automatically extracts topics or counts individual words. Prepare that grouping in your source or model.

## Fit the cloud

In **Style → Words**, set **Min. font** and **Max. font** so small words remain readable and large words fit the component. Words that do not fit can shrink toward the minimum font size.

Choose **Text orientation → Horizontal** for easier reading, or **Horizontal and vertical** for a denser arrangement. **Shape** controls the outline, with options including Circle, Diamond, Triangle and Star. It changes the layout, not the measure values.

Long names consume more space than short names. Keep labels concise and give the component enough room; visual area is not a precise numeric scale.

## Check missing words

Words with no value, zero or negative values are not shown. If an expected word is absent, check its weight and the component filters first, then check available space and font limits.

Save and open **Preview** at the report's intended size. If important words cannot be read, increase space or reduce the number of categories. Keep a table or ranked bar chart available when users need exact values.
