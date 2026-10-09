---
title: Choose a chart
permalink: /documentation/Visualization/Choose-a-Chart/
description: Pick a chart, card, map or table from the question and the data you have, and resolve common data problems such as values that differ from a table.
createTime: 2026/10/08 16:00:00
---

# Choose a chart

Start with the question and the data you have, then choose the chart. Example field names are illustrative; use equivalent fields from your analysis model. To place a chart and fill its fields, see [Adding components](/documentation/Visualization/Adding-Charts/).

## Choose by question and data

| Question | Data you have | Use | Choose the alternative when |
| --- | --- | --- | --- |
| What is the current result? | One measure, optionally reference measures | [Measure card](/documentation/Visualization/Measure/) | Readers also need the trend: a [KPI trend card](/documentation/Visualization/KPI-Trend-Card/) with a period field. |
| Are we meeting a target? | A measure and a target (measure or fixed number) per category | [Bullet](/documentation/Visualization/Bullet-Chart/) | One value on a scale with ticks: [Gauge](/documentation/Visualization/Gauge/). One completion ratio: [Ring progress](/documentation/Visualization/Progress-Chart/). |
| Which category is largest? | A category dimension and a measure | [Clustered column](/documentation/Visualization/Clustered-Column-Chart/) | Long names or many categories: [Clustered bar](/documentation/Visualization/Clustered-Bar-Chart/). |
| What contributes to the total? | A category, and an additive measure split by a Legend field (or several part measures) | [Stacked column and bar](/documentation/Visualization/Stacked-Column-Chart/) | One series must be compared across categories: a clustered column or bar. |
| How does the mix differ? | A category and additive, non-negative parts | [100% stacked column and bar](/documentation/Visualization/100-Stacked-Column-Chart/) | A few slices of one whole: [Pie](/documentation/Visualization/Pie-Chart/). One whole per group: [Grouped donuts](/documentation/Visualization/Grouped-Donut-Chart/). |
| How does it change over time? | An ordered date or period field and a measure | [Line](/documentation/Visualization/Line-Chart/) | Volume matters, or the series are parts of a total or shares of it: [Area charts](/documentation/Visualization/Area/) (area, stacked area, 100% stacked area). |
| How do measures with different units compare? | A category and two measures, such as sales and margin rate | [Combo](/documentation/Visualization/Combo-Chart/) | Every series has the same unit and role: a line or clustered column. |
| Do two measures move together? | An observation dimension, such as Store, and two measures | [Scatter](/documentation/Visualization/Scatter-Plot/) | — |
| What happens on each day? | A day-level date field and a measure | [Calendar chart](/documentation/Visualization/Calendar-Chart/) | Precise change between dates matters: [Line](/documentation/Visualization/Line-Chart/). |
| How are values distributed? | A row-level numeric field (a physical column) | [Histogram](/documentation/Visualization/Histogram-Chart/) | A sample dimension and a measure, compared across groups: [Box plot](/documentation/Visualization/Box-Plot/). A low and a high measure per category: [Range column](/documentation/Visualization/Range-Column-Chart/). |
| Where are the patterns across two dimensions? | Two dimensions and a measure | [Heat matrix](/documentation/Visualization/Heat-Matrix/) | Exact values matter more than the pattern: a [Pivot table](/documentation/Visualization/Pivot-Table/). |
| How do profiles compare across criteria? | 3–8 criteria on one comparable scale, and a measure | [Radar](/documentation/Visualization/Radar-Chart/) | More criteria, many entities or mixed units: a clustered bar or a table. |
| How is a hierarchy divided? | Parent and child dimensions and an additive measure | [Treemap](/documentation/Visualization/Treemap/) | The sequence of levels matters: [Sunburst](/documentation/Visualization/Sunburst/). Readers choose the next split: [Decomposition tree](/documentation/Visualization/Decomposition-Tree/). |
| How many pass each stage? | Ordered stages (members or one measure per stage) and a count | [Funnel](/documentation/Visualization/Funnel/) | The categories are not process stages: a clustered bar. |
| Where does a quantity flow? | A source, a target and a non-negative weight | [Sankey](/documentation/Visualization/Sankey-Chart/) | The relationship is only parent and child: [Sunburst](/documentation/Visualization/Sunburst/). |
| How does a balance build up? | Ordered steps and signed changes | [Waterfall](/documentation/Visualization/Waterfall-Chart/) | You have ending balances, not changes: [Line](/documentation/Visualization/Line-Chart/). |
| Where does it happen, by region? | Region names or codes | [Filled map](/documentation/Visualization/GeoJSON-Filled-Map/) | Markers sized by value: [Marker map](/documentation/Visualization/GeoJSON-marked-map/). Both use the built-in region maps and need no online map service. |
| Where does it happen, by address or coordinates? | Place names, or longitude and latitude | [GIS marker map](/documentation/Visualization/Marker-Map/) on an OpenStreetMap or Google basemap | Point density: GIS heat map. A Mapbox or Amap basemap: [Mapbox/Amap](/documentation/Visualization/Mapbox-Amap-Marker-Map/). All three need an online map service, see [GIS Map Settings](/documentation/Visualization/GIS-Map-Settings/). |
| Where is it on a floor plan or picture? | X/Y positions on your own image | [Image map](/documentation/Visualization/Image-Map/) | — |
| Which exact values do readers need? | Any fields | [Table](/documentation/Visualization/Table/) | Cross-tabulated totals: [Pivot table](/documentation/Visualization/Pivot-Table/). A hierarchy: [Tree table](/documentation/Visualization/Hierarchy-Table/) or [Parent-child table](/documentation/Visualization/Parent-Child-Table/). |
| What context should the reader see? | A dimension, words with weights, or image references | [Dimension field](/documentation/Visualization/Dimension-Value/) | Category weight at a glance: [Word cloud](/documentation/Visualization/Word-Cloud-Chart/). A picture per item: [Dynamic image](/documentation/Visualization/Image-chart/). |

Limits that often decide the choice:

- **Many categories or close values**: use a bar, not a pie. A pie reads well with a few slices.
- **Criteria for a radar**: about 3–8, all on one scale with the same desirable direction.
- **One value**: use a card, not a chart with a single column.
- **An amount and a rate**: a single value axis shows plain numbers and squeezes the rate near zero; use a Combo with two axes.
- **Distribution charts need the observation grain**: the Scatter **Marker**, the Box plot **Sample** and the Histogram's row-level **Value** decide what one point is.

![Different chart forms answer different comparison questions](../images/current/chart-comparison-concept.svg)

In the palette, charts are grouped as **Tables**, **Cards & KPI**, **Column & bar**, **Line & area**, **Proportion**, **Distribution & correlation**, **Flow & breakdown**, **Maps** and **Other**; hover a tile to see what it is for.

## Resolve common data problems

Check a new chart, and any chart that looks wrong, against a table at the same grain and with the same filters: save, open **Preview**, hover a few categories or points and compare the values. Only then configure **Style**.

| Result | Check first |
| --- | --- |
| The value is different from a table | Same measure definition, aggregation grain, filters and included categories? |
| A total looks too large | Overlapping measures (a total stacked with its own parts), duplicated categories, or a measure aggregated at the wrong grain. |
| A rate looks wrong | Does the source store 0.42 or 42? Is the measure formatted as a percentage? Is it a ratio of totals or an average of row ratios? |
| A category is missing | Data filters, row limits, missing values and available display space. |
| A gap, blank cell or missing period | Absent data is not zero. Check the filters and whether the source returns 0 for that period. |
| A sharp change between periods | Whether categories appeared or disappeared under the current filters, and whether the last period is complete. |
| A chart does not respond to a filter | Exact model/field binding and [filter subscriptions](/documentation/Visualization/Filter-Subscriptions/). |
| A tiny difference looks dramatic | Axis bounds, percentage normalization and color normalization. |
| Fields or series disappear after a chart-type change | **Chart switch** moves fields to the new chart's slots where they fit and can discard the rest. Recheck the data slots, axis units and style settings. |
| A chart is empty | Required slots, a valid model and whether any data matches the filters; the message tells you which, see [Empty data and errors](/documentation/Visualization/Empty-Data-and-Errors/). Style cannot supply missing data. |
| Labels show K or M, or too few decimals | **Display units** and **Decimal places**, see [Display units and decimal places](/documentation/Visualization/Display-Units/). |

A pattern between two measures shows association, not cause. See [component filters](/documentation/Analysis/Component-Level-Filtering/) for chart-specific scope. Keep units, comparison periods and the meaning of color visible in the report itself.
