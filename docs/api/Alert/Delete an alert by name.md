---
title: Delete an alert by name
permalink: /api/Alert/Delete an alert by name/
tags:
  - api
  - Alert
description: Delete an alert and its schedule.
createTime: 2026/09/01 22:03:26
---
Deletes an alert permanently and removes its schedule.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor/api/alert/delete` |
| Permission | **Delete** on the alert |
| Content type | `application/x-www-form-urlencoded` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | form | string | Yes | Alert name. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor/api/alert/delete" \
  --data-urlencode "name=low_sales_north"
```

```json
{ "success": true, "code": "200" }
```

## Errors

HTTP 200 with `success: false`.

| `code` | When |
| --- | --- |
| `404` | No alert has this name, or the caller cannot read it. |
| `500` | The alert could not be deleted, for example because the caller lacks Delete. The schedule is kept. |

Related: [List alerts](/api/Alert/List%20alerts/)
