---
title: Save branding configuration
permalink: /api/Extension Plugins/White Label/Save white label config/
tags:
  - api
  - Extension Plugins
  - Branding
description: Save the branding settings and images, as the console's branding editor does.
createTime: 2026/09/01 22:03:26
---
Saves the branding settings together with any new images. The settings you send replace the stored ones, so read the current configuration with [Get branding configuration](/api/Extension%20Plugins/White%20Label/Query%20white%20label%20config/), change it, and send the whole object back.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-whitelabel/api/save` |
| Permission | Administrator user type |
| Content type | `multipart/form-data` |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `config` | form | string | Yes | The full configuration as a JSON string, with the keys returned by [Get branding configuration](/api/Extension%20Plugins/White%20Label/Query%20white%20label%20config/). Set `whiteLabelEnabled` to `true` to use it. |
| `wl_logo.png` | form | file | No | New login page logo (PNG). |
| `wl_main.png` | form | file | No | New console logo (PNG). |
| `wl_main_small.png` | form | file | No | New collapsed-sidebar logo (PNG). |
| `wl_favicon.ico` | form | file | No | New browser tab icon (ICO). |
| `loginBgImage.png` | form | file | No | New login page background (PNG). |
| `wl_<card id>.png` | form | file | No | New image for a report card on Home. |

For each uploaded image, set the matching key in `config` to its URL, for example `"wl_logo.png": "/datafor/plugin/datafor/api/core/wl/wl_logo.png"`. Set it to an empty string to remove the image and use the default.

## Example

```bash
curl -u admin:password -X POST \
  "http://localhost:28080/datafor/plugin/datafor-whitelabel/api/save" \
  -F "config=<branding.json" \
  -F "wl_logo.png=@logo.png"
```

`branding.json` is the `data` object from [Get branding configuration](/api/Extension%20Plugins/White%20Label/Query%20white%20label%20config/) with your changes.

```json
{ "success": true }
```

Changes apply to pages loaded after the save; users may need to reload, and browsers can cache the favicon.

Related: [Branding](/documentation/Console/Branding/)
