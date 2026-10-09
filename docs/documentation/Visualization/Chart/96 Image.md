---
title: Dynamic image
permalink: /documentation/Visualization/Image-chart/
createTime: 2026/09/01 22:03:26
---

# Dynamic image

Display images whose references come from the analysis model—for example, a product image that changes with the selected product. For a fixed logo or illustration, use **Assists → Image**.

## Bind image and name

1. Add **Components → Charts → Other → Dynamic image** (240 × 160 px) and choose an **Analysis model** in **Data**.
2. Put the field containing the image reference in **Image field**.
3. Put the identifying text, such as Product Name, in **Name**.
4. Set **Filters** to the intended result, or configure a report filter to control the component.
5. Check that the returned image corresponds to the returned name before styling.

Use references accessible to the people viewing the report. A path that works only on the author's machine is not a reliable report image source. Test the actual viewer environment rather than assuming that an image visible in the designer will load everywhere.

## Configure presentation

Use **Style → Settings** to control image presentation, then resize the component to suit the image proportions. Avoid stretching product images in a way that changes their apparent shape. Use **Empty data** for a clear no-result state.

The component shows the image of the **first row** only. Filter to one member, for example with a Dropdown on Product, when readers should pick the image.

## Test the report interaction

Save and open **Preview**. Select at least two products and confirm that both image and name update. Test a product with no image reference and a selection with no matching data.

Two messages tell the causes apart: *"{value}" is not an image address. Choose a field that holds image URLs* means the field holds something else; *Image failed to load* means the address is right but the browser cannot load it (access, expired link). An empty query shows the empty-data message. If the image is correct but the name is wrong, inspect the model relationship and field grain.

For interactive selection, see [linked components](/documentation/Visualization/Filter-Subscriptions/). Keep a visible name or caption so users can identify the item even when its image cannot load.
