---
title: Fonts
permalink: /documentation/Console/Fonts/
tags:
  - White label
  - Report design
description: Set the interface font, the default font of a report, and the font of individual chart elements, and see how Datafor falls back when a font is not installed.
createTime: 2026/09/11 21:20:00
---

# Fonts

Fonts are set at three levels. Each level overrides the one above it.

| Level | Where | Applies to |
| --- | --- | --- |
| Interface font | **Settings > Appearance > White Label > Other** | Console and editor text, and the initial default font of reports created afterwards. |
| Report default font | Editor, **Page** panel, **Style > Report default font** | Every element of that report that has no font of its own. |
| Element font | Component **Style** panel, any **Font** control | One title, label, legend, axis, or cell style. |

Datafor does not ship font files. A font is used only when it is installed on the viewer's computer; otherwise the next font in the built-in fallback list is used, ending with the system sans-serif and system Chinese fonts. The same report can look slightly different on Windows and macOS.

## Interface font

1. Go to **Settings > Appearance > White Label** and open **Other**.
2. Choose a font from **Interface font**. Fonts built into Windows or macOS are tagged; fonts marked **Needs installing** must be present on every viewer's computer. Chinese fonts are listed only when the interface language is Chinese.
3. For a font that is not listed, choose **Other local font** and type its name exactly as installed, for example `Alibaba PuHuiTi`.
4. Turn the main switch on and choose **Save** or **Apply**.

When white labeling is disabled, the interface uses **System default**: Segoe UI with Microsoft YaHei on Windows, PingFang on macOS.

Changing the interface font does not change existing reports. It becomes the default font of reports created after the change.

## Report default font

1. Open the report in the editor and click an empty area of the canvas to show the **Page** panel.
2. On **Style**, expand **Report default font**.
3. Choose a font, **System default**, or **Follow interface font**. Elements without their own font update immediately. For an unlisted font, type its name in **Other local font**; it takes precedence over the selection.
4. Save the report. The setting is stored in the report and travels with it when the report is copied, saved as, exported, or imported.

A new report starts with the interface font in effect when it was first saved. A report created before this feature has no stored default and follows the interface font until you set one.

## Element font

In a component's **Style** panel, every font control starts as **Default (font name)**, which shows the report default font currently in effect. Pick a font to override it for that element only, or pick **Default** again to inherit. Serif fonts such as SimSun and Times New Roman and monospace fonts such as Consolas are offered here but not for the interface.

## Related topics

- [White Label](/documentation/Embedded/White-Label/)
