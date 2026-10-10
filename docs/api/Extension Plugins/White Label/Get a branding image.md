---
title: Get a branding image
permalink: /api/Extension Plugins/White Label/Get a branding image/
tags:
  - api
  - Extension Plugins
  - Branding
description: Download a branding image such as the login logo or favicon.
createTime: 2026/10/10 10:00:00
---
Returns one of the branding images. When no custom image has been saved, the product default is returned. The login page uses this endpoint, so it works without signing in.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor/api/core/wl/{name}` |
| Permission | None |
| Content type | none |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `name` | path | string | Yes | Image file name. Only `.png` and `.ico` names are served. |

| `name` | Image |
| --- | --- |
| `wl_logo.png` | Login page logo |
| `wl_main.png` | Console logo |
| `wl_main_small.png` | Console logo when the sidebar is collapsed |
| `wl_favicon.ico` | Browser tab icon |
| `loginBgImage.png` | Login page background image |
| `wl_<card id>.png` | Image of a report card on Home |

## Example

```bash
curl -o logo.png "http://localhost:28080/datafor/plugin/datafor/api/core/wl/wl_logo.png"
```

The body is the image (`image/png` or `image/x-icon`).

## Errors

| HTTP status | When |
| --- | --- |
| `404` | The name does not end in `.png` or `.ico`, or there is neither a custom nor a default image with this name. |

Related: [Branding](/documentation/Console/Branding/)
