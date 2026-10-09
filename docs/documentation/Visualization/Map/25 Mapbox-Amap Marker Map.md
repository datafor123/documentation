---
title: Mapbox/Amap
permalink: /documentation/Visualization/Mapbox-Amap-Marker-Map/
description: Place markers by longitude and latitude or by place name on a Mapbox or Amap (Gaode) basemap, coloured by category and sized by a measure.
createTime: 2026/10/09 17:00:00
---

# Mapbox/Amap

Place markers on a Mapbox or Amap (Gaode) basemap, drawn with WebGL. Markers can be coloured by a category, sized by a measure and drawn as flat shapes or 3-D columns. Use it when your organisation has a Mapbox or Amap key, or needs one of these basemaps. For OpenStreetMap or Google, use [GIS marker map](/documentation/Visualization/Marker-Map/); for region maps without an online basemap, use [Marker map](/documentation/Visualization/GeoJSON-marked-map/).

An administrator must first enter the Mapbox or Amap keys in **Settings → Data → Maps** ([GIS Map Settings](/documentation/Visualization/GIS-Map-Settings/)).

## Build it

1. Add **Components → Charts → Maps → Mapbox/Amap** (480 × 360 px) and choose an **Analysis model**.
2. Bind the location: either **Geographic field** (place names or addresses, geocoded through the selected service), or **Longitude** and **Latitude**.
3. Optionally bind **Category** to colour the markers by member, and **Marker Size** (a measure) to size them by value.
4. Add **Tooltips**, **Time axis** and **Filters** as needed.
5. Choose the basemap in **Actions → Map Type Options → Type**: **Mapbox** (default) or **Amap(Gaode)**.

Without **Marker Size** every marker is a small dot of the same size (6 px), which shows the distribution and the categories. With it, markers scale by value.

## Coordinates

- Longitude must be between −180 and 180, latitude between −90 and 90. Points outside this range are not drawn.
- (0, 0) counts as "no coordinates". A single 0, on the equator or the prime meridian, is drawn.
- Empty values, text and decimal commas such as "116,4074" count as missing.
- Skipped points are not listed in a message, unlike the [GIS marker map](/documentation/Visualization/Marker-Map/#coordinate-rules). Compare the number of markers with the number of rows when in doubt.

In Geographic field mode, names that could not be located are reported in edit mode as *Geocoding failed* / *There are {count} geocoding failures, which are {details}*. A missing or rejected key gives *Map API Key not found, …* or *The key for the map is invalid*; see [Troubleshooting](/documentation/Visualization/GIS-Map-Settings/#troubleshooting).

## Style

| Group | Option | Effect | Default |
| --- | --- | --- | --- |
| **Title** | **Show** | Component title. | Off |
| **Data labels** | Show, field, font | Label each marker with one of the bound fields. | Off |
| **Markers** | **Color** | Marker colour when no Category is bound. | — |
| | **Marker Shape** | **Circle**, **Triangle**, **Square**, **Rhombus**, **Pentagon**, **Hexagram**, **Octagon**, **Vesica**, or the 3-D **Cylinder**, **Square Column**, **Hexagon Column**. | — |
| | **Radius** | Radius of the 3-D shapes, 1–20. Shown only for a 3-D shape. | — |
| | **Category Icons** | Colour and icon per category. Shown when **Category** is bound. | Palette colours |
| | **Size type**, **Size** | Scaling of the marker size by **Marker Size**. | Linear, 10 % |
| | **Hover Color** | Marker colour under the pointer. | — |
| **Map Options** | **Auto Fit** | Adjusts the view to the markers after each update. | On in new maps; off in earlier reports |
| | **Theme** | **Normal**, **Light** or **Dark** basemap. | — |
| | **Zoom Controls**, **Zoom Controls Position** | Zoom buttons and their corner (**Top Left**, **Top Right**, **Bottom Left**, **Bottom Right**). | — |
| | **Scale Controls**, **Scale Controls Position** | Scale bar and its corner. | — |
| **Tooltip** | **Show Tooltip** | Data tooltip on hover ([Tooltips](/documentation/Visualization/Tooltips-for-Chart-Components/)). | On |

With **Auto Fit** off the map opens on a fixed default view whose centre depends on the browser's time zone, so data in other parts of the world can lie outside it. Earlier reports that never saved the option keep **Auto Fit** off; turn it on if their markers are out of view.

## Working with the map

- **Mouse wheel in the editor**: the wheel scrolls the report page. Hold **Ctrl** (**⌘** on Mac) and scroll, or pinch on a touchpad, to zoom the map. In view mode and in the enlarged view the wheel zooms the map.
- **Chart switch** does not pair Mapbox/Amap with another map, because its fields differ.
- Clicking a marker can cross-filter other components; the filter status then shows the points as "{count} location(s) on the map".
