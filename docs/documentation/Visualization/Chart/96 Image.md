---
title: Dynamic image
permalink: /documentation/Visualization/Image-chart/
description: Show an image whose URL or Base64 data comes from a model field, with its name, fill type and opacity.
createTime: 2026/09/01 22:03:26
---

# Dynamic image

Display images whose references come from the analysis model—for example, a product image that changes with the selected product. For a fixed logo or illustration, use **Assists → Image**.

## Bind image and name

1. Add **Components → Charts → Other → Dynamic image** (240 × 160 px) and choose an **Analysis model** in **Data**.
2. Put the field containing the image in **Image field**. It accepts an image URL (`https://…`, `//…` or a path on the Datafor server) or a Base64-encoded image written as a data URI, such as `data:image/png;base64,iVBORw0…`.
3. Put the identifying text, such as Product Name, in **Name**.
4. Set **Filters** to the intended result, or configure a report filter to control the component.
5. Check that the returned image corresponds to the returned name before styling.

Use references accessible to the people viewing the report. A path that works only on the author's machine is not a reliable report image source.

## Configure presentation

**Style → Settings** has two options:

| Option | Choices | Default |
| --- | --- | --- |
| **Fill type** | **Auto** fits the whole image into the component and keeps its proportions; **Origin** shows it at its own size; **Stretch** fills the component and can distort the image. | **Auto** |
| **Opacity** | 0–100%. | 100% |

With **Auto**, resize the component to the image proportions to avoid empty margins. Use **Empty data** for a clear no-result state.

The component shows the image of the **first row** only. Filter to one member, for example with a Dropdown on Product, when readers should pick the image.

## Test the report interaction

Save and open **Preview**. Select at least two products and confirm that both image and name update. Test a product with no image reference and a selection with no matching data.

Two messages tell the causes apart: *"{value}" is not an image address. Choose a field that holds image URLs* means the field holds something else; *Image failed to load* means the address is right but the browser cannot load it (access, expired link). An empty query shows the empty-data message. If the image is correct but the name is wrong, inspect the model relationship and field grain.

For interactive selection, see [linked components](/documentation/Visualization/Filter-Subscriptions/). Keep a visible name or caption so users can identify the item even when its image cannot load.
