---
title: "Watercolour lyric music video with free AI — Google Flow + Claude"
slug: ghost-skeleton-watercolour-lyric-video-free-ai-workflow
category: "AI Tools"
description: "Make a dreamy hand-painted music video: design your characters once, paint every shot as a watercolour still in Google Flow, animate…"
date: 2026-11-12
updated: 2026-11-12
tags: ["Google Flow", "Claude Code", "lyric video", "watercolour", "AI video"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/ghost-skeleton-watercolour-lyric-video-free-ai-workflow/
---
# Watercolour lyric music video with free AI — Google Flow + Claude

Make a dreamy hand-painted music video: design your characters once, paint every shot as a watercolour still in Google Flow, animate only what should move, then let Claude Code sync the lyrics word by word and cut on the sung words at a hand-drawn 12 fps feel.

> **తెలుగులో సారాంశం**
>
> Google Flow లో watercolour shots, కేవలం characters మాత్రమే కదిలేలా animation, Claude Code తో పదం పదానికి lyrics sync — కలలాంటి hand-painted music video.

![Watercolour lyric music video with free AI — Google Flow + Claude: Character sheets, Paint each shot, Animate what moves, Sync the lyrics](/images/guides/ghost-skeleton-watercolour-lyric-video-free-ai-workflow/cover.svg)

Comment keyword: **GHOST** · Topic: AI Tools · Last checked: 2026-11-12

## What you need

- **Google Flow** — Google's AI filmmaking tool (needs a Google AI plan; check credits).
- **Claude Code** — Paid plan — for lyric timing and the final edit.
- **Your song + lyrics** — Only music you have rights to post.

## Step by step

### Step 1: Make character sheets

Design each character once as a watercolour sheet (front, side, back). You'll attach these sheets to every shot, which is what keeps characters looking the same.

![Make character sheets — Create a character sheet. Watercolour style, plain background → Character sheet](/images/guides/ghost-skeleton-watercolour-lyric-video-free-ai-workflow/step-1.svg)

**Prompt · step 1**

```text
Create a character sheet for: {chars}. Watercolour style, plain background, front, side and back views, same proportions in each view.
```

### Step 2: Paint each shot in Flow

In Google Flow, add the character sheets as 'ingredients' and paint each shot as a vertical 9:16 watercolour still. Describe one shot at a time.

![Paint each shot in Flow — Ingredients → phone showing 9:16 watercolour still](/images/guides/ghost-skeleton-watercolour-lyric-video-free-ai-workflow/step-2.svg)

**Prompt · step 2**

```text
Vertical 9:16 watercolour painting: {world}. [shot description]. Use the attached characters exactly as designed. Soft paper texture, visible brush strokes.
```

### Step 3: Animate only what moves

Use Flow's frames-to-video on each still and say clearly that only the characters move — background, trees and light stay still. This keeps the painted look instead of turning it into normal video.

![Animate only what moves — The still → Tell it](/images/guides/ghost-skeleton-watercolour-lyric-video-free-ai-workflow/step-3.svg)

**Prompt · step 3**

```text
Animate only the characters gently [action]. The background, trees and light do not move. Keep the watercolour texture.
```

### Step 4: Sync lyrics with Claude Code

In Claude Code, demucs separates the singing from the music, then your lyrics.txt is matched to the vocals word by word. The result is a file with every word's start and end time.

![Sync lyrics with Claude Code — your files → word timings](/images/guides/ghost-skeleton-watercolour-lyric-video-free-ai-workflow/step-4.svg)

**Prompt · step 4**

```text
Separate the vocals from {song} with demucs, then align lyrics.txt to the vocals word by word (forced alignment). Save every word with start/end times.
```

### Step 5: Edit on the words

Claude edits the clips to the song, cutting on sung words, shows each lyric line in a soft handwritten font and plays the final video at 12 fps for a hand-drawn feel.

![Edit on the words — clips/ → Edit on the words](/images/guides/ghost-skeleton-watercolour-lyric-video-free-ai-workflow/step-5.svg)

**Prompt · step 5**

```text
Edit the clips in clips/ into a music video with {song}: cut on sung words from the timing file, show each lyric line in a soft hand-written font, and play the final video at 12 fps for a hand-drawn feel. Render 1080x1920.
```

## Limits, straight talk

- All tools are real and work as described: Google Flow has Frames to Video and Ingredients for consistent characters; demucs (Meta) separates vocals; torchaudio MMS_FA does word-level forced alignment.
- Steps 4–5 need coding comfort (Claude Code helps).

## Useful links

- [Google: 5 tips for Flow](https://blog.google/technology/ai/flow-video-tips/)
- [Google: Veo 3.1 Ingredients to Video](https://blog.google/innovation-and-ai/technology/ai/veo-3-1-ingredients-to-video/)
- [Flow FAQ](https://labs.google/fx/en-gb/tools/flow/faq)
- [Demucs (GitHub)](https://github.com/facebookresearch/demucs)
- [PyTorch forced alignment tutorial](https://docs.pytorch.org/audio/stable/tutorials/forced_alignment_for_multilingual_data_tutorial.html)

## Questions people ask

### Is Google Flow free?

No — it needs a Google AI plan with credits. Check your credits before starting.

### Can I use a film song?

Only music you have rights to post; otherwise your video can be muted or removed.

### Do I need coding skills?

Steps 4–5 run in Claude Code, which writes the code for you — but some comfort with installing tools helps.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/ghost-skeleton-watercolour-lyric-video-free-ai-workflow/). Republished with permission.*
