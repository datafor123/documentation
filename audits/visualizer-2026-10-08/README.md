# Visualizer documentation and product findings

Date: 2026-10-08. Environment: the local English UI at `http://localhost:28080/datafor/console/`, using the supplied administrator session. The deployed version was not established.

This round completed an actual parameter-to-measure example, corrected the current Numeric slider workflow, and retested the earlier linked-filter finding. One reproducible Undo inconsistency and two usability issues are recorded below. No product code was changed and no build was run.

## Product issue requiring investigation

### P2 — Undo leaves Numeric slider configuration and rendering inconsistent

**Status:** observed twice, including after discarding the first experiment and reopening the saved report. Root cause is unknown. This establishes a problem in the tested editor workflow, not permanent loss of saved data.

**Example:** Personal → Visualizer Guide 2026 → Sales Scenario.

**Starting configuration:** Numeric slider, Data source **Parameter**, **GrowthRate** selected, minimum `-0.2`, maximum `0.2`, step `0.01`, current/default value `0.1`. The saved report renders normally.

1. Open the saved report and select **Edit**.
2. Select the GrowthRate slider.
3. Under **Data**, change **Data source** from **Parameter** to **Model field**. Do not select a field.
4. Click the toolbar's **Undo** button.
5. Inspect the slider and its Data panel. Switch to Style and back to Data if needed.

**Expected:** Undo restores the previous usable parameter controller, including its visible binding and range settings.

**Observed:** **Parameter** and **GrowthRate** appear selected again, but **Minimum Value**, **Maximum Value**, and **Step** disappear from the panel. The canvas initially shows an empty slider placeholder. Switching panel tabs did not restore the settings in the first attempt; clicking the already selected GrowthRate also did not restore them.

During later page interactions in the second attempt, a slider/input reappeared on the canvas, but the range settings were still absent. Therefore, this report does **not** claim that the canvas remains permanently blank. No conclusion has been established about whether saving this inconsistent state would corrupt the report; that was not tested.

Evidence: [working configuration](./numeric-slider-before-mode-change.jpg), [first Undo result](./numeric-slider-after-undo.jpg), [repeat result](./numeric-slider-after-undo-repeat.jpg), [later partial rendering](./numeric-slider-undo-later-state.jpg).

**Workaround verified:** discard these unsaved test changes and reopen the saved report. The parameter controller, range settings, and default value return. Both reproduction attempts were discarded; the working tutorial report was retained.

**Suggested investigation:** compare the Undo snapshot with the restored controller binding, range configuration, and panel/render initialization. This is an investigation direction, not a verified cause.

## Usability observations

### Save notification overlaps primary editor actions

At the inspected 1458 × 884 viewport, the **Success** notification occupied the upper-right area over **Save as**, **Save**, and most of **Preview**. This can interrupt the normal save-then-preview sequence. The notification has a close control. Its timeout behavior was not established as a defect.

[Screenshot of the overlap](./save-notification-over-toolbar.jpg).

Suggested change: position the notification below the editor toolbar or use an inline save status that leaves the next action accessible.

### Parameter range fields lack accessible names

The Numeric slider panel visibly labels **Minimum Value**, **Maximum Value**, and **Step**, but the corresponding input elements were exposed without field names in the accessibility tree. DOM inspection found numeric inputs without `id`, `aria-label`, or `aria-labelledby`; the values were distinguishable only by their order. This can make the settings harder to identify with assistive technology. A screen-reader session was not performed.

[Visible range settings](../../docs/documentation/Visualization/images/current/scenario-slider-settings.jpg). Suggested change: associate each label with its input and verify the accessible name with a screen reader.

## Retest of the October 6 filter finding

The earlier report recorded a Region dropdown displaying **East China** while its linked chart continued to show five regions. In the current service, reopening **Regional Sales 2025** and selecting **East China** produced a chart containing only **East China**. Selecting **All** restored all five regions.

**Current status: not reproduced in this retest.** The underlying code change and root cause are unknown; this is not proof that all filter combinations are fixed. The historical evidence remains in [the October 6 report](../live-visualizer/README.md).

![Successful current filter result](./filter-east-china.jpg)

## Verified parameter example

**Saved report:** Personal → Visualizer Guide 2026 → **Sales Scenario**.

- Model: **Retail Chain Operations**; dimension: **Region**; base measure: **Net Sales**; component filter: **Year = 2025**.
- Parameter: **GrowthRate**, Numeric, Any value, default `0.1`.
- Calculated measure: `[Measures].[Net Sales] * (1 + ParamRef("GrowthRate"))`.
- Numeric slider: Parameter mode, range `-0.2` to `0.2`, step `0.01`.
- Title: `Sales Scenario (rate: ${GrowthRate})`.

The chart's **More → Data preview** exposed these Central China results. All five regional results were inspected at each tested rate.

| GrowthRate | Base Net Sales | Scenario Net Sales | Evidence |
| --- | ---: | ---: | --- |
| -0.2 | 372,226.37 | 297,781.10 | [Data preview](./scenario-rate-minus-0.2.jpg) |
| 0 | 372,226.37 | 372,226.37 | [Data preview](./scenario-rate-0.jpg) |
| 0.1 | 372,226.37 | 409,449.01 | [Data preview](./scenario-rate-0.1.jpg) |
| 0.2 | 372,226.37 | 446,671.64 | [Data preview](./scenario-rate-0.2.jpg) |

These match the expected multipliers to the displayed two decimal places. Changing the rate to `0.2` also changed the title to **Sales Scenario (rate: 0.2)** ([evidence](./dynamic-title-rate-0.2.jpg)). Reopening the saved report restored the `0.1` starting value and resolved title.

## Documentation changes

| Area | Correction |
| --- | --- |
| What-if analysis | One consistent GrowthRate example, exact formula, current binding steps, comparison values, and actual screenshots. |
| Parameter controllers | **Data source → Parameter**, with range settings in **Data**. Removed the obsolete Select parameter / Style → Range workflow. |
| Numeric field filtering | The catalog exposes **Numeric slider**, whose **Model field** mode selects an analysis model and numeric field. Removed the separate Range filter insertion instruction. |
| Filter catalog | Updated to the nine entries currently displayed; removed separate Button group and Range filter entries from the catalog table. |
| Calculated measures and titles | Consistent decimal-rate examples; actual formula and title configuration captures. |
| Linked components | Added the successfully retested East China result. |
| Console | Updated the English shortcut capture and AI Agent entry; removed the unobserved Learn & resources reference. |
| Decomposition tree | Removed an empty heading. |

Existing permalinks were preserved. In particular, the Numeric slider page still uses `/documentation/Visualization/Number-Range-Filter/` so existing links remain valid. Documentation images are actual product captures; the Home screenshot is cropped to the English shortcut area, excluding unrelated user-created report names.

## Verification and remaining coverage

Static link and image checks covered **89 pages**, **56 image references**, and **0 missing local references**; see [link-check.json](./link-check.json). `git diff --check` also passed. These checks do not establish rendered site correctness or validate external links. The user requested no build, so no build or site render was performed in this continuation.

The new scenario captures were visually reviewed. This is not a claim that every older screenshot or every component's behavior has been reverified against the October 8 service. Cross-model filtering, default-tab rule execution, drill-through destinations, map providers, and exported file contents still require dedicated runtime checks. Numeric slider Model field configuration was inspected; its full filtering behavior was not tested in this round.

The October 6 report describes the broader existing draft. The five temporary rewrite generators were removed to prevent their stale embedded text from overwriting newer direct edits. No documentation was published and no Git commit was created.
