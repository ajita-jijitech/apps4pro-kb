---
layout: post
title: "How do I update the existing planner tasks using Excel?"
date: 2019-11-05 08:44:38 -0400
category: apps4pro-planner-manager-chrome-extension
author: ajita
short-description: Updating existing planner tasks
tags: [Chrome Extension]

---
Follow the below steps to update existing Planner task fields using Excel. 

-   Go to Export tab -> select required plan -> Export tasks with all fields (including Task Id) from a single plan that you want to update. 

-  In Excel file, do the required changes for the tasks you want update (Ex: Start date, Due date, Assigned to, etc..) and save the Excel file. 

-   Go to Import tab -> select the modified Excel file and choose the Existing Plan option and select the Plan (the source plan where you exported the tasks). 

-   Ensure that the Task Id field is successfully mapped in Column Mappings as this field is mandatory to update existing tasks. 

-   Now proceed the with import process, the tool finds the original task by "Task Id" field in the selected plan and update the changes. 

 

**Note:** The Excel file should have the field “Task Id” and every task that you want change should have the value for Task Id field. If any task found without Task Id field value, then the tool creates a new task. 

**Limitation:** Update comments in existing tasks not supported due to technical limitation. 

If you still face any other issues, please go to Settings tab -> Tracer Logs -> Export Logs and send us (support@jijitechnologies.com) log file along with issue details for further analysis. 
