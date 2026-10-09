---
title: Text
permalink: /documentation/Visualization/Text/
description: Add headings and short text with one style, insert live values such as the selected region or today's date, and make text clickable.
createTime: 2026/09/01 22:03:26
---

# Text

**Text** shows a heading, label or note in one style. For mixed formatting, lists or measure values inside the text, use [Rich text](/documentation/Visualization/TextBox/).

## Add and edit

1. In **Components → Assists**, click **Text**, then click the canvas.
2. Select the component, then double-click it to type. An empty Text shows *Type text here* in the editor.
3. Click outside to finish.

## Style → Content

| Setting | Options |
| --- | --- |
| **Alignment**, **Vertical alignment** | Left / centre / right; Top / Middle / Bottom |
| **Font**, **Decoration** | Font, size, colour, bold, italic; None / Underline / Strikethrough |
| **Line height**, **Letter spacing** | 1–3 (default 1.4); 0–10 px |
| **Wrap text** | On for new Text components; text in older reports does not wrap |
| **Overflow** | **Scroll bar** (default), **Cut off**, **Ellipsis** |
| **Insert dynamic value** | Today's date, Current user, Report name, a report parameter value or a filter selection |

![Insert dynamic value](./images/text-dynamic-values.png)

The inserted value goes where the cursor was, as a placeholder such as `{{filter.Region}}` or `{{date:YYYY-MM-DD}}`. Readers see the current value, updated when filters or parameters change. See [Dynamic Values](/documentation/Visualization/Dynamic-Values/).

**Style → Effects** sets the background (solid or gradient), border, padding (default 5 px), opacity and hover effect.

## Actions

- **Click action**: go to a report, open a link, switch a tab, reset filters and more.
- **Visibility**: show the text only for some parameter values, users or roles.

See [Click Actions and Visibility](/documentation/Visualization/Click-Actions-and-Visibility/).

Text is shown as written: HTML in the text is not run.
