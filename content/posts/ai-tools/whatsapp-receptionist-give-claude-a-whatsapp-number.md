---
title: "WhatsApp receptionist — Claude builds it, you do 5 small jobs"
slug: whatsapp-receptionist-give-claude-a-whatsapp-number
category: "AI Tools"
description: "Give your business a WhatsApp receptionist that answers prices, knows open slots and takes bookings. You do five small setup jobs…"
date: 2026-11-13
updated: 2026-11-13
tags: ["WhatsApp", "Claude", "n8n", "receptionist", "bookings", "Meta API"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/whatsapp-receptionist-give-claude-a-whatsapp-number/
---
# WhatsApp receptionist — Claude builds it, you do 5 small jobs

Give your business a WhatsApp receptionist that answers prices, knows open slots and takes bookings. You do five small setup jobs; Claude builds the whole n8n workflow, writes the receptionist's rules and fixes errors.

> **తెలుగులో సారాంశం**
>
> మీ business కి WhatsApp receptionist — prices చెబుతుంది, ఖాళీ slots చూపిస్తుంది, bookings తీసుకుంటుంది. మీరు 5 చిన్న పనులు చేస్తే, మిగతాది Claude build చేస్తుంది.

![WhatsApp receptionist — Claude builds it, you do 5 small jobs: Meta app + keys, n8n + Claude, Claude builds the flow, First message](/images/guides/whatsapp-receptionist-give-claude-a-whatsapp-number/cover.svg)

Comment keyword: **RECEPTION** · Topic: AI Tools · Last checked: 2026-11-13

## What you need

- **Meta developer app** — Free test number.
- **n8n** — 14-day free trial, then paid (or self-host).
- **Claude** — Connected to n8n (via its MCP/API).

## Step by step

### Step 1: Job 1–2: Meta app + keys

Create a Meta app with WhatsApp, note the test number, create a token and the app secret. Keep them private.

![Job 1–2: Meta app + keys — Jobs 1–2 · Meta → Your keys](/images/guides/whatsapp-receptionist-give-claude-a-whatsapp-number/step-1.svg)

### Step 2: Job 3–4: n8n + connect Claude

Create the n8n account, connect Claude to n8n, paste keys into n8n credentials — never into chat.

![Job 3–4: n8n + connect Claude — Jobs 3–4 · n8n → Keys go in n8n](/images/guides/whatsapp-receptionist-give-claude-a-whatsapp-number/step-2.svg)

### Step 3: Claude builds the workflow

Give your services, prices and hours. Claude builds the n8n workflow: it answers prices, offers open slots, saves bookings in a Google Sheet and confirms with the customer — short, polite replies.

![Claude builds the workflow — Build an n8n WhatsApp receptionist for my business: services, hours → It answers](/images/guides/whatsapp-receptionist-give-claude-a-whatsapp-number/step-3.svg)

**Prompt · step 3**

```text
Build an n8n WhatsApp receptionist for {biz}. Services: {services}. Hours: {hours}. It answers prices, offers open slots, books appointments into a Google Sheet and confirms. Polite, short replies.
```

### Step 4: Write the rules

Claude writes the receptionist's rules: tone, what it must never promise (like discounts you didn't approve) and when to hand the chat over to you.

![Write the rules — Write the receptionist's rules → rules](/images/guides/whatsapp-receptionist-give-claude-a-whatsapp-number/step-4.svg)

**Prompt · step 4**

```text
Write the receptionist's rules: tone, what it must never promise, when to hand over to me.
```

### Step 5: Job 5: first message

Send a WhatsApp message to the test number and watch it reply. Paste any error to Claude.

![Job 5: first message — phone showing Hi, what are your timings? → This error came in n8n: (paste). Fix it.](/images/guides/whatsapp-receptionist-give-claude-a-whatsapp-number/step-5.svg)

**Prompt · step 5**

```text
This error came in n8n: [paste]. Fix it.
```

## Limits, straight talk

- 'Free to try' is true only for n8n's 14-day trial — then n8n is paid (or self-host).
- Good safety rule: keys go into n8n, never into the chat.

## Useful links

- [Meta WhatsApp pricing](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing)
- [n8n WhatsApp credentials](https://docs.n8n.io/integrations/builtin/credentials/whatsapp/)

## Questions people ask

### Is it free?

Meta's test number is free and n8n has a 14-day trial; after that n8n is paid or you self-host it.

### Where are bookings saved?

In a Google Sheet you control, so you can see every booking.

### What if the bot says something wrong?

The rules in step 4 limit what it can promise, and it hands over to you when unsure. Test well before going live.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/whatsapp-receptionist-give-claude-a-whatsapp-number/). Republished with permission.*
