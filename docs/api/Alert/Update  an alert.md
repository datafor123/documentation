---
title: Update an alert
permalink: /api/Alert/Update  an alert/
tags:
  - api
  - Alert
description: Replace an alert's definition and reschedule it.
createTime: 2026/09/01 22:03:26
---
Replaces an alert's definition, matched by `name`, and updates its schedule. Sending `enabled: "0"` or no `cron` removes the schedule.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor/api/alert/update` |
| Permission | **Edit** on the alert |
| Content type | `application/json` |

## Parameters

The body is the full alert definition, with the same fields as [Add an alert](/api/Alert/Add%20an%20alert/). Fields you leave out are removed. Any `jobId` in the body is ignored; the stored one is used.

The simplest way to build the body is to read the alert with [Query an alert](/api/Alert/Query%20an%20alert/), change it, and send `data` back.

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor/api/alert/update" \
  -H "Content-Type: application/json" \
  -d @alert.json
```

```json
{ "success": true, "msg": "success" }
```

If no alert with this name exists, the call creates one.

## Errors

HTTP 200 with `success: false`.

| `code` / `msg` | When |
| --- | --- |
| `code` `"400"`, `name cannot be empty` | `name` is missing. |
| `code` `"403"`, `no permission` | The caller cannot read or edit the alert. |
| `msg` with the reason | The schedule or the alert could not be saved. |

Related: [Add an alert](/api/Alert/Add%20an%20alert/)
