---
title: Delete token configurations
permalink: /api/Token/Delete token configurations/
tags:
  - api
  - Authentication
  - Token
description: Delete one or several embed token (JWT) configurations by name.
createTime: 2026/09/01 22:03:26
---

Deletes embed token (JWT) configurations. Tokens issued from a deleted configuration, personal tokens included, stop working at once.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/token/deleteBatch` (several) or `POST /plugin/datafor-modeler/api/token/delete` (one) |
| Permission | Administrator |
| Content type | `application/json` for `deleteBatch`; `application/x-www-form-urlencoded` for `delete` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| (body) | body | string[] | Yes, for `deleteBatch` | Names of the configurations, as a JSON array. |
| `name` | form | string | Yes, for `delete` | Name of the configuration. |

A name that does not exist is skipped without an error.

## Example

```bash
curl -u admin:password -X POST "http://localhost:28080/datafor/plugin/datafor-modeler/api/token/deleteBatch" \
  -H "Content-Type: application/json" \
  -d '["ERP", "OA"]'

curl -u admin:password -X POST "http://localhost:28080/datafor/plugin/datafor-modeler/api/token/delete" \
  -d "name=ERP"
```

```json
{
  "success": true,
  "msg": "success"
}
```

Deletion is permanent; configurations do not go to the trash. With the audit log on, each one is recorded as **Token delete**.

## Errors

| `code` | When |
| --- | --- |
| `"403"` | The caller is not an administrator (`msg`: `no permission`). |
| (none) | A configuration could not be deleted: `success` is `false` and `msg` has the reason. With `deleteBatch`, the configurations before it in the list are already deleted. |

Related: [JSON Web Token (JWT)](/documentation/System/JWT/)
