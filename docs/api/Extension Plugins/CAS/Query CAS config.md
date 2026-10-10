---
title: Query CAS config
permalink: /api/Extension Plugins/Cas/Query CAS config/
tags:
  - api
  - Extension Plugins
  - Authentication
  - CAS
description: Read the CAS single sign-on settings.
createTime: 2026/09/01 22:03:26
---
Returns the CAS single sign-on settings shown under **CAS settings** in the console.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-cas/api/query` |
| Permission | Administrator user type; the CAS plugin must be installed |
| Content type | `application/json` |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-cas/api/query" \
  -H "Content-Type: application/json" -d '{}'
```

```json
{
  "success": true,
  "code": "200",
  "data": {
    "enable": "1",
    "type": "jasig",
    "center_url": "https://cas.example.com/cas",
    "login_url": "https://cas.example.com/cas/login",
    "logout_url": "https://cas.example.com/cas/logout",
    "inituser": "1",
    "initroles": ["SYS_Reader"],
    "ignoreList": ["/plugin/datafor-modeler/api", "/Login"],
    "includeList": []
  }
}
```

The fields are described on [Save CAS config](/api/Extension%20Plugins/Cas/Save%20CAS%20config/). `GET /plugin/datafor-cas/api/type/list` returns the supported CAS server types.

Related: [CAS Authentication](/documentation/System/CAS-Authentication/)
