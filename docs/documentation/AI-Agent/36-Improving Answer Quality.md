---
title: Improving AI Agent Answers
permalink: /documentation/AI-Agent/Improving-Answer-Quality/
description: What business users, model authors, metric owners, and administrators can each do to make the AI Agent answer more accurately, and how to confirm that a change worked.
createTime: 2026/09/11 16:30:00
---

# Improving AI Agent Answers

This guide is for everyone who works with the AI Agent: the people who ask questions, the model authors who maintain analysis models, the metric owners who govern definitions in Metrics Library, and administrators. How well the Agent answers depends mostly on what it is given. Each section lists what one role can do, with links to the pages that describe the settings in full.

## 0. Where the Agent's understanding comes from

The Agent does not guess table structures and does not invent definitions from general knowledge. When it answers a question, it reads three things:

| Source | Who maintains it | Where | What it decides |
| --- | --- | --- | --- |
| **Business semantics of the analysis model** | Model authors | Modeler → **Attributes** panel | Whether a user's wording maps to a field; how time, units, percentages, and "higher is better" are understood |
| **Metrics Library** | Metric owners | Console → **Data → Metrics Library** | What a business term means, which measure computes it, which model answers a question that names no model, and whether the number must carry a caveat |
| **Knowledge index** (called vector index before 10.00) | Built automatically when a model is saved; administrators monitor it | **Settings › AI Agent › Knowledge indexes**; **Prep data for AI** on the model | Whether business terms and member values ("East Region", "Completed") are recognized |

Plus **the question itself**. The model-author and metric-owner sections each end with "How to confirm it worked", so you can verify a change yourself.

---

## 1. If you ask the questions

### 1.1 Ask with the names in Metrics Library

If your organization has registered enterprise metrics in Metrics Library (for example **Net Sales** or **Average Order Value**), **ask with the metric's name or one of its synonyms**. The Agent then computes the registered definition instead of a similarly named raw field in the model.

- "Net sales by region this year" is computed with the certified definition.
- "How is net sales defined?" returns the business definition, its caveats, unit, and direction from Metrics Library, and says which model currently implements it. No query is executed. If the answer contains a business definition and an owner, the term is registered.
- When one word matches two metrics (for example **Profit Rate** as a synonym of both **Gross Margin Rate** and **Contribution Margin Rate**), the Agent lists the candidates and asks you to choose. It never picks one silently.

With **Auto-select model**, the metric name also picks the model: the answer card says "Basis: the governed metric … is bound to this model." See [AI Assistant](/documentation/AI-Agent/AI-Chat/).

### 1.2 Read the governance notes in an answer

An answer that involves an enterprise metric sometimes carries a short note. Each note has a fixed meaning, and each tells you who can fix it:

| Note in the answer | Meaning | What to do |
| --- | --- | --- |
| The definition is not certified / still a draft | The Metrics Library record is a draft. The number is given as usual, but the business has not stood behind the definition yet. | Ask the metric owner to review it and click **Mark as certified**. |
| The number was not computed through a certified binding | The library defines the metric, but no measure in the current model is bound to it, so the Agent used a model field. | Ask the model author to bind a measure to the metric. |
| The definition is not certified at this grain | The dimension you asked for (for example, by city) is outside the metric's **Effective grain**. The number is still computed. | Usually nothing. If that grain is genuinely needed, ask the metric owner to extend the effective grain. |
| Possible drift / implementation contradicts the definition | The definition comparison found a conflict between the model formula and the business definition; the answer states the conflict. | Hand it to the metric owner and model author: change the definition or the formula, then compare again. |
| Pending re-check / definition changed | The definition or the model implementation changed and has not been compared again. | Ask the model author to click **Compare against new definition** on the **Metric bindings** tab. |

These notes appear **only when the metric is actually registered in Metrics Library**. No note at all means the term is not in the library, or definition and implementation were already compared and match, or the metric is a draft generated from the model (tagged **From model**) whose definition nobody has edited yet. The first case is itself a signal; see §3.2.

When the Agent asks "which date?" or "which definition?", the model or the library has two candidates. Pick one. If the same question keeps coming back, fix it at the source: the measure's **Default time field** or the metric's synonyms.

---

## 2. If you maintain the analysis model

### 2.1 Checklist

Work in the modeler's **Attributes** panel. Each item links to the full description in [Business Semantics for AI](/documentation/Model/Business-Semantics-for-AI/).

1. **Captions and descriptions in business language** on every user-visible dimension, attribute, hierarchy, measure and calculated measure. Fields with the same name and different meanings ("Sales (gross)" and "Net Sales") must each say what they include and exclude; this is the most frequent source of wrong answers. [Write captions and descriptions](/documentation/Model/Business-Semantics-for-AI/#write-captions-and-descriptions)
2. **Aliases** with the words users really say, and **Sample values** on attributes with many members (cities, stores, products), so that a question naming only a value ("East Region sales") lands on the right field. [Aliases and sample values](/documentation/Model/Business-Semantics-for-AI/#aliases-and-sample-values)
3. **Semantic roles**: the time roles on every level of a complete date hierarchy, plus geography, code, name and status roles. [Semantic roles](/documentation/Model/Business-Semantics-for-AI/#semantic-roles)
4. **Default dates**: the model's **Default time dimension** when most measures follow one date, and a measure's **Default time field** for the exceptions. [Default time field](/documentation/Model/Business-Semantics-for-AI/#default-time-field)
5. **Measure fields**: a percentage **Data Format** for ratios, **Unit**, **Display scale**, **Direction** (**Lower is better** for costs and return rates), and one to three **Recommended dimensions**, which decide the grouping of an unspecified breakdown and of a "why did it change?" answer. [Describe Measures](/documentation/Model/Business-Semantics-for-AI/#describe-measures)
6. **Ratios as numerator / denominator** (`N / D`, `IIf(D = 0, NULL, N / D)`, or `N - D` for a difference), without `*100`. Otherwise year-over-year comparisons of the ratio may be partial and its changes cannot be decomposed. [Write ratios as numerator and denominator](/documentation/Model/Business-Semantics-for-AI/#write-ratios-as-numerator-and-denominator)
7. **Bindings** to the enterprise metrics, one measure per metric in each model, then save the model. Bindings also choose the model for questions asked with **Auto-select model**, so bind each metric in the model that should answer for it. [Bind a governed enterprise metric](/documentation/Model/Business-Semantics-for-AI/#bind-a-governed-enterprise-metric)

Use the **Model diagnostics** tab at the bottom of the canvas as a checklist for missing descriptions (category **Semantic completeness**). See [Model Diagnostics](/documentation/Model/Model-Diagnostics/).

### 2.2 Compare definitions

After binding and saving, click **Compare definition** in the measure's **Definition consistency** row, or **Compare all** on the **Metric bindings** tab. Unresolved **Possible drift** and **Needs comparison** states show up in users' answers as they are (§1.2): a warning the user can see is better than a possibly wrong number that looks authoritative. The statuses, and what to do about each, are in [Review definition consistency](/documentation/Metrics-Library/Metrics-Library/#_5-review-definition-consistency).

### 2.3 After changing the model: the knowledge index

Once the model is saved, the Agent sees the new metadata immediately. The **knowledge index** follows on its own while **Auto-build knowledge index** is on, which is the default (**Settings › General › System configuration**): saving the model, including **Save as**, copying it, or importing it as a new model builds or updates its index in the background. Check the result on **Settings › AI Agent › Knowledge indexes**.

- A caption-only rename does not update the index.
- When the switch is off, run **Prep data for AI** for the model after changing descriptions, aliases, fields, or hierarchies.
- After switching the embedding model, click **Rebuild index** for every model's index.

See [Preparing Data for AI](/documentation/AI-Agent/Preparing-Data-for-AI/).

### 2.4 How to confirm it worked

1. Ask again with the exact wording that failed before, and check that it now maps to the right field.
2. Ask a question that names only a value, not a field ("East Region sales last month"), and check that "East Region" landed on the right field. Fields with many members rely on sample values; a recognized value also means the index is healthy.
3. Ask "sales this year" and check under **Technical details** → **How I read the question** that the date basis is the field you set as the default; for a measure without one, check that the date comes from the model's **Default time dimension**.
4. Ask for a ratio ("gross margin rate by category") and check that it is shown as a percentage.
5. Ask for a breakdown without naming the axis ("how is sales split?") and check that the grouping is one of the measure's recommended dimensions.
6. Ask for a ratio compared with last year ("gross margin rate this year versus last year") and check that the answer gives the comparison without a partial note.

---

## 3. If you own metric definitions

Metrics Library is the Agent's authority on **what a business term means**; the analysis model is its authority on **what exists and how it is computed**. A binding connects the two. Work in **Data → Metrics Library**; each item links to [Metrics Library](/documentation/Metrics-Library/Metrics-Library/).

### 3.1 Checklist

1. **At least one synonym per metric**, with the wording people actually use (`AOV, average order value, basket size`). The Agent matches names and synonyms exactly; a wording you did not register silently falls back to the raw model field. [Synonyms](/documentation/Metrics-Library/Metrics-Library/#synonyms)
2. **A business definition that states inclusions and exclusions**, specific enough for **Compare definition** to reach a verdict, and **Caveats / notes** for aggregation traps and historical breaks. [Business definition and caveats](/documentation/Metrics-Library/Metrics-Library/#business-definition-and-caveats)
3. **Calculation method**: **Ratio**, **Difference** or **Attainment rate** make the Agent query the operand metrics through their own bindings and compute the result itself, which needs the operands bound in the same model. A **Custom formula** is read only when comparing definitions. [Ask AI Agent about an enterprise metric](/documentation/Metrics-Library/Metrics-Library/#_6-ask-ai-agent-about-an-enterprise-metric)
4. **Unit, Direction, Owner and Applicable dimensions**, with dimension concepts registered on the **Dimension concepts** tab. [Dimension concepts](/documentation/Metrics-Library/Metrics-Library/#dimension-concepts)
5. **Mark as certified** once the definition is confirmed. From then on the Agent must use it. A certified metric without a binding is explained in full, but its numbers come from model fields with a note. [Certify](/documentation/Metrics-Library/Metrics-Library/#certify)
6. **Changing a certified or bound definition bumps its version** and puts every binding on **Needs comparison**; answers carry a "pending re-check" note until the model author compares again. [Change a certified or bound definition](/documentation/Metrics-Library/Metrics-Library/#change-a-certified-or-bound-definition)
7. **Bulk maintenance**: **Export CSV (editable in Excel)** to fill in synonyms and definitions, then **Import**. Model bindings never travel with the file. [Bulk maintenance and access](/documentation/Metrics-Library/Metrics-Library/#_8-bulk-maintenance-and-access)

### 3.2 How to confirm governance is really in effect

For a certified metric whose comparison matches, the Agent **does not** add any "certified" wording to the answer; by design it stays quiet. So you cannot tell by looking for keywords. Use two checks instead:

1. **Ask for the definition.** Ask "How is average order value defined?". The answer should be the library's business definition and caveats, and it should say which model implements it. If the answer describes a model field or says the formula cannot be confirmed, the term did not match; check the synonyms first.
2. **Watch the number.** Find a raw field with the same name and a clearly different value (a model that has both "Sales (gross)" and "Net Sales", for example), ask "net sales this year", and see which side the number lands on.

The **Model references** column and the **No model references** filter in the metric list show at a glance which certified metrics still have no binding.

Metrics Library changes reach the Agent within about a minute; no index rebuild is needed.

---

## 4. If you administer the platform: the knowledge index

Without an index the Agent still answers, but noticeably worse: recognition of business terms, near-synonyms, and member values drops sharply, and the chat page shows **Vector index is temporarily unavailable** at the top (the AI Assistant still uses the old term). Indexes are built or updated automatically when models are saved, as long as **Settings › General › System configuration → Auto-build knowledge index** stays on (the default). Your part is to watch **Settings › AI Agent › Knowledge indexes** for failed builds, to run **Prep data for AI** for models that have no index yet, and to add a refresh schedule where member values change often. Details: [Preparing Data for AI](/documentation/AI-Agent/Preparing-Data-for-AI/).

One reminder: **after changing the embedding model, click Rebuild index for every index.** The old index was built with the old model and cannot be used with the new one.

---

## 5. Quick reference: symptom → who → what

| What the user sees | Who | What to do |
| --- | --- | --- |
| A business term never maps to a field, or maps to the wrong one | Model author | Add the wording to the field's description or aliases, then check that the knowledge index updated (§2.1 items 1–2, §2.3) |
| The user names only a value ("East Region", "Completed") and the Agent asks which field it belongs to, or picks the wrong field | Model author | Add sample values to that field (§2.1 item 2) |
| A region or product name is "not found" | Administrator / model author | Check for the **Vector index is temporarily unavailable** banner first; if it is there, check the model on **Knowledge indexes** and build its index, otherwise check the member value's spelling (§4) |
| Two departments get different numbers for the same term | Model author + metric owner | Same name, different meaning: write both descriptions clearly; register the governed definition in Metrics Library and bind it (§2.1 items 1 and 7, §3.1 item 2) |
| Asked with the library name, but a raw field was computed | Metric owner | The user's wording is not among the synonyms; add it (§3.1 item 1). Then confirm the metric is bound in the current model (§2.1 item 7) |
| The answer says "definition not certified" | Metric owner | Review and **Mark as certified** (§3.1 item 5) |
| The answer says "not computed through a certified binding" | Model author | Bind the measure to the metric and save the model (§2.1 item 7) |
| The answer carries "possible drift" | Metric owner + model author | Read the comparison reason, change the definition or the formula, compare again (§2.2) |
| The answer carries "pending re-check / definition changed" | Model author | **Compare against new definition** on the **Metric bindings** tab (§2.2, §3.1 item 6) |
| "This year" keeps triggering "which date?", or the wrong date is used | Model author | Set the measure's **Default time field**, or the model's **Default time dimension** (§2.1 item 4) |
| Trends by month or quarter fail, or "same period last year" is wrong | Model author | Complete the time hierarchy and assign time semantic roles (§2.1 item 3) |
| A ratio shows as 0.41 instead of 41% | Model author | Give the measure a percentage **Data Format** (§2.1 item 5) |
| Amounts should read in thousands or millions | Model author | Set **Display scale** (§2.1 item 5) |
| A breakdown asked without naming the axis lands on an unhelpful grouping | Model author | Set the measure's **Recommended dimensions** (§2.1 item 5) |
| A "why did it change?" answer breaks the change down by unhelpful dimensions | Model author | Set the measure's **Recommended dimensions** (§2.1 item 5); users can also name the dimensions in the question |
| A ratio's year-over-year comparison is missing, or its change cannot be decomposed | Model author / metric owner | Write the ratio as numerator / denominator (§2.1 item 6), or bind it to a Ratio metric whose operands are bound in the same model (§3.1 item 3) |
| With **Auto-select model**, the Agent answers from the wrong model or keeps asking which model to use | Model author | Bind the metric in the model that should answer for it, and avoid binding it in models that should not (§2.1 item 7) |

---

## 6. A sequence for a new model

When a new analysis model is being onboarded and you want the Agent to be useful from day one, do the following in order:

1. **Model author**: write a definition-style description and aliases for every measure; assign time semantic roles to date attributes; write ratio measures as numerator / denominator and give them a percentage format; set a default time field on measures when the model has several dates; save the model.
2. **Administrator**: check on **Knowledge indexes** that the save built the model's index (run **Prep data for AI** if **Auto-build knowledge index** is off).
3. **Business users**: ask ten real questions and note every wording that did not map.
4. **Model author**: add those wordings as aliases and save the model again.
5. **Metric owner**: register the core reporting metrics (typically 5–15) in Metrics Library, each with at least one synonym and a definition that states inclusions and exclusions.
6. **Model author**: bind those metrics to measures, save the model, run **Compare all**, and resolve any possible drift.
7. **Metric owner**: once everything checks out, **Mark as certified**.

Ongoing maintenance is one task: keep adding the new wordings that show up in users' questions as aliases and synonyms.

## Related topics

- [AI Assistant](/documentation/AI-Agent/AI-Chat/)
- [Preparing Data for AI](/documentation/AI-Agent/Preparing-Data-for-AI/)
- [Business Semantics for AI](/documentation/Model/Business-Semantics-for-AI/)
- [Time Semantics and Default Time Settings](/documentation/Model/Time-Dimensions-and-Time-Intelligence/)
- [Units and Display Scale](/documentation/Model/Units-and-Display-Scale/)
- [Model Diagnostics](/documentation/Model/Model-Diagnostics/)
- [Metrics Library](/documentation/Metrics-Library/Metrics-Library/)
