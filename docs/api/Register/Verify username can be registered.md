---
title: Verify username can be registered
permalink: /api/Register/Verify username can be registered/
tags: ["api","Users","Register"]
description: 
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-modeler/api/user/isRightUsernameForAdd
```

**Authorization**  
Authentication is **not required** to use this API.

**Content Type**  
`application/x-www-form-urlencoded`

---

## **Description**
This API checks whether a given username can be used for registration. The verification is **case-insensitive**, meaning uppercase and lowercase variations of the same username are treated identically.

---

### **Request Example**
```yaml
username: admin
```

### **Parameters Schema**

| Name       | Location | Type   | Required | Description |
|------------|----------|--------|----------|-------------|
| `username` | body    | string | **Yes**  | The username to be verified (case-insensitive). |

---

## **Response Examples**

### **Successful Response (HTTP 200)**
```json
{
  "success": true
}
```

### **Failure Response (Example)**
```json
{
  "msg": "Username already exists",
  "success": false
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                              | Description | Data Schema |
|------------------|----------------------------------------------------------------------|-------------|-------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)              | Request was successful | Inline |

### **Response Data Schema (HTTP 200)**

| Name      | Type     | Required | Description |
|-----------|---------|----------|-------------|
| `success` | boolean | **Yes**  | Indicates whether the username is available for registration. |
| `msg`     | string  | No       | Response message (only present when the username cannot be used). |
