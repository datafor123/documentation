---
title: Report Editor Basics
permalink: /documentation/Start/Basic-Operations-for-Report-Design/
tags:
  - Design
description: The parts of the report editor and how to select, place, size, arrange, undo, preview and save.
createTime: 2026/09/01 22:03:26
---

# Report Editor Basics

![The report editor: toolbar, canvas and the Page panel with the component palette](../Visualization/images/current/workspace.jpg)

| Area | What it is for |
| --- | --- |
| **Toolbar** (top) | Undo, display mode, size, arrange, chart switch, share, mobile layout, parameters, lineage, AI Agent, **Save as**, **Save**, **Preview** |
| **Canvas** (centre) | The report page. Components are placed and arranged here. |
| **Panel** (right) | Settings of the selected item. Its title says what is selected: **Page** or the component type. |

## The panel

| Selected | Tabs |
| --- | --- |
| Nothing (click empty canvas) | **Components** (the palette), **Style** and **Settings** of the page. See [Page Settings](/documentation/Visualization/Size-Display/). |
| A chart or table | **Data** (model, fields, component filters), **Style**, **Analytics** (reference lines, where supported), **Actions** (interactions, click actions) |
| A filter or an assist component | **Data** or content, **Style**, **Actions** |

Hover a setting's name to see what it does. Collapse the panel with **>|** in its top-right corner to see more of the canvas.

## Select, place and size

- Click a component to select it; **Ctrl**+click adds more components to the selection.
- To add a component, click its tile in **Components** and click the canvas, drag a rectangle, or double-click the tile. See [Adding Components](/documentation/Visualization/Adding-Charts/).
- Drag a selected component to move it and drag a handle to resize it. For exact values type **W(px)** and **H(px)** in the toolbar and press **Enter**; with nothing selected, these fields change the page size.
- **Grid** in the toolbar shows a grid to align to.

## Arrange

| Toolbar button | Use |
| --- | --- |
| **Delete**, **Create copy** | Remove or duplicate the selection. A copy keeps model, fields, filters and style. |
| Layer | **Bring to front**, **Send to back**, for example to put a shape behind charts. |
| Align | Align the selected components on an edge or centre. |
| Distribute | Space three or more components evenly. |
| **Chart switch** | Change the chart type of the selected chart. |

When the window is narrow, buttons that do not fit move into **…**, listed with their names.

## Component toolbar

Point to a component to show its own toolbar in the top-right corner: **Lock** (in the editor), drill buttons where the chart supports drilling, **Conditions** when filters apply, **Zoom in**, and **⋮** for **Export**, **Data preview**, **Execution cost** and **Delete**.

## Undo, preview and save

- **Undo** and **Redo** keep the last 100 steps. The history is cleared when you save or leave the editor.
- **Preview** shows the report as readers see it, with all interactions; **Edit** returns to the editor. Clicking a chart in the editor also cross-filters the other charts, so you can test interactions without previewing.
- **Save** stores the report; the first save asks for a folder and a name. **Save as** stores a separate copy.
- The last save wins: if two people, or two browser tabs, edit the same report, the later save replaces the earlier one.

For a worked example, follow [Create Your First Analysis Report](/documentation/Start/Create-Your-First-Analysis-Report/).
