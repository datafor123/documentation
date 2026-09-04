---
title: Delete a connection
permalink: /api/Connections/Delete a connection/
tags:
  - api
  - Connections
description: null
createTime: 2026/09/01 22:03:26
---

**Method**  
`DELETE`

**Request URL**
```html
/plugin/datafor-modeler/api/connection/deletebyname
```

**Authorization**  
Use of this API requires authentication. For details about the authentication method, see  
[Authorization](/api/index/#_5-authentication-security).

**Preconditions**
1. The current user’s type **cannot** be `SYS_Reader`.
2. The current user must have **administrative** privileges for the connection.

**Content Type**  
No request body is typically used with `DELETE`. Parameters are provided via query string.

---

### **Parameters Schema**

| Name  | Location | Type   | Required | Description                    |
|-------|----------|--------|----------|--------------------------------|
| **name** | query    | string | No       | The name of the connection to delete |

---

## **Response Examples**

**200 Response**  
Indicates the request was processed successfully.

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description | Data schema |
|------------------|-------------------------------------------------------------------------|------------|------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                | none       | Inline     |