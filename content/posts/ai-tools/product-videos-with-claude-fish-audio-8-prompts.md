---
title: "Product videos with Claude directing an AI voice actor"
slug: product-videos-with-claude-fish-audio-8-prompts
category: "AI Tools"
description: "Claude studies a few reference reels, makes a storyboard, builds the product video in code, then holds 'voice auditions' with an AI…"
date: 2026-11-13
updated: 2026-11-13
tags: ["Fish Audio", "AI voice", "product video", "HyperFrames", "Mixkit", "Claude Code"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/product-videos-with-claude-fish-audio-8-prompts/
---
# Product videos with Claude directing an AI voice actor

Claude studies a few reference reels, makes a storyboard, builds the product video in code, then holds 'voice auditions' with an AI voice tool and directs the read — pace, emotion, emphasis — and adds free sound effects before rendering.

> **తెలుగులో సారాంశం**
>
> Claude reference reels నేర్చుకుని, storyboard చేసి, product video ని code లో build చేసి, AI voice actor కి 'auditions' పెట్టి direct చేస్తుంది.

![Product videos with Claude directing an AI voice actor: Study references, Storyboard, Build in code, Voice auditions](/images/guides/product-videos-with-claude-fish-audio-8-prompts/cover.svg)

Comment keyword: **VOICE** · Topic: AI Tools · Last checked: 2026-11-13

## What you need

- **Claude Code** — Paid plan.
- **HyperFrames** — Free.
- **An AI voice tool** — One with an API or Claude connector (check pricing and terms).
- **Free SFX** — e.g. Mixkit — read its licence.

## Step by step

### Step 1: Study references

Put 2–3 product reels you like in refs/. Claude studies them frame by frame and explains what makes their motion and pacing work.

![Study references — refs/ → what works](/images/guides/product-videos-with-claude-fish-audio-8-prompts/step-1.svg)

**Prompt · step 1**

```text
Study the reels in refs/ frame by frame and describe what makes their motion and pacing work.
```

### Step 2: Storyboard

Claude plans a 20-second product video scene by scene and waits for your OK. Change anything now — it's the cheapest moment to change.

![Storyboard — Storyboard a 20-second product video for my product. Wait for my OK → Storyboard · 20 s](/images/guides/product-videos-with-claude-fish-audio-8-prompts/step-2.svg)

**Prompt · step 2**

```text
Storyboard a 20-second product video for {product}. Wait for my OK.
```

### Step 3: Build it in code

Claude builds the video in HyperFrames at 1080×1920 and shows stills. Approve the stills before adding voice.

![Build it in code — Build the storyboard in HyperFrames at 1080×1920. Show stills → Stills](/images/guides/product-videos-with-claude-fish-audio-8-prompts/step-3.svg)

**Prompt · step 3**

```text
Build the storyboard in HyperFrames at 1080x1920. Show stills.
```

### Step 4: Voice auditions

Claude writes the voice script, generates 3 voice 'auditions' in your chosen tone with your AI voice tool, compares them, then directs the final take — where to pause and which words to stress.

![Voice auditions — Write the voice script. Generate 3 voice options, compare, direct a final take → Auditions](/images/guides/product-videos-with-claude-fish-audio-8-prompts/step-4.svg)

**Prompt · step 4**

```text
Write the voice script. Generate 3 voice options in a {tone} tone, compare them, and direct a final take: where to pause, which words to stress.
```

### Step 5: Sound and render

Claude adds free sound effects and light music under the voice, then renders. Check the music licence before posting.

![Sound and render — Finish → phone showing YOUR PRODUCT voice · music · motion](/images/guides/product-videos-with-claude-fish-audio-8-prompts/step-5.svg)

**Prompt · step 5**

```text
Add free sound effects and light music, then render.
```

## Limits, straight talk

- AI voice tools are usually paid beyond a small free tier — check pricing and commercial-use terms.
- Use only sound effects and music with a licence that allows your use.

## Useful links

- [Fish Audio: free S2.1 Pro API](https://fish.audio/blog/s2-1-pro-free-api/)
- [Fish Audio MCP docs](https://docs.fish.audio/overview/mcp)
- [Mixkit licence](https://mixkit.co/license/)

## Questions people ask

### Which voice tool can I use?

Any AI voice tool with an API or a Claude connector. Check its pricing and whether you can use the voice commercially.

### Can I use my own voice instead?

Yes — record the script yourself and skip the auditions step.

### Do I need a paid plan?

Claude Code needs a paid plan; HyperFrames is free.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/product-videos-with-claude-fish-audio-8-prompts/). Republished with permission.*
