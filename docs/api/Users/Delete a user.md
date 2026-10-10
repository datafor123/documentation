---
title: Delete a user
permalink: /api/Users/Delete a user/
tags:
  - api
  - Users
description: Delete a user and their role assignments.
createTime: 2026/09/01 22:03:26
---

Deletes a user and removes their role assignments. Files in the user's home folder and permissions granted to the user are not removed.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/user/delete` |
| Permission | Administrator, or the user themselves |
| Content type | `application/x-www-form-urlencoded` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `username` | form | string | Yes | Login name of the user. |

To delete several users in one call, see [Bulk user operations](/api/Users/Bulk-user-operations/).

## Example

```bash
curl -u admin:password -X POST "http://localhost:28080/datafor/plugin/datafor-modeler/api/user/delete" \
  -d "username=analyst1"
```

```json
{
  "success": true,
  "code": "200"
}
```

A user name that does not exist also returns success.

## Errors

| `code` | When |
| --- | --- |
| `"400"` | `username` is missing. |
| `"401"` | The caller is not an administrator and `username` is not their own. |
| `"500"` | The user could not be deleted; `msg` has the reason. |

Related: [Users](/documentation/System/Users/)
