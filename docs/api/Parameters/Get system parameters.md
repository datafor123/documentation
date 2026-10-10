---
title: Get system parameters
permalink: /api/Parameters/Get system parameters/
tags:
  - api
  - Parameters
description: List the system parameters (system.username and others) with their values for the current session.
createTime: 2026/10/10 10:00:00
---
Lists the system parameters, such as `system.username`, with their values for the caller's session. They are read-only.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor-modeler/api/parameter/system` |
| Permission | Any signed-in user |
| Content type | none |

## Example

```bash
curl -u admin:password \
  "http://localhost:28080/datafor/plugin/datafor-modeler/api/parameter/system"
```

```json
{
  "success": true,
  "msg": "",
  "data": [
    { "id": "system.username", "name": "system.username", "datatype": "2", "source": "3", "type": "1", "default": "admin", "desc": "Login name of the current user" },
    { "id": "system.business-roles-array", "name": "system.business-roles-array", "datatype": "2", "source": "3", "type": "1", "default": "[\"Sales\"]", "desc": "Business roles of the current user (without user types and platform roles), as a JSON array" }
  ]
}
```

`default` holds the value for the current session. The full list:

| Name | Value |
| --- | --- |
| `system.username` | Login name. |
| `system.userid` | User ID. |
| `system.tenant-id` | Tenant. |
| `system.roles` | All roles, including the user type, comma-separated. |
| `system.roles-array` | All roles, including the user type, as a JSON array. |
| `system.business-roles-array` | Business roles only, as a JSON array. |
| `system.locale`, `system.locale-language`, `system.locale-country` | Session locale, for example `en-US`, `en`, `US`. |
| `system.name`, `system.company`, `system.dept`, `system.title`, `system.email`, `system.mobile`, `system.dob`, `system.description` | Fields of the user's profile. |

In model SQL, reference them as `#{system.username}`. Row access conditions accept only `#{system.username}` and `#{system.business-roles-array}`.

Related: [Creating parameters](/documentation/Analysis/Creating-Parameters/), [Data Security](/documentation/Datasource/Data-Security/)
