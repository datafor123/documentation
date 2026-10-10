---
title: Save LDAP config
permalink: /api/Extension Plugins/LDAP/Save LDAP config/
tags:
  - api
  - Extension Plugins
  - Authentication
  - LDAP
description: Save the LDAP sign-in settings.
createTime: 2026/09/01 22:03:26
---
Saves the LDAP sign-in settings. Test them first with [Verify a LDAP](/api/Extension%20Plugins/LDAP/Verify%20a%20LDAP/).

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-ldap/api/application/update` |
| Permission | Administrator user type; the LDAP plugin must be installed |
| Content type | `application/json` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `enable` | body | string | Yes | `1` turns LDAP sign-in on, `0` off. |
| `url` | body | string | Yes | **LDAP URL**, with protocol and port, for example `ldap://ldap.example.com:389`. |
| `initial` | body | string | Yes | **Context factory (JNDI)**, normally `com.sun.jndi.ldap.LdapCtxFactory`. |
| `authtype` | body | string | Yes | **Authentication method**: `simple` or `none` (anonymous). |
| `dn` | body | string | With `simple` | **Bind DN**, for example `cn=admin,dc=example,dc=com`. |
| `secret` | body | string | No | **Bind password**. Leave it out to keep the stored password. |
| `user_base` | body | string | Yes | **User DN pattern**. `${username}` is replaced with the name typed at sign-in, for example `cn=${username},dc=example,dc=com`. |
| `inituser` | body | string | No | `1` creates a Datafor user on an LDAP user's first sign-in. |
| `initroles` | body | string array | With `inituser` | Default user type (`SYS_Reader`, `SYS_Creator` or `Administrator`) and roles for users created on first sign-in. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-ldap/api/application/update" \
  -H "Content-Type: application/json" \
  -d '{
    "enable": "1",
    "url": "ldap://ldap.example.com:389",
    "initial": "com.sun.jndi.ldap.LdapCtxFactory",
    "authtype": "simple",
    "dn": "cn=admin,dc=example,dc=com",
    "secret": "bind-password",
    "user_base": "cn=${username},dc=example,dc=com",
    "inituser": "1",
    "initroles": ["SYS_Reader"]
  }'
```

```json
{ "success": true }
```

On failure the response has `success: false` and a `msg`.

Related: [LDAP Integration Configuration](/documentation/System/LDAP/)
