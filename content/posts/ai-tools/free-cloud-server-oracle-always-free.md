---
title: "Your own free cloud server — Oracle Cloud Always Free, step by step"
slug: free-cloud-server-oracle-always-free
category: "AI Tools"
description: "Get your own cloud server that keeps running 24/7 without a monthly bill, using Oracle Cloud's Always Free tier. Use it to host an n8n…"
date: 2026-11-18
updated: 2026-11-18
tags: ["Oracle Cloud", "Ubuntu", "SSH", "Claude", "n8n", "Docker"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/free-cloud-server-oracle-always-free/
---
# Your own free cloud server — Oracle Cloud Always Free, step by step

Get your own cloud server that keeps running 24/7 without a monthly bill, using Oracle Cloud's Always Free tier. Use it to host an n8n automation, a Telegram or WhatsApp bot, or a small website — and let Claude give you every command.

> **తెలుగులో సారాంశం**
>
> Oracle Cloud Always Free tier తో నెల బిల్లు లేకుండా 24/7 నడిచే మీ సొంత cloud server — n8n, bots, చిన్న website host చేయండి; ప్రతి command Claude ఇస్తుంది.

![Your own free cloud server — Oracle Cloud Always Free, step by step: Sign up, Pick home region, Create server, Set up with Claude](/images/guides/free-cloud-server-oracle-always-free/cover.svg)

Comment keyword: **ORACLE** · Topic: AI Tools · Last checked: 2026-11-18

## What you need

- **Oracle Cloud Free Tier account** — $0. Always Free resources plus a US$300 trial credit for 30 days.
- **A credit card (or debit card that works like one)** — Only for identity checks — no PIN-based debit, virtual or prepaid cards. A small temporary hold may appear.
- **A laptop** — To log in to your server with SSH (Terminal on Mac, PowerShell on Windows).
- **Claude (free plan works)** — Gives you the commands step by step and fixes errors you paste.

## Step by step

### Step 1: Know what you really get for free

Oracle Cloud gives every new account two things. First, Always Free resources that never expire: Arm (Ampere A1) compute worth 2 OCPUs and 12 GB RAM in total (Oracle cut this from 4 OCPUs and 24 GB in June 2026 and enforced it from 18 August 2026 — many older videos still show the old numbers), up to 2 small AMD VMs (1/8 OCPU, 1 GB RAM each), 200 GB of disk shared by all your servers, 10 TB of outgoing data a month, 2 Autonomous Databases and some Object Storage. Second, a Free Trial: US$300 credit for up to 30 days. After the trial only the Always Free part stays free.

![Know what you really get for free — Always Free → US$300 credit](/images/guides/free-cloud-server-oracle-always-free/step-1.svg)

**Prompt · step 1**

```text
I want to run {app} on a free Oracle Cloud server. Oracle's Always Free tier gives me Arm compute of 2 OCPUs + 12 GB RAM in total, or 2 small AMD VMs with 1 GB RAM each, and 200 GB disk. Tell me in simple words: will {app} run well on this? Which one should I pick (one Arm server, or an AMD micro VM), and how much RAM and disk should I give it?
```

### Step 2: Keep these ready before you sign up

You need a working email and mobile number, your real name and address (they must match your card), and a credit card — or a debit card that works like a credit card. Oracle does not accept PIN-based debit cards, virtual, single-use or prepaid cards. The card is only for identity checks: your bank may show a small temporary authorization hold that is released in a few days. Sign up from your normal home or mobile internet, without a VPN.

![Keep these ready before you sign up — Keep ready → Not accepted](/images/guides/free-cloud-server-oracle-always-free/step-2.svg)

### Step 3: Choose your home region carefully

During signup you pick a home region (for India, Mumbai or Hyderabad). Your Always Free resources live in this region, and you cannot change it later — so decide once. Popular regions sometimes have no free Arm capacity left, which shows up later as an 'Out of host capacity' error. Pick the region closest to your users and be ready to retry if capacity is busy.

![Choose your home region carefully — Home region → Remember](/images/guides/free-cloud-server-oracle-always-free/step-3.svg)

### Step 4: Create your free account

Open the official Oracle Cloud Free Tier page and tap Start for free. Enter your country, name and email, then open the verification email and finish the form. Add your address and card details for identity verification, choose your home region, accept the terms and wait for the account to be created (this can take a few minutes). Then sign in to the Oracle Cloud Console. Only one free account per person is allowed — don't make a second one.

![Create your free account — oracle.com/in/cloud/free: Oracle Cloud Free Tier → Cloud Console](/images/guides/free-cloud-server-oracle-always-free/step-4.svg)

### Step 5: Create your first free server

In the Console open the menu → Compute → Instances → Create instance. Give it a name, keep the image as Ubuntu (or Oracle Linux), then tap Change shape. For the Arm server choose Ampere → VM.Standard.A1.Flex and set 1–2 OCPUs and 6–12 GB memory; for a tiny server choose the AMD VM.Standard.E2.1.Micro. Make sure the label says Always Free-eligible. Under SSH keys tap Save private key and keep that file safe — you need it to log in. Leave the boot volume at the default size and tap Create. When it shows Running, copy the Public IP address.

![Create your first free server — Compute · Instances: Create instance → Downloads/](/images/guides/free-cloud-server-oracle-always-free/step-5.svg)

### Step 6: Log in and set it up with Claude's help

From your laptop, open Terminal (Mac) or PowerShell (Windows) and log in with your key: ssh -i path/to/your-key.key ubuntu@YOUR_PUBLIC_IP (use opc@ instead of ubuntu@ for Oracle Linux). You don't need to know Linux — ask Claude for each command and paste them one by one. If something fails, paste the exact error back to Claude.

![Log in and set it up with Claude's help — PowerShell → Install n8n on my free server, step by step](/images/guides/free-cloud-server-oracle-always-free/step-6.svg)

**Prompt · step 6**

```text
I have a new Oracle Cloud Always Free server: {image}, {shape}. I'm on a {os} and I'm a beginner. I saved the private key file from Oracle and I have the server's public IP.

1. Tell me exactly how to log in with SSH from my computer, including how to fix a 'permissions too open' error on the key.
2. Then give me the commands, one step at a time, to install and run {app} safely on this server.
3. Tell me which port I need to open, and how to open it BOTH in Oracle's Security List (Networking → Virtual Cloud Network → Security List → Add Ingress Rule) and in the server's own firewall.
4. Make it start again automatically after a reboot.
Wait for my reply after each step.
```

### Step 7: Make sure it stays free

Only use resources marked Always Free-eligible and keep Arm servers within 2 OCPUs and 12 GB in total. This matters most before your trial ends: if you have more Arm capacity than the free limit when the trial ends, Oracle disables ALL your Arm servers and deletes them after 30 days unless you upgrade. Delete anything you made with trial credit that you don't need. Oracle can also reclaim a free server that stays idle for 7 days (CPU, network — and memory for Arm — all under 20%), so keep it doing real work. Upgrade to a paid (Pay As You Go) account only when you understand the billing. Already have an older Arm server with 4 OCPUs / 24 GB? It was stopped when the new limit was enforced: open it in the Console → Edit → set 2 OCPUs and 12 GB → save, then start it again.

![Make sure it stays free — Stays free → ₹0 bill](/images/guides/free-cloud-server-oracle-always-free/step-7.svg)

**Prompt · step 7**

```text
Here is a list of everything in my Oracle Cloud account: {resources}. My Always Free limits are: Arm A1 2 OCPUs + 12 GB RAM in total, 2 AMD E2.1.Micro VMs, 200 GB boot + block storage in total. Tell me which of my resources are outside the Always Free limits and could cost money after my trial ends, and what to delete or resize.
```

## Limits, straight talk

- The free Arm (Ampere A1) limit is now 2 OCPUs and 12 GB RAM in total — Oracle halved it in June 2026 and started enforcing it on 18 August 2026. Free Arm servers above the new limit were stopped; resize them to 2 OCPUs / 12 GB to use them again. Many reels and blogs still say 4 OCPUs and 24 GB.
- Free Arm capacity is often full in busy regions, so you may see 'Out of host capacity'. Retry later or try a smaller shape. Your home region cannot be changed after signup.
- Signup can fail even with a valid card. PIN-based debit, virtual, single-use and prepaid cards are not accepted. Only one free account per person.
- If your Arm servers are over the free limit when the 30-day trial ends, all of them are disabled and deleted after 30 days unless you upgrade.
- Oracle may reclaim a free server that stays idle for 7 days (CPU, network and — for Arm — memory all under 20%).
- No SLA or full support on the free tier. Keep backups of anything important, and keep your private key file safe — lose it and you lose access.

## Useful links

- [Oracle Cloud Free Tier (sign up)](https://www.oracle.com/in/cloud/free/)
- [Oracle Cloud Free Tier FAQ](https://www.oracle.com/in/cloud/free/faq/)
- [Always Free resources and limits (Oracle docs)](https://docs.oracle.com/iaas/Content/FreeTier/resourceref.htm)
- [What happens when the Free Trial ends (Oracle docs)](https://docs.oracle.com/iaas/Content/FreeTier/freetier.htm)

## Questions people ask

### Is it really free forever?

The Always Free resources don't expire, as long as you stay within the limits (2 OCPUs and 12 GB RAM for Arm) and your server isn't idle for long.

### Why does signup ask for a card?

Only for identity checks. PIN-based debit, virtual and prepaid cards aren't accepted; a small temporary hold may appear.

### What can I run on it?

n8n automations, Telegram or WhatsApp bots, or a small website. Claude gives you every command.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/free-cloud-server-oracle-always-free/). Republished with permission.*
