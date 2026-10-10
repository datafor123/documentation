---
title: Site Address
permalink: /documentation/System/Site-Address/
tags:
  - Settings
  - Deployment
description: Set the Site URL, the public address of Datafor that tenant addresses and the default AI Agent address are built from.
createTime: 2026/10/10 10:00:00
---

# Site Address

**Site URL** is the address people use to open Datafor. Set it once the server has its final host name, for example after you put it behind a reverse proxy.

## Set the Site URL

1. Open **Settings › Access & Integration › Site address**.
2. In **Site URL**, enter the address users type in the browser, including the `/datafor/` path, for example `https://bi.example.com/datafor/`.
3. Click **Save**.

Datafor adds a trailing `/` if it is missing. Until a value is saved, the field shows `fully-qualified-server-url` from `pentaho-solutions/system/server.properties`, which ships as `http://localhost:28080/datafor/`. The value is stored in the repository, separately for each tenant, and needs no restart.

## What uses it

| Where | Address built from **Site URL** |
| --- | --- |
| **Multi-tenancy** list | The address of each tenant: **Site URL** followed by `t/<tenant id>`, for example `https://bi.example.com/datafor/t/tenant16`. See [Multi-tenancy](/documentation/Multi-tenancy/Multi-tenancy/). |
| AI Agent | While **Public URL** in **Settings › AI Agent › AI service** is empty, browsers reach the AI Agent at **Site URL** followed by `ai`, for example `https://bi.example.com/datafor/ai`. See [How to Enable the AI Feature](/documentation/AI-Agent/AI-Feature/). |

With the shipped value, these addresses point to `localhost` and work only on the server itself.

## Related settings in server.properties

`fully-qualified-server-url` in `server.properties` is a separate setting that Datafor reads at startup. Single sign-on takes the protocol of its return addresses from it, and SAML 2.0 builds its ACS URL from it (see [Single Sign-On Overview](/documentation/System/Single-Sign-On/#protocol-and-host-of-the-return-addresses)). When you deploy behind a reverse proxy, set both to the same public address: the file as described in [Deploying Datafor Behind Nginx](/documentation/Setup/Deploying-Datafor-Behind-Nginx/), and **Site URL** on this page.
