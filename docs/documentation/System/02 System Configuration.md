---
title: System Configuration
permalink: /documentation/System/System-Configuration/
description: The server's time zone, tenant-wide defaults for new reports and models, query and refresh limits, the first day of the week and automatic AI knowledge indexes.
createTime: 2026/10/09 17:30:00
---

# System Configuration

**Settings › General › System configuration** holds the server's time zone and tenant-wide defaults. Only administrators see it.

![System configuration: the Time zone section with System time zone set to Asia/Shanghai, above the Reports settings](./images/settings-sysconfig-top.png)

## Time zone

**System time zone** is one setting for the whole server, shared by all tenants. It decides:

- when subscriptions and alerts run, and what *today*, *last month* or *this year* mean in their filters and alert periods;
- which day each record is counted in on the [Audit Log](/documentation/System/Audit-Log/#overview-tab) dashboards.

The default, **Same as server (*zone*)**, follows the time zone of the Datafor server's operating system. Pick the zone your business days are counted in. Only region names such as *Asia/Shanghai*, *Europe/Berlin* or *America/New_York*, and *UTC*, are offered: they carry daylight saving rules, which a fixed offset such as UTC+08:00 does not.

The row has its own **Save** button, which appears once you change the value. After a change, the next run time of every subscription and alert is recalculated, and the audit statistics are counted again, which can take a while on a large log.

Only an administrator of the default tenant can change it; administrators of other tenants see it read-only. A change is recorded in the audit log as **Edit system settings**.

## Settings

Some settings only seed **new** reports or models; others apply to **all** reports after they are reopened.

| Group | Setting | Default | Applies to |
| --- | --- | --- | --- |
| **Reports** | **Report default font** | System default | New reports. Independent of the interface font. |
| | **Default color scheme**: Default, Classic, Color-blind friendly, Pastel, Paired, Dark | Default | New reports |
| | **Default tooltip style**: Dark, Light | Dark | New reports |
| | **Empty data message**: **Show** and **Text** (up to 100 characters) | Show on, text empty | New reports. Empty text shows *No data* in each viewer's language. |
| **Modeling** | **Default measure format**: **Number** (`#,##0`, `#,##0.0`, `#,##0.00`) and **Percentage** (`0%`, `0.0%`, `#,##0.00%`) | `#,##0.00` and `#,##0.00%` | New measures, after reopening the modeler. **Number** is used for new measures and calculated measures; **Percentage** only for a calculated measure created from a Metrics Library metric whose unit is %. |
| | **Default model cache expiration** (seconds, 0 = never) | 0 | New models, after reopening the modeler |
| | **First day of the week**: Monday, Sunday | Monday | All reports after reopening: "this week", "last week", date pickers, calendar chart. Match the model's week definition. |
| **Queries and refresh** | **Default chart query row limit** (100–200,000 rows) | 5,000 | All reports after reopening, unless the page sets its own **Max query records** |
| | **Minimum auto-refresh interval** (1–86,400 s) | 2 | All reports, including shared and embedded ones: shorter refresh intervals run at this value |
| **AI Agent** | **Auto-build knowledge index** | On | Later model saves and uploads (see below) |

New reports store the Reports values on their first **Save** or **Save as**; changing them here later does not change those reports. New reports also start with the table style **Minimal**, which is not configurable here.

Query timeout and concurrency are on the [Query engine](/documentation/System/Query-Engine/) page, linked from **Queries and refresh**. Reports wait for a query for the engine's query timeout plus 10 seconds.

## Auto-build knowledge index

With the switch on, saving a model in the modeler (also **Save as**), copying a model or importing a new model in a ZIP builds or updates its AI knowledge index in the background, as the user who saved. Failures do not block the save; follow progress in **Settings › AI Agent › Knowledge indexes**. Renaming a model does not trigger a build, and switching the option on does not rebuild existing indexes.

## Working on the page

- **Search settings** filters the rows by name and description.
- Each row shows **Using defaults** or **Custom**; a changed row shows its default and **Restore default**.
- **Save** sends only the changed settings; **Discard changes** drops them. Leaving the page with unsaved changes asks **Keep editing**, **Discard changes** or **Save and leave**.
- If another administrator saved in the meantime, nothing is overwritten: the latest values are loaded with your edits kept, and you review them before saving again.
- Every saved change is recorded in the [Audit Log](/documentation/System/Audit-Log/) as **Edit system settings**, with its old and new value.

Settings are stored per tenant.

Related: [Settings Overview](/documentation/System/Settings-Overview/) · [Page Settings](/documentation/Visualization/Size-Display/) · [Fonts](/documentation/Console/Fonts/)
