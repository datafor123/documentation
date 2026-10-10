---
title: Verify a LDAP
permalink: /api/Extension Plugins/LDAP/Verify a LDAP/
tags:
  - api
  - Extension Plugins
  - Authentication
  - LDAP
description: Test a connection to the LDAP server with the given settings, without saving them.
createTime: 2026/09/01 22:03:26
---
Connects to the LDAP server with the given settings and binds with the bind DN. This is **Test connection** in the console. Nothing is saved.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-ldap/api/application/verifyConfig` |
| Permission | Administrator user type; the LDAP plugin must be installed |
| Content type | `application/json` |

## Parameters

The body takes the same fields as [Save LDAP config](/api/Extension%20Plugins/LDAP/Save%20LDAP%20config/). The test uses `url`, `initial`, `authtype`, `dn` and `secret`.

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-ldap/api/application/verifyConfig" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "ldap://ldap.example.com:389",
    "initial": "com.sun.jndi.ldap.LdapCtxFactory",
    "authtype": "simple",
    "dn": "cn=admin,dc=example,dc=com",
    "secret": "bind-password"
  }'
```

```json
{ "success": true }
```

When the server cannot be reached or the bind fails, the response has `success: false` and the reason in `msg`.

Related: [LDAP Integration Configuration](/documentation/System/LDAP/)
