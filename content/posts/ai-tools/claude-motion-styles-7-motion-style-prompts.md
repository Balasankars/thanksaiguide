---
title: "7 motion styles with Claude — one prompt each"
slug: claude-motion-styles-7-motion-style-prompts
category: "AI Tools"
description: "Make short 8-second motion-graphics videos in seven different looks — glassy, pixel game, hand-drawn, paper collage, single-line ink…"
date: 2026-11-13
updated: 2026-11-13
tags: ["motion graphics", "HyperFrames", "Opus 5.5", "Claude Code", "styles"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/claude-motion-styles-7-motion-style-prompts/
---
# 7 motion styles with Claude — one prompt each

Make short 8-second motion-graphics videos in seven different looks — glassy, pixel game, hand-drawn, paper collage, single-line ink, hologram HUD, retro terminal — all written as code by Claude and rendered on your laptop.

> **తెలుగులో సారాంశం**
>
> 7 different looks లో 8 సెకన్ల motion-graphics videos — glass, pixel game, hand-drawn, paper collage, ink, hologram, retro terminal — అన్నీ Claude code తో.

![7 motion styles with Claude — one prompt each: Set up, Storyboard first, Pick a style, Render and polish](/images/guides/claude-motion-styles-7-motion-style-prompts/cover.svg)

Comment keyword: **MOTION7** · Topic: AI Tools · Last checked: 2026-11-13

## What you need

- **Claude Code** — Paid plan; use the strongest model and higher effort for best results (uses more of your limit).
- **HyperFrames** — Free, open-source HTML-to-video tool. Claude installs it.
- **A reference video (optional)** — Helps Claude match timing.

## Step by step

### Step 1: Set up

Claude installs HyperFrames (free HTML-to-video), ffmpeg and Node.js and renders a 2-second test. If the test works, everything else will too.

![Set up — Install HyperFrames, ffmpeg and Node.js and render a 2-second test animation → motion](/images/guides/claude-motion-styles-7-motion-style-prompts/step-1.svg)

**Prompt · step 1**

```text
Install HyperFrames, ffmpeg and Node.js in this folder and render a 2-second test animation.
```

### Step 2: Storyboard first

Give your brand, one message and your colours. Claude plans 4 beats with timing and sound cues — but doesn't render yet. Change the plan now; it's free.

![Storyboard first — Plan an 8-second vertical motion-graphics video for my brand with my message → Storyboard · 8 s](/images/guides/claude-motion-styles-7-motion-style-prompts/step-2.svg)

**Prompt · step 2**

```text
Plan an 8-second vertical motion-graphics video for {brand} with the message: "{msg}". Colours: {colors}. Give me a storyboard of 4 beats with timing and sound cues. Don't render yet.
```

### Step 3: Pick a style and render

Swap the style name to try others: glass morph, pixel game, hand-drawn recipe card, paper collage, one-line ink drawing, hologram HUD, ASCII terminal.

![Pick a style and render — Build the storyboard in PAPER COLLAGE style → phone showing PAPER COLLAGE](/images/guides/claude-motion-styles-7-motion-style-prompts/step-3.svg)

**Prompt · step 3**

```text
Build the storyboard in PAPER COLLAGE style: cut-paper textures, slight shadows, pieces that slide and stick into place, a gentle paper rustle on each move. Render 8 seconds at 1080x1920.
```

### Step 4: Try a second style

Use the SAME storyboard in a second style. Comparing two styles on one message shows you quickly which look fits your brand.

![Try a second style — Now make the same storyboard in HOLOGRAM HUD style → phone showing HOLOGRAM HUD](/images/guides/claude-motion-styles-7-motion-style-prompts/step-4.svg)

**Prompt · step 4**

```text
Now make the same storyboard in HOLOGRAM HUD style: thin glowing lines, scanning effects, data panels that flicker on. Keep the same timing and message.
```

### Step 5: Polish

Ask Claude to match every movement to the sound cues and hold the last frame for 1 second with your brand name. Small polish like this makes it feel professional.

![Polish — Sync every movement to the sound cues, hold the last frame 1 second → Polish](/images/guides/claude-motion-styles-7-motion-style-prompts/step-5.svg)

**Prompt · step 5**

```text
Sync every movement exactly to the sound cues and make the last frame hold for 1 second with the brand name.
```

## Limits, straight talk

- Max effort uses more of your weekly limit.

## Useful links

- [HyperFrames (HeyGen)](https://github.com/heygen-com/hyperframes)

## Questions people ask

### Which style is easiest to start with?

Paper collage or glass — they look good even with simple shapes.

### Why does it use so much of my plan?

High effort and the strongest model give better motion but use more of your weekly limit. Use lower effort for tests.

### Can I add my voice?

Yes — add a voice-over and ask Claude to time the beats to it.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/claude-motion-styles-7-motion-style-prompts/). Republished with permission.*
