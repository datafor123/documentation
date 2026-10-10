---
title: Add or modify a rule for objects
permalink: /api/Data Security/Objs/Add or modify a rule for objects/
tags:
  - api
  - Data Security
description: Create or replace a Table & column access policy that hides tables, views, or columns from users, roles, or user types.
createTime: 2026/09/01 22:03:26
---
Creates a **Table & column access** policy, or replaces one when `id` is sent. A policy lists tables or columns of a connection and, for each, who can or cannot see them.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/auth/obj/update` |
| Permission | **Full control** on the connection |
| Content type | `application/json` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | body | string | To update | Policy ID. Omit to create. Updating replaces all objects and subjects. |
| `dbconn` | body | string | Yes | Connection name. |
| `desc` | body | string | Yes | **Policy name**. |
| `enable` | body | string | No | `1` (default) active, `0` draft. |
| `configList` | body | array | Yes | One entry per table or column. |
| `configList[].schema` | body | string | Yes | Schema. |
| `configList[].tbname` | body | string | Yes | Table or view. |
| `configList[].obj_type` | body | string | Yes | `1` whole table, `2` column. For the same table, use either the whole table or columns, not both. |
| `configList[].colname` | body | string | With `obj_type` 2 | Column. Must be empty for `obj_type` 1. |
| `configList[].visible` | body | string | Yes | `1` **Only selected subjects can view**: everyone not in `grantedList` is excluded. `0` **Selected subjects cannot view**: the subjects in `grantedList` are excluded. Use the same value for every entry of a policy. |
| `configList[].grantedList` | body | array | With `visible` 0 | Subjects: `{"name": "...", "type": "0"}` with `type` `0` user, `1` role, `2` user type (`Administrator`, `SYS_Creator`, `SYS_Reader`). |

## Example

Only the `Finance` role can see the `salary` column:

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/auth/obj/update" \
  -H "Content-Type: application/json" \
  -d '{
    "dbconn": "Sales DW",
    "desc": "Salary - Finance only",
    "enable": "1",
    "configList": [
      {
        "schema": "public", "tbname": "employees", "obj_type": "2", "colname": "salary",
        "visible": "1",
        "grantedList": [ { "name": "Finance", "type": "1" } ]
      }
    ]
  }'
```

```json
{ "success": true, "code": "200", "id": "371063d227944c5386fbe81faf8c3bc0" }
```

## Errors

HTTP 200 with `success: false`.

| `code` | `msg` | When |
| --- | --- | --- |
| `401` | `No administrative privileges:<connection>` | The caller lacks Full control on the connection. |
| `400` | `configList cannot be empty`, `obj_type must be 1 or 2`, `visible must be 0 or 1`, `column name cannot be empty`, `table policy cannot contain column name`, `table not found: ...`, `column not found: ...`, `grantedList cannot be empty for denySelected policy`, `conflicting visibility for object: ...`, `conflicting object policy for recipient: ...`, `user not found: ...`, `role not found: ...` | The policy is invalid. |
| `400` or `500` | `Permission group does not exist` / `Permission group is not editable` | `id` does not exist on this connection, or the policy is locked. |

Related: [Data Security](/documentation/Datasource/Data-Security/), [OLS evaluation](/documentation/System/Permission-Evaluation-Overview/#_4-ols-evaluate-each-policy-then-combine-exclusions)
