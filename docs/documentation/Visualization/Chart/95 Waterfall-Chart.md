---
title: Waterfall
permalink: /documentation/Visualization/Waterfall-Chart/
createTime: 2026/09/01 22:03:26
---

# Waterfall

Show how a sequence of signed changes builds a running total. Use it for a revenue bridge, inventory movements or a cost breakdown. Positive steps increase the running value; negative steps decrease it.

## Bind additive changes

1. Add **Components → Charts → Waterfall** and select an **Analysis model** in **Data**.
2. Put the ordered step dimension in **Field** and the signed amount in **Measure**.
3. Open the Field's **More function → Sort** and establish the intended process or time order.
4. Set **Filters** to a consistent period and scope.

An illustrative bridge of Opening 100, New sales +40 and Returns −15 ends at 125. Bind signed changes; do not supply 100, 140 and 125 as though they were separate changes, because those values would accumulate again.

![Illustrative waterfall: signed steps and a closing total](../images/current/waterfall-concept.svg)

## Show the total and movement

In **Style → Accumulated value**, enable the final total bar and set its **Label**. The final total is the model's aggregate. With an additive measure it matches the sum of steps; with an average or ratio it can differ. Use an additive amount or quantity for an ordinary running-total interpretation.

Under **Data colors**, set positive, negative and accumulated colors. **Conditional color** has priority over positive/negative colors. Keep the legend visible if color carries the meaning of increase, decrease and total.

**Bar → Connector lines** makes the continuity between steps easier to follow. Use **Data labels → Compact numbers** for large amounts; the tooltip retains the full value. **Auto label contrast** helps labels remain visible inside colored bars.

## Check order and arithmetic

Save and open **Preview**. Hover steps and compare **Before**, the step value and **After**. Inspect the final total, especially if the tooltip distinguishes **Sum of steps** from the model total.

- Wrong sequence: sort by business step or time, not by the size of the change.
- Unexpected final total: check whether the measure is additive and whether an opening/closing total was also included as a change.
- Wrong sign: verify how reductions are represented in the source.
- Missing step: check filters, empty values and data limits.

Use a line chart for a series of ending balances and a stacked chart for contributions that do not need a running sequence.
