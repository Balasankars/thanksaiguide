---
title: "Make videos with AI — a 4-part reel factory series"
slug: ai-se-video-kaise-banaye-series-parts-1-4
category: "AI Tools"
description: "Four parts that build a complete reel factory: a master setup in Claude Code with a free local voice clone, a 2D presenter character…"
date: 2026-11-13
updated: 2026-11-13
tags: ["Claude Code", "Remotion", "voice clone", "VoxCPM2", "Chatterbox", "Whisper"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/ai-se-video-kaise-banaye-series-parts-1-4/
---
# Make videos with AI — a 4-part reel factory series

Four parts that build a complete reel factory: a master setup in Claude Code with a free local voice clone, a 2D presenter character with expressions, how code animation works with a scene template that respects Instagram safe zones, and word-perfect captions for Telugu/Hindi mixed speech.

> **తెలుగులో సారాంశం**
>
> 4 భాగాల reel factory — Claude Code లో master setup + ఫ్రీ voice clone, 2D presenter, safe-zone scene template, Telugu/Hindi mixed speech కి perfect captions.

![Make videos with AI — a 4-part reel factory series: Reel factory, Presenter character, Scene template, Perfect captions](/images/guides/ai-se-video-kaise-banaye-series-parts-1-4/cover.svg)

Comment keyword: **SERIES4** · Topic: AI Tools · Last checked: 2026-11-13

## What you need

- **Claude Code** — Paid plan.
- **Remotion** — Free.
- **Free voice clone** — Open-source options (check each licence); slow without a good GPU or Apple M-series Mac.
- **Whisper** — Free.

## Step by step

### Step 1: Part 1 — reel factory

Claude sets up the 'reel factory' folders for 1080×1920 reels and a free local voice-clone tool, then clones your voice from a 1-minute sample. Clone only your own voice or one you have permission for. Voice cloning is slow without a good graphics card or an Apple M-series Mac.

![Part 1 — reel factory — Set up a Remotion 'reel factory' for my channel → reel-factory/](/images/guides/ai-se-video-kaise-banaye-series-parts-1-4/step-1.svg)

**Prompt · step 1**

```text
Set up a Remotion 'reel factory' for {channel}: project structure for 1080x1920 reels, a scripts/ folder, voice/ folder, and a local voice-clone tool. Clone my voice from my 1-minute sample.wav and test one sentence.
```

### Step 2: Part 2 — presenter character

Claude draws an original 2D presenter for your channel with 6 expressions and a mouth that opens with your voice. This presenter becomes the face of your series.

![Part 2 — presenter character — Create an original 2D SVG presenter with 6 expressions → 6 expressions](/images/guides/ai-se-video-kaise-banaye-series-parts-1-4/step-2.svg)

**Prompt · step 2**

```text
Create an original 2D SVG presenter for {channel} with 6 expressions and a mouth that opens with voice loudness.
```

### Step 3: Part 3 — scene template

Claude makes one reusable layout: presenter on one side, a content card on the other, captions in the lower middle, all inside Instagram's safe zones. Every new reel uses this template, so your videos look consistent.

![Part 3 — scene template — Make a reusable scene template → Scene template](/images/guides/ai-se-video-kaise-banaye-series-parts-1-4/step-3.svg)

**Prompt · step 3**

```text
Make a reusable scene template: presenter on one side, content card on the other, captions in the lower-middle, everything inside Instagram's safe zones.
```

### Step 4: Part 4 — perfect captions

Whisper is great at timing but can misspell Telugu or Hindi words. So Whisper gives only the timing, and the caption words come from YOUR script — that's how you get word-perfect captions in mixed-language speech.

![Part 4 — perfect captions — Two jobs → captions](/images/guides/ai-se-video-kaise-banaye-series-parts-1-4/step-4.svg)

**Prompt · step 4**

```text
Get word timings with Whisper, but use my exact script text for the caption words (it's {lang}). Align them and fix any gaps.
```

### Step 5: Make a reel

Put your script in script.txt and ask for a reel. Everything you set up in parts 1–4 runs together.

![Make a reel — scripts/ → phone showing YOUR CHANNEL presenter + captions](/images/guides/ai-se-video-kaise-banaye-series-parts-1-4/step-5.svg)

**Prompt · step 5**

```text
Make a reel from script.txt using everything above.
```

## Limits, straight talk

- Instagram safe zones are approximate.
- Needs a paid Claude plan.

## Useful links

- [Part 2: 2D character](https://getanimo.io/blog/ai-se-video-kaise-banaye/part-2)
- [Part 3: How code animation works](https://getanimo.io/blog/ai-se-video-kaise-banaye/part-3)
- [Part 4: Perfect caption sync](https://getanimo.io/blog/ai-se-video-kaise-banaye/part-4)
- [Remotion licence](https://www.remotion.dev/license)

## Questions people ask

### Is voice cloning legal?

Cloning your own voice is fine. Cloning someone else's voice without permission is not.

### Why are my Telugu captions wrong?

Whisper guesses the words. Step 4 fixes this by using your own script text for the words and Whisper only for the timing.

### Do I need a powerful computer?

For the voice clone, a good GPU or Apple M-series Mac helps a lot. The rest runs on a normal laptop.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/ai-se-video-kaise-banaye-series-parts-1-4/). Republished with permission.*
