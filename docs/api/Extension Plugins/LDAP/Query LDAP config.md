---
title: Query LDAP config
permalink: /api/Extension Plugins/LDAP/Query LDAP config/
tags:
  - api
  - Extension Plugins
  - Authentication
  - LDAP
description: Read the LDAP sign-in settings.
createTime: 2026/09/01 22:03:26
---
Returns the LDAP sign-in settings shown under **LDAP settings** in the console.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-ldap/api/application/query` |
| Permission | Administrator user type; the LDAP plugin must be installed |
| Content type | `application/json` |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-ldap/api/application/query" \
  -H "Content-Type: application/json" -d '{}'
```

```json
{
  "success": true,
  "code": "200",
  "data": {
    "enable": "1",
    "url": "ldap://ldap.example.com:389",
    "initial": "com.sun.jndi.ldap.LdapCtxFactory",
    "authtype": "simple",
    "dn": "cn=admin,dc=example,dc=com",
    "user_base": "cn=${username},dc=example,dc=com",
    "inituser": "1",
    "initroles": ["SYS_Reader", "Sales"]
  }
}
```

The fields are described on [Save LDAP config](/api/Extension%20Plugins/LDAP/Save%20LDAP%20config/). The bind password is not returned in clear text.

Related: [LDAP Integration Configuration](/documentation/System/LDAP/)
