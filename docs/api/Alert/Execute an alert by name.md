---
title: Execute an alert by name
permalink: /api/Alert/Execute an alert by name/
tags:
  - api
  - Alert
description: Run a saved alert now and send its email if the conditions match.
createTime: 2026/09/01 22:03:26
---
Runs a saved alert immediately, outside its schedule: executes its query, checks the conditions, and sends the email when they match.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor/api/alert/executeByName` |
| Permission | **Read** on the alert. If the alert's `executor` is another user, administrator rights. |
| Content type | `application/x-www-form-urlencoded` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | form | string | Yes | Alert name. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor/api/alert/executeByName" \
  --data-urlencode "name=low_sales_north"
```

```json
{ "success": true, "code": "200", "data": "send mail success" }
```

`data` is `send mail success` when a condition matched and the email was sent, and `not match condition` when nothing matched.

## Errors

HTTP 200 with `success: false`.

| `code` / `msg` | When |
| --- | --- |
| `404` (number), `not found` | No alert has this name, or the caller cannot read it. |
| `"400"`, `rule is required` / `conditions is required` / `qm is required` | The saved definition is incomplete. |
| `"400"`, `toUsers is required` / `no effective email` | A condition matched but no recipient has an email address. |
| `"500"`, `no data` / `column lost` / query error | The query returned no rows, the measures in the conditions are not in the result, or the query failed. |

Related: [Execute an alert](/api/Alert/Execute%20an%20alert/), [Mail Server Configuration](/documentation/System/Mail-Server-Configuration/)
