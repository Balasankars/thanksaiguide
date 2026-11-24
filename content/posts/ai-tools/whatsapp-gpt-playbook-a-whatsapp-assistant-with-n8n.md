---
title: "AI WhatsApp assistant for your business — official API + n8n"
slug: whatsapp-gpt-playbook-a-whatsapp-assistant-with-n8n
category: "AI Tools"
description: "Build a WhatsApp assistant on the official Meta WhatsApp Cloud API with n8n and an AI model. Pick one job (FAQ, receptionist, lead…"
date: 2026-11-13
updated: 2026-11-13
tags: ["WhatsApp", "n8n", "OpenAI", "Meta Cloud API", "automation", "small business"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/whatsapp-gpt-playbook-a-whatsapp-assistant-with-n8n/
---
# AI WhatsApp assistant for your business — official API + n8n

Build a WhatsApp assistant on the official Meta WhatsApp Cloud API with n8n and an AI model. Pick one job (FAQ, receptionist, lead qualifier, order status), estimate costs, wire the agent, and add a real 'talk to a person' handoff.

> **తెలుగులో సారాంశం**
>
> Official Meta WhatsApp Cloud API + n8n + AI model తో మీ business కి WhatsApp assistant — ఒక పని ఎంచుకుని, ఖర్చు అంచనా వేసి, 'మనిషితో మాట్లాడండి' handoff తో.

![AI WhatsApp assistant for your business — official API + n8n: One job + cost, Meta test message, n8n workflow, Human handoff](/images/guides/whatsapp-gpt-playbook-a-whatsapp-assistant-with-n8n/cover.svg)

Comment keyword: **WAGPT** · Topic: AI Tools · Last checked: 2026-11-13

## What you need

- **Meta developer account** — Free test number.
- **n8n** — Cloud (paid after trial) or self-hosted.
- **AI model API** — Billed separately from chat subscriptions.

## Step by step

### Step 1: Pick one job and estimate cost

Pick ONE job for the assistant first (FAQ, receptionist, lead qualifier or order status). Claude estimates monthly costs: Meta's per-message charges plus AI API usage. Know the cost before you build.

![Pick one job and estimate cost — I want a WhatsApp assistant for my business to do one job. Estimate monthly costs → Monthly estimate](/images/guides/whatsapp-gpt-playbook-a-whatsapp-assistant-with-n8n/step-1.svg)

**Prompt · step 1**

```text
I want a WhatsApp assistant for {biz} to {job}. Estimate monthly costs: Meta conversation charges plus AI API usage for 500 chats/month. List what I need.
```

### Step 2: Meta test message

In Meta for Developers: create an app → add WhatsApp → use the free test number → send the test message to your phone.

![Meta test message — Meta for Developers: Create an app → phone showing Hello from your test number](/images/guides/whatsapp-gpt-playbook-a-whatsapp-assistant-with-n8n/step-2.svg)

### Step 3: Build the n8n workflow

Claude gives you an n8n workflow: WhatsApp message in → AI agent with your business info → reply out, and explains every node. API keys go into n8n's credentials screen, never into a chat.

![Build the n8n workflow — Give me an n8n workflow and explain every node → n8n workflow](/images/guides/whatsapp-gpt-playbook-a-whatsapp-assistant-with-n8n/step-3.svg)

**Prompt · step 3**

```text
Give me an n8n workflow: WhatsApp webhook in → AI agent with my business info → reply out. Explain every node. Keys go into n8n credentials, never in chat.
```

### Step 4: Human handoff

Add a 'talk to a person' rule: if the customer asks for a human, sounds angry or the AI isn't sure, it stops replying and alerts you. This protects your customers and your reputation.

![Human handoff — Add a rule: if the customer asks for a person, is angry, or the AI is unsure, notify me → Hand over to you when](/images/guides/whatsapp-gpt-playbook-a-whatsapp-assistant-with-n8n/step-4.svg)

**Prompt · step 4**

```text
Add a rule: if the customer asks for a person, is angry, or the AI is unsure, stop replying and notify me on my phone.
```

### Step 5: Test and launch

Claude writes 14 test messages (normal, tricky, angry, off-topic, Telugu) and a launch checklist. Run every test on the test number before connecting your real business number.

![Test and launch — Write 14 test messages and a launch checklist → Test messages](/images/guides/whatsapp-gpt-playbook-a-whatsapp-assistant-with-n8n/step-5.svg)

**Prompt · step 5**

```text
Write 14 test messages (normal, tricky, angry, off-topic, Telugu) and a launch checklist.
```

## Limits, straight talk

- Uses the official Meta API, so no ban risk from unofficial tools.
- Costs are real: OpenAI API billing is separate from ChatGPT, and Meta charges per message type.
- Includes Meta's policy on AI providers.

## Useful links

- [Meta WhatsApp pricing](https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing)
- [n8n WhatsApp credentials](https://docs.n8n.io/integrations/builtin/credentials/whatsapp/)
- [WhatsApp Business policy](https://whatsappbusiness.com/policy/)

## Questions people ask

### Is this the official WhatsApp API?

Yes — the Meta WhatsApp Cloud API, so there's no ban risk from unofficial tools.

### What does it cost?

Meta charges per message type, the AI API is billed separately from ChatGPT/Claude subscriptions, and n8n Cloud is paid after the trial (or self-host it).

### Can it reply in Telugu?

Yes. Tell the AI agent to reply in the customer's language and test with Telugu messages.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/whatsapp-gpt-playbook-a-whatsapp-assistant-with-n8n/). Republished with permission.*
