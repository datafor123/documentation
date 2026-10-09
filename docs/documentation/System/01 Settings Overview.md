---
title: Settings Overview
permalink: /documentation/System/Settings-Overview/
description: Where each administration page is in the Settings area of the console.
createTime: 2026/10/09 17:30:00
---

# Settings Overview

Administrators open **Settings** (gear icon) in the left navigation. Pages are grouped as follows; a page appears only when its plugin is installed and licensed.

| Group | Page | Use it to | Guide |
| --- | --- | --- | --- |
| **General** | **License** | View and update the license | |
| | **Email** | Set the SMTP server for alerts, password-reset and registration codes, and upload approval results | [Mail Server Configuration](/documentation/System/Mail-Server-Configuration/) |
| | **System configuration** | Defaults for new reports and models, query limits, first day of the week | [System Configuration](/documentation/System/System-Configuration/) |
| | **Branding** | Logo, colours, login page, interface font | [White Label](/documentation/Embedded/White-Label/) |
| **Access & Integration** | **Single sign-on** | LDAP, OAuth 2.0, SAML 2.0 and CAS | [LDAP](/documentation/System/LDAP/), [OAuth2](/documentation/System/OAuth2-Authentication/), [SAML2](/documentation/System/SAML2/), [CAS](/documentation/System/CAS-Authentication/) |
| | **Site address** | The public address of the server | |
| | **Embed tokens (JWT)** | Sign-in for embedded reports | [JSON Web Token (JWT)](/documentation/System/JWT/) |
| | **Cross-origin access (CORS)** | Allow other sites to call the server | |
| **Data** | **Database drivers** | Upload JDBC drivers | [JDBC Driver Management](/documentation/Datasource/JDBC-Driver-Management/) |
| | **Query engine** | Query limits and display of special values | [Query Engine](/documentation/System/Query-Engine/) |
| | **Maps** | Tile and geocoding services for GIS maps | [GIS Map Settings](/documentation/Visualization/GIS-Map-Settings/) |
| **AI Agent** | **AI service** | Connect the AI Agent and language models | [How to Enable the AI Feature](/documentation/AI-Agent/AI-Feature/) |
| | **Knowledge indexes** | What the AI Agent has learned from each model, refresh schedules | [Preparing Data for AI](/documentation/AI-Agent/Preparing-Data-for-AI/) |
| **Operations** | **Backup and restore** | Back up, schedule and restore | [Backup and Restore](/documentation/System/backup/) |
| | **Audit log** | Choose which operations are recorded | [Permission Evaluation Overview](/documentation/System/Permission-Evaluation-Overview/) |
| | **Multi-tenancy** | Create and manage tenants | [Multi-tenancy](/documentation/Multi-tenancy/Multi-tenancy/) |

Each page has its own address (for example `#/settings/sso/ldap`), so reloading stays on the page and the browser's Back button returns to the previous settings page. Pages with unsaved changes ask before you leave. Below 1,280 px window width the second-level navigation becomes a list at the top.

Names before 10.00: *White label* is now **Branding**, *Vector indexes* **Knowledge indexes**, the OLAP page **Query engine**, the JDBC page **Database drivers**; LDAP, OAuth2, SAML2 and CAS are tabs of **Single sign-on**, and *Vector jobs* is the **Refresh schedule** column of Knowledge indexes.
