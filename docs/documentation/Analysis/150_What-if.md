---
title: What-if Analysis
permalink: /documentation/Analysis/What-if-Analysis/
tags:
description: 
---

What-if analysis is a predictive analysis method used to evaluate the impact of changes in specific variables under different assumptions or scenarios.

   <div align="left"><img src="./images/gnix5-j1hnn.gif"  width="76%" /></div>

Below is a detailed example demonstrating how to use What-If parameters in Datafor for sales forecast analysis:

### Scenario: Sales Forecast Analysis

#### Background

A retail company wants to forecast the impact of different pricing strategies on future sales revenue. They aim to understand how adjusting product prices will affect sales quantities and total revenue.

#### Objective

Use Datafor's What-If parameter feature to simulate the impact of different price adjustment scenarios on sales revenue.

### Steps

1. **Create a Parameter Controller**

   <div align="left"><img src="./images/1722504262167.png"  width="100%" /></div>


2. **Create What-If Parameter**

   - Select the parameter controller, click the "Add Data" button in the data panel, and choose "New Parameter".

   <div align="left"><img src="./images/1722504381269.png" /></div>

   - Name the parameter "Price Adjustment Percentage" with a default value of "0".

   <div align="left"><img src="./images/1722504437457.png"  width="50%" /></div>

   - Select the created "Price Adjustment Percentage" parameter.

   <div align="left"><img src="./images/1722504494630.png"  width="100%" /></div>

   - Define the slider's value range in the style panel, with a minimum of -0.2, maximum of 0.2, and a step size of 0.01.

   <div align="left"><img src="./images/1722504556314.png"  width="100%" /></div>

3. **Create a Gauge Component**

   Select the analysis model "**workshop-model**".

   <div align="left"><img src="./images/1722504617543.png"  width="100%" /></div>

4. **Add Measures**

   In the data panel, click the "Add Data" button.

   <div align="left"><img src="./images/1722504680025.png"  width="30%" /></div>

5. **Create Calculated Measures**

   <div align="left"><img src="./images/1722504714258(1).png"  width="30%" /></div>

   - Measure Name: **Adjusted Price**

     Formula:

     ```
     [Measures].[sales_fact.UNIT_PRICE] * (1 + ParamRef("Price Adjustment Percentage"))
     ```

   - Measure Name: **Adjusted Sales Amount**  

     Formula:

     ```
     [Measures].[sales_fact.QUANTITY] * [Measures].[Adjusted Price]
     ```

6. **Select "Adjusted Sales Revenue" as the Measure for the Gauge Component**

   <div align="left"><img src="./images/1722505167138.png"  width="100%" /></div>

   - Adjust the dashboard component's style by setting the **Minimum Value (0)** and **Maximum Value (3000000)**.

   <div align="left"><img src="./images/1722505237854.png"  width="100%" /></div>

7. **Interactive Analysis**

   Adjust the "**Price Adjustment Percentage**" parameter to dynamically view changes in **Adjusted Sales Revenue** under different price adjustment scenarios.

   <div align="left"><img src="./images/gnix5-j1hnn.gif"  width="100%" /></div>