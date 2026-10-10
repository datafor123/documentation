---
title: Execute an alert
permalink: /api/Alert/Execute an alert/
tags:
  - api
  - Alert
description: Test an alert definition without saving it, sending the email if the conditions match.
createTime: 2026/09/01 22:03:26
---
Runs an alert definition sent in the request, without saving it. Use it to test conditions and recipients before [adding the alert](/api/Alert/Add%20an%20alert/). When a condition matches, the email is really sent.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor/api/alert/execute` |
| Permission | Any signed-in user who can query the model. If `executor` is another user, administrator rights. |
| Content type | `application/json` |

## Parameters

The body is an alert definition as described on [Add an alert](/api/Alert/Add%20an%20alert/). Only `qm`, `rule`, `emailConfig` and `executor` are used; `name` appears in the server log.

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor/api/alert/execute" \
  -H "Content-Type: application/json" \
  -d @alert.json
```

```json
{ "success": true, "code": "200", "data": "not match condition" }
```

`data` is `send mail success` when a condition matched and the email was sent, and `not match condition` when nothing matched.

## Errors

HTTP 200 with `success: false`.

| `code` / `msg` | When |
| --- | --- |
| `"400"`, `rule is required` / `conditions is required` / `qm is required` | The definition is incomplete. |
| `"400"`, `toUsers is required` / `no effective email` | A condition matched but no recipient has an email address. |
| `"500"`, `no data` / `column lost` / query error | The query returned no rows, the measures in the conditions are not in the result, the body is not valid JSON, or the query failed. |

Related: [Execute an alert by name](/api/Alert/Execute%20an%20alert%20by%20name/)
