---
title: Delete a role
permalink: /api/Roles/Delete a role/
tags:
  - api
  - Roles
description: Delete a business role from the role list.
createTime: 2026/09/01 22:03:26
---

Deletes a role from the role list of the current tenant.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/roles/delete` |
| Permission | Administrator |
| Content type | `application/x-www-form-urlencoded` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `authority` | form | string | Yes | Role name. |

Only the role entry is removed. Users who have the role keep it in their role list, and access control lists that name it are not changed; remove those first if the role should stop granting access.

## Example

```bash
curl -u admin:password -X POST "http://localhost:28080/datafor/plugin/datafor-modeler/api/roles/delete" \
  -d "authority=Sales"
```

```json
{
  "success": true,
  "code": "200"
}
```

A role name that does not exist also returns success.

## Errors

| `code` | When |
| --- | --- |
| `"400"` | `authority` is missing. |
| `"401"` | The caller is not an administrator. |
| `"500"` | The role could not be deleted; `msg` has the reason. |

Related: [Get roles](/api/Roles/Get%20roles/)
