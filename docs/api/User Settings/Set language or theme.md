---
title: Set language or theme
permalink: /api/User Settings/Set language or theme/
tags:
  - api
  - User Settings
description: Save the signed-in user's interface language and theme.
createTime: 2026/09/01 22:03:26
---

Saves the signed-in user's language and theme (the `display` user setting) and applies the language to the current session.

| | |
| --- | --- |
| Method and path | `POST /plugin/datafor-modeler/api/user-settings/display` |
| Permission | Any signed-in user (own settings) |
| Content type | `application/json` |

## Parameters

The body is the complete setting, an array of `{"id", "value"}` entries:

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `id` | body | string | Yes | `language` or `theme`. |
| `value` | body | string | Yes | For `language`, a language tag the server offers, such as `en` or `zh` (the `localeList` of [Get user settings and system information](/api/User%20Settings/Get%20user%20settings%20and%20system%20information/)); an unknown tag falls back to `en`. For `theme`, `light`. |

The array replaces the stored setting, so send both entries.

## Example

```bash
curl -u analyst1:password -X POST "http://localhost:28080/datafor/plugin/datafor-modeler/api/user-settings/display" \
  -H "Content-Type: application/json" \
  -d '[{"id": "language", "value": "en"}, {"id": "theme", "value": "light"}]'
```

```json
{
  "success": true,
  "data": "[{\"id\":\"language\",\"value\":\"en\"},{\"id\":\"theme\",\"value\":\"light\"}]"
}
```

`data` is the stored value, as a JSON string.

## Errors

The response always has `"success": true`; if storing failed, it also has `msg`.

Related: [Get language and theme](/api/User%20Settings/Get%20language%20and%20theme/)
