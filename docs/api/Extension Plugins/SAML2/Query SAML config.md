---
title: Query SAML config
permalink: /api/Extension Plugins/SAML2/Query SAML config/
tags:
  - api
  - Extension Plugins
  - Authentication
  - SAML2
description: Read the SAML 2.0 single sign-on settings.
createTime: 2026/09/01 22:03:26
---
Returns the SAML 2.0 single sign-on settings shown under **SAML2 settings** in the console.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-saml/api/application/query` |
| Permission | Administrator user type; the SAML plugin must be installed |
| Content type | `application/json` |

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-saml/api/application/query" \
  -H "Content-Type: application/json" -d '{}'
```

```json
{
  "success": true,
  "code": "200",
  "data": {
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
}
```

The fields are described on [Save SAML config](/api/Extension%20Plugins/SAML2/Save%20SAML%20config/).

Related: [SAML2 Authentication](/documentation/System/SAML2/)
