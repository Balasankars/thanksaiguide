---
title: "Claude video editor setup — 7 steps on the $20 plan"
slug: claude-video-editor-setup-7-steps-4-prompts-on-the-20-plan
category: "AI Tools"
description: "The fastest path to editing reels with Claude on the basic paid plan: one folder, one install prompt, a taste lesson from 5 reference…"
date: 2026-11-13
updated: 2026-11-13
tags: ["Claude Code", "FFmpeg", "yt-dlp", "Whisper", "HyperFrames", "setup"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/claude-video-editor-setup-7-steps-4-prompts-on-the-20-plan/
---
# Claude video editor setup — 7 steps on the $20 plan

The fastest path to editing reels with Claude on the basic paid plan: one folder, one install prompt, a taste lesson from 5 reference reels, then film → drop → paste → fix by talking.

> **తెలుగులో సారాంశం**
>
> Basic paid plan ($20) లో Claude తో reels edit చేయడానికి వేగమైన మార్గం — ఒక folder, ఒక install prompt, 5 reference reels తో taste, తర్వాత film → drop → paste.

![Claude video editor setup — 7 steps on the $20 plan: Open the Code tab, Install everything, Teach your taste, Film, drop, paste](/images/guides/claude-video-editor-setup-7-steps-4-prompts-on-the-20-plan/cover.svg)

Comment keyword: **SETUP** · Topic: AI Tools · Last checked: 2026-11-13

## What you need

- **Claude Pro** — Gives you the Code tab in the desktop app.
- **Free tools** — FFmpeg, yt-dlp, Whisper and HyperFrames — one prompt installs them.
- **Your phone** — To film.

## Step by step

### Step 1: Open the Code tab

Claude desktop app → Code → Local → choose a new folder with raw/, references/, exports/ inside.

![Open the Code tab — Claude desktop app → my-editor/](/images/guides/claude-video-editor-setup-7-steps-4-prompts-on-the-20-plan/step-1.svg)

### Step 2: Install everything

Paste the install prompt. Claude checks what's already on your laptop, installs anything missing and tells you exactly what it installed. If something fails, paste the error back.

![Install everything — Set up this folder as my AI video editing workspace → my-editor](/images/guides/claude-video-editor-setup-7-steps-4-prompts-on-the-20-plan/step-2.svg)

**Prompt · step 2**

```text
Set up this folder as my AI video editing workspace.
1. Check whether ffmpeg, Node.js (version 20 or newer), Python 3 and Git are installed. Install anything missing and tell me exactly what you installed.
2. Install Whisper (faster-whisper) so you can get word-by-word timings from my voice.
3. Create folders: raw/ (my clips), refs/ (example videos I like), sounds/, exports/.
4. Test everything: make a 3-second test video with a caption and save it to exports/test.mp4.
5. Also install yt-dlp (to download reference videos I'm allowed to use) and HyperFrames (motion graphics).
```

### Step 3: Turn off what you don't need

In Settings → Connectors, turn off connectors you won't use for editing. It saves your plan's limits.

![Turn off what you don't need — Claude · Settings → Connectors: Turn off what you won't use → Saves your limit](/images/guides/claude-video-editor-setup-7-steps-4-prompts-on-the-20-plan/step-3.svg)

### Step 4: Teach your taste

Put 5 reels you love in references/. Claude studies their frames and transcripts and writes taste.md — what makes them good (hook style, pacing, captions, motion, sound). This is how Claude learns YOUR taste.

![Teach your taste — references/ → taste.md](/images/guides/claude-video-editor-setup-7-steps-4-prompts-on-the-20-plan/step-4.svg)

**Prompt · step 4**

```text
Watch the 5 videos in references/ (use their frames and transcripts). My niche is {niche}. Write taste.md: what makes these edits good — hook style, pacing, captions, motion, sound. I'll use this for every edit.
```

### Step 5: Film, drop, paste

Film on your phone, put the clip in raw/ and paste the prompt. Claude shows a storyboard and 3 stills before the full edit.

![Film, drop, paste — Every video → First you see](/images/guides/claude-video-editor-setup-7-steps-4-prompts-on-the-20-plan/step-5.svg)

**Prompt · step 5**

```text
Edit {clip} following taste.md. Vertical 1080x1920. Show me a storyboard and 3 stills first.
```

### Step 6: Fix by talking

Give feedback with times, like a human editor ('captions too small at 0:05'). Claude saves each version as v2, v3… so you never lose a good one.

![Fix by talking — Feedback: my notes with times. Re-render as v2 → out/](/images/guides/claude-video-editor-setup-7-steps-4-prompts-on-the-20-plan/step-6.svg)

**Prompt · step 6**

```text
Feedback: [your notes with times]. Re-render as v2.
```

### Step 7: Reuse

From now on, every new video is just steps 5 and 6. Setup is done once.

![Reuse — From now on](/images/guides/claude-video-editor-setup-7-steps-4-prompts-on-the-20-plan/step-7.svg)

## Limits, straight talk

- All tools are real and free; the only cost is Claude Pro, which is correct for the Code tab.
- Downloading other creators' reels with yt-dlp is fine for private study only; don't repost them.

## Useful links

- [HyperFrames (HeyGen)](https://github.com/heygen-com/hyperframes)
- [yt-dlp](https://github.com/yt-dlp/yt-dlp)

## Questions people ask

### Is the $20 plan enough?

Yes — Claude Pro gives you the Code tab. All other tools are free.

### Can I download other creators' reels for references?

For private study only. Never repost their videos.

### Do I need a fast laptop?

Any recent laptop works; long or 4K videos just take longer.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/claude-video-editor-setup-7-steps-4-prompts-on-the-20-plan/). Republished with permission.*
