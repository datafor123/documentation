---
title: Get email config
permalink: /api/Email/Get email config/
tags:
  - api
  - Email
description: null
createTime: 2026/09/01 22:03:26
---

## GET Get email config

GET /api/emailconfig/getEmailConfig

Preconditions:The current user's user type must be Administrator

> Response Examples

```json
{
  "authenticate": "true",---
title: Get email config
permalink: /api/Email/Get email config/
tags: ["api","Email"]
description: 
---

## **GET Get email config**

**Endpoint**  
`GET /api/emailconfig/getEmailConfig`

### **Preconditions**
The current user's user type must be **Administrator**.

---

### **Response Example**

```json
{
  "authenticate": "true",
  "debug": "false",
  "defaultFrom": "",
  "fromName": "",
  "password": "",
  "smtpHost": "",
  "smtpPort": "25",
  "smtpProtocol": "smtp",
  "smtpQuitWait": "false",
  "useSsl": "false",
  "useStartTls": "false",
  "userId": ""
}
```

---

## **HTTP Responses**

| HTTP Status Code | Meaning                                                                 | Description | Data schema |
|------------------|-------------------------------------------------------------------------|------------|------------|
| 200              | [OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)                | none       | Inline     |

### **Response Data Schema (HTTP 200)**

| Name            | Type    | Required | Description |
|----------------|--------|----------|-------------|
| `authenticate`  | string | No       | Whether authentication is enabled (`true`/`false`) |
| `debug`         | string | No       | Debug mode (`true`/`false`) |
| `defaultFrom`   | string | No       | Default sender email |
| `fromName`      | string | No       | Sender's display name |
| `password`      | string | No       | Email password (if applicable) |
| `smtpHost`      | string | No       | SMTP server hostname |
| `smtpPort`      | string | No       | SMTP port (default: `25`) |
| `smtpProtocol`  | string | No       | SMTP protocol (`smtp` or `smtps`) |
| `smtpQuitWait`  | string | No       | Whether to wait for server response on quit (`true`/`false`) |
| `useSsl`        | string | No       | Whether SSL is used (`true`/`false`) |
| `useStartTls`   | string | No       | Whether STARTTLS is used (`true`/`false`) |
| `userId`        | string | No       | SMTP authentication user ID |
  "debug": "false",
  "defaultFrom": "",
  "fromName": "",
  "password": "",
  "smtpHost": "",
  "smtpPort": "25",
  "smtpProtocol": "smtp",
  "smtpQuitWait": "false",
  "useSsl": "false",
  "useStartTls": "false",
  "userId": ""
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

HTTP Status Code **200**

|Name|Type|Required|Restrictions|Title|description|
|---|---|---|---|---|---|
|» authenticate|string|false|none||none|
|» defaultFrom|string|false|none||none|
|» fromName|string|false|none||none|
|» password|string|false|none||none|
|» smtpHost|string|false|none||none|
|» smtpPort|string|false|none||none|
|» smtpProtocol|string|false|none||none|
|» smtpQuitWait|string|false|none||none|
|» useSsl|string|false|none||none|
|» useStartTls|string|false|none||none|
|» userId|string|false|none||none|