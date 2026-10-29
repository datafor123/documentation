---
title: Drill Through to a Paginated Report and Embedding
permalink: /documentation/Paginated-Reports/Drill-Through-and-Embedding/
description: Open a paginated report from a dashboard with the clicked values as parameters, and embed the viewer in another page with a URL.
createTime: 2026/10/28 10:00:00
---

# Drill Through to a Paginated Report and Embedding

## From a dashboard to a statement

A dashboard shows the trend; a click on a bar opens the paginated statement for that bar. This is the ordinary [drill through](/documentation/Analysis/Drill-through/) of a dashboard component with a paginated report as the target.

1. In the dashboard editor select the component, hover the measure in **Data** and choose **⋮ → Drill through**, then turn on **Enable drill-through**.
2. Under **Drill-through to** pick **Report** and choose the paginated report in the tree. Dashboard reports and paginated reports are listed together; the paginated ones carry the paginated report icon.
3. The right column changes to **Paginated report parameters**. For each dashboard field you want to pass, select the report parameter that should receive it. Fields and parameters with the same name are mapped for you. A report without parameters shows *This paginated report has no parameters*; it still opens, unfiltered.
4. Choose the **Opening method**: **Current tab**, **New tab**, **Tooltip** or **Pop-up** (with width and ratio). All four work for paginated reports.
5. Click **OK** and test by clicking two different members.

How the values arrive:

| Dashboard field | Report parameter | What is passed |
| --- | --- | --- |
| A dimension member (one or several selected) | **List** | All selected members, by member name |
| A dimension member | Text, number | The first selected member |
| A clicked year, quarter, month or day, or a date range filter | Two **Date** (or date time) parameters | The first parameter receives the start of the period, the second the end; a click on *2025 Q3* becomes 2025-07-01 to 2025-09-30 |
| Dashboard report parameters, with **Pass report parameters** on | Parameters with the same name | Their current values |

Excluded members, expressions and fields without a mapping are not passed. Member names must match the model behind the paginated report; a drill-through between two reports on the same model always matches.

The target opens at `…/api/repos/<path>/viewer?p_<name>=<value>…`, the same address as **Copy link** in the viewer, so what the reader sees is exactly a parameterised run of the report. For readers to use it they need read permission on the paginated report and its model or connection.

## Embedding the viewer

The viewer can be placed in an iframe or opened from a link in another application. Build the address from the report path (`/` replaced by `:`) and add query parameters:

```text
https://bi.example.com/datafor/api/repos/:public:Docs:Regional Sales Statement.pagereport/viewer
    ?toolbar=false&paramPanel=hidden&p_region=East%20China&p_full_date_from=2026-01-01&p_full_date_to=2026-03-31
```

| Parameter | Effect |
| --- | --- |
| `p_<name>` | Sets a parameter; repeat the key for several values of a list parameter. |
| `paramPanel=left` / `top` / `collapsed` / `hidden` | Where the parameter panel appears, or none. With `hidden` the report runs at once with the URL values and defaults; a missing required parameter shows a message instead. Combine as `top,collapsed`. |
| `toolbar=false` | No toolbar; page navigation moves to the floating bar at the bottom right, and readers cannot export. |
| `locale=en-US` | Interface language of the viewer. |

Hidden parameters (see [Datasets and Parameters](/documentation/Paginated-Reports/Datasets-and-Parameters/#parameters)) keep a value passed in the URL, such as a customer number, out of the panel and the filter summary. They do not stop anyone from editing the URL. When the data must depend on who is signed in, set the parameter's **Values from** to **User** instead: it always takes the signed-in user's value and ignores URL values.

Sign-in works as for dashboards: the viewer uses the Datafor session, so embed it behind the same sign-in, or pass a token as described in [Signing In Users](/documentation/Embedded/Signing-In-Users/). Cross-origin iframes need the host added under [Cross-Origin Access](/documentation/System/CORS/).

Exports are also plain URLs: `…/plugin/datafor-pagereport/api/render/export?path=<report path>&format=pdf&p_region=East%20China` returns the file directly (synchronously, with the same row limits as the viewer). For scheduled files use a [distribution](/documentation/Paginated-Reports/Distribution/).

## Not yet available

- A dashboard component that embeds a paginated report inside the dashboard page, and parameter changes through cross-window messages, are planned for a later release. Until then use drill-through or an iframe with a URL.

## Related topics

- [Drill through](/documentation/Analysis/Drill-through/)
- [Viewing, Pagination and Export](/documentation/Paginated-Reports/Viewing-Pagination-and-Export/)
- [Report URLs](/documentation/Embedded/Report-URLs/)
