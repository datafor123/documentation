---
title: Choose and build a chart
permalink: /documentation/Visualization/Choose-a-Chart/
description: Pick a chart, card, map or table for the question, then bind data, check it against a table and style it.
createTime: 2026/10/08 16:00:00
---

# Choose and build a chart

Start with the question, then choose the chart and the data grain. The guides below explain field placement, important settings and how to check the result. Example field names are illustrative unless a screenshot shows the supplied retail model; use equivalent fields from your analysis model.

## Choose the chart for the question

| Question | Start with |
| --- | --- |
| What is the current result? | [Measure card](/documentation/Visualization/Measure/), [KPI trend card](/documentation/Visualization/KPI-Trend-Card/) |
| Which category is largest? | [Clustered column](/documentation/Visualization/Clustered-Column-Chart/) or [Clustered bar](/documentation/Visualization/Clustered-Bar-Chart/) |
| What contributes to the total? | [Stacked column](/documentation/Visualization/Stacked-Column-Chart/), [Stacked bar](/documentation/Visualization/Stacked-Bar-Chart/) |
| How does the mix differ? | [100% stacked column](/documentation/Visualization/100-Stacked-Column-Chart/), [100% stacked bar](/documentation/Visualization/100-Stacked-Bar-Chart/), [Pie](/documentation/Visualization/Pie-Chart/), [Grouped donuts](/documentation/Visualization/Grouped-Donut-Chart/) |
| How does it change over time? | [Line](/documentation/Visualization/Line-Chart/), [Area](/documentation/Visualization/Area/), [Stacked area](/documentation/Visualization/Stacked0-Area-Chart/), [100% stacked area](/documentation/Visualization/Stacked-Ratio-Chart/) |
| How do related metrics compare? | [Combo](/documentation/Visualization/Combo%20Chart/) for columns and lines; [Scatter](/documentation/Visualization/Scatter-Plot/) for relationships between observations |
| Are we meeting a target? | [Gauge](/documentation/Visualization/Gauge/), [Bullet](/documentation/Visualization/Bullet-Chart/), [Ring progress](/documentation/Visualization/Progress-Chart/) |
| How are observations distributed? | [Histogram](/documentation/Visualization/Histogram-Chart/), [Box plot](/documentation/Visualization/Box-Plot/), [Range column](/documentation/Visualization/Range-Column-Chart/) |
| Where are the patterns? | [Heat matrix](/documentation/Visualization/Heat-Matrix/) for two dimensions, [Calendar chart](/documentation/Visualization/Calendar-Chart/) for days, [Radar](/documentation/Visualization/Radar-Chart/) for profiles across a few criteria |
| How is a hierarchy divided? | [Treemap](/documentation/Visualization/Treemap/), [Sunburst](/documentation/Visualization/Sunburst/), [Decomposition tree](/documentation/Visualization/Decomposition-Tree/) |
| How does a process or balance change? | [Funnel](/documentation/Visualization/Funnel/), [Sankey](/documentation/Visualization/Sankey-Chart/), [Waterfall](/documentation/Visualization/Waterfall-Chart/) |
| Where does it happen, by region? | [Filled map](/documentation/Visualization/GeoJSON-Filled-Map/) to colour regions, [Marker map](/documentation/Visualization/GeoJSON-marked-map/) to place markers on regions. Both use the built-in region maps and need no online map service. |
| Where does it happen, by address or coordinates? | [GIS marker map](/documentation/Visualization/Marker-Map/) and GIS heat map on an OpenStreetMap or Google basemap; Mapbox/Amap on a Mapbox or Amap basemap. All three need an online map service, see [GIS Map Settings](/documentation/Visualization/GIS-Map-Settings/). |
| Where is it on a floor plan or picture? | [Image map](/documentation/Visualization/Image-Map/) places markers by X/Y position on your own background image. |
| Which exact values do readers need? | [Table](/documentation/Visualization/Table/), [Pivot table](/documentation/Visualization/Pivot-Table/), [Tree table](/documentation/Visualization/Hierarchy-Table/), [Parent-child table](/documentation/Visualization/Parent-Child-Table/) |
| What context should the reader see? | [Dimension field](/documentation/Visualization/Dimension-Value/), [Word cloud](/documentation/Visualization/Word-Cloud-Chart/), [Dynamic image](/documentation/Visualization/Image-chart/) |

![Different chart forms answer different comparison questions](../images/current/chart-comparison-concept.svg)

In the palette, charts are grouped as **Tables**, **Cards & KPI**, **Column & bar**, **Line & area**, **Proportion**, **Distribution & correlation**, **Flow & breakdown**, **Maps** and **Other**; hover a tile to see what it is for. See [Adding components](/documentation/Visualization/Adding-Charts/).

## Build the data before the style

1. In edit mode, open **Components → Charts**, click a chart tile and then click the canvas. The component gets a default size for its type, for example 400 × 300 px for most charts; drag on the canvas instead to set the size yourself.
2. Select the component and choose **Data → Analysis model**.
3. Use **+** in a data slot to choose a field, then **Back**. A dimension defines groups; a measure supplies values aggregated at those groups. Slots vary by chart.
4. Set **Filters** for the component. Check sorting and any row limit through the field's **More function** menu (**⋮**).
5. Check the chart against a table at the same grain and with the same filters. Only then configure **Style**.
6. Save and open **Preview**. Test hover details, report filters and any configured actions.

Changing the chart type with **Chart switch** moves fields to the new chart's slots where they fit and can discard the rest. Inspect the destination chart's slots, axis units and style settings after every conversion.

## Resolve common data problems

| Result | Check first |
| --- | --- |
| The value is different from a table | Same measure definition, aggregation grain, filters and included categories? |
| A rate looks wrong | Does the source store 0.42 or 42? Is the measure formatted as a percentage? Is it a ratio of totals or an average of row ratios? |
| A category is missing | Data filters, row limits, missing values and available display space. |
| A chart does not respond to a filter | Exact model/field binding and [filter subscriptions](/documentation/Visualization/Filter-Subscriptions/). |
| A tiny difference looks dramatic | Axis bounds, percentage normalization and color normalization. |
| A chart is empty | Required slots, a valid model and whether any data matches the filters; the message tells you which, see [Empty data and errors](/documentation/Visualization/Empty-Data-and-Errors/). Style cannot supply missing data. |
| Labels show K or M, or too few decimals | **Display units** and **Decimal places**, see [Display units and decimal places](/documentation/Visualization/Display-Units/). |

See [component filters](/documentation/Analysis/Component-Level-Filtering/) for chart-specific scope. Keep units, comparison periods and the meaning of color visible in the report itself.
