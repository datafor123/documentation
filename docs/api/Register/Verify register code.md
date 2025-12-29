---
title: Verify register code
permalink: /api/Register/Verify register code/
tags: ["api","Users","Register"]
description: 
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-modeler/api/user/verifyRegisterCode
```

**Authorization**  
Authentication is **not required** to use this API.

**Content Type**  
`application/x-www-form-urlencoded`

---

## **Description**
This API verifies whether a given registration code is valid for the provided email address. The registration code is typically sent to the user's email during the signup process.

---

### **Request Example**
```json
{
  "email": "a@a.com",
  "code": "037173"
}
```

### **Parameters Schema**

| Name    | Location | Type   | Required | Description |
|---------|----------|--------|----------|-------------|
| `email` | body    | string | **Yes**  | The email address used for registration. |
| `code`  | body    | string | **Yes**  | The registration verification code sent to the email. |

---

## **Response Examples**

### **Successful Response (HTTP 200)**
```json
{
  "success": true
}
```

### **Failure Response (HTTP 200)**
```json
{
  "msg": "Email already existed",
  "code": 409,
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
| `msg`     | string  | No       | Response message (only present when the request fails). |
| `success` | boolean | **Yes**  | Indicates whether the verification was successful. |
