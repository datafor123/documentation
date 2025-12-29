---
title: Get register code
permalink: /api/Register/Get register code/
tags: ["api","Users","Register"]
description: 
---

**Method**  
`POST`

**Request URL**
```html
/plugin/datafor-modeler/api/user/sendRegisterCode
```

**Authorization**  
Authentication is **not required** to use this API.

**Content Type**  
`application/x-www-form-urlencoded`

---

## **Description**
This API sends a registration verification code to the specified email address. The code is used for user registration and must be entered within a valid time frame.

---

## **Parameters**

### **Body Parameters Schema**
| Name     | Location | Type   | Required | Description |
|----------|----------|--------|----------|-------------|
| `email`  | body    | string | **Yes**  | The recipient email address where the registration code will be sent. |
| `locale` | body    | string | No       | The preferred language and region format (e.g., `en-US`). |

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
  "msg": "email already sent, if not received, please send 1 min later",
  "code": "send.later",
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
| `msg`     | string  | No       | Response message (only present when the request is unsuccessful). |
| `code`    | string  | No       | Error code indicating the reason for failure. |
| `success` | boolean | **Yes**  | Indicates whether the request was successful. |
