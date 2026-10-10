---
title: Get users for grant
permalink: /api/Users/Get users for grant/
tags:
  - api
  - Users
description: List users with a few public fields, for picking people to share with or grant permissions to.
createTime: 2026/09/01 22:03:26
---

Lists users with only their user name, name, company and department. The console uses it in user pickers, for example when sharing a file or granting permissions; unlike [Get Users](/api/Users/Get%20Users/), any signed-in user may call it.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor-modeler/api/user/speciallist` |
| Permission | Any signed-in user |
| Content type | None |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `start` | query | integer | No | Zero-based offset of the first user. Default `0`. |
| `count` | query | integer | No | Number of users to return. Default: all. |
| `filter` | query | string | No | Search text, matched as in [Get Users](/api/Users/Get%20Users/). |
| `enabled` | query | string | No | `1` for enabled users only, `0` for disabled users only. |
| `orderBy` | query | string | No | Column to sort by, for example `username`. |
| `withEdit` | query | boolean | No | `true` adds `usertype` and `canEdit`, to tell users who can edit content from read-only users. Default `false`. |

## Example

```bash
curl -u analyst1:password -G "http://localhost:28080/datafor/plugin/datafor-modeler/api/user/speciallist" \
  --data-urlencode "enabled=1" --data-urlencode "withEdit=true"
```

```json
{
  "success": true,
  "code": "200",
  "data": {
    "success": true,
    "total": 2,
    "list": [
      {"userid": "admin", "username": "admin", "name": "Administrator", "dept": "IT", "usertype": "Administrator", "canEdit": true},
      {"userid": "analyst1", "username": "analyst1", "name": "Analyst One", "dept": "Sales", "usertype": "SYS_Reader", "canEdit": false}
    ]
  }
}
```

| Field | Description |
| --- | --- |
| `userid`, `username`, `name`, `company`, `dept` | Identity fields. Empty fields are left out. |
| `usertype` | `Administrator`, `SYS_Creator` or `SYS_Reader`. With `withEdit=true` only. |
| `canEdit` | `true` for Administrator and SYS_Creator users. With `withEdit=true` only. |

## Errors

If the user table cannot be read, the response still has `"success": true`, but `data.success` is `false` and `data.msg` has the reason.

Related: [Get Users](/api/Users/Get%20Users/)
