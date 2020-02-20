---
layout: post
title: "How to enable Trust prompting level for the add-in?"
date: 2019-11-05 08:44:38 -0400
category: apps4pro-planner-outlook-desktop-add-in
author: ajita
short-description: Enabling trust prompting level
tags: [Apps4.Pro Planner Outlook Desktop add-in]
---
Change the following registry value and check.  

 \HKEY_LOCAL_MACHINE\SOFTWARE\MICROSOFT\.NETFramework\Security\TrustManager\PromptingLevel\MyComputer from "Disabled" to "Enabled",  

 And  

HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\MICROSOFT\.NETFramework\Security\TrustManager\PromptingLevel\MyComputer from "Disabled" to "Enabled", 

**Note:**If the registry key does not exist, you can create it. Add the following subkeys as String Value, with the associated values shown in the following table and try again. 
 
| **String Value subkey**   | **Value** |
| -----------------------   | --------- |
| Internet                  | Enabled   | 
| UntrustedSites            | Disabled  |
| MyComputer                | Enabled   |
| LocalIntranet             | Enabled   |
|TrustedSites               | Enabled   |


  ![apps4pro-planner-outlook-desktop-add-in-trust-prompting-level](../assets/images/apps4pro-planner-outlook-desktop-add-in-trust-prompting-level/get-image.png)
