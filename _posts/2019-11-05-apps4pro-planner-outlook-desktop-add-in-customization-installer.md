---
layout: post
title: "What do I need to do incase I see Microsoft Office customization installer error?"
date: 2019-11-05 08:44:38 -0400
category: apps4pro-planner-outlook-desktop-add-in
author: ajita
short-description: Microsoft Office customization installer error
tags: [Apps4.Pro Planner Outlook Desktop add-in]
---
Change the following registry value and check it again.  

HKEY_LOCAL_MACHINE\SOFTWARE\MICROSOFT\.NETFramework\Security\TrustManager\PromptingLevel\MyComputer from "Disabled" to "Enabled",  

And  
 
HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\MICROSOFT\.NETFramework\Security\TrustManager\PromptingLevel\MyComputer from "Disabled" to "Enabled", 

 
