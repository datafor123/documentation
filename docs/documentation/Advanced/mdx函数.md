---
title: MDX Functions
permalink: /documentation/Advanced/MDX-Functions/
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
| ORDER      | Orders members by a criterion                        | `ORDER(Set, Expression, ASC|DESC)`| `ORDER({[Customers]}, [Sales], DESC)`                 |
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

MDX functions are essential for effective data analysis in Datafor, providing flexibility and powerful tools to interact with multidimensional data. Use this guide as a quick reference when building advanced analytical models and reports.
