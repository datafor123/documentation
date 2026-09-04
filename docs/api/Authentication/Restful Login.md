---
title: Restful Login
permalink: /api/Authentication/Restful Login/
tags:
  - api
  - Authentication
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor/api/extension/auth/login
```

**Description**  
This endpoint allows a user to log in. The login result is returned in JSON format.

**Content Type**  
`application/json`

---

## **Response Examples**

```json
{
  "msg": "login success",
  "jsessionid": "1EFBB53E585762CBD4DDBF918FBF5347",
  "data": "1",
  "success": true
}
```

```json
{
  "msg": "wrong password",
  "success": false
}
```

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description | Data schema |
|------------------|-------------------------------------------------------------------------|------------|------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                | none       | Inline     |

### **Response Data Schema (HTTP 200)**

| Name          | Type    | Required | Description                                             |
|---------------|---------|----------|---------------------------------------------------------|
| `msg`         | string  | Yes      | Descriptive message about the login attempt            |
| `jsessionid`  | string  | No       | Session ID for the login, if any                       |
| `data`        | string  | No       | `"1"` if just logged in, `"2"` if previously logged in  |
| `success`     | boolean | Yes      | Indicates whether the login was successful             |