---
title: GIS marker map
permalink: /documentation/Visualization/Marker-Map/
description: Place markers by longitude and latitude or by place name on an OpenStreetMap or Google basemap, or show point density with the GIS heat map.
createTime: 2026/09/01 22:03:26
---

# GIS marker map

Place markers by longitude and latitude, or by place name, on an OpenStreetMap or Google basemap. Use it for individual locations such as stores, sites or customers when readers need streets and terrain around them. **GIS heat map** shows the density of the same points as a heat layer.

For values per country or province without an online basemap, use [Filled map](/documentation/Visualization/GeoJSON-Filled-Map/) or [Marker map](/documentation/Visualization/GeoJSON-marked-map/). For a Mapbox or Amap basemap, use [Mapbox/Amap](/documentation/Visualization/Mapbox-Amap-Marker-Map/).

## Bind locations and choose the basemap

1. Add **Components → Charts → Maps → GIS marker map** (480 × 360 px) and choose an **Analysis model**.
2. Bind the location: either **Geographic field**, or **Longitude** and **Latitude**. Binding one hides the other.
3. Bind **Measure**; it sets the marker size. Add **Tooltips** for supporting detail.
4. Add **Time axis** and **Filters** as needed.
5. Choose the basemap in **Actions → Map Type Options → Type**: **OpenStreetMap** or **Google**. New maps start with the system default, OpenStreetMap on new installations ([GIS Map Settings](/documentation/Visualization/GIS-Map-Settings/#default-basemap-of-new-gis-maps)).
6. Filter to a small known region and check the marker positions before widening the scope.

| Location mode | Put in it | How positions are found |
| --- | --- | --- |
| **Geographic field** | Place names or addresses: country, province, city, street address | Geocoded through the service of the selected Type, then cached. Needs a working Geocoding URL and, for Google, an authorised key. |
| **Longitude** + **Latitude** | Numeric coordinates | Used as they are, without geocoding. Only the basemap tiles are loaded from the service. |

Thousands of points are supported (tested with 2,000 points); markers are not clustered.

## Coordinate rules

- Bind the coordinate columns as dimension fields. Their values are read as numbers and must use a decimal point: "116,4074" (decimal comma) or "abc" is not a number.
- Longitude must be between −180 and 180, latitude between −90 and 90. Swapped fields often put the latitude out of range (for example latitude 116).
- (0, 0) counts as "no coordinates" and is not drawn. A point with only one coordinate 0 is drawn.
- Invalid points are not drawn. In edit mode a message lists up to 10 of them: *Points whose longitude/latitude is not a number or out of range are not shown ({count}): {list}. Longitude must be between -180 and 180, latitude between -90 and 90.* Rows with an empty coordinate, such as total rows, are skipped without a message.
- Rows with an empty measure value are not drawn and do not affect the marker sizes; a value of 0 is drawn.

In Geographic field mode, names that could not be located are listed in edit mode (*Places that could not be located ({count}): {list}*). A failed name is retried after 24 hours. See [GIS Map Settings](/documentation/Visualization/GIS-Map-Settings/#troubleshooting) for all geocoding messages.

## Style

| Group | Option | Effect | Default |
| --- | --- | --- | --- |
| **Data colors** | **Color** | Colours markers by value with the shared colour editor ([Conditional Formatting](/documentation/Visualization/Conditional-Colors/)). | — |
| **Data labels** | Show, font | Labels on the markers. | — |
| **Map markers** | **Size type** | **Linear**, **Square** or **Logarithmic** scaling of the marker size by the measure. | Linear |
| | **Size** | Overall marker size, 2–90 %. | 10 % |
| | **Default color** | Marker colour without a colour rule. | First colour of the report palette |
| **Map Styles** | | **Normal**, **Gray** or **Dark** basemap style. | Normal |
| **Controls** | **Zoom control** | Shows the +/− buttons. | On |
| | **Auto scale** | Fits the view to the points each time the map is drawn. Turn it off to keep a fixed view. | On |
| **Tooltip** | **Show Tooltip** | Data tooltip on hover ([Tooltips](/documentation/Visualization/Tooltips-for-Chart-Components/)). | On |

**Actions** has **Interactions** (Linked components), **Data refresh**, **Map Type Options** and **Events** (plot click, pre-execution, pre-fetch). Clicking a marker can [cross-filter](/documentation/Analysis/Cross-Filtering/) other components; the filter status then shows the points as "{count} location(s) on the map". The export menu offers Excel, Csv and Image.

## GIS heat map

Add **Components → Charts → Maps → GIS heat map**. It has the same location fields, **Measure**, **Time axis** and **Filters**, but no **Tooltips**.

| Group | Option | Effect | Default |
| --- | --- | --- | --- |
| **Map Styles** | | **Normal**, **Gray** or **Dark**. | Normal |
| **Heat plot** | **Radius** | Radius of each heat point, 2–50. | 8 |
| | **Blur** | Blur intensity, 2–50. | 15 |
| **Gradient** | **Start color**, **Color(40%)**, **Color(60%)**, **Color(80%)**, **End color** | Colour ramp from low to high density. | Blue, cyan, green, yellow, red |
| **Controls** | **Zoom control**, **Auto scale** | As for the marker map. | On, On |

The heat layer does not react to clicks and has no data tooltip, so **Actions** offers only **Data refresh**, **Map Type Options** and the pre-execution and pre-fetch **Events**. Click actions saved in older reports stay in the report but have never run.

## Working with GIS maps

- **Mouse wheel in the editor**: the wheel scrolls the report page. Hold **Ctrl** (**⌘** on Mac) and scroll, or pinch on a touchpad, to zoom the map; a hint says so for 1.5 s. In view mode and in the enlarged view the wheel zooms the map.
- **Chart switch**: GIS marker map and GIS heat map are listed first for each other, and the fields carry over.
- **Page zoom**: the basemap text and buttons keep their size when the page scale changes (Fit to page, Fit to width, window resize).

::: details Opening reports made before 10.00
- Each row now keeps its own value. Before, points on the same latitude, or places with the same name under different parents, showed one shared value and marker size, and tooltips in place-name mode showed "NaN".
- One empty measure value no longer leaves the whole map without markers.
:::
