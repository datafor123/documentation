---
title: Dimension field
permalink: /documentation/Visualization/Dimension-Value/
createTime: 2026/09/01 22:03:26
---

# Dimension field

Display a dimension value as text, such as the selected region, store or product. Use it to make report context visible. This component displays data; it is not an input control for selecting a filter.

## Show the selected region

1. Add **Components → Charts → Dimension field** to the canvas.
2. Select an **Analysis model** in **Data** and put Region in **Field**.
3. Set **Filters** to a single region for a fixed context label, or configure the report's filter interaction so the component receives the intended selection.
4. Inspect the result with one, several and no matching members before styling.

For a dynamically selected label, use the same business field as the controlling filter. Matching captions are not enough if they belong to different hierarchies or models. See [linked components](/documentation/Visualization/Filter-Subscriptions/).

## Format for the available space

Use **Style → Main value** to set text appearance and **Text wrap** when names may occupy multiple lines. Give long product or store names enough width. The component can summarize multiple returned values; do not design the report as though a single value is guaranteed unless the filters enforce that.

Use **Title** for a fixed caption such as Selected region, and **Empty data** for a meaningful missing-result display. Avoid showing a specific region name as a fallback, because it could imply that a filter is active when no data matches.

## Verify the context

Save and use **Preview**. Change the controlling filter and check that both the text and the related charts update. A label that changes while the charts remain unchanged can mislead readers; verify the interactions for every target component.

If the component shows several values, narrow its data filters or support the multi-selection layout. If it shows an unexpected value, check the model, exact field and filter subscriptions. For a fixed heading or a sentence assembled with dynamic values, use **Assists → Text** instead.
