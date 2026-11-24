---
title: "Clay animation reels with Claude — no Blender, no Claude Code"
slug: clay-animation-reel-with-claude-no-blender
category: "AI Tools"
description: "Make plasticine-style animated reels in the normal Claude app: Claude draws a clay-look world with code (2.5D shading, squash and…"
date: 2026-11-13
updated: 2026-11-13
tags: ["clay animation", "claymation style", "Claude", "Python", "ElevenLabs"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/clay-animation-reel-with-claude-no-blender/
---
# Clay animation reels with Claude — no Blender, no Claude Code

Make plasticine-style animated reels in the normal Claude app: Claude draws a clay-look world with code (2.5D shading, squash and stretch, a 12 fps 'boil'), writes the script, and renders the MP4 with your voice.

> **తెలుగులో సారాంశం**
>
> Claude Code లేకుండా, సాధారణ Claude app లోనే clay/plasticine style animated reels — Claude code తో clay world గీసి, మీ voice తో MP4 render చేస్తుంది.

![Clay animation reels with Claude — no Blender, no Claude Code: Paste the clay style, Get scripts, Make the voice, Claude renders](/images/guides/clay-animation-reel-with-claude-no-blender/cover.svg)

Comment keyword: **CLAY** · Topic: AI Tools · Last checked: 2026-11-13

## What you need

- **Claude app** — Turn on file creation / code execution in settings.
- **A voice** — Your recording or a free TTS tier (check commercial rules).

## Step by step

### Step 1: Paste the clay style

In the normal Claude app, turn on file creation / code execution in Settings first. Paste the clay style prompt — it tells Claude how to draw: soft rounded shapes, warm light, a tiny fingerprint texture and the slightly 'boiling' 12 fps look of real clay animation.

![Paste the clay style — Animate in a clay/plasticine style using Python and ffmpeg → Clay look](/images/guides/clay-animation-reel-with-claude-no-blender/step-1.svg)

**Prompt · step 1**

```text
Animate in a clay/plasticine style using Python (numpy + Pillow) and ffmpeg: soft rounded shapes, warm light from the top-left, tiny fingerprint texture, diorama-like little worlds, squash and stretch on movement, 12 fps with slight frame-to-frame wobble like real stop-motion. Vertical 1080x1920. Confirm you understand and wait.
```

### Step 2: Get scripts

Claude writes 3 short scripts, each with one real fact and its source. Open the source and check the fact yourself before you choose a script.

![Get scripts — Write 3 short 30-second scripts about my topic, each with one real fact and its source → script-2.md](/images/guides/clay-animation-reel-with-claude-no-blender/step-2.svg)

**Prompt · step 2**

```text
Write 3 short 30-second scripts about {topic} in {lang}, each with one real fact and its source.
```

### Step 3: Make the voice

Record the chosen script yourself, or use a TTS tool. Claude can't hear audio, so paste the exact text too.

![Make the voice — Record the script → you give Claude](/images/guides/clay-animation-reel-with-claude-no-blender/step-3.svg)

### Step 4: Render

Attach your MP3 and paste the exact script text. Claude shows 2 preview frames first — say what to change before the full render. Longer videos can hit message limits; if that happens, ask for the video in 2 parts.

![Render — Here is my voice MP3 and the exact script. Build the clay animation scene by scene → phone showing CLAY REEL](/images/guides/clay-animation-reel-with-claude-no-blender/step-4.svg)

**Prompt · step 4**

```text
Here is my voice MP3 and the exact script. Build the clay animation scene by scene to match the script, show me 2 preview frames first, then render the full MP4 with my audio.
```

## Limits, straight talk

- Works in the normal Claude app with code execution — no Claude Code needed (longer videos may hit message limits).
- Check every 'real fact' before posting.

## Useful links

- [ClayHook Notion version (row 13)](https://app.notion.com/p/How-to-Make-ClayHook-Style-Clay-Animation-Reels-with-Claude-409910706b0d80c0925cc6f9127a45c1)
- [Opus: How creators fake stop-motion clay TikToks](https://www.opus.pro/blog/claymation-ai)

## Questions people ask

### Do I need Claude Code?

No. This works in the normal Claude app with code execution turned on.

### Why does Claude need the text if it has my audio?

Claude can't listen to audio, so it uses the exact text to time the scenes to your voice.

### Can I add Telugu narration?

Yes — record in Telugu and paste the Telugu script. Ask for Telugu captions too.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/clay-animation-reel-with-claude-no-blender/). Republished with permission.*
