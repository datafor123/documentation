---
title: Delete a parameter
permalink: /api/Parameters/Delete a parameter/
tags:
  - api
  - Parameters
description: Delete a global parameter by name or ID (administrators only).
createTime: 2026/10/10 10:00:00
---
Deletes a global parameter. Reports and model SQL that reference it are not changed, so check where it is used first.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/parameter/delete` |
| Permission | Administrator user type |
| Content type | `application/x-www-form-urlencoded` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | form | string | `name` or `id` | Parameter name. |
| `id` | form | string | `name` or `id` | Parameter ID. When both are sent, both must match. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/parameter/delete" \
  --data-urlencode "name=region"
```

```json
{ "success": true, "msg": "success" }
```

Deleting a name that does not exist also returns `success: true`.

## Errors

HTTP 200 with `success: false` and a `msg`.

| `msg` | When |
| --- | --- |
| `Only administrators can manage global parameters` | The caller is not an administrator. |
| `one condition at least` | Neither `name` nor `id` was sent. |

Related: [Get parameters](/api/Parameters/Get%20parameters/)
