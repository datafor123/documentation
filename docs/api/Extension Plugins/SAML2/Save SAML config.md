---
title: Save SAML config
permalink: /api/Extension Plugins/SAML2/Save SAML config/
tags:
  - api
  - Extension Plugins
  - Authentication
  - SAML2
description: Save the SAML 2.0 single sign-on settings.
createTime: 2026/09/01 22:03:26
---
Saves the SAML 2.0 single sign-on settings. Register Datafor at the identity provider (IdP) with the Assertion Consumer Service URL `https://your-server/datafor/saml/consumer`; see [SAML2 Authentication](/documentation/System/SAML2/).

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-saml/api/application/update` |
| Permission | Administrator user type; the SAML plugin must be installed |
| Content type | `application/json` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `enable` | body | string | Yes | `1` turns SAML sign-in on, `0` off. |
| `idp_sso_url` | body | string | Yes | **IdP SSO URL**: the `Location` of the IdP's `SingleSignOnService`. |
| `idp_entity_id` | body | string | Yes | **IdP entity ID**: the `entityID` of the IdP metadata. |
| `idp_certificate` | body | string | Yes | **IdP signing certificate** (X.509, PEM, including the `BEGIN CERTIFICATE` and `END CERTIFICATE` lines). |
| `sp_entity_id` | body | string | Yes | Datafor's entity ID as registered at the IdP (also called the audience). |
| `allowed_clock_skew` | body | integer | Yes | **Allowed clock skew** between Datafor and the IdP, in minutes, for example `2`. |
| `fieldmap.username` | body | string | Yes | Assertion attribute holding the Datafor user name. |
| `fieldmap.name` | body | string | No | **Name attribute**. |
| `fieldmap.email` | body | string | No | **Email attribute**. |
| `inituser` | body | string | No | `1` creates a Datafor user on first sign-in. |
| `initroles` | body | string array | With `inituser` | Default user type (`SYS_Reader`, `SYS_Creator` or `Administrator`) and roles for new users. |
| `ignoreList` | body | string array | No | **Paths that skip single sign-on**. A request matches when its URL contains the entry. |
| `includeList` | body | string array | No | **Paths that require single sign-on**. While empty, every path not in `ignoreList` goes through single sign-on. |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-saml/api/application/update" \
  -H "Content-Type: application/json" \
  -d @saml.json
```

with `saml.json`:

```json
{
  "enable": "1",
  "idp_sso_url": "https://idp.example.com/saml2/sso",
  "idp_entity_id": "https://idp.example.com/metadata",
  "idp_certificate": "-----BEGIN CERTIFICATE-----\n<certificate>\n-----END CERTIFICATE-----\n",
  "sp_entity_id": "datafor",
  "allowed_clock_skew": 2,
  "fieldmap": {
    "username": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress",
    "name": "http://schemas.microsoft.com/identity/claims/displayname",
    "email": "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
  },
  "inituser": "1",
  "initroles": ["SYS_Reader"],
  "ignoreList": ["/plugin/datafor-modeler/api"],
  "includeList": []
}
```

```json
{ "success": true }
```

On failure the response has `success: false` and a `msg`.

Related: [SAML2 Authentication](/documentation/System/SAML2/), [Single Sign-On Overview](/documentation/System/Single-Sign-On/)
