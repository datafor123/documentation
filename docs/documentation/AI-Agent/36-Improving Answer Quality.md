---
title: Improving AI Agent Answers
permalink: /documentation/AI-Agent/Improving-Answer-Quality/
description: What business users, model authors, metric owners, and administrators can each do to make the AI Agent answer more accurately, and how to confirm that a change worked.
createTime: 2026/09/11 16:30:00
---

# Improving AI Agent Answers

This guide is for everyone who works with the AI Agent: the people who ask questions, the model authors who maintain analysis models, the metric owners who govern definitions in Metrics Library, and administrators. It covers one idea: **how well the Agent answers depends mostly on what it is given, and all of that is in your hands.**

Feature names follow the current English interface; check the version you are running.

## 0. Where the Agent's understanding comes from

The Agent does not guess table structures and does not invent definitions from general knowledge. When it answers a question, it reads three things:

| Source | Who maintains it | Where | What it decides |
| --- | --- | --- | --- |
| **Business semantics of the analysis model** | Model authors | Model Designer → properties panel | Whether a user's wording maps to a field; how time, units, percentages, and "higher is better" are understood |
| **Metrics Library** | Metric owners | Console → **Data → Metrics Library** | What a business term means, which measure computes it, and whether the number must carry a caveat |
| **Vector index** | Administrators | **Prep data for AI** on the model, **Vector Indexes** page | Whether business terms and member values ("East Region", "Completed") are recognized |

Plus **the question itself**. The sections below are organized by role. The model-author and metric-owner sections each end with "How to confirm it worked", so you can verify a change yourself.

---

## 1. If you ask the questions

### 1.1 Ask with the names in Metrics Library

If your organization has registered enterprise metrics in Metrics Library (for example **Net Sales** or **Average Order Value**), **ask with the metric's name or one of its synonyms**. The Agent then computes the registered definition instead of a similarly named raw field in the model.

- "Net sales by region this year" is computed with the certified definition.
- "How is net sales defined?" returns the business definition, its caveats, unit, and direction from Metrics Library, and says which model currently implements it. No query is executed.
- When one word matches two metrics (for example **Profit Rate** as a synonym of both **Gross Margin Rate** and **Contribution Margin Rate**), the Agent lists the candidates and asks you to choose. **It never picks one silently.**

Not sure what is in the library? Ask the Agent "How is X defined?". If the answer contains a business definition and an owner, the term is registered. You can also ask a metric owner for a list exported from the Console.

### 1.2 Read the governance notes in an answer

An answer that involves an enterprise metric sometimes carries a short note. Each note has a fixed meaning, and each tells you who can fix it:

| Note in the answer | Meaning | What to do |
| --- | --- | --- |
| The definition is not certified / still a draft | The Metrics Library record is a draft. The number is given as usual, but the business has not stood behind the definition yet. | Ask the metric owner to review it and click **Mark as certified**. |
| The number was not computed through a certified binding | The library defines the metric, but no measure in the current model is bound to it, so the Agent used a model field. | Ask the model author to bind a measure to the metric in the properties panel. |
| The definition is not certified at this grain | The dimension you asked for (for example, by city) is outside the metric's **Effective grain**. The number is still computed. | Usually nothing. If that grain is genuinely needed, ask the metric owner to extend the effective grain. |
| Possible drift / implementation contradicts the definition | The definition comparison found a conflict between the model formula and the business definition; the answer states the conflict. | Hand it to the metric owner and model author: change the definition or the formula, then compare again. |
| Pending re-check / definition changed | The definition or the model implementation changed and has not been compared again. | Ask the model author to click **Compare against new definition** on the **Metric bindings** tab. |

These notes appear **only when the metric is actually registered in Metrics Library**. No note at all means either the term is not in the library, or definition and implementation were already compared and match. The first case is itself a signal; see §3.7.

When the Agent asks "which date?" or "which definition?", the model or the library has two candidates. Pick one. If the same question keeps coming back, fix it at the source: see §2.4 (Default time field) and §3.1 (Synonyms).

---

## 2. If you maintain the analysis model

Where: Model Designer → select an object in the tree or on the canvas → the **properties panel** on the right. The panel is grouped into **Core**, **Business semantics**, **Advanced** (attributes only), and **Metric governance** (measures only). The fields the Agent cares about are in **Business semantics** and **Metric governance**.

One principle first: **metadata does not have to be perfect, but it has to be readable and written in business language.** The Agent discloses limits on an imperfect model instead of forcing an answer. When a particular phrasing does not work, fix the description or aliases first; you rarely need to restructure the model.

### 2.1 Captions and descriptions: the Agent's primary material

| Object | What to write |
| --- | --- |
| Dimension | What business entity it represents: "Product master data with brand and category" |
| Attribute (field) | Its business meaning: "Unique product code, same as the ERP item number" |
| Hierarchy | The drill-down path: "Country → Province → City" |
| Measure | The **business definition**: "Store sales including tax, excluding returns" |
| Calculated measure | What it measures and how: "Gross margin rate = gross margin / sales" |

Three points:

- **Use business words for captions.** "Sales" rather than `AMT_1`; the words in a user's question have to match a caption or a description.
- **Fields with the same name and different meanings must be told apart.** A model that contains both "Sales (gross)" and "Net Sales" is common and legitimate, but each description must state what it includes and excludes. This is the most frequent source of wrong answers.
- **Do not put SQL or table names in descriptions.** The Agent does not need them and users cannot read them.

The **Model diagnostics** tab in the **Insights** panel at the bottom of the designer lists every object that "has no description for AI to read" (category **Semantic completeness**). Use it as a checklist. See [Model Diagnostics](/documentation/Model/Model-Diagnostics/).

### 2.2 Aliases: register the words users actually say

The **Aliases** field in **Business semantics** (dimensions, attributes, and measures all have it), comma separated:

- Dimension: `goods, items, SKUs`
- Attribute: `product code, SKU, item number`
- Measure: `revenue, sales, turnover`

What to register? **The words users really use**: colloquial terms, abbreviations, English column names, and the different names departments use for the same thing. Any wording users tried that did not map to a field belongs here.

### 2.3 Attribute semantic roles: tell the Agent this is a "month" or a "city"

An attribute's **Semantic role** in **Core** is not a comment; it changes how the Agent understands the field:

- **Time: Year / Quarter / Month / Week / Date** set the field's time grain. With the right roles, "trend by month", "same period last year", and "month over month" have something to land on. Build the full date hierarchy (Year → Quarter → Month, optionally → Day) and assign the matching time role to every level. See [Time Semantics and Default Time Settings](/documentation/Model/Time-Dimensions-and-Time-Intelligence/).
- **Geography: Country / State / City**, **Identifier / Code**, **Name / Display name**, **Category**, **Type**, **Segment / Range**, **Status**, **Flag**, **Numeric attribute**, and **Sort field** are hints that help the Agent judge how a field is used (a code is not a good grouping label; a status is usually a filter).

### 2.4 Default time field: required for models with several dates

An order fact table often has an order date, a ship date, and a delivery date. When a user says "this year", the Agent has to decide which one applies. Without a declaration it either asks or infers from descriptions, and neither is stable.

Set **Default time field** in the measure's **Business semantics** to a time attribute or hierarchy level. From then on, "sales this year" is read against that date field, and the answer's **Evidence and boundaries** section states which date was used. Each measure can differ: "Refund amount" can default to the return date while "Sales" defaults to the order date.

### 2.5 Unit, Display scale, Data Format, Direction

All four live on the measure and each controls one thing:

| Field | Location | Effect | How to fill it in |
| --- | --- | --- | --- |
| **Data Format** | Core | Give ratio measures a percentage format such as `0.00%`; the Agent then presents them as percentages instead of `0.41`. | Required for ratios |
| **Unit** | Business semantics | The Agent names the unit in the reader's language (dollars, days, orders). | Pick a standard unit or type your own; units already used in this model are listed first. See [Units and Display Scale](/documentation/Model/Units-and-Display-Scale/). |
| **Display scale** | Core | The Agent and reports present the number at this magnitude (K, M, B). | Only for amounts and counts read as trends; leave detail values unscaled. |
| **Direction** | Business semantics | Higher is better / Lower is better / Neutral; helps the Agent describe whether a change is good or bad. | Remember to set "Lower is better" for costs and return rates. |

With several measures selected, fields such as Unit and Direction can be set in bulk. Caption, Description, Aliases, and the enterprise metric binding identify a single measure and must be set one at a time.

### 2.6 Bind measures to enterprise metrics (Metric governance)

A definition in Metrics Library only constrains the Agent's computation once it is bound to a measure in the model. Binding happens in the designer, in one of two ways:

- **Existing measure**: select the measure → properties panel → **Metric governance** → **Enterprise metric**, and choose a library record. Fill in **Effective grain** only when the metric stops being meaningful at other grains (sales per square meter is only valid by store and month, for example). Leave it empty for "any grain".
- **New calculated measure**: choose **Reference from metrics library** when creating it → select the metric → **Next: write formula**.

Rules and reminders:

- **One metric, one measure per model.** Binding a second measure raises the "Metric already bound" dialog, which warns that the Agent cannot tell which one to compute with. Do not force it.
- **Save the model after binding.** Saving writes the binding and a snapshot of the measure's implementation (aggregation or formula) to Metrics Library; the definition can be compared only after that. A binding shown as **Not registered** just needs a save.
- After renaming a measure or changing its formula, save once more. The snapshot updates automatically and the binding switches to **Needs comparison**.

### 2.7 Compare definitions: catch drift before users do

After binding and saving, the **Definition consistency** row appears under **Metric governance**; click **Compare definition**. Or open the **Metric bindings** tab in the **Insights** panel and click **Compare all** to run the whole model at once. The comparison is done by AI and has five outcomes:

| Status | Meaning | What to do |
| --- | --- | --- |
| **Matches definition** | The implementation agrees with the business definition. | Nothing. |
| **Possible drift** | The implementation contradicts the definition, with a one-line reason (for example "the denominator uses all orders, the definition requires paid orders"). | Agree with the metric owner: change the model formula or change the definition, then compare again. |
| **Not enough evidence** | The definition is not specific enough, or the formula references something the comparison cannot see. | Make the definition concrete (see §3.2) and compare again. |
| **Not compared** | Never run. | Run it. |
| **Needs comparison** | The definition got a new version, or the model implementation changed. | Click **Compare against new definition**. |

**Unresolved "Possible drift" and "Needs comparison" states show up in users' answers as-is** (§1.2). That is deliberate: a warning the user can see is better than a possibly wrong number that looks authoritative. Conversely, when a comparison flags something that is not really wrong, the usual cause is a definition that does not state its scope (for example, whether the denominator includes cancelled orders). Fix the definition text; do not change the model just to silence the warning.

### 2.8 After changing the model: refresh the vector index

Once the model is saved, the Agent sees the new metadata immediately, but **the vector index is not rebuilt on its own**. After changing descriptions, aliases, fields, or hierarchies, run **Prep data for AI** for that model again. After switching the embedding model, prepare every model again. See [Preparing Data for AI](/documentation/AI-Agent/Preparing-Data-for-AI/).

### 2.9 How to confirm it worked

1. Ask again with the exact wording that failed before, and check that it now maps to the right field.
2. Ask a question that names a member value ("East Region sales last month"). If the value is recognized, the index is healthy.
3. Ask "sales this year" and check that **Evidence and boundaries** names the date field you set as the default.
4. Ask for a ratio ("gross margin rate by category") and check that it is shown as a percentage.

---

## 3. If you own metric definitions

Where: Console → **Data → Metrics Library**, with two tabs: **Metrics** and **Dimension concepts**. Metrics Library is the single source of truth for enterprise metrics. The Agent treats it as the authority on **what a business term means**, and treats the analysis model as the authority on **what exists and how it is computed**. The binding from §2.6 connects the two. For the full page reference see [Metrics Library](/documentation/Metrics-Library/Metrics-Library/).

### 3.1 Synonyms are the lifeline: add at least one

The Agent matches metrics by **exact match on name and synonyms**, with no fuzzy guessing. Names such as "Net Sales", "Gross Sales", and "Sales after Returns" are semantically close and mean completely different things; a wrong guess would be a silently wrong number.

The price: **a wording you did not register does not match.** The Agent quietly falls back to the raw model field, and from the outside that looks exactly like "this term was never governed". There is no warning. So:

- **Add at least one synonym when creating a metric** (the form reminds you), and include the wording people actually use: `AOV, average order value, basket size`.
- Check again before certifying. A certified metric with no synonyms is the most dangerous combination: the definition that most needs governance is the easiest to bypass.
- When a model author binds a measure, the designer shows **Synonyms missing from the metrics library** and offers **Add to metrics library** in one click; synonyms that exist only in the library can be merged into the measure the same way.

### 3.2 Business definition and caveats: written for the Agent to read verbatim

**Business definition**: describe the business meaning and, in the same place, **what is included, what is excluded, and any caveats**. The Agent uses it to disambiguate, to explain results, and to compare the model implementation for drift. How specific? Specific enough for **Compare definition** to reach a verdict:

- Weak: `Net sales`
- Usable: `Sales amount of completed and paid orders, net of returned amounts`
- Good: `Sales amount of completed and paid orders, net of returned amounts. Cancelled and unpaid orders are excluded. Differs from "Gross Sales", which includes cancelled and unpaid orders and does not deduct returns.`

**Caveats / notes**: the Agent carries this text whenever it reports or explains the metric. Use it for aggregation traps and historical breaks: `Do not average line-level margin rates; aggregate numerator and denominator first`, `Data before June 2025 still includes internal transfers`.

**Calculation method / Calculation relation**: choose **Base metric**, **Ratio**, **Difference**, **Attainment rate**, or **Custom formula**, and express the relation with other base metrics in the library. It is **not SQL or MDX and is never used to compute a number**; it is read only when comparing definitions and detecting drift. The executable aggregation and filters stay in the analysis model.

### 3.3 Unit, Direction, Applicable dimensions, Owner

- **Unit**: pick a standard unit or type your own. Units are stored as language-neutral codes and named in each reader's language.
- **Direction**: Higher is better or Lower is better.
- **Applicable dimensions (concept references)**: register concepts on the **Dimension concepts** tab first (Name, Concept ID, Synonyms, Description), then reference them on the metric. Dimension concepts are cross-model conformance anchors: the Agent sees every concept with its synonyms, so it knows that "region", "area", and "territory" describe the same business dimension, and it knows which dimensions a metric is meaningful on.
- **Owner**: someone is accountable for the definition, and the Agent can name who to ask.

### 3.4 Draft and Certified

- A new metric is a **Draft**. Drafts take part in answers, but the Agent labels the definition as not certified.
- Once the definition is confirmed, click **Mark as certified**. Certification means: **the Agent must use this definition when answering questions about the metric and may no longer improvise.**
- Certifying a metric that is not bound to any model is allowed. The Agent can explain its definition in full; when asked for a number it answers from the model's fields as usual and states that the number did not come through a certified binding (§1.2). For the definition to constrain the computation, complete the binding in §2.6.

### 3.5 Changing a definition bumps the version

When you edit a certified or bound metric and change a **substantive field** (Business definition, Calculation relation, Unit, Direction, Applicable dimensions), saving shows **Definition change requires a new version**. The version increments and every model binding switches to **Needs comparison (metric definition changed)**. A model author then has to click **Compare against new definition** on the **Metric bindings** tab; until then, users' answers carry a "pending re-check" note. Drafts without bindings can be edited freely and do not bump the version.

### 3.6 Import, export, and bulk maintenance

- **Export CSV**, fill in synonyms and definitions in Excel, then **Import** the file back. **Export JSON** produces a full bundle for moving between environments.
- On import, an existing ID can be skipped or overwritten; **overwriting keeps the metric's existing model bindings**.
- Imported new metrics arrive as **Draft**; certification stays a manual step. Tick **Keep the certification status from the file** only when migrating a whole environment.
- Model bindings never travel with the file; they are maintained in the designer.

### 3.7 How to confirm governance is really in effect

For a certified metric whose comparison matches, the Agent **does not** add any "certified" wording to the answer; by design it stays quiet. So you cannot tell by looking for keywords. Use two checks instead:

1. **Ask for the definition.** Ask "How is average order value defined?". The answer should be the library's business definition and caveats, and it should say which model implements it. If the answer describes a model field or says the formula cannot be confirmed, the term did not match; check the synonyms first.
2. **Watch the number.** Find a raw field with the same name and a clearly different value (a model that has both "Sales (gross)" and "Net Sales", for example), ask "net sales this year", and see which side the number lands on.

The **Model references** column and the **No model references** filter in the metric list show at a glance which certified metrics still have no binding.

Metrics Library changes reach the Agent within about a minute; no index rebuild is needed.

---

## 4. If you administer the platform: the vector index

Without an index the Agent still answers, but noticeably worse: recognition of business terms, near-synonyms, and member values drops sharply, and the chat page shows **Vector index is temporarily unavailable** at the top. When to prepare, when to prepare again, and how to confirm: see [Preparing Data for AI](/documentation/AI-Agent/Preparing-Data-for-AI/).

One reminder: **after changing the embedding model, prepare every model again.** The old index was built with the old model; without a rebuild, retrieval fails on every query and nothing reports an error.

---

## 5. Quick reference: symptom → who → what

| What the user sees | Who | What to do |
| --- | --- | --- |
| A business term never maps to a field, or maps to the wrong one | Model author | Add the wording to the field's description or aliases, then run Prep data for AI (§2.1, §2.2, §2.8) |
| A region or product name is "not found" | Administrator / model author | Check for the **Vector index is temporarily unavailable** banner first; prepare the model if present, otherwise check the member value's spelling (§4) |
| Two departments get different numbers for the same term | Model author + metric owner | Same name, different meaning: write both descriptions clearly; register the governed definition in Metrics Library and bind it (§2.1, §3.2, §2.6) |
| Asked with the library name, but a raw field was computed | Metric owner | The user's wording is not among the synonyms; add it (§3.1). Then confirm the metric is bound in the current model (§2.6) |
| The answer says "definition not certified" | Metric owner | Review and **Mark as certified** (§3.4) |
| The answer says "not computed through a certified binding" | Model author | Bind the measure to the metric and save the model (§2.6) |
| The answer carries "possible drift" | Metric owner + model author | Read the comparison reason, change the definition or the formula, compare again (§2.7) |
| The answer carries "pending re-check / definition changed" | Model author | **Compare against new definition** on the Metric bindings tab (§2.7, §3.5) |
| "This year" keeps triggering "which date?", or the wrong date is used | Model author | Set the measure's **Default time field** (§2.4) |
| Trends by month or quarter fail, or "same period last year" is wrong | Model author | Complete the time hierarchy and assign time semantic roles (§2.3) |
| A ratio shows as 0.41 instead of 41% | Model author | Give the measure a percentage **Data Format** (§2.5) |
| Amounts should read in thousands or millions | Model author | Set **Display scale** (§2.5) |

---

## 6. A sequence for a new model

When a new analysis model is being onboarded and you want the Agent to be useful from day one, do the following in order; each step takes an hour or two:

1. **Model author**: write a definition-style description and aliases for every measure; assign time semantic roles to date attributes; give ratio measures a percentage format; set a default time field on measures when the model has several dates; save the model.
2. **Administrator**: run **Prep data for AI** for the model.
3. **Business users**: ask ten real questions and note every wording that did not map.
4. **Model author**: add those wordings as aliases and prepare the model again.
5. **Metric owner**: register the core reporting metrics (typically 5–15) in Metrics Library, each with at least one synonym and a definition that states inclusions and exclusions.
6. **Model author**: bind those metrics to measures, save the model, run **Compare all**, and resolve any possible drift.
7. **Metric owner**: once everything checks out, **Mark as certified**.

After these seven steps the Agent is close to its ceiling for that model. Ongoing maintenance is one task: keep adding the new wordings that show up in users' questions as aliases and synonyms.

## Related topics

- [AI Assistant](/documentation/AI-Agent/AI-Chat/)
- [Preparing Data for AI](/documentation/AI-Agent/Preparing-Data-for-AI/)
- [Business Semantics for AI](/documentation/Model/Business-Semantics-for-AI/)
- [Time Semantics and Default Time Settings](/documentation/Model/Time-Dimensions-and-Time-Intelligence/)
- [Units and Display Scale](/documentation/Model/Units-and-Display-Scale/)
- [Model Diagnostics](/documentation/Model/Model-Diagnostics/)
- [Metrics Library](/documentation/Metrics-Library/Metrics-Library/)
