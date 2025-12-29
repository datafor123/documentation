---
title: Verify email can be registered
permalink: /api/Register/Verify email can be registered/
tags: ["api","Users","Register"]
description: 
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-modeler/api/user/isRightEmailForAdd
```

**Authorization**  
Authentication is **not required** to use this API.

**Content Type**  
`application/x-www-form-urlencoded`

---

## **Description**
This API verifies whether an email address can be used for registration. It checks if the provided email is valid and not already registered in the system.

---

### **Request Example**
```yaml
email: a@a.com
```

### **Parameters Schema**

| Name    | Location | Type   | Required | Description |
|---------|----------|--------|----------|-------------|
| `email` | body    | string | **Yes**  | The email address to be verified for registration eligibility. |

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
  "msg": "Email is already registered",
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
| `success` | boolean | **Yes**  | Indicates whether the email is available for registration. |
| `msg`     | string  | No       | Response message (only present when the email cannot be used). |
