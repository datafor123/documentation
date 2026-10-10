---
title: Get version
permalink: /api/Version/Get version/
tags:
  - api
  - Version
description: Read the installed Datafor version and whether a newer release is published.
createTime: 2026/09/01 22:03:26
---

Returns the installed Datafor version and the newest published one. Use `current` to check which release a server runs before calling endpoints that changed between releases.

| | |
| --- | --- |
| Method and path | `GET /plugin/datafor/api/version/info` |
| Permission | Anyone |
| Content type | None |

## Parameters

| Name | In | Type | Required | Description |
| --- | --- | --- | --- | --- |
| `refresh` | query | boolean | No | `true` makes the server look up the newest release before answering. Default `false`, which returns the result of the last lookup. |

The server looks up the newest release on the internet (the published version file on GitHub, or SourceForge as a fallback) once a day, starting a second after start-up. On a server without internet access the lookup fails silently, and `newest` stays empty.

## Example

```bash
curl -u admin:password "http://localhost:28080/datafor/plugin/datafor/api/version/info"
```

```json
{
  "success": true,
  "current": {
    "version": "10.00",
    "branch": "commercial",
    "buildId": "datafor-2026-10-01"
  },
  "newest": {
    "version": "10.00",
    "branch": "commercial",
    "buildId": "datafor-2026-10-01"
  },
  "status": 0
}
```

| Field | Description |
| --- | --- |
| `current` | The installed release: `version`, `branch` and `buildId` (build date). Read from `pentaho-solutions/system/datafor/version.xml`. |
| `newest` | The newest published release, same fields. `{}` until a lookup has succeeded. |
| `status` | `1`: a newer release exists (higher `version`, or the same `version` with a later `buildId`). `0`: the installed release is the newest. `-1`: the installed release is newer than the published one, for example a pre-release build. |

`status` is `1` until the first lookup succeeds, so read it together with `newest`: if `newest` is empty, no comparison was made.

## Errors

If the version information cannot be assembled, `success` is `false` and `msg` is `cannot fetch version info`.

Related: [Release notes for 10.00](/release/10.00/)
