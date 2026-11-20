---
title: Site Address
permalink: /documentation/System/Site-Address/
tags:
  - Settings
  - Deployment
description: Set the Site URL, the one public address of the Datafor server that tenant addresses, links in messages, IM apps and the default AI Agent address are built from.
createTime: 2026/10/10 10:00:00
---

# Site Address

**Site URL** is the address people use to open Datafor. Set it once the server has its final host name, for example after you put it behind a reverse proxy.

There is one Site URL for the whole server. Only administrators of the default tenant see this page; tenant administrators do not, and their tenants use the server's value.

## Set the Site URL

1. Open **Settings › Access & Integration › Site address**.
2. In **Site URL**, enter the address users type in the browser, including the `/datafor/` path, for example `https://bi.example.com/datafor/`.
3. Click **Save**.

Datafor adds a trailing `/` if it is missing. Until a value is saved, the field shows `fully-qualified-server-url` from `pentaho-solutions/system/server.properties`, which ships as `http://localhost:28080/datafor/`. The value is stored in the repository and needs no restart. Values that tenants saved before 10.02 are ignored.

## What uses it

| Where | Address built from **Site URL** |
| --- | --- |
| **Multi-tenancy** list | The address of each tenant: **Site URL** followed by `t/<tenant id>`, for example `https://bi.example.com/datafor/t/tenant16`. See [Multi-tenancy](/documentation/Multi-tenancy/Multi-tenancy/). |
| AI Agent | While **Public URL** in **Settings › AI Agent › AI service** is empty, browsers reach the AI Agent at **Site URL** followed by `ai`, for example `https://bi.example.com/datafor/ai`. See [How to Enable the AI Feature](/documentation/AI-Agent/AI-Feature/). |
| **IM platforms** | The callback, app home page and redirect addresses that you enter in WeCom, DingTalk and Feishu, for example `https://bi.example.com/datafor/plugin/datafor-im/api/sso/dingtalk/<app id>/start`, the links on IM cards and the Teams app package. See [IM Platforms](/documentation/System/IM-Platforms/#addresses-to-enter-in-the-platform). |
| Subscriptions and alerts | **Open report** links and attachment links in messages; for a tenant, **Site URL** followed by `t/<tenant id>/` |
| Share links | The links copied from a share's dialog, including the embed code |

With the shipped value, these addresses point to `localhost` and work only on the server itself. A tenant administrator who runs into this, for example the warning on the IM platforms page that the site address cannot be reached from IM apps and phones, has to ask the system administrator to change it.

**Trusted domains** used to be on this page. They are now on [Cross-Origin Access (CORS)](/documentation/System/CORS/#settings), per tenant.

## Related settings in server.properties

`fully-qualified-server-url` in `server.properties` is a separate setting that Datafor reads at startup. Single sign-on takes the protocol of its return addresses from it, and SAML 2.0 builds its ACS URL from it (see [Single Sign-On Overview](/documentation/System/Single-Sign-On/#protocol-and-host-of-the-return-addresses)). When you deploy behind a reverse proxy, set both to the same public address: the file as described in [Deploying Datafor Behind Nginx](/documentation/Setup/Deploying-Datafor-Behind-Nginx/), and **Site URL** on this page.
