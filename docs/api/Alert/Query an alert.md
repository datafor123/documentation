---
title: Query an alert
permalink: /api/Alert/Query an alert/
tags:
  - api
  - Alert
description: Read one alert's definition and schedule state by name.
createTime: 2026/09/01 22:03:26
---
Returns one alert's full definition, including its query model, plus its last and next run times.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor/api/alert/detail` |
| Permission | **Read** on the alert |
| Content type | none (query string) |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | query | string | Yes | Alert name. |

## Example

```bash
curl -u admin:password -G \
  "http://localhost:28080/datafor/plugin/datafor/api/alert/detail" \
  --data-urlencode "name=low_sales_north"
```

```json
{
  "success": true,
  "data": {
    "name": "low_sales_north",
    "title": "Low sales in North",
    "pagePath": "/public/Sales/Revenue.datafor",
    "componentId": "C739239F-0000-0000-0000-000000000001",
    "enabled": "1",
    "executor": "admin",
    "jobId": "<scheduler job ID>",
    "state": "NORMAL",
    "nextRun": "2026-10-12T08:00:00.000+08:00",
    "rule": { "logical": "or", "conditions": [ { "id": "orders.sales.1717310261398", "comparator": "<", "value": [10000], "match": "any" } ] },
    "emailConfig": { "toUsers": ["alice"], "ccUsers": [], "bccUsers": [], "subject": "Sales below target", "content": "Sales in North dropped to ${value}." },
    "qm": { "...": "..." }
  }
}
```

The fields are described on [Add an alert](/api/Alert/Add%20an%20alert/).

## Errors

| `code` | When |
| --- | --- |
| `404` | No alert has this name, or the caller cannot read it. |

Related: [Update an alert](/api/Alert/Update%20%20an%20alert/)
