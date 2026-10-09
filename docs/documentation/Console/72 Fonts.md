---
title: Fonts
permalink: /documentation/Console/Fonts/
tags:
  - White label
  - Report design
description: Set the interface font, the default font of new reports and of one report, and the font of chart elements, and how Datafor falls back when a font is not installed.
createTime: 2026/09/11 21:20:00
---

# Fonts

Fonts are set at four places. The interface font and report fonts are independent.

| Font | Where | Applies to |
| --- | --- | --- |
| Interface font | **Settings › General › Branding → Other → Interface font** | Console and editor text only |
| Default for new reports | **Settings › General › System configuration → Report default font** | Reports created afterwards, stored on their first save |
| Report default font | Report editor → **Page → Style → Report default font** | Every element of that report without a font of its own, including tooltips |
| Element font | A component's **Style** → any **Font** control | One title, label, legend, axis or cell style |

Datafor does not ship font files. A font is used only when it is installed on the viewer's computer; otherwise the next font of the built-in fallback list is used, ending with the system sans-serif and Chinese fonts. The same report can look slightly different on Windows and macOS.

## Interface font

1. Open **Settings › General › Branding** and the **Other** tab.
2. Choose a font from **Interface font** and click **Save**. The change applies without reloading.

The interface font applies only while the main Branding switch is **Enabled**; with Branding disabled, the console and the editor use the product's default fonts. Each font in the list is drawn in its own typeface and labelled **System default**, **Built into Windows**, **Built into macOS**, **Built into Windows and macOS** or **Needs installing**. A font that is not installed on a viewer's computer falls back to similar system fonts.

The list depends on the interface language: Simplified Chinese, Traditional Chinese and Japanese fonts are listed only in those languages. A font typed by hand in earlier versions is kept until you choose another one; typing new names is no longer possible.

## Default font of new reports

In **Settings › General › System configuration → Reports → Report default font**, choose a font or **System default**. New reports store it on their first save; changing it later does not affect existing reports. See [System Configuration](/documentation/System/System-Configuration/).

## Report default font

1. Open the report in the editor and click an empty part of the canvas.
2. On **Style**, expand **Report default font** and choose **System default** or a font from the list. Elements without their own font update immediately.
3. Save the report. The font travels with the report when it is copied, exported or imported.

In the English interface the list offers Segoe UI, Arial, Calibri, Tahoma, Verdana, Trebuchet MS, Helvetica Neue and Roboto; Chinese and Japanese interfaces add their own fonts.

::: warning Reports from earlier versions
*Follow interface font* and *Other local font* were removed. Reports that had no stored font, or followed the interface font, now use **System default**. A font typed by hand is still applied and shown as an extra entry.
:::

## Element font

Every font control in a component's **Style** starts as **Default (font name)**, the report default font in effect. Pick a font to override it for that element, or **Default** to inherit again. Serif fonts such as SimSun and Times New Roman and monospace fonts such as Consolas are offered only here.

## Related topics

- [White Label](/documentation/Embedded/White-Label/)
- [Page Settings](/documentation/Visualization/Size-Display/)
