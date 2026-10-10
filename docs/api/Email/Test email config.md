---
title: Test email config
permalink: /api/Email/Test email config/
tags:
  - api
  - Email
description: Send a test message with the SMTP settings in the request, before saving them.
createTime: 2026/09/01 22:03:26
---

Sends a test message using the SMTP settings in the request body, not the saved ones, as **Test connection** on the Email settings page does. The message goes to the sender address (`defaultFrom`), with the subject `Datafor` and the text `Test Succeeded!`.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/email/sendEmailTest` |
| Permission | Administrator |
| Content type | `application/json` |

## Parameters

The fields are those returned by [Get email config](/api/Email/Get%20email%20config/).

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `smtpHost` | body | string | Yes | SMTP server. |
| `smtpPort` | body | integer | Yes | Port, for example `25`, `465` (SSL) or `587` (STARTTLS). |
| `smtpProtocol` | body | string | Yes | `smtp` or `smtps`. |
| `userId` | body | string | Yes | Account for signing in to the SMTP server. |
| `password` | body | string | Yes | Password of that account. |
| `authenticate` | body | boolean | Yes | `true` to sign in to the SMTP server. |
| `useStartTls` | body | boolean | No | `true` to upgrade the connection with STARTTLS. |
| `useSsl` | body | boolean | No | `true` to connect over SSL/TLS. |
| `defaultFrom` | body | string | Yes | Sender address. The test message is sent to this address. |
| `fromName` | body | string | No | Sender name. |

## Example

```bash
curl -u admin:password -X POST "http://localhost:28080/datafor/plugin/datafor-modeler/api/email/sendEmailTest" \
  -H "Content-Type: application/json" \
  -d '{
    "smtpHost": "smtp.example.com",
    "smtpPort": 465,
    "smtpProtocol": "smtps",
    "userId": "reports@example.com",
    "password": "<smtp-password>",
    "authenticate": true,
    "useStartTls": false,
    "useSsl": true,
    "defaultFrom": "reports@example.com",
    "fromName": "Datafor Reports"
  }'
```

```json
{
  "success": true,
  "code": "200"
}
```

Success means the SMTP server accepted the message. Check the sender mailbox, including the spam folder, to confirm delivery.

## Errors

| `code` | When |
| --- | --- |
| `"401"` | The caller is not an administrator. |
| `"500"` | Sending failed; `msg` has the mail server's or the mail library's message, for example an authentication or connection error. |

Related: [Mail Server Configuration](/documentation/System/Mail-Server-Configuration/#_3-test-the-connection)
