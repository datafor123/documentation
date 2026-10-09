---
title: SDK Embedding
permalink: /documentation/SDK-Embedding/
description: Render a Datafor report inside a div of your own web page with the JavaScript SDK, authenticated by an embed token.
createTime: 2026/09/01 22:03:26
---

# SDK Embedding

The JavaScript SDK renders a report directly in a `<div>` of your page instead of an `iframe`. Your backend signs an embed token (JWT) for the current user, and the SDK sends it with every request to the Datafor server.

## Before you start

1. **Create an embed token configuration.** In **Settings › Access & Integration › Embed tokens (JWT)**, create and enable a configuration (see [JSON Web Token (JWT)](/documentation/System/JWT/)). Your backend signs a token for each user with that configuration's **Signature algorithm** and key (the **Secret key** for HS algorithms, or the private key that matches the configured public key), with the Datafor login name in the claim named by **Username field** and an `exp` claim (see [Send a token](/documentation/System/JWT/#_3-send-a-token)). Never sign tokens in the browser: the signing key must stay on your server.
2. **Allow your page's origin (CORS).** The SDK calls the Datafor server from your page's origin. In **Settings › Access & Integration › Cross-origin access (CORS)**:
   - Turn on **Enable CORS**.
   - In **Allowed origins**, add the origin of the host page, for example `https://app.example.com` (one per line, without a path). Don't use `*` in production; while **Allow credentials** is on, `*` is not accepted.
   - In **Allowed request headers**, add `Authorization`. The SDK sends the token as `Authorization: Bearer <jwt>`; without this header in the list, the browser blocks the requests.
   - The default **Allowed methods** are GET, HEAD and POST. If the browser console reports another blocked method, for example while saving in edit mode, add it.

## Quick start

```html
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body>
    <div id="container" style="width:100%; height:100vh;"></div>

    <script>window.__dataforSDKBase = 'http://your-server:28080/datafor/content/datafor/ui/';</script>
    <script src="http://your-server:28080/datafor/content/datafor/ui/datafor-loader.js"></script>

    <script>
        var container = document.getElementById('container');
        function loadDataForPage(options) {
            new Datafor.Visualizer(Object.assign({
                el: container,
                serverUrl: 'http://your-server:28080',
                jwt: 'your-jwt-token',
                onRedirectEvent: function (info) {  // the user switched page or mode (for example Edit / View)
                    loadDataForPage(info);
                }
            }, options));
        }
        loadDataForPage({ path: '/home/admin/Sales Report.datafor', mode: 'read' });
    </script>
</body>
</html>
```

`28080` is the default HTTP port of a Datafor server. `serverUrl` is the server origin only, without `/datafor`; the SDK adds the application path itself.

## Load the SDK

`datafor-loader.js` adds the SDK's CSS and scripts with `document.write`. Therefore:

- Load it with a static `<script>` tag in the host page's HTML, after setting `window.__dataforSDKBase`. Injecting it later (for example from a Vue or React component, or with a dynamically created `<script>` element) does not work.
- `window.__dataforSDKBase` is the folder that contains `datafor-loader.js`. The loader reads every other SDK file from there.

### Option 1: Load from the Datafor server

Every Datafor server ships the SDK at `/datafor/content/datafor/ui/`:

```html
<script>window.__dataforSDKBase = 'http://your-server:28080/datafor/content/datafor/ui/';</script>
<script src="http://your-server:28080/datafor/content/datafor/ui/datafor-loader.js"></script>
```

### Option 2: Host the SDK files yourself

Copy the SDK package to your web server and point `__dataforSDKBase` to it:

```text
your-web-root/
└── lib/
    ├── datafor-loader.js          # SDK bootstrap loader
    ├── product.min.js             # Core JS
    ├── product.min.css            # Core CSS
    ├── fonts/                     # Icon fonts
    ├── worker/task.min.js         # Web Worker
    └── data/patch/
        ├── common/                # umi.js, umi.css, and async chunks
        ├── locales/               # Language packs
        └── ai-agent/              # AI Agent resources (optional)
```

```html
<script>window.__dataforSDKBase = './lib/';</script>
<script src="./lib/datafor-loader.js"></script>
```


## API

### Constructor options

```js
new Datafor.Visualizer(options)
```

| Option | Type | Required | Description |
| --- | --- | :---: | --- |
| `el` | HTMLElement | Yes | Rendering container. It must have an explicit width and height. |
| `path` | String | Yes | Repository path of the `.datafor` report. |
| `mode` | String | | `'read'` for view mode (default), `'edit'` for edit mode. |
| `serverUrl` | String | Yes | Datafor server origin, for example `'http://your-server:28080'` (no `/datafor`). |
| `jwt` | String | Yes | Embed token signed by your backend. It must be a string; any other value is ignored and requests are sent without a token. |
| `locale` | String | | UI language, such as `'en-US'` or `'zh-CN'`. If omitted, the user's language from the server is used. |
| `mobile` | Boolean | | `true` shows the report's [mobile layout](/documentation/Visualization/Mobile-Layout-View/). Default `false`. |
| `initialFilterValues` | Object | | Opening values of filter components. See [initialFilterValues](#initialfiltervalues). |
| `filters` | String | | Initial data filters that need no filter component. See [filters / setFilter](#filters-setfilter). |
| `onRedirectEvent` | Function | | Called when the user switches page or mode (`edit` ↔ `read`) inside the report, with the options of the target page. Create a new instance with them, as in the quick start. Always set it. |
| `onUpdatePageTitle` | Function | | Called with `(title, pathTitle)` when the report has loaded. |
| `onPageContentReadyEvent` | Function | | Called with `(env, render)` before the report is drawn. If you set it, the SDK does not draw the report itself: call `render()`. Not needed for normal use. |

### Instance methods

| Method | Description |
| --- | --- |
| `setFilter(filters)` | Filters the data and re-queries all components. Pass `null` to clear. |
| `refreshData()` | Re-queries all components. |
| `resize()` | Lays the report out again. Call it after the container changes size without a window resize, for example when a side panel opens. |
| `saveBeforeLeave()` | Saves an edit-mode report that has unsaved changes. Returns a `Promise<boolean>`: `true` if there was nothing to save or the save succeeded, `false` if it could not save (for example a new report that was never saved, no write permission, or an error). Use it in SPA route guards. |
| `isPageNotSaved()` | In edit mode with unsaved changes, returns the unsaved-changes warning text; otherwise `""`. |
| `getPageKeyInfo()` | Returns `{ path, pageId, mode, mobile, locale }`. |
| `destroy()` | Removes the report and releases the instance. |

## Data filtering

There are three ways to filter. They are independent and can be combined:

| | `initialFilterValues` | `filters` | `setFilter()` |
| --- | --- | --- | --- |
| Purpose | Opening values of filter components | Initial data filter | Filter at runtime |
| Needs filter components | Yes | No | No |
| Visible to users | Yes, as the filter's selection | No | No |
| When it applies | First load, view mode only | First load | Immediately |

All three only narrow the data the signed-in user may see. They are not a security control: use [row-level security](/documentation/Datasource/Row-Level-Security-in-Analytics/) to restrict data per user.

### initialFilterValues

Sets the opening selection of filter components, exactly like the `default_<component>` URL parameter (see [Filters](/documentation/Visualization/Filters/)). Each key is a filter component's **title**, or its ID (starting with `UUID-`). Values are ignored in edit mode.

```js
new Datafor.Visualizer({
    // ...
    initialFilterValues: {
        country: 'Mexico',
        category: 'Bread;Candy',                      // separate several values with ;
        order_date: '1672531200000;1703980800000',    // Date: start;end as millisecond timestamps
    }
});
```

| Filter | Value format |
| --- | --- |
| **Date** | Start and end as millisecond timestamps (13 digits): `start;end`. Values that are not millisecond timestamps, such as `'2024'`, are ignored. |
| **Numeric slider** | Numbers: `min;max`. A value that is not a number makes the SDK ignore the entry. |
| Other filters (**Dropdown**, **List box**, **Radio/Checkbox**, …) | Member values separated by `;`. |

If several filter components have the same title, the value applies to all of them. Give them different titles, or use the component ID, to target one.

### filters / setFilter

`filters` and `setFilter()` filter data directly by a model field, without a filter component.

```js
// Initial filter
new Datafor.Visualizer({
    // ...
    filters: '{[{"value":["Bread"],"name":"[product_class].[product_category].[product_category]","type":"caption","datatype":"string"}]}'
});

// Filter at runtime
visualizer.setFilter(
    '{[{"value":["Bread"],"name":"[product_class].[product_category].[product_category]","type":"caption","datatype":"string"}]}'
);

// Clear
visualizer.setFilter(null);
```

**Format**: `{[filter1, filter2, ...]}`. Each filter has:

| Field | Description | Example |
| --- | --- | --- |
| `name` | `uniqueName` of the field's level | `"[product_class].[product_category].[product_category]"` |
| `value` | Array of values | `["Bread", "Candy"]` |
| `type` | `"caption"` matches the display name, `"name"` the member name | `"caption"` |
| `datatype` | Data type | `"string"` |

The filter object is the same as in [XDM messages](/documentation/Embedded/Embedding-Reports-Using-XDM/), which also describes ranges, exclusion and how to find a field's `uniqueName`.

## Framework integration

In Vue, React and other single-page apps, load the SDK with static tags in the app's HTML template (for example `index.html`), not from a component:

```html
<!-- index.html, before your app bundle -->
<script>window.__dataforSDKBase = 'http://your-server:28080/datafor/content/datafor/ui/';</script>
<script src="http://your-server:28080/datafor/content/datafor/ui/datafor-loader.js"></script>
```

### Vue 3

```vue
<template>
  <div ref="containerRef" class="datafor-container"></div>
</template>

<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import { onBeforeRouteLeave } from 'vue-router'

  const containerRef = ref<HTMLDivElement>()
  let visualizer: any = null

  onMounted(() => {
    const Datafor = (window as any).Datafor
    if (!Datafor || !containerRef.value) return
    visualizer = new Datafor.Visualizer({
      el: containerRef.value,
      path: '/home/admin/Sales Report.datafor',
      mode: 'edit',
      serverUrl: 'http://your-server:28080',
      jwt: 'your-jwt-token',
    })
  })

  // Save unsaved edits before leaving the route; stay if saving failed
  onBeforeRouteLeave(async () => {
    if (visualizer && visualizer.isPageNotSaved()) {
      return await visualizer.saveBeforeLeave()
    }
  })

  onBeforeUnmount(() => visualizer?.destroy())
</script>

<style scoped>
  .datafor-container {
    width: 100%;
    height: 100%;
  }
</style>
```

### React

```jsx
import { useEffect, useRef } from 'react';

export default function DataforReport() {
    const containerRef = useRef(null);

    useEffect(() => {
        const visualizer = new window.Datafor.Visualizer({
            el: containerRef.current,
            path: '/home/admin/Sales Report.datafor',
            mode: 'read',
            serverUrl: 'http://your-server:28080',
            jwt: 'your-jwt-token',
        });
        return () => visualizer?.destroy();
    }, []);

    return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
}
```

## Notes

* **Single instance only**: only one instance can exist at a time. Creating a new instance destroys the previous one. To show several reports on one page, use `iframe` embedding (see [Report URLs](/documentation/Embedded/Reports-REST-API/)).
* **Container**: it must have an explicit width and height. The SDK sets `position: relative` on it.
* **Destroy on route change**: in single-page apps, call `destroy()` when the component unmounts.
* **Global request patching**: the SDK changes `window.fetch` and adds a jQuery AJAX hook for the whole page. Relative `fetch` requests whose URL contains `datafor` are sent to `serverUrl`, and these requests, as well as every jQuery AJAX request whose URL contains `datafor`, carry `Authorization: Bearer <jwt>`. Keep other requests of your page from matching, and do not send jQuery requests to third-party URLs that contain `datafor`. The `fetch` change stays in place after `destroy()`; the token is removed.
* **Style conflicts**: SDK styles can affect the host page. Isolate it with an `iframe` if needed.
* **Language**: without `locale`, the SDK uses the user's language from the server; a passed `locale` wins.
