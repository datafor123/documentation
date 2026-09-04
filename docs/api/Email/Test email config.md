---
title: Test email config
permalink: /api/Email/Test email config/
tags:
  - api
  - Email
description: null
createTime: 2026/09/01 22:03:26
---

## **POST Test email config**

**Endpoint**  
`POST /plugin/datafor-modeler/api/email/sendEmailTest`

### **Preconditions**
- The current user's user type must be **Administrator**.

---

### **Request Example**
```json
{
  "smtpHost": "smtp.a.com",
  "smtpPort": "465",
  "userId": "a@a.com",
  "password": "",
  "smtpProtocol": "smtp",
  "defaultFrom": "a@a.com",
  "fromName": "a",
  "useStartTls": "false",
  "useSsl": "true",
  "authenticate": true
}
```

---

### **Params**

| Name          | Location | Type    | Required | Description |
|--------------|----------|---------|----------|-------------|
| `smtpHost`   | body     | string  | Yes      | SMTP server hostname |
| `smtpPort`   | body     | string  | Yes      | SMTP port number |
| `userId`     | body     | string  | Yes      | SMTP authentication user ID |
| `password`   | body     | string  | Yes      | SMTP password |
| `smtpProtocol` | body   | string  | Yes      | SMTP protocol (`smtp` or `smtps`) |
| `defaultFrom` | body   | string  | Yes      | Default sender email |
| `fromName`   | body     | string  | Yes      | Sender's display name |
| `useStartTls` | body   | boolean | Yes      | Use STARTTLS (`true`/`false`) |
| `useSsl`     | body     | boolean | Yes      | Use SSL (`true`/`false`) |
| `authenticate` | body   | boolean | Yes      | Enable authentication (`true`/`false`) |

---

### **Response Examples**

#### ✅ **Success Response**
```json
{
  "code": "200",
  "success": true
}
```

#### ❌ **Failure Response**
```json
{
  "msg": "Empty address",
  "code": "500",
  "success": false,
  "type": "1"
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description | Data schema |
|------------------|-------------------------------------------------------------------------|------------|------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                | none       | Inline     |

### **Response Data Schema (HTTP 200)**

| Name      | Type    | Required | Description |
|----------|--------|----------|-------------|
| `msg`    | string | No       | Response message (e.g., error details) |
| `code`   | string | No       | Response status code (`200` for success, `500` for failure) |
| `success` | boolean | Yes     | `true` if request was successful, `false` otherwise |
| `type`   | string | No       | Error type (if applicable) |