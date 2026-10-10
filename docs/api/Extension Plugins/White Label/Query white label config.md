---
title: Get branding configuration
permalink: /api/Extension Plugins/White Label/Query white label config/
tags:
  - api
  - Extension Plugins
  - Branding
description: Read the current branding settings of the login page and console.
createTime: 2026/09/01 22:03:26
---
Returns the current branding settings. When nothing has been saved, the product defaults are returned. The login page reads this endpoint, so it works without signing in.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor/api/core/wl/query` |
| Permission | None |
| Content type | none |

## Example

```bash
curl -X POST "http://localhost:28080/datafor/plugin/datafor/api/core/wl/query"
```

```json
{
  "success": true,
  "code": "200",
  "data": {
    "whiteLabelEnabled": true,
    "wl_logo.png": "/datafor/plugin/datafor/api/core/wl/wl_logo.png",
    "wl_main.png": "/datafor/plugin/datafor/api/core/wl/wl_main.png",
    "wl_main_small.png": "/datafor/plugin/datafor/api/core/wl/wl_main_small.png",
    "wl_favicon.ico": "/datafor/plugin/datafor/api/core/wl/wl_favicon.ico",
    "loginShowWelcomeMessage": true,
    "loginWelcomeText": "Welcome to Example Analytics",
    "loginBgColor": "#F5F7FA",
    "loginPrimaryButtonBg": "#1F6FEB",
    "loginCopyrightText": "Copyright 2026 Example Inc.",
    "allowRegister": false,
    "allowGoogleLogin": false,
    "consoleSoftwareNameTitle": "Example Analytics",
    "consoleSoftwareNameSubtitle": "Sales reporting",
    "consoleSidebarBackground": "#0B1F33",
    "consoleShowHelpMenu": true,
    "homePageTitle": "Example Analytics",
    "otherFontFamily": "",
    "cards": [
      { "id": "sales", "title": "Sales Preview", "pageLink": "/public/Sales/Revenue.datafor", "image": "/datafor/plugin/datafor/api/core/wl/wl_sales.png" }
    ]
  }
}
```

The response is abridged. The keys follow the sections of the branding editor:

| Keys start with | Section |
| --- | --- |
| `whiteLabelEnabled` | The main **Enabled / Disabled** switch. When `false`, the product defaults are used. |
| `login...`, `allowRegister`, `allowGoogleLogin` | Login page: logo size, welcome message, background, card, inputs, buttons, Google button, visibility of **Remember me**, **Sign up**, **Forgot password** and the SSO area, and the legal footer. |
| `console...` | Console: software name, top bar, sidebar, search box, help menu. |
| `homePageTitle`, `cards` | Home page title and the report cards shown on Home. |
| `otherFontFamily` | Default font. |
| `wl_*.png`, `wl_favicon.ico`, `loginBgImage.png` | Image URLs; fetch the images with [Get a branding image](/api/Extension%20Plugins/White%20Label/Get%20a%20branding%20image/). |

Related: [Branding](/documentation/Console/Branding/), [Save branding configuration](/api/Extension%20Plugins/White%20Label/Save%20white%20label%20config/)
