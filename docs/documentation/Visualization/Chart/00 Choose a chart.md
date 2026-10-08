---
title: Choose and build a chart
permalink: /documentation/Visualization/Choose-a-Chart/
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
| Where are the patterns? | [Heat matrix](/documentation/Visualization/Heat-Matrix/), [Calendar chart](/documentation/Visualization/Calendar-Chart/), [Radar](/documentation/Visualization/Radar-Chart/) |
| How is a hierarchy divided? | [Treemap](/documentation/Visualization/Treemap/), [Sunburst](/documentation/Visualization/Sunburst/), [Decomposition tree](/documentation/Visualization/Decomposition-Tree/) |
| How does a process or balance change? | [Funnel](/documentation/Visualization/Funnel/), [Sankey](/documentation/Visualization/Sankey-Chart/), [Waterfall](/documentation/Visualization/Waterfall-Chart/) |
| What context should the reader see? | [Dimension field](/documentation/Visualization/Dimension-Value/), [Word cloud](/documentation/Visualization/Word-Cloud-Chart/), [Dynamic image](/documentation/Visualization/Image-chart/) |

![Different chart forms answer different comparison questions](../images/current/chart-comparison-concept.svg)

## Build the data before the style

1. In edit mode, choose **Components → Charts**, select a chart and place it on the canvas.
2. Select the component and choose **Data → Analysis model**.
3. Use **+** in a data slot to choose a field, then **Back**. A dimension defines groups; a measure supplies values aggregated at those groups. Slots vary by chart.
4. Set **Filters** for the component. Check sorting and any row limit through the field's **More function** menu.
5. Check the chart against a table at the same grain and with the same filters. Only then configure **Style**.
6. Save and open **Preview**. Test hover details, report filters and any configured actions.

Changing chart type can change or discard incompatible field assignments. Inspect the destination chart's slots, axis units and style settings after every conversion.

## Resolve common data problems

| Result | Check first |
| --- | --- |
| The value is different from a table | Same measure definition, aggregation grain, filters and included categories? |
| A rate looks wrong | Does the source store 0.42 or 42? Is the measure formatted as a percentage? Is it a ratio of totals or an average of row ratios? |
| A category is missing | Data filters, row limits, missing values and available display space. |
| A chart does not respond to a filter | Exact model/field binding and [filter subscriptions](/documentation/Visualization/Filter-Subscriptions/). |
| A tiny difference looks dramatic | Axis bounds, percentage normalization and color normalization. |
| A chart is empty | Required slots, a valid model and whether any data matches the filters. Style cannot supply missing data. |

See [component filters](/documentation/Analysis/Component-Level-Filtering/) for chart-specific scope. Keep units, comparison periods and the meaning of color visible in the report itself.
