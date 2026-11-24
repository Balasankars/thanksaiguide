---
title: "Give Claude eyes — let Claude watch any video"
slug: give-claude-eyes-a-skill-that-lets-claude-watch-any-video
category: "AI Tools"
description: "Claude can't watch videos on its own. A free open-source skill fixes that: give it a video file or link, it cuts the video into…"
date: 2026-11-13
updated: 2026-11-13
tags: ["Claude Code", "Watch skill", "video analysis", "yt-dlp", "FFmpeg", "hooks"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/give-claude-eyes-a-skill-that-lets-claude-watch-any-video/
---
# Give Claude eyes — let Claude watch any video

Claude can't watch videos on its own. A free open-source skill fixes that: give it a video file or link, it cuts the video into timestamped frames and pulls the transcript, and Claude studies it frame by frame — hooks, cuts, on-screen text, product shots.

> **తెలుగులో సారాంశం**
>
> Claude కి కళ్ళు ఇవ్వండి — ఫ్రీ skill video ని timestamped frames + transcript గా మార్చి, Claude hook, cuts, on-screen text అన్నీ విశ్లేషిస్తుంది.

![Give Claude eyes — let Claude watch any video: Install the skill, Break down a video, Learn from a winner, Turn it into a script](/images/guides/give-claude-eyes-a-skill-that-lets-claude-watch-any-video/cover.svg)

Comment keyword: **WATCH** · Topic: AI Tools · Last checked: 2026-11-13

## What you need

- **Claude Code** — Paid Pro plan.
- **Watch skill (claude-video)** — Free on GitHub.
- **FFmpeg + yt-dlp** — Free; used by the local engine.

## Step by step

### Step 1: Install the skill

Ask Claude Code to install the skill and use only the local engine (FFmpeg + yt-dlp). That keeps everything on your computer and free.

![Install the skill — Install the Watch skill. Use the local engine only → local engine](/images/guides/give-claude-eyes-a-skill-that-lets-claude-watch-any-video/step-1.svg)

**Prompt · step 1**

```text
Install the Watch skill from github.com/bradautomates/claude-video. Use the local engine only (FFmpeg + yt-dlp), no paid API. Tell me when it's ready.
```

### Step 2: Break down a video

Give a video file (or a link you're allowed to download). Claude gets frames with timestamps and the transcript, then writes the hook word for word, every cut, all on-screen text, the structure and why it holds attention.

![Break down a video — Watch this video. Give me the hook, every cut, all on-screen text → Breakdown](/images/guides/give-claude-eyes-a-skill-that-lets-claude-watch-any-video/step-2.svg)

**Prompt · step 2**

```text
Watch {video}. Give me: the hook (first 3 seconds) word for word, every cut with timestamp, all on-screen text, the structure, and why it holds attention.
```

### Step 3: Learn from a winner

Compare a winning video with your own reel. Claude points out what the winner does better in the first 5 seconds and gives 5 specific changes for your next reel.

![Learn from a winner — Compare → What does theirs do better in the first 5 seconds?](/images/guides/give-claude-eyes-a-skill-that-lets-claude-watch-any-video/step-3.svg)

**Prompt · step 3**

```text
Compare {video} with my last reel (myreel.mp4). What does theirs do better in the first 5 seconds? Give 5 specific changes for my next reel.
```

### Step 4: Turn it into a script

Claude writes a new script using the same structure but your own topic and words. Copy the structure, never the script.

![Turn it into a script — Write a new script for my channel using the same structure, with my own topic → script.md](/images/guides/give-claude-eyes-a-skill-that-lets-claude-watch-any-video/step-4.svg)

**Prompt · step 4**

```text
Write a new script for my {niche} channel using the same structure as {video}, but with my own topic and words.
```

### Step 5: Keep local

Stick to the local engine for 100% on-device and ₹0. Extras that use Gemini or other APIs send your video to those companies.

![Keep local — Engines](/images/guides/give-claude-eyes-a-skill-that-lets-claude-watch-any-video/step-5.svg)

## Limits, straight talk

- Real, widely listed skill (github.com/bradautomates/claude-video, MIT).
- Only download videos you're allowed to; downloading from Instagram/YouTube can break their terms.

## Useful links

- [Watch skill on GitHub (claude-video)](https://github.com/bradautomates/claude-video)
- [Watch skill on skills.sh](https://www.skills.sh/bradautomates/claude-video/watch)
- [Tessl security review of the Watch skill](https://tessl.io/registry/skills/github/bradautomates/claude-video/watch/security)
- [claude-video explained (knightli)](https://knightli.com/en/2026/07/08/claude-video-watch-video-transcript-frames-skill/)

## Questions people ask

### Can Claude really watch a video?

Not by itself. This skill cuts the video into frames and a transcript that Claude can read.

### Is it OK to download reels?

Only download videos you're allowed to. Downloading from Instagram or YouTube can break their terms.

### Does it cost anything?

The skill and local engine are free. Claude Code needs a paid plan.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/give-claude-eyes-a-skill-that-lets-claude-watch-any-video/). Republished with permission.*
