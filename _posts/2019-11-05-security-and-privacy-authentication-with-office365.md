---
layout: post
title: "How Apps4.Pro Planner handle user authentication with Office 365?"
date: 2019-11-05 08:44:38 -0400
category: Security and Privacy
author: ajita
short-description: User Authentication
tags: [Security and Privacy]
---
When user sign-in, the app redirects the user to Microsoft Sign-in page (https://login.microsoftonline.com/common), once the user completed the sign-in process, the app gets access token and use it for further communication between the app and Microsoft Planner. 
