---
title: Add a role
permalink: /api/Roles/Add a role/
tags:
  - api
  - Roles
description: Create a business role that users can be given and that permissions can refer to.
createTime: 2026/09/01 22:03:26
---

Creates a business role. Give it to users with [Add or modify a user](/api/Users/Add%20or%20modify%20a%20user/) (`roles`), and refer to it in access control lists and Data Security.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/roles/insert` |
| Permission | Administrator |
| Content type | `application/x-www-form-urlencoded` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `authority` | form | string | Yes | Role name. Must not contain `&`, `\` or `/`. |

## Example

```bash
curl -u admin:password -X POST "http://localhost:28080/datafor/plugin/datafor-modeler/api/roles/insert" \
  -d "authority=Sales"
```

```json
{
  "success": true,
  "code": "200"
}
```

## Errors

| `code` | When |
| --- | --- |
| `"400"` | The name contains `&`, `\` or `/` (`msg`: `can not contain & \ /`). |
| `"401"` | The caller is not an administrator. |
| `"500"` | The role could not be stored, for example because it already exists; `msg` has the database message. |

Related: [Get roles](/api/Roles/Get%20roles/), [Delete a role](/api/Roles/Delete%20a%20role/)
