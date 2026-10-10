---
title: Get email config
permalink: /api/Email/Get email config/
tags:
  - api
  - Email
description: Read the outgoing mail server settings, including the SMTP password.
createTime: 2026/09/01 22:03:26
---

Returns the SMTP settings that Datafor uses to send email, as on **Settings › General › Email**.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor-modeler/api/email/getEmailConfig` |
| Permission | Administrator |
| Content type | None |

## Parameters

None.

## Example

```bash
curl -u admin:password "http://localhost:28080/datafor/plugin/datafor-modeler/api/email/getEmailConfig"
```

```json
{
  "smtpHost": "smtp.example.com",
  "smtpPort": 465,
  "smtpProtocol": "smtps",
  "userId": "reports@example.com",
  "password": "<smtp-password>",
  "authenticate": true,
  "useStartTls": false,
  "useSsl": true,
  "defaultFrom": "reports@example.com",
  "fromName": "Datafor Reports",
  "isSmtpQuitWait": false,
  "isDebug": false
}
```

The response is not wrapped in `success`/`data`.

| Field | Console field |
| --- | --- |
| `smtpHost` | **SMTP server** |
| `smtpPort` | **Port** (a number) |
| `smtpProtocol` | **Protocol**: `smtp` or `smtps` |
| `userId` | **Username** |
| `password` | **Password**, in plain text |
| `authenticate` | Whether to sign in to the SMTP server |
| `useStartTls` | **Use STARTTLS** |
| `useSsl` | **Use SSL/TLS** |
| `defaultFrom` | **Sender address** |
| `fromName` | **Sender name** |
| `isSmtpQuitWait`, `isDebug` | Mail library options, not shown in the console |

The SMTP password is returned in plain text to administrators. Treat the response as a secret: do not log it or pass it on.

## Errors

| `code` | When |
| --- | --- |
| `"401"` | The caller is not an administrator (`msg`: `no auth`). |

Related: [Mail Server Configuration](/documentation/System/Mail-Server-Configuration/), [Test email config](/api/Email/Test%20email%20config/)
