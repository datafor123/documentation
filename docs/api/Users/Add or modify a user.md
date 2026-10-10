---
title: Add or modify a user
permalink: /api/Users/Add or modify a user/
tags:
  - api
  - Users
description: Create a user, or update an existing user's profile, password, user type and roles.
createTime: 2026/09/01 22:03:26
---

Creates a user when `username` is new, otherwise updates that user.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/user/insertOrUpdate` |
| Permission | Administrator. Other users may update their own profile only. |
| Content type | `application/x-www-form-urlencoded` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `username` | form | string | Yes | Login name. Matched case-insensitively against existing user names and emails. |
| `password` | form | string | On create | New password. On update, sending it changes the password. |
| `usertype` | form | string | Recommended on create | `Administrator`, `SYS_Creator` or `SYS_Reader`. |
| `roles` | form | string | No | Business roles, joined with `&`, for example `Sales&Finance`. Create them first with [Add a role](/api/Roles/Add%20a%20role/). |
| `name` | form | string | No | Full name. |
| `email` | form | string | No | Email address. Must not belong to another user. Used for password reset and registration codes. |
| `title`, `company`, `dept`, `dob`, `mobile` | form | string | No | Profile fields. |
| `enabled` | form | string | No | `1` can sign in, `0` cannot. New users default to `1`. |
| `ai_enabled` | form | string | No | `1` lets the user use the AI Agent, within the number of AI users the license allows. New users default to `0`. |

On update, only the fields you send change; an empty value is ignored, so a field cannot be cleared this way.

Roles: when the request has `roles` or `usertype`, the user's roles are replaced by `roles` plus the user type. If `usertype` is left out, the current user type is kept (a new user gets `SYS_Reader`). If neither is sent, roles stay as they are; send `usertype` when you create a user, or the user starts without a user type.

When a user updates their own profile without being an administrator, `enabled`, `ai_enabled`, `usertype` and `roles` are ignored.

## Example

```bash
curl -u admin:password -X POST "http://localhost:28080/datafor/plugin/datafor-modeler/api/user/insertOrUpdate" \
  -d "username=analyst1" \
  --data-urlencode "password=<initial-password>" \
  -d "usertype=SYS_Reader" \
  --data-urlencode "roles=Sales&Finance" \
  --data-urlencode "name=Analyst One" \
  -d "email=analyst1@example.com" \
  -d "enabled=1"
```

```json
{
  "success": true,
  "username": "analyst1"
}
```

## Errors

| `code` | When |
| --- | --- |
| `"401"` | The caller is not an administrator and `username` is not their own (`msg`: `no auth`). |
| `"409"` | Creating a user whose name or email already exists, or giving a user an email that another user has (`msg`: `<value> already existed`). |
| `AI_USER_LIMIT_EXCEEDED` | `ai_enabled=1` would exceed the number of AI users in the license. |
| `AI_USER_LICENSE_INVALID` | `ai_enabled=1`, but the license could not be checked or does not allow AI users. |
| `"500"` | The user could not be saved; `msg` has the reason. |

Related: [Users](/documentation/System/Users/), [Bulk user operations](/api/Users/Bulk-user-operations/), [Get user types](/api/Users/Get%20user%20types/)
