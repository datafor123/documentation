---
title: Generate a token
permalink: /api/Token/Generate a token/
tags: ["api","Authentication","Token"]
description: 
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-modeler/api/token/generate
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

### Parameters

```yaml
name: ERP
privateKey: abcd
payload:
  username: admin
  name: ERP
  roles:
    - SYS_CREATOR
    - Manager
  inituser: string
  password: string
  company: string
  dept: string
  email: string
  description: string
  title: string
  dob: string
  mobile: string
```

| Name         | Location | Type     | Required | Description                             |
|--------------|----------|----------|----------|-----------------------------------------|
| body         | body     | object   | yes      | The main data object for generating the token. |
| ├── name     | body     | string   | yes      | Name of the token. |
| ├── privateKey | body   | string   | yes      | Private key associated with the token. |
| ├── payload  | body     | object   | yes      | The payload object containing user and role info. |
| &emsp;├── username   | body | string | yes    | Username for token generation. |
| &emsp;├── name       | body | string | no     | User's name. |
| &emsp;├── roles      | body | array(string) | no | List of user roles. |
| &emsp;├── inituser   | body | string | no     | Initial user. |
| &emsp;├── password   | body | string | no     | User password. |
| &emsp;├── company    | body | string | no     | Company name. |
| &emsp;├── dept       | body | string | no     | Department name. |
| &emsp;├── email      | body | string | no     | Email address. |
| &emsp;├── description | body | string | no    | Description. |
| &emsp;├── title      | body | string | no     | Title. |
| &emsp;├── dob        | body | string | no     | Date of birth. |
| &emsp;└── mobile     | body | string | no     | Mobile number. |

---

## **Response Examples**

```json
{
  "success": true,
  "expire": 86400,
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFUlAiOiJhZG1pbiIsImV4cCI6MTcyMzAxNTkxNn0.uEmUwBfNAd5FtzjPPrldU9bierng7fd8rCVlZtVPY2k"
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description        | Data schema |
|------------------|-------------------------------------------------------------------------|--------------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                  | The request was successful. | Inline      |

### **Response Data Schema (HTTP 200)**

| Name     | Type    | Required | Restrictions | Description       |
|----------|---------|----------|--------------|-------------------|
| `success`| boolean | **Yes**  | none         | Indicates if the token generation was successful (`true` or `false`). |
| `expire` | integer | **Yes**  | none         | The token's expiration time in seconds. |
| `token`  | string  | **Yes**  | none         | The generated token string. |