---
title: Calendar chart
permalink: /documentation/Visualization/Calendar-Chart/
createTime: 2026/09/01 22:03:26
---

# Calendar chart

Show a daily measure on a calendar to reveal weekday patterns, busy periods and gaps. It is useful for daily sales, incidents or attendance. Use a line chart when precise change between dates is the main question.

## Bind daily data

1. Add **Components → Charts → Calendar chart** and choose an **Analysis model** in **Data**.
2. Put a valid day-level date field in **Date** and the daily metric in **Measure**.
3. Set **Filters** to the period you want to display. Add supporting values to **Tooltips** if needed.
4. Start without a **Color** field when you want color intensity to represent the measure.

Use a real date in a supported format. A month name or month-level field does not identify a calendar day. Multiple records for one day follow the selected measure's aggregation.

## Control range and colors

In **Style → Plot area**, choose **Display range**:

- **Whole year** keeps the year context, including days outside the returned data range.
- **Data range** follows the first and last returned dates. A range of at most a year uses one calendar row; longer ranges are arranged by year.

**Color by value** uses **Min. value color** and **Max. value color** when no Color field is bound. A bound **Color** field takes precedence; remove it if the intensity no longer follows the measure as expected.

Use **Layout → Auto**, **Horizontal**, or **Vertical** to fit the report. Configure **Year**, **Month**, and **Weekday** labels, and use month separators and cell grid settings to help readers locate dates.

## Distinguish empty days from zero

A blank day can mean no returned data, not zero activity. Check whether the model returns zero for that day and whether filters excluded it. Do not interpret missing weekends as a drop without checking the source.

Save and open **Preview**. Hover dates near the start and end of the range and verify the daily values. Check multi-year boundaries and confirm that the date grain, timezone handling in the source, and period filter match the business question.

If cells become too small, reduce the period or enlarge the component. If one day dominates the colors, inspect its value before treating the remaining pale cells as unimportant.
