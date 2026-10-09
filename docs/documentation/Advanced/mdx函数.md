---
title: MDX Functions
permalink: /documentation/Advanced/MDX-Functions/
description: Where MDX is written in Datafor, a quick reference of supported MDX functions, and the functions Datafor adds for row calculations, period comparisons and parameters.
createTime: 2026/09/01 22:03:26
---

# MDX Functions

Datafor's query engine is based on Mondrian and evaluates MDX. You write MDX expressions in two places:

- **Model calculated measures**, shared by every report on the model: see [Measures and Calculated Measures](/documentation/Model/Measures-and-Calculated-Measures/).
- **Report calculated measures**, defined in one report: see [Calculated Measures](/documentation/Analysis/Calculated-Measures/). [Quick calculated measures](/documentation/Analysis/Quick-Calculated-Measures/) generate the formula from a template.

This page is a short reference of standard functions that the engine supports, followed by the functions Datafor adds. Function names are not case-sensitive; member and Measure names are. Examples use FoodMart-style names; replace them with the Dimensions, hierarchies and Measures of your model.

## Quick reference

### Sets and aggregation

| Function | Syntax | Example |
| --- | --- | --- |
| Sum, Avg, Min, Max | `Sum(<Set>[, <Numeric>])` | `Sum({[Time].[1997].[Q1], [Time].[1997].[Q2]}, [Measures].[Store Sales])` |
| Aggregate | `Aggregate(<Set>[, <Numeric>])` (uses each Measure's own aggregation) | `Aggregate({[Time].[1997].[Q1], [Time].[1997].[Q2]})` |
| Count | `Count(<Set>[, EXCLUDEEMPTY \| INCLUDEEMPTY])` | `Count([Customers].[Name].Members, EXCLUDEEMPTY)` |
| Filter | `Filter(<Set>, <Condition>)` | `Filter([Store].[Store City].Members, [Measures].[Store Sales] > 1000)` |
| Order | `Order(<Set>, <Value>[, ASC \| DESC \| BASC \| BDESC])` | `Order([Product].[Brand Name].Members, [Measures].[Store Sales], BDESC)` |
| TopCount, BottomCount | `TopCount(<Set>, <Count>[, <Numeric>])` | `TopCount([Store].[Store City].Members, 5, [Measures].[Store Sales])` |
| Union, Intersect, Except | `Union(<Set1>, <Set2>)` | `Except([Store].[Store State].Members, {[Store].[USA].[WA]})` |
| Distinct | `Distinct(<Set>)` | `Distinct({[Store].[USA].[CA], [Store].[USA].[CA]})` |
| Crossjoin | `Crossjoin(<Set1>, <Set2>)` or `<Set1> * <Set2>` | `[Store].[Store State].Members * [Time].[Quarter].Members` |

There is no `DistinctCount()` function: count distinct values with a Measure whose aggregation is **Distinct Count**. Non-empty sets are written with `Filter(<Set>, NOT IsEmpty(<Numeric>))` or `NonEmptyCrossJoin(<Set1>, <Set2>)`.

### Members and navigation

Member navigation uses properties written after the member, not functions:

| Property or function | Returns | Example |
| --- | --- | --- |
| `.CurrentMember` | The member of the hierarchy in the current cell | `[Store].CurrentMember` |
| `.Parent`, `.Children`, `.Siblings` | Parent, children, siblings | `[Store].CurrentMember.Parent` |
| `.PrevMember`, `.NextMember`, `.Lag(<n>)` | Neighbouring members on the same level | `[Time].CurrentMember.PrevMember` |
| `.Name`, `.Caption` | Member name or caption as a string | `[Store].CurrentMember.Name` |
| `Ancestor(<Member>, <Level>)` | Ancestor at a level | `Ancestor([Time].CurrentMember, [Time].[Year])` |
| `Descendants(<Member>, <Level>)` | Descendants at a level | `Descendants([Time].[1997], [Time].[Month])` |

### Time

| Function | Use | Example |
| --- | --- | --- |
| `ParallelPeriod(<Level>, <n>, <Member>)` | Same period `<n>` periods earlier | `([Measures].[Store Sales], ParallelPeriod([Time].[Year], 1, [Time].CurrentMember))` |
| `PeriodsToDate(<Level>, <Member>)` | Periods from the start of the level to the member | `Sum(PeriodsToDate([Time].[Year], [Time].CurrentMember), [Measures].[Store Sales])` |
| `Ytd()`, `Qtd()`, `Mtd()` | Year, quarter, month to date | `Sum(Ytd(), [Measures].[Store Sales])` |
| `LastPeriods(<n>, <Member>)` | The last `<n>` periods up to the member | `Avg(LastPeriods(3, [Time].CurrentMember), [Measures].[Store Sales])` |

For period comparisons in reports, prefer Datafor's `FilteredParallelPeriod` and `FilteredLoopPeriod` (below), which follow the report's date filter.

### Conditions, strings and numbers

| Item | Syntax | Example |
| --- | --- | --- |
| IIf | `IIf(<Condition>, <Value1>, <Value2>)` | `IIf([Measures].[Store Sales] > 5000, "High", "Low")` |
| AND, OR, NOT | Infix operators | `[Measures].[Store Sales] > 5000 AND [Measures].[Unit Sales] > 100` |
| IsEmpty, CoalesceEmpty | `IsEmpty(<Value>)`, `CoalesceEmpty(<Value>, <Default>)` | `CoalesceEmpty([Measures].[Store Sales], 0)` |
| String concatenation | `<String> \|\| <String>` | `[Store].CurrentMember.Name \|\| " store"` |
| Replace, Left, Right, Len, InStr, UCase, LCase | VBA string functions | `Replace([Store].CurrentMember.Name, "Store", "Shop")` |
| Abs, Round, Int | VBA math functions | `Round([Measures].[Store Sales] / 1000, 1)` |
| Format | `Format(<Value>, <Format String>)` | `Format([Measures].[Store Sales], "#,##0.00")` |
| CInt, CDbl, CDate, Cast | Type conversion | `CDbl([Measures].[Unit Sales])`, `Cast([Measures].[Unit Sales] AS String)` |
| Now, DateAdd, DateDiff | VBA date functions; the interval is `"yyyy"`, `"q"`, `"m"`, `"ww"`, `"d"` and similar | `DateDiff("d", CDate("2026-01-01"), Now())` |

`DateAdd` and `DateDiff` work on date values, not on members of a time hierarchy; use `ParallelPeriod`, `Lag` or `FilteredParallelPeriod` to move between members.

## Datafor Functions

Datafor's query engine adds its own functions to standard MDX. [Quick calculated measures](/documentation/Analysis/Quick-Calculated-Measures/) generate most of them, and you can also write them in a [calculated measure](/documentation/Analysis/Calculated-Measures/) yourself. The behaviour below applies to Datafor 10.00 and later.

### Calculations along the rows

These functions work through the rows of the table or chart in the order they are displayed:

| Function | Syntax | Result |
| --- | --- | --- |
| FilteredRunningTotal | `FilteredRunningTotal(<Numeric Expression>)` | Running total from the first row of the group to the current row. Empty values are skipped; the result is empty until the first non-empty value. |
| FilteredMovingAvg | `FilteredMovingAvg(<Numeric Expression>, <Count>[, <Min Periods>])` | Average of the non-empty values in the current row and the `<Count>` − 1 rows before it. Empty when there are fewer than `<Min Periods>` non-empty values (default: `<Count>`), so the first `<Count>` − 1 rows are empty. |
| FilteredRank | `FilteredRank(<Numeric Expression>[, <Order>])` | Rank within the group. `<Order>` is `"DESC"` (default, highest first) or `"ASC"`; `"BDESC"` and `"BASC"` are accepted too. Equal values share a rank (1, 2, 2, 4); empty values get no rank. |
| FilteredPrev | `FilteredPrev(<Numeric Expression>[, <Count>])` | The value `<Count>` rows earlier in the group (default 1). Empty when there is no such row. |

- **Display order.** The rows are taken after sorting, filters and the row limit (including an "Others" row), before total rows. "Previous row" therefore follows the display order, not the calendar; use the period functions below for period-over-period comparisons.
- **Groups.** With several fields on rows, the calculation restarts in each outer group. When a field's parent level is also on rows, it restarts for each parent member.
- **Columns and filters.** The calculation is made separately for each column member and for the current filters.
- **Totals.** Total and subtotal rows are empty.
- **Only in reports.** The functions read the hidden row set `[~ROWS]` that Datafor adds to a report's query. In a hand-written MDX query without it, they fail with the error `<function> requires hidden named set [~ROWS]`.

The **Along the rows** group of quick measures generates, for example:

```text
FilteredRunningTotal([Measures].[Sales Amount])
FilteredMovingAvg([Measures].[Sales Amount], 3)
FilteredRank([Measures].[Sales Amount], "BDESC")
IIF(IsEmpty(FilteredPrev([Measures].[Sales Amount], 1)), NULL, [Measures].[Sales Amount] - FilteredPrev([Measures].[Sales Amount], 1))
```

A rank created as a quick measure gets the format `#,##0.00` and shows as "1.00". Change its format to `#,##0` to show whole numbers.

### Period comparisons

`FilteredParallelPeriod` and `FilteredLoopPeriod` return the comparison period of the current cell on a time hierarchy; `Aggregate` then sums the measure over it. Quick measures generate them in this form:

```text
Aggregate(FilteredParallelPeriod([Time].[Year Hierarchy], -1, "yyyy"), [Measures].[Sales Quantity])
Aggregate(FilteredLoopPeriod([Time].[Time Hierarchy], -1), [Measures].[Sales Quantity])
```

`FilteredParallelPeriod(<Hierarchy>, <Count>, <Interval>)` shifts by `<Count>` intervals: the year, quarter, month and week templates use `"yyyy"`, `"q"`, `"m"` and `"ww"`. `FilteredLoopPeriod(<Hierarchy>, <Count>)` takes the adjacent earlier period of the same length. `EnhancedParallelPeriod` and `EnhancedLoopPeriod` follow the same rules below.

- **Without a date filter** on the hierarchy, each cell is compared with the period it shows itself. With months on rows, for example, a year-over-year measure compares every month with the same month a year earlier.
- **No comparable period gives an empty cell.** When neither the cell nor the date filter names a specific period (the cell is on the All member, an empty member or a calculated total, and the date filter is absent or selects only the All member), the result is empty: not 0.00 %, not an error and not a comparison with all time. Earlier versions showed 0.00 % or a misleading value in these cells.
- **With a date range filter**, each row's part of the range is shifted when a finer time level (for example month) is on rows; without a time level on rows, the whole range is shifted.
- `FilteredLoopPeriod` with a negative count looks back by the length of the window in calendar periods, so a window of five months is compared with the five months before it.
- A window of whole months is shifted to whole months: February one month back is all of January.
- A date member that cannot be read as a date still raises an error.

### Top and bottom N with ties

`TopCount` and `BottomCount` accept a fourth argument `WITH_TIES`:

```text
TopCount([Store].[Store Name].Members, 5, [Measures].[Net Sales], WITH_TIES)
```

The result also includes every member whose value equals the fifth one. Members with an empty value are not ranked and take no place. `WITH_TIES` needs the sort expression and cannot be combined with an offset. The AI Agent uses it for "top N" questions.

### Aggregate of an empty set

`Aggregate` over an empty set returns an empty cell. Earlier versions showed 0.00, `IsEmpty` returned false and `NON EMPTY` kept the row. A comparison measure whose comparison period has no data is therefore empty and its row can be suppressed.

### Parameters in formulas

| Form | How it works |
| --- | --- |
| `ParamRef("name")` | Returns the current value of the parameter, or its default value when it has none. The calculated measure editor's **Insert parameter** list inserts it at the cursor. Recommended form. |
| `${name}` | Replaced as text in calculated measure and calculated member formulas before the formula is parsed, with the value of the bound filter or the parameter's default. Quote string values yourself; double quotes inside a value are doubled. |

Examples with `${name}`:

```text
[Measures].[Net Sales] * (1 + ${rate} / 100)
IIf([Store].CurrentMember.Name = "${region}", 1, 0)
```

See [Using Parameters in Calculated Measures](/documentation/Analysis/Using-Parameters-in-Calculated-Measures/).

