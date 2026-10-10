---
title: Add an alert
permalink: /api/Alert/Add an alert/
tags:
  - api
  - Alert
description: Create a data alert that checks a report component's query on a schedule and emails users when a condition matches.
createTime: 2026/09/01 22:03:26
---
Creates a data alert. On each scheduled run, the alert executes the query of a report component, checks the values against its conditions, and emails the recipients when they match.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor/api/alert/add` |
| Permission | Creator or Administrator user type. The new alert gives its creator Full control. |
| Content type | `application/json` |

The query model (`qm`) is the component's query as the report designer saves it. The practical way to get one is to create an alert on the component in the console once and read it back with [Query an alert](/api/Alert/Query%20an%20alert/).

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | body | string | Yes | Alert name, unique. Used in all other alert calls. |
| `title` | body | string | No | Display name. Default: `name`. |
| `pagePath` | body | string | No | Path of the report the component is on, for example `/public/Sales/Revenue.datafor`. Used to list alerts by report. |
| `componentId` | body | string | No | ID of the component in that report. |
| `componentTitle` | body | string | No | Component title, for display. |
| `enabled` | body | string | No | `1` (default) schedules the alert, `0` saves it without a schedule. |
| `executor` | body | string | No | User whose permissions the query runs with. Default: the caller. Only administrators can run an alert as another user. |
| `qm` | body | object | Yes | The component's query model (see the skeleton below). |
| `rule.logical` | body | string | Yes | `or` (default): alert when any condition matches. `and`: only when all match. |
| `rule.conditions` | body | array | Yes | Conditions, each with `id`, `comparator`, `value`, `match` and optional `inclusiveLeft` and `inclusiveRight`. |
| `rule.conditions[].id` | body | string | Yes | The `id` of a measure in `qm` (`queryModel.details.measures[].id`). |
| `rule.conditions[].comparator` | body | string | Yes | `>`, `>=`, `<`, `<=`, `==`, `!=`, `between`, `not between`, `in`, `not in`, `is empty`, `is not empty`. |
| `rule.conditions[].value` | body | array | Depends | Comparison values: one for `>` and the like, two for `between`, any number for `in`. Send numbers as numbers to compare numerically. |
| `rule.conditions[].match` | body | string | No | `any` (default): the condition matches when any row matches. `all`: every row must match. Total rows are ignored. |
| `rule.conditions[].inclusiveLeft`, `inclusiveRight` | body | boolean | No | For `between` and `not between`. Default `true`. |
| `cron` | body | object | No | Schedule, in the format of the scheduler's job triggers, for example `{"complexJobTrigger": {"uiPassParam": "WEEKLY", "daysOfWeek": ["1"], "startTime": "2026-10-12T08:00:00.000+08:00", "endTime": null}}`. Without it the alert only runs when executed. |
| `channels` | body | string array | No | `["email"]`. |
| `emailConfig.toUsers`, `ccUsers`, `bccUsers` | body | string array | `toUsers` | User names. Their email addresses are taken from their user profiles. |
| `emailConfig.subject` | body | string | Yes | Subject. |
| `emailConfig.content` | body | string | Yes | Body, HTML or text. `${value}` is replaced with the matching value or values. |

Skeleton of `qm` (abridged):

```json
{
  "queryModel": {
    "axes": {
      "FILTER": { "location": "FILTER", "hierarchies": [], "nonEmpty": false },
      "COLUMNS": { "location": "COLUMNS", "hierarchies": [], "nonEmpty": true },
      "ROWS": { "location": "ROWS", "hierarchies": [ { "name": "Region", "levels": {} } ], "nonEmpty": true }
    },
    "details": {
      "axis": "COLUMNS",
      "location": "BOTTOM",
      "measures": [ { "name": "Sales", "uniqueName": "[Measures].[Sales]", "id": "orders.sales.1717310261398", "type": "EXACT" } ]
    },
    "calculatedMeasures": [],
    "calculatedMembers": []
  },
  "cube": { "name": "SalesModel", "connection": "SalesModel", "catalog": "SalesModel", "schema": "SalesModel", "uniqueName": "[SalesModel].[SalesModel].[SalesModel].[SalesModel]" },
  "queryType": "OLAP",
  "type": "QUERYMODEL",
  "properties": { "datafor.client.locale": "en" },
  "parameters": {}
}
```

For table and cross-table components, remove the paging properties (`datafor.query.paging.size`, `datafor.query.paging.start`, `datafor.query.paging.subset.start`, `datafor.query.paging.subset.size`) from `properties` so that the alert checks all rows.

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor/api/alert/add" \
  -H "Content-Type: application/json" \
  -d @alert.json
```

with `alert.json`:

```json
{
  "name": "low_sales_north",
  "title": "Low sales in North",
  "pagePath": "/public/Sales/Revenue.datafor",
  "componentId": "C739239F-0000-0000-0000-000000000001",
  "enabled": "1",
  "rule": {
    "logical": "or",
    "conditions": [ { "id": "orders.sales.1717310261398", "comparator": "<", "value": [10000], "match": "any" } ]
  },
  "qm": { "...": "see the skeleton above" },
  "cron": { "complexJobTrigger": { "uiPassParam": "WEEKLY", "daysOfWeek": ["1"], "startTime": "2026-10-12T08:00:00.000+08:00", "endTime": null } },
  "channels": ["email"],
  "emailConfig": {
    "toUsers": ["alice"],
    "ccUsers": [],
    "bccUsers": [],
    "subject": "Sales below target",
    "content": "Sales in North dropped to ${value}."
  }
}
```

```json
{ "success": true, "msg": "success", "jobId": "<scheduler job ID>" }
```

`jobId` is returned only when the alert was scheduled.

## Errors

HTTP 200 with `success: false`.

| `code` / `msg` | When |
| --- | --- |
| `code` `"400"`, `name cannot be empty` | `name` is missing. |
| `code` `"409"`, `already exists` | An alert with this name exists. |
| `msg` with the reason | The schedule or the alert could not be saved. |

Related: [Mail Server Configuration](/documentation/System/Mail-Server-Configuration/), [Execute an alert](/api/Alert/Execute%20an%20alert/)
