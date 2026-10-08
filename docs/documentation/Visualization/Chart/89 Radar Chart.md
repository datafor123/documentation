---
title: Radar
permalink: /documentation/Visualization/Radar-Chart/
createTime: 2026/09/01 22:03:26
---

# Radar

Compare profiles across a small set of dimensions arranged around a circle. Use comparable scales, such as scores from 0 to 100. A large polygon does not by itself establish a better result.

## Build a comparison profile

1. Add **Components → Charts → Radar** and choose an **Analysis model** in **Data**.
2. Put the dimension naming the criteria in **Radial axes**. Each member becomes a spoke.
3. Put the score or other comparable value in **Measures**.
4. Use **Legend** to separate the entities you want to compare, such as Store or Team. Alternatively, compare compatible measures; check the available bindings after adding them.
5. Apply **Filters** so every profile uses the same period and criteria. Add supporting detail to **Tooltips** if needed.

Do not put currency, headcount and percentage values on a shared profile without a meaningful normalization. Prepare normalized scores in the model and explain what a high score means.

## Format the profiles

Use **Style → Position** to set the center and diameter. Leave room around the outside for **Axis labels**. Keep the **Legend** visible when comparing multiple profiles.

Under **Plot area**, **Fill Color** controls the filled polygons and **Value scale** shows scale ticks on the top axis. With overlapping profiles, use a small number of series so users can follow each outline.

The order of the radial categories affects the polygon shape. Keep the same criteria order and scale across charts you expect readers to compare.

## Validate the result

Save and open **Preview**. Hover individual criteria rather than relying only on polygon area. Confirm that a missing score is not being interpreted as poor performance, and check whether every criterion has the same desirable direction.

If labels overlap, shorten names or reduce the number of criteria. For many entities, close numeric comparisons, or mixed units, use a table or grouped bar chart instead.
