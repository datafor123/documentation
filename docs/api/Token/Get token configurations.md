---
title: Get token configurations
permalink: /api/Token/Get token configurations/
tags: ["api","Authentication","Token"]
description: 
---

**Method**  
`GET`

**Request URL**
```html
/plugin/datafor-modeler/api/token/list
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Content Type**  
`application/json`

---

**Preconditions**
- The current user's user type **must** be `Administrator`.

---

### **Response Examples**

```json
{
  "data": [
    {
      "initroles": [
        "SYS_Reader"
      ],
      "fieldmap": {
        "name": "name",
        "email": "email",
        "username": "loginname"
      },
      "createdDate": 1737599864898,
      "inituser": "1",
      "lastModifiedDate": 1737601114115,
      "enable": "1",
      "expire": 86400,
      "name": "ERP",
      "token_name": "token",
      "creatorId": 1737601114115,
      "secret": "abcd",
      "algorithm": "HS256"
    }
  ],
  "success": true
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description        | Data schema |
|------------------|-------------------------------------------------------------------------|--------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | The request was successful. | Inline      |

### **Response Data Schema (HTTP 200)**

| Name            | Type     | Required | Restrictions | Description       |
|-----------------|----------|----------|--------------|-------------------|
| `data`          | [object] | **Yes**  | none         | List of token data objects. |
| ├── `initroles` | [string] | **No**  | none         | List of initial roles assigned to the token. |
| ├── `fieldmap`  | object   | **No**  | none         | Mapping of token fields. |
| │   ├── `name`  | string   | **Yes**  | none         | Field name for `name`. |
| │   ├── `email` | string   | **Yes**  | none         | Field name for `email`. |
| │   ├── `username` | string   | **Yes**  | none         | Field name for `username`. |
| ├── `inituser`  | string   | **No**  | none         | Initial user ID. |
| ├── `enable`    | string   | **No**  | none         | Token enable status (`1` for enabled). |
| ├── `expire`    | integer  | **No**  | none         | Token expiration time in seconds. |
| ├── `name`      | string   | **No**  | none         | Name of the token. |
| ├── `token_name`| string   | **No**  | none         | Token name. |
| ├── `secret`    | string   | **No**  | none         | Secret key for the token. |
| ├── `creatorId` | integer  | **No**  | none         | ID of the creator. |
| ├── `lastModifiedDate` | long     | **No** | none   | Last modified timestamp. |
| ├── `createdDate` | long     | **No** | none      | Creation timestamp. |
| ├── `algorithm` | string   | **No**  | none         | Token algorithm used (e.g., `HS256`). |
| `success`       | boolean  | **Yes**  | none         | Indicates if the request was successful (`true` or `false`). |
