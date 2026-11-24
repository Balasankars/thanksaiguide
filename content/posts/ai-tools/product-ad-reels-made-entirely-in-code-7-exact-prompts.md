---
title: "Product-ad reels made entirely in code — Claude as your ad studio"
slug: product-ad-reels-made-entirely-in-code-7-exact-prompts
category: "AI Tools"
description: "Build a reusable 'ad studio' in Claude Code: animated web pages recorded frame by frame into MP4, sound effects made in code, voice…"
date: 2026-11-13
updated: 2026-11-13
tags: ["Claude Code", "Claude Opus 5.5", "motion graphics", "ad reels", "GSAP", "ffmpeg"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/product-ad-reels-made-entirely-in-code-7-exact-prompts/
---
# Product-ad reels made entirely in code — Claude as your ad studio

Build a reusable 'ad studio' in Claude Code: animated web pages recorded frame by frame into MP4, sound effects made in code, voice and music mixed — then create clever ad reels like a 'meeting-cost receipt' or 'slow internet' concept.

> **తెలుగులో సారాంశం**
>
> Claude Code లో మీ సొంత 'ad studio' — animated pages ని MP4 గా record చేసి, sound effects, voice, music కలిపి clever product ad reels తయారు చేయండి.

![Product-ad reels made entirely in code — Claude as your ad studio: Build the toolkit, Script the ad, Preview stills, Export for Instagram](/images/guides/product-ad-reels-made-entirely-in-code-7-exact-prompts/cover.svg)

Comment keyword: **ADREEL** · Topic: AI Tools · Last checked: 2026-11-13

## What you need

- **Claude Code** — Paid plan.
- **Free tools** — GSAP, Puppeteer, ffmpeg, Whisper.
- **Voice/music** — Your voice or a paid TTS; music you can use commercially.

## Step by step

### Step 1: Build the toolkit

Run this once in a new Claude Code folder. Claude sets up animated web pages (GSAP), records them frame by frame into MP4 (Puppeteer), makes simple sound effects in code and mixes voice + music with ffmpeg. Keep this folder — it's your ad studio for every future ad.

![Build the toolkit — Build an ad-reel toolkit: animated HTML pages recorded frame by frame into MP4 → Ad studio](/images/guides/product-ad-reels-made-entirely-in-code-7-exact-prompts/step-1.svg)

**Prompt · step 1**

```text
Build an ad-reel toolkit here: animated HTML pages with GSAP, recorded frame by frame with Puppeteer into 1080x1920 MP4; simple sound effects (whoosh, tick, print, ding) generated in code; voice + music mix; Whisper word timing for captions. Test with a 3-second demo.
```

### Step 2: Script the ad

Give your product and one clever concept (like a receipt that shows how much a long meeting costs). Claude writes a 20-second script: hook in second 1, product by second 8, clear call-to-action at the end.

![Script the ad — Write a 20-second ad for my product. Hook in the first second → 20-second ad](/images/guides/product-ad-reels-made-entirely-in-code-7-exact-prompts/step-2.svg)

**Prompt · step 2**

```text
Write a 20-second ad for {product}. Concept: {idea}. Hook in the first second, the product appears by second 8, clear CTA at the end.
```

### Step 3: Preview stills

Before the full render, ask for 16 still frames spread across the ad. It's much faster to fix text, colours or timing on stills than after rendering.

![Preview stills — Render 16 still frames across the ad → 16 stills](/images/guides/product-ad-reels-made-entirely-in-code-7-exact-prompts/step-3.svg)

**Prompt · step 3**

```text
Render 16 still frames across the ad so I can check every moment before the full render.
```

### Step 4: Render

These pacing rules keep it snappy: a new visual every 1–2 seconds, nothing held longer than 2 seconds, and end 1.2 seconds after the last word. Watch it once on your phone at full volume.

![Render — Pacing rules → ad.mp4](/images/guides/product-ad-reels-made-entirely-in-code-7-exact-prompts/step-4.svg)

**Prompt · step 4**

```text
Render the full ad following those pacing rules.
```

### Step 5: Export for Instagram

Instagram shows reels at 9:16 and feed posts at 4:5. Keep captions inside the safe area so the like/comment buttons don't cover them.

![Export for Instagram — Export a 9:16 version and a 4:5 version → Two sizes](/images/guides/product-ad-reels-made-entirely-in-code-7-exact-prompts/step-5.svg)

**Prompt · step 5**

```text
Export a 9:16 version with captions inside the safe area and a 4:5 version for the feed.
```

## Limits, straight talk

- Costs to know: paid Claude plan for Claude Code; ElevenLabs voice/music and Google Lyria can cost money.
- Needs some comfort installing Node, Python and ffmpeg.

## Useful links

- [GSAP docs (animation library)](https://gsap.com/docs/v3/)
- [HyperFrames (HeyGen): video from code](https://github.com/heygen-com/hyperframes)
- [Remotion + Claude Code guide](https://www.nemovideo.com/blog/remotion-agent-skills-claude-code-guide)

## Questions people ask

### Do I need design skills?

No. Claude writes the animation code; you judge the stills and ask for changes in plain words.

### What costs money?

A paid Claude plan for Claude Code. Voice and music tools may cost extra — or use your own voice and free-to-use music.

### Can I use any song?

No. Use music you have the rights to, or Instagram's own music library when you post.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/product-ad-reels-made-entirely-in-code-7-exact-prompts/). Republished with permission.*
