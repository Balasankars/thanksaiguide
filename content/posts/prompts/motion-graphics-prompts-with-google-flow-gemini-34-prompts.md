---
title: "Brand motion graphics with Google Flow + Gemini — a full prompt system"
slug: motion-graphics-prompts-with-google-flow-gemini-34-prompts
category: "Prompts"
description: "Make motion graphics that always look on-brand: Gemini interviews you about your brand, builds a 'motion system' rulebook, turns ideas…"
date: 2026-11-13
updated: 2026-11-13
tags: ["Google Flow", "Gemini", "motion graphics", "prompts", "brand", "Three.js"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/motion-graphics-prompts-with-google-flow-gemini-34-prompts/
---
# Brand motion graphics with Google Flow + Gemini — a full prompt system

Make motion graphics that always look on-brand: Gemini interviews you about your brand, builds a 'motion system' rulebook, turns ideas into beat sheets, and Google Flow generates the scenes. Includes templates for launches, explainers, charts and openers.

> **తెలుగులో సారాంశం**
>
> Gemini మీ brand గురించి interview చేసి 'motion system' rulebook తయారు చేస్తుంది; Google Flow తో ఎప్పుడూ on-brand గా ఉండే motion graphics తయారు చేయండి.

![Brand motion graphics with Google Flow + Gemini — a full prompt system: Brand interview, Motion system, Beat sheet, Flow clips](/images/guides/motion-graphics-prompts-with-google-flow-gemini-34-prompts/cover.svg)

Comment keyword: **FLOW** · Topic: Prompts · Last checked: 2026-11-13

## What you need

- **Gemini** — Free or paid.
- **Google Flow** — Needs a Google AI plan with Flow credits.

## Step by step

### Step 1: Brand interview

Gemini asks you 10 questions one by one — audience, personality, colours, fonts, motion feel and what to avoid. Answer in simple words; you can type in Telugu if that's easier.

![Brand interview — Interview me about my brand with 10 questions, one at a time → It asks about](/images/guides/motion-graphics-prompts-with-google-flow-gemini-34-prompts/step-1.svg)

**Prompt · step 1**

```text
Interview me about my brand {brand} with 10 questions, one at a time: audience, personality, colours, fonts, motion feel, what to avoid. Then summarise.
```

### Step 2: Motion system

Gemini turns your answers into a Motion System: exact colours, fonts, allowed camera moves, speed, transitions and a 'never show' list. Save it in a doc — every future video uses the same rules, so your brand always looks the same.

![Motion system — Turn my answers into a Motion System rulebook → motion-system.md](/images/guides/motion-graphics-prompts-with-google-flow-gemini-34-prompts/step-2.svg)

**Prompt · step 2**

```text
Turn my answers into a Motion System rulebook: colours (hex), type, camera moves allowed, speed and easing, transitions, textures, lighting, and a master negative prompt (things never to show). Vibe: {vibe}.
```

### Step 3: Beat sheet

Give one idea; Gemini splits it into 5 scenes for a 15-second video, each following the Motion System. Change any scene that doesn't fit before you make it.

![Beat sheet — Turn this idea into a 15-second beat sheet of 5 scenes → Beat sheet · 15 s](/images/guides/motion-graphics-prompts-with-google-flow-gemini-34-prompts/step-3.svg)

**Prompt · step 3**

```text
Turn this idea into a 15-second beat sheet of 5 scenes using the Motion System: {idea}.
```

### Step 4: Flow prompts

Each scene prompt uses the same 8 parts: subject, action, setting, camera, lighting, style, motion, negatives. Paste each one into Google Flow. Flow uses credits from your Google AI plan, so check your balance first.

![Flow prompts — 8-part Flow prompt → Google Flow](/images/guides/motion-graphics-prompts-with-google-flow-gemini-34-prompts/step-4.svg)

**Prompt · step 4**

```text
Write a Google Flow prompt for each scene using the 8-part structure and the Motion System.
```

### Step 5: Audit and fix one thing

Take one frame from a scene and ask Gemini to compare it with the Motion System. It names the single biggest problem and gives a fixed prompt. One fix at a time works better than changing everything.

![Audit and fix one thing — Frame from scene 3 → Audit it against the Motion System. Tell me the ONE most important fix](/images/guides/motion-graphics-prompts-with-google-flow-gemini-34-prompts/step-5.svg)

**Prompt · step 5**

```text
Here's a frame from scene 3 [attach]. Audit it against the Motion System and tell me the ONE most important thing to fix, with a corrected prompt.
```

## Limits, straight talk

- All the numbers are prompt settings, not results.
- Small catch: its comparison template uses older model names (Gemini 2.0 Flash, GPT-4o) — swap in current ones.

## Useful links

- [Google: 5 tips for Flow](https://blog.google/technology/ai/flow-video-tips/)
- [Google: Veo 3.1 Ingredients to Video](https://blog.google/innovation-and-ai/technology/ai/veo-3-1-ingredients-to-video/)
- [Flow FAQ](https://labs.google/fx/en-gb/tools/flow/faq)

## Questions people ask

### Is Google Flow free?

No — Flow needs a Google AI plan with Flow credits. Gemini itself has a free plan.

### Can I use this for clients?

Yes. Make a separate Motion System for each client's brand.

### The template mentions old model names. Is that a problem?

Just use the newest models you see in Gemini and Flow — the method stays the same.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/motion-graphics-prompts-with-google-flow-gemini-34-prompts/). Republished with permission.*
