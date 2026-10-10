---
title: Add or modify a rule for rows
permalink: /api/Data Security/Rows/Add or modify a rule for rows/
tags:
  - api
  - Data Security
description: Create or replace a Row access policy that limits which records users, roles, or user types get from a table.
createTime: 2026/09/01 22:03:26
---
Creates a **Row access** policy, or replaces one when `id` is sent. A policy applies one or more conditions to tables of a connection for the selected users, roles, and user types. Each condition is validated against the database before it is saved.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/auth/row/update` |
| Permission | **Full control** on the connection. On a connection where the caller may not use SQL fragments, the policy is rejected with `SQL_FRAGMENT_FORBIDDEN`. |
| Content type | `application/json` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | body | string | To update | Policy ID. Omit to create. Updating replaces all conditions and subjects. |
| `dbconn` | body | string | Yes | Connection name. |
| `desc` | body | string | Yes | **Policy name**. |
| `enable` | body | string | No | `1` (default) active, `0` draft. |
| `configList` | body | array | Yes | One entry per table. |
| `configList[].schema` | body | string | Yes | Schema. |
| `configList[].tbname` | body | string | Yes | Table or view. |
| `configList[].sql` | body | string | Yes | The condition, written as a SQL `WHERE` clause without the keyword, for example `"region" = 'North'`. `(1=1)` means **Return all rows**. |
| `configList[].rows` | body | string | No | The console's condition-builder state as a JSON string. Leave it out when you write `sql` yourself; the console then shows the condition as SQL. |
| `grantedList` | body | array | Yes | **Applies to**: `{"name": "...", "type": "0"}` with `type` `0` user, `1` role, `2` user type (`Administrator`, `SYS_Creator`, `SYS_Reader`). |

Conditions can use two system variables, written without quotes: `#{system.username}` (the signed-in user's login name) and `#{system.business-roles-array}` (the user's business roles, for `in` and `not in`). Other variables, a token inside quotes, and the old `${system...}` spelling are rejected.

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/auth/row/update" \
  -H "Content-Type: application/json" \
  -d '{
    "dbconn": "Sales DW",
    "desc": "Store managers - own stores",
    "enable": "1",
    "configList": [
      { "schema": "public", "tbname": "stores", "sql": "\"store_manager\" = #{system.username}" }
    ],
    "grantedList": [ { "name": "Store Managers", "type": "1" } ]
  }'
```

```json
{ "success": true, "code": "200", "id": "8699a11df24c49ddab9451e249ff2c97" }
```

## Errors

HTTP 200 with `success: false`.

| `code` | `msg` | When |
| --- | --- | --- |
| `401` | `No administrative privileges:<connection>` | The caller lacks Full control on the connection. |
| `403` | `SQL_FRAGMENT_FORBIDDEN:<connection>` | The caller may not use SQL fragments on this connection. |
| `400` | `configList cannot be empty`, `grantedList cannot be empty`, `user not found: ...`, `role not found: ...`, `user type not found: ...`, `table not found: ...`, a variable error, or a database error from the condition | The policy is invalid. |
| `400` or `500` | `Permission group does not exist` / `Permission group is not editable` | `id` does not exist on this connection, or the policy is a locked system policy. |

Related: [Data Security](/documentation/Datasource/Data-Security/), [Verify a rule](/api/Data%20Security/Rows/Verify%20a%20rule/)
