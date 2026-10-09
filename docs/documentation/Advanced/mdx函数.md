---
title: MDX Functions
permalink: /documentation/Advanced/MDX-Functions/
createTime: 2026/09/01 22:03:26
---

# MDX Functions

MDX (Multidimensional Expressions) is a powerful query language designed for multidimensional data analysis, commonly utilized in OLAP (Online Analytical Processing) systems. Datafor leverages MDX to define calculated metrics and perform multidimensional data operations such as querying, aggregating, filtering, and computing.

This guide provides an overview of essential MDX functions grouped by their common use cases:

## Function Categories

- **Aggregation Functions:** Calculate summaries such as totals, averages, and counts.
- **Set Functions:** Operate on sets to combine, intersect, filter, or sort data.
- **Member Functions:** Access and manipulate hierarchical dimension members.
- **Time Functions:** Perform calculations and conversions related to dates and time.
- **Logical Functions:** Apply logical conditions to data.
- **String Functions:** Manipulate and format textual data.
- **Mathematical Functions:** Execute numeric calculations.
- **Type Conversion Functions:** Convert data from one type to another.

---

## Aggregation Functions

| Function      | Description                                    | Syntax                             | Example                                |
|---------------|------------------------------------------------|------------------------------------|----------------------------------------|
| COUNT         | Counts members or elements in a set            | `COUNT(Set)`                       | `COUNT({[Measures].[Sales]})`          |
| SUM           | Calculates the sum of set elements             | `SUM(Set)`                         | `SUM({[Measures].[Sales]})`            |
| AVG           | Calculates the average of set elements         | `AVG(Set)`                         | `AVG({[Measures].[Sales]})`            |
| MIN           | Finds the minimum value within a set           | `MIN(Set)`                         | `MIN({[Measures].[Sales]})`            |
| MAX           | Finds the maximum value within a set           | `MAX(Set)`                         | `MAX({[Measures].[Sales]})`            |
| DISTINCTCOUNT | Counts distinct members within a set           | `DISTINCTCOUNT(Set)`               | `DISTINCTCOUNT({[Customers].Members})` |
| AGGREGATE     | Aggregates values based on set members         | `AGGREGATE(Set)`                   | `AGGREGATE({[Time].[Q1], [Time].[Q2]})`|

---

## Set Functions

| Function   | Description                                          | Syntax                            | Example                                               |
|------------|------------------------------------------------------|-----------------------------------|-------------------------------------------------------|
| FILTER     | Filters set based on a condition                     | `FILTER(Set, Condition)`          | `FILTER({[Customers].Members}, [Sales]>1000)`         |
| NONEMPTY   | Retrieves non-empty intersections                    | `NONEMPTY(Set)`                   | `NONEMPTY({[Customers]} * {[Time].[Q1]})`             |
| ORDER      | Orders members by a criterion                        | `ORDER(Set, Expression, ASC \| DESC)`| `ORDER({[Customers]}, [Sales], DESC)`                 |
| UNION      | Combines two sets into one                           | `UNION(Set1, Set2)`               | `UNION({[USA].[CA]}, {[USA].[WA]})`                   |
| INTERSECT  | Intersection of two sets                             | `INTERSECT(Set1, Set2)`           | `INTERSECT({[USA]}, {[USA].[WA]})`                    |
| EXCEPT     | Difference between two sets                          | `EXCEPT(Set1, Set2)`              | `EXCEPT({[USA]}, {[USA].[WA]})`                       |
| DISTINCT   | Removes duplicate members from a set                 | `DISTINCT(Set)`                   | `DISTINCT({[Customers].Members})`                     |
| CROSSJOIN  | Cartesian product of sets                            | `CROSSJOIN(Set1, Set2)`           | `CROSSJOIN({[USA]}, {[Products]})`                    |

---

## Member Functions

| Function      | Description                                    | Syntax                       | Example                            |
|---------------|------------------------------------------------|------------------------------|------------------------------------|
| CURRENTMEMBER | Current context member                         | `CURRENTMEMBER`              | `[Customers].[USA].[CA].CURRENTMEMBER` |
| PARENT        | Parent of a member                             | `PARENT(Member)`             | `PARENT([Customers].[USA].[CA])`   |
| CHILDREN      | Children members                               | `CHILDREN(Member)`           | `CHILDREN([Time].[Q1])`            |
| SIBLINGS      | Sibling members                                | `SIBLINGS(Member)`           | `SIBLINGS([Customers].[CA])`       |

---

## Time Functions

| Function     | Description                                       | Syntax                     | Example                             |
|--------------|---------------------------------------------------|----------------------------|-------------------------------------|
| NOW          | Current timestamp                                 | `NOW`                      | `NOW`                               |
| DATEADD      | Adds intervals to a date                          | `DATEADD(Interval, Date)`  | `DATEADD("YY",1,[Time].[Q1])`     |
| DATEDIFF     | Calculates difference between dates               | `DATEDIFF(Interval, Date1, Date2)` | `DATEDIFF("YY",[1997],[1998])`    |

---

## Logical Functions

| Function | Description                                       | Syntax                            | Example                                   |
|----------|---------------------------------------------------|-----------------------------------|-------------------------------------------|
| IIF      | Conditional expression                            | `IIF(Condition,TrueValue,FalseValue)`| `IIF([Sales]>5000,"High","Low")`|
| AND      | Logical AND operation                             | `AND(Condition1,Condition2)`      | `AND([Sales]>5000,[Time].[Q1])`           |
| OR       | Logical OR operation                              | `OR(Condition1,Condition2)`       | `OR([Sales]>5000,[Time].[Q1])`            |

---

## String Functions

| Function | Description                                       | Syntax                               | Example                               |
|----------|---------------------------------------------------|--------------------------------------|---------------------------------------|
| CONCAT   | Joins two strings                                 | `CONCAT(String1,String2)`            | `CONCAT("Hello"," World")`         |
| REPLACE  | Replaces substring                                | `REPLACE(String,Old,New)`            | `REPLACE("Hello World","World","MDX")` |

---

## Mathematical Functions

| Function | Description                                       | Syntax                 | Example     |
|----------|---------------------------------------------------|------------------------|-------------|
| ABS      | Absolute value                                    | `ABS(Number)`          | `ABS(-10)`  |
| ROUND    | Rounds number                                     | `ROUND(Number,Digits)` | `ROUND(3.14159,2)`|

---

## Type Conversion

| Function | Description                                       | Syntax           | Example                |
|----------|---------------------------------------------------|------------------|------------------------|
| CSTR     | Converts to string                                | `CSTR(Value)`    | `CSTR(123)`            |
| CINT     | Converts to integer                               | `CINT(Value)`    | `CINT("123")`          |
| CDATE    | Converts to date                                  | `CDATE(Value)`   | `CDATE("01/01/2020")` |

---

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

---

MDX functions are essential for effective data analysis in Datafor, providing flexibility and powerful tools to interact with multidimensional data. Use this guide as a quick reference when building advanced analytical models and reports.
