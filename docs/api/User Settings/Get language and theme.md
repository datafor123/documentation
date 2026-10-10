---
title: Get language and theme
permalink: /api/User Settings/Get language and theme/
tags:
  - api
  - User Settings
description: Read the signed-in user's saved interface language and theme.
createTime: 2026/09/01 22:03:26
---

Returns the language and theme the signed-in user saved, the `display` user setting.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor-modeler/api/user-settings/display` |
| Permission | Any signed-in user (own settings) |
| Content type | None |

## Parameters

None.

## Example

```bash
curl -u analyst1:password "http://localhost:28080/datafor/plugin/datafor-modeler/api/user-settings/display"
```

```json
[
  {"id": "language", "value": "en"},
  {"id": "theme", "value": "light"}
]
```

The response is the stored array itself, not wrapped in `success`/`data`. It is `[]` when the user never saved the setting; the console then uses the browser language and the `light` theme.

| `id` | `value` |
| --- | --- |
| `language` | A language tag such as `en` or `zh`. `null` means "use the browser language". |
| `theme` | Interface theme, `light` by default. |

## Errors

On a server error the response is `{"success": false, "msg": "<reason>"}`.

Related: [Set language or theme](/api/User%20Settings/Set%20language%20or%20theme/)
