---
title: List alerts
permalink: /api/Alert/List alerts/
tags:
  - api
  - Alert
description: List alerts, optionally only those on one report or component, with their schedule state.
createTime: 2026/09/01 22:03:26
---
Lists the alerts the caller can read, with their last and next run times. Filter by report or component to show the alerts on one chart.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor/api/alert/list` |
| Permission | Any signed-in user; alerts the caller cannot read are left out |
| Content type | `application/x-www-form-urlencoded` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `pagePath` | form | string | No | Only alerts on this report. |
| `componentId` | form | string | No | Only alerts on this component. |
| `start` | form | integer | No | Default `0`. Alerts to skip. |
| `limit` | form | integer | No | Default `20`. Maximum alerts to return. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor/api/alert/list" \
  --data-urlencode "pagePath=/public/Sales/Revenue.datafor" \
  --data-urlencode "limit=50"
```

```json
{
  "success": true,
  "code": "200",
  "data": [
    {
      "name": "low_sales_north",
      "title": "Low sales in North",
      "pagePath": "/public/Sales/Revenue.datafor",
      "pageTitle": "Revenue",
      "pageExists": true,
      "componentId": "C739239F-0000-0000-0000-000000000001",
      "enabled": "1",
      "executor": "admin",
      "jobId": "<scheduler job ID>",
      "state": "NORMAL",
      "lastRun": "2026-10-05T08:00:00.000+08:00",
      "nextRun": "2026-10-12T08:00:00.000+08:00",
      "creatorId": "admin",
      "rule": { "logical": "or", "conditions": [ "..." ] },
      "emailConfig": { "toUsers": ["alice"], "subject": "Sales below target", "content": "..." },
      "qm": { "...": "..." }
    }
  ]
}
```

Each entry is the full alert definition plus `lastRun`, `nextRun` and `state` from the scheduler, and `pageExists` (`false` when the report has been deleted).

## Errors

| `code` | When |
| --- | --- |
| `500` | The list could not be built (`msg` has the reason). |

Related: [Query an alert](/api/Alert/Query%20an%20alert/)
