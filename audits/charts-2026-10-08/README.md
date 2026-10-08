# Charts documentation revision — 8 October 2026

## Scope and result

Rewrote all **34 existing Charts guides**, preserving their public permalinks. Added **Choose and build a chart** as the first page in the automatically generated Charts navigation. The guides now explain suitable use, field mapping, an example workflow, consequential settings, interpretation and troubleshooting. They are written in English.

The former pages mostly repeated “Set up the data” and “Make it readable” with little operational detail. This revision adds the information needed to distinguish, for example, a dual-axis comparison from a common-scale comparison, a normalized share from a raw total, and a sample-level distribution from raw-row binning.

## Evidence and verification boundary

Primary runtime: the authenticated local service at http://localhost:28080/datafor/console/. The examples below were created through the UI in **Personal → Visualizer Guide 2026**, using independent report copies. The existing Regional Sales 2025, Regional Sales Table and Sales Scenario reports were not edited in this revision.

| Example | Observed in this pass | Limits |
| --- | --- | --- |
| Chart Guide - Combo | Region, Net Sales and Gross Margin Rate; Year 2025; separate axes; right bounds 0.4–0.5 render 40%–50%; Analytics axis selector; Save and Preview | Not every line style, axis merge combination or reference-line mode was exercised. |
| Chart Guide - Proportion | Pie conversion retained Region and Net Sales; correct five-slice result; Type settings expose sort and small-slice merge; saved | Tiny-slice merge arithmetic and every rose/doughnut variation were not tested. |
| Chart Guide - Heat Matrix | Region × Category L1 with Net Sales; Overall and By row normalization; legend changes from numeric bounds to Low/High; saved | No row-limit, drill or missing-cell edge-case test in this pass. |
| Chart Guide - KPI Trend | Month, Net Sales, Year 2025; static target 300000; Auto and Previous comparison baselines; Save and Preview | Missing-final-actual case tested separately in the saved QA reproduction below. |
| Chart Guide - Box Plot | Store samples grouped by Region; Net Sales; Year 2025; current whisker choices; saved Preview tooltip shows East China: 5 samples, median 171.92K, quartiles 154.92K/205.71K, 0 outliers | Whisker arithmetic, horizontal orientation and mean toggle not independently recalculated or exercised. |
| Chart Guide - Funnel Settings | Arrangement choices and Stage percentages choices; switched to value-descending arrangement and No percentages; saved | This is a regional sales ranking, not a process dataset. No conversion-rate correctness claim is made for it. |

All four new report names were present in Recent work after a later sign-in. After the restart, reopening Combo showed the saved Region/Net Sales/Gross Margin Rate bindings and the 40%–50% right axis. Its Data screenshot was replaced with a fresh capture, including the North China tooltip. Runtime behavior for the other chart families was **not exhaustively retested** in this pass. Their field/style structure is grounded in the earlier [live panel inventory](../live-visualizer/panels.json); richer option descriptions were cross-checked against the available local UI source. Panel presence, source behavior and a complete runtime test are different evidence levels.

Source material read from the local datafor-plugin-ui-sources checkout included:

- i18n/en.json: Combo, line, pie, grouped donuts, gauge, funnel, calendar, treemap, radar, word cloud and Measure card descriptions.
- js/components/echartsloc/BaseLineBarchart.js: separate measure families and axis handling.
- extend_components/{KPITrendCard,BoxPlot,HeatMatrix,BulletChart,BaseWaterfallchart,RatioIndicatorPieChart,PropertyCardchart}/en.json.
- extend_components/KPITrendCard/task.js and js/base/IndicatorCards.js for comparison behavior.

A source checkout is not proof of the deployed bundle version. Option combinations not exercised in the running UI remain a runtime coverage limitation. Documentation repository baseline: c14b93e4e8caa253f0212f6a4a6639751f267dd5.

## Product and usability findings

### Confirmed observation: save toast covers the next actions

The Success notification overlapped Save as, Save and much of Preview at the inspected 1235 × 884 viewport. DOM hit testing at the Save as control's center returned the notification element, rather than the toolbar control. This occurred while preparing multiple examples and is consistent with the [earlier report](../visualizer-2026-10-08/README.md).

Evidence: [actual overlap](./save-toast-over-toolbar.jpg).

Impact: the routine Save → Preview or Save → Save as sequence can be obstructed. Dismissing the notification allowed continuation. Move the notification below the toolbar or show save status inline. Notification lifetime was not measured, and this report does not assert that it is permanently stuck.

### Test interruption during server restart — not a product bug

The Personal resource list stayed on Loading; after reload, the browser returned to sign-in. A subsequent sign-in showed the English console and the four new report names in Recent work. The user then confirmed that they were restarting the server. Browser testing was paused on that instruction and resumed after the user confirmed the restart was complete.

Evidence: [loading resource list](./personal-list-loading.jpg). This sequence is recorded as an environment interruption, **not a product defect or a session-expiry finding**. Its exact request-level cause was not investigated. No data-loss claim is made.

### Confirmed P2: KPI headline and date refer to different months

**Status:** reproduced in the running UI after the server restart. This supersedes the earlier source-only candidate. No product fix was made.

**Saved reproduction:** Personal → Visualizer Guide 2026 → **QA - KPI Missing Last Period**. This is a separate QA copy; **Chart Guide - KPI Trend** retains the normal monthly example.

1. Use Retail Chain Operations, Trend dimension **Month** (standalone field [Date].[year_month].[year_month]), and filter **Year = 2025**.
2. Add a report-level measure named **QA Sales Above 320K** with formula:

~~~text
IIF([Measures].[Net Sales] > 320000, [Measures].[Net Sales], NULL)
~~~

3. Bind that measure to **Actual value**. With only a static target of 300000, the observed card uses November and labels it **Nov 2025**.
4. Bind **Net Sales** to **Target value** so December remains in the returned data even though the test actual is null. The Net Sales target is a test control, not a recommended business target.
5. Inspect the headline and **More → Data preview**.

| Month | QA actual | Data-bound target |
| --- | ---: | ---: |
| Nov 2025 | 343,807.18 | 343,807.18 |
| Dec 2025 | empty | 310,129.32 |

**Observed:** headline **343,807.18**, comparison **Target: 343,807.18, 0.00%**, date **Dec 2025**. The value and comparison come from November while the date names December.

**Expected:** if the card intentionally falls back to the last valid actual, the displayed date should identify that same observation. Alternatively, show December as unavailable with an explicit fallback indication.

**Impact:** users can read a stale actual as the most recent month's performance. A populated target is enough to retain the null-actual final period and expose the mismatch.

Evidence: [static-target control](./kpi-null-with-static-target.jpg), [mismatched headline/date](./kpi-null-tail-date-mismatch.jpg), [saved Preview](./kpi-null-tail-preview.jpg), [data preview](./kpi-null-tail-data-preview.jpg), [DOM-read table values](./kpi-null-tail-data.json). The table snapshot preserves empty cells.

The local source observation is consistent with this: the actual uses the last finite trend index, while the date uses the last returned category. This is corroboration, not proof of the exact deployed source revision. Suggested fix: derive headline date, actual and comparison from the same chosen row and test null-tail cases with and without a target measure.

**Verified workaround in this test:** leaving only the static target allowed empty actual rows to be omitted and displayed November consistently. For real reports, deliberately filter to completed/valid periods or show missing actuals explicitly in a table; do not assume every query will omit null rows.

### Search observation withdrawn after input-method verification

An earlier field-picker capture showed no results for **Net Sales** and results for **Net**. This did not establish a product defect: during follow-up in the Box plot Measure picker, replacing the text through keyboard input, pressing Enter and leaving the field displayed **Net Sales** for the full-name query. The earlier input submission/refresh timing was not controlled well enough to support the claimed mismatch.

Evidence: [successful full-name keyboard query](./measure-search-full-name-keyboard.jpg). Earlier captures are retained as investigation history, not proof of a search bug. The user-facing workaround assertion was removed.

## Screenshots and diagrams

New product captures are genuine English UI screenshots; no UI pixels were generated or reconstructed. They use the retail example fields and English member captions. The files under docs/documentation/Visualization/images/current are:

| Files | Content |
| --- | --- |
| combo-data.jpg, combo-axes.jpg, combo-preview.jpg | Field bindings, decimal percentage bounds and saved Preview. |
| pie-data.jpg, pie-type.jpg | Actual pie and its current Type controls. |
| heat-matrix-data.jpg, heat-matrix-normalize.jpg, heat-matrix-by-row.jpg | Crossed dimensions and color comparison modes. |
| kpi-trend-data.jpg, kpi-trend-status.jpg | Monthly actual with static target and comparison settings. |
| box-plot-data.jpg, box-plot-whiskers.jpg, box-plot-preview.jpg | Store observation grain, regional groups and whisker rules. |
| funnel-arrangement.jpg | Current arrangement choices with a value-ranking example. |

Three original English SVG diagrams explain chart comparison types, observation grain and waterfall arithmetic. They are conceptual illustrations, not product screenshots. The numerical diagrams are explicitly marked as illustrative. PNG renders in this audit folder were used to inspect text, spacing and arithmetic.

## Validation and remaining work

- Static link/image audit: **90 pages, 78 image references, 0 missing local references**. See [link-check.json](./link-check.json).
- Existing Chart permalinks are retained, including the legacy Combo space and Stacked0-Area route.
- All 34 existing Chart permalinks were compared with Git HEAD and preserved. All 35 Chart pages and three SVG diagrams passed a CJK-character scan; see [review-checks.json](./review-checks.json).
- All fourteen new UI captures and three rendered concept diagrams were visually inspected. The Combo data capture was refreshed after restart to remove the save toast; its tooltip shows North China values.
- Git whitespace check passed. These are source-level checks, not a rendered-site test.
- **No documentation build was run**, as requested. No site was published and no Git commit was created.
- Post-restart KPI checks additionally verified the 300,000 target (+3.38%) and previous-month baseline (343,807.18; −9.80%) against a December actual of 310,129.32. See [previous baseline capture](./kpi-previous-baseline.jpg).
- No claim that every chart is bug-free or fully exercised. Dedicated data-backed tests are still needed for all advanced combinations, especially targets with missing values, histogram source eligibility, funnel cohort ratios, tree Smart splits, and exports.
