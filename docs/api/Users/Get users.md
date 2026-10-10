---
title: Get Users
permalink: /api/Users/Get Users/
tags:
  - api
  - Users
description: List the users of the current tenant with paging, search and optional roles.
createTime: 2026/09/01 22:03:26
---

Lists the users of the current tenant, as on **Settings › Users**.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor-modeler/api/user/list` |
| Permission | Administrator |
| Content type | None |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `start` | query | integer | No | Zero-based offset of the first user. Default `0`. |
| `count` | query | integer | No | Number of users to return. Default: all. |
| `filter` | query | string | No | Search text. Each space-separated word must occur (case-insensitive) in the user name, name, title, company, department, mobile or email. |
| `enabled` | query | string | No | `1` for enabled users only, `0` for disabled users only. |
| `orderBy` | query | string | No | Column to sort by, for example `username` or `create_time desc`. |
| `withRole` | query | boolean | No | `true` adds the user type and roles of each user. Default `false`. |

## Example

```bash
curl -u admin:password -G "http://localhost:28080/datafor/plugin/datafor-modeler/api/user/list" \
  --data-urlencode "start=0" --data-urlencode "count=20" --data-urlencode "withRole=true"
```

```json
{
  "success": true,
  "code": "200",
  "data": {
    "success": true,
    "total": 2,
    "list": [
      {
        "userid": "admin",
        "username": "admin",
        "name": "Administrator",
        "email": "admin@example.com",
        "dept": "IT",
        "enabled": "1",
        "ai_enabled": "1",
        "create_time": 1737599864898,
        "usertype": "Administrator",
        "roles": "",
        "rolesList": [{"rolename": "Administrator", "type": "2"}],
        "canEdit": true
      },
      {
        "userid": "analyst1",
        "username": "analyst1",
        "name": "Analyst One",
        "email": "analyst1@example.com",
        "dept": "Sales",
        "enabled": "1",
        "ai_enabled": "0",
        "create_time": 1737601114115,
        "usertype": "SYS_Reader",
        "roles": "Sales&Finance",
        "rolesList": [
          {"rolename": "SYS_Reader", "type": "2"},
          {"rolename": "Sales", "type": "0"},
          {"rolename": "Finance", "type": "0"}
        ],
        "canEdit": false
      }
    ]
  }
}
```

| Field | Description |
| --- | --- |
| `total` | Number of users that match, across all pages. |
| `userid` | Internal user id. Differs from `username` for users of a non-default tenant. |
| `username` | Login name. |
| `name`, `title`, `company`, `dept`, `dob`, `mobile`, `email`, `description` | Profile fields. Empty fields are left out. |
| `enabled` | `"1"` can sign in; `"0"` cannot. |
| `ai_enabled` | `"1"` may use the AI Agent. |
| `create_time`, `update_time` | Milliseconds since 1970-01-01 UTC. |
| `usertype` | `Administrator`, `SYS_Creator` or `SYS_Reader`. With `withRole=true` only. |
| `roles` | Business roles, joined with `&`. With `withRole=true` only. |
| `rolesList` | All roles, each with `type`: `2` user type, `1` built-in role, `0` business role. With `withRole=true` only. |
| `canEdit` | `true` for Administrator and SYS_Creator users. With `withRole=true` only. |

Passwords are never returned.

## Errors

| `code` | When |
| --- | --- |
| `""` (empty) | The caller is not an administrator (`msg`: `no auth`). |

If the user table cannot be read, the response still has `"success": true`, but `data.success` is `false` and `data.msg` has the reason. Check both.

Related: [Users](/documentation/System/Users/), [Get users for grant](/api/Users/Get%20users%20for%20grant/)
