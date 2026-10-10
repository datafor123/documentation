---
title: Get user types
permalink: /api/Users/Get user types/
tags:
  - api
  - Users
description: List the three user types that can be given to a user.
createTime: 2026/09/01 22:03:26
---

Lists the user types, the special roles that decide what a user may do in general. Every user has exactly one.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor-modeler/api/roles/types` |
| Permission | Any signed-in user |
| Content type | None |

## Parameters

None.

## Example

```bash
curl -u admin:password "http://localhost:28080/datafor/plugin/datafor-modeler/api/roles/types"
```

```json
{
  "success": true,
  "code": "200",
  "data": {
    "success": true,
    "total": 3,
    "list": [
      {"authority": "SYS_Reader"},
      {"authority": "SYS_Creator"},
      {"authority": "Administrator"}
    ]
  }
}
```

| `authority` | User type in the console |
| --- | --- |
| `SYS_Reader` | Reader: views content. |
| `SYS_Creator` | Creator: also creates reports and models. |
| `Administrator` | Administrator: also manages users, settings and permissions. |

Pass one of these values as `usertype` to [Add or modify a user](/api/Users/Add%20or%20modify%20a%20user/).

## Errors

| `code` | When |
| --- | --- |
| `"500"` | Unexpected server error. |

Related: [Users](/documentation/System/Users/#_3-selecting-a-user-type)
