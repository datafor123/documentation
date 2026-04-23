---
title: SDK Embedding
permalink: /documentation/SDK-Embedding/
---

# SDK Embedding

## Quick Start

```html
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body>
    <div id="container" style="width:100%; height:100vh;"></div>

    <script>window.__dataforSDKBase = 'sdkUrl';</script>
    <script src="sdkUrl/datafor-loader.js"></script>

    <script>
        var container = document.getElementById('container');
        function loadDataForPage(options) {
            new Datafor.Visualizer(Object.assign({
                el: container,
                serverUrl: 'http://your-server:8080',
                jwt: 'your-jwt-token',
                onRedirectEvent: function(info) {  // Convenient for switching pages internally, such as preview/edit from the top-right corner
                    loadDataForPage(info);
                }
            }, options));
        }
        loadDataForPage({ path: '/home/admin/Sales Report.datafor', mode: 'read' });
    </script>
</body>
</html>
````


## Deployment Options

### Option 1: Deploy the SDK Package Locally

Deploy the SDK package to your web server, and point `__dataforSDKBase` to the local path:

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
// Local path: lib
<script>window.__dataforSDKBase = './lib/';</script>
<script src="./lib/datafor-loader.js"></script>
```

### Option 2: Load Remotely

Load all resources directly from the Datafor server without local deployment, as long as `datafor-loader.js` is already deployed on the server:

```html
<script>window.__dataforSDKBase = 'http://your-server:8080/datafor/content/datafor/ui/';</script>
<script src="http://your-server:8080/datafor/content/datafor/ui/datafor-loader.js"></script>
```


## API

### Constructor Parameters

```js
new Datafor.Visualizer(options)
```

| Parameter                 | Type        | Required | Description                                                                                                                |
| ------------------------- | ----------- | :------: | -------------------------------------------------------------------------------------------------------------------------- |
| `el`                      | HTMLElement |     ✅    | Rendering container. It must have an explicit width and height.                                                            |
| `path`                    | String      |     ✅    | Path to the `.datafor` file.                                                                                               |
| `mode`                    | String      |     ✅    | `'read'` for read-only mode / `'edit'` for edit mode.                                                                      |
| `serverUrl`               | String      |     ✅    | Datafor backend URL, for example `'http://192.168.1.5:8080'`. CORS must be enabled on the server.                          |
| `jwt`                     | String      |     ✅    | JWT token. The SDK automatically includes it in all request headers.                                                       |
| `locale`                  | String      |          | UI language, such as `'zh-CN'` or `'en'`. If omitted, the backend user language preference is used.                        |
| `mobile`                  | Boolean     |          | Mobile mode. Default is `false`.                                                                                           |
| `parameters`              | Object      |          | Default values for filter components. See [parameters](#parameters).                                                       |
| `filters`                 | String      |          | Initial data filters. See [filters](#filters).                                                                             |
| `onRedirectEvent`         | Function    |          | Callback for page navigation or mode switching (`edit` ↔ `read`). **It is recommended to always configure this callback.** |
| `onPageContentReadyEvent` | Function    |          | Callback triggered when the page content is ready.                                                                         |
| `onUpdatePageTitle`       | Function    |          | Callback triggered when the page title changes.                                                                            |

### Instance Methods

| Method               | Description                                                                        |
| -------------------- | ---------------------------------------------------------------------------------- |
| `setFilter(filters)` | Dynamically filter data. Pass `null` to clear filters.                             |
| `refreshData()`      | Refresh data for all components.                                                   |
| `destroy()`          | Destroy the instance and release resources.                                        |
| `getPageKeyInfo()`   | Returns `{ path, pageId, mode, mobile, locale }`.                                  |
| `isPageNotSaved()`   | In edit mode, returns the unsaved-changes warning message; otherwise returns `""`. |


## Data Filtering

There are three filtering methods. They do not interfere with one another and can be used together:

|                            | `parameters`                             | `filters`                    | `setFilter()`                      |
| -------------------------- | ---------------------------------------- | ---------------------------- | ---------------------------------- |
| Purpose                    | Set default values for filter components | Apply initial data filtering | Apply dynamic filtering at runtime |
| Requires filter components | Yes                                      | No                           | No                                 |
| Visible to users           | Yes                                      | No                           | No                                 |
| When it takes effect       | On initial load                          | On initial load              | Immediately when called            |

### parameters

Use `parameters` to set initial values for report filter components. Parameter names match either the **component title** or the **UUID** (starting with `UUID-`).

```js
new Datafor.Visualizer({
    // ...
    parameters: {
        country: 'Mexico',
        category: 'Bread;Candy',                      // Use ; to separate multiple values
        order_date: '1672531200000;1703980800000',   // Dates use millisecond timestamps
    }
});
```

**Supported component types:**

| Component                                    | Supported | Value format                                      |
| -------------------------------------------- | :-------: | ------------------------------------------------- |
| Dropdown (legacy SingleSelect / MulSelect)   |     ✅     | Option value; use `;` to separate multiple values |
| Date component (DatePicker / CubeDatePicker) |     ✅     | Millisecond timestamp, in `start;end` format      |
| Radio / Checkbox (RadioButtonsComponent)     |     ❌     | —                                                 |
| List (BootstrapListsComponent)               |     ❌     | —                                                 |
| Tree selector (BaseTreeSelector)             |     ❌     | —                                                 |

**Notes:**

* If multiple filter components share the same title, the same parameter will apply to all of them. If a date component and a dropdown have the same title, it is recommended to rename them differently or use the UUID for precise matching.
* Date component values must be **millisecond timestamps** (13-digit numbers). Non-timestamp values such as `'2024'` will be ignored automatically.

### filters / setFilter

Use `filters` or `setFilter()` to filter data directly by dimension, without requiring filter components.

```js
// Apply initial filters during construction
new Datafor.Visualizer({
    // ...
    filters: '{[{"value":["Bread"],"name":"[product_class].[product_category].[product_category]","type":"caption","datatype":"string"}]}'
});

// Apply dynamic filters at runtime
visualizer.setFilter(
    '{[{"value":["Bread"],"name":"[product_class].[product_category].[product_category]","type":"caption","datatype":"string"}]}'
);

// Clear filters
visualizer.setFilter(null);
```

**Filter format**: `{[filter1, filter2, ...]}` — each filter includes:

| Field      | Description                                             | Example                                                   |
| ---------- | ------------------------------------------------------- | --------------------------------------------------------- |
| `name`     | Dimension level `uniqueName`                            | `"[product_class].[product_category].[product_category]"` |
| `value`    | Array of filter values                                  | `["Bread", "Candy"]`                                      |
| `type`     | `"caption"` for display name / `"name"` for member name | `"caption"`                                               |
| `datatype` | Data type                                               | `"string"`                                                |


## Framework Integration

### Vue 3

```vue
<template>
  <div ref="containerRef" class="datafor-container"></div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'

  const containerRef = ref<HTMLDivElement>()
  let visualizer: any = null

  onMounted(() => {
    const Datafor = (window as any).Datafor
    if (!Datafor || !containerRef.value) return

    visualizer =
        new Datafor.Visualizer({
          el: containerRef.value,
          path: "/home/user/Do Not Touch.datafor",
          mode: "edit",
          serverUrl: "http://117.144.48.146:48480",
          jwt: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJsb2dpbm5hbWUiOiJhZG1pbiIsImV4cCI6MTc3Mzk2OTM5MH0.ndsYEtv6X-yM8vdxN2jlpRQhDECJ0KsfD7Y1EpKHiX8',
        });
  })
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
            path: '/home/user/Do Not Touch.datafor',
            mode: 'edit',
            serverUrl: 'http://117.144.48.146:48480',
            jwt: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9...',
        });
        return () => visualizer?.destroy();
    }, []);

    return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />;
}
```


## Notes

* **Single instance only**: Only one instance can exist at a time. Creating a new instance automatically destroys the previous one. If you need to display multiple reports, use `iframe`.
* **Container requirements**: The container must have an explicit width and height. `position: relative` is recommended.
* **Destroying instances**: In SPA route switching scenarios, make sure to call `destroy()`.
* **Style conflicts**: SDK styles may affect the host page. Use Shadow DOM or `iframe` isolation if needed.
* **CORS**: When using direct connection mode via `serverUrl`, CORS must be enabled on the server.
* **Language**: If `locale` is not provided, the SDK uses the user language preference returned by the backend. If `locale` is provided, the passed value takes precedence.
