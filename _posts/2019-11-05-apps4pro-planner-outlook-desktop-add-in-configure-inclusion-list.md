---
layout: post
title: "How to configure inclusion list security for the add-in?"
date: 2019-11-05 08:44:38 -0400
category: apps4pro-planner-outlook-desktop-add-in
author: gandhi
short-description: Configuring Inclusion List
tags: [Apps4.Pro Planner Outlook Desktop add-in]
---
1. Go to the below Registry location : \HKEY_LOCAL_MACHINE\SOFTWARE\MICROSOFT\.NETFramework\Security 

2. Create the keys \TrustManager\PromptingLevel 

3. Add the following subkeys as String Value, with the associated values. 

    | String Value subkey | Value                |
    | ------------------  | --------             |
    | Internet            | AuthenticodeRequired |
    | UntrustedSites      | Disabled             |
    | MyComputer          | Enabled              |
    | LocalIntranet       | Enabled              |
    | TrustedSites        | Enabled              |

4. Go to the below Registry location : HKEY_LOCAL_MACHINE\SOFTWARE\Wow6432Node\MICROSOFT\.NETFramework 

5. Repeat the steps 2 & 3. 

6. Close and re-open the Outlook and check the case again. 
