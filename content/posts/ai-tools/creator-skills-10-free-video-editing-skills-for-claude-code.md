---
title: "10 free editing skills for Claude Code — ideas to publish"
slug: creator-skills-10-free-video-editing-skills-for-claude-code
category: "AI Tools"
description: "Install a free, open-source pack of Claude Code skills that covers the whole short-video job: find ideas, write the script, edit your…"
date: 2026-11-13
updated: 2026-11-13
tags: ["FavStash", "Claude Code skills", "video editing", "HyperFrames", "GSAP", "short-form"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/creator-skills-10-free-video-editing-skills-for-claude-code/
---
# 10 free editing skills for Claude Code — ideas to publish

Install a free, open-source pack of Claude Code skills that covers the whole short-video job: find ideas, write the script, edit your takes, apply one of several motion styles, and prepare to publish — all on your laptop.

> **తెలుగులో సారాంశం**
>
> ఫ్రీ open-source Claude Code skills pack — ideas, script, takes edit, motion styles, publish text — short-video పని మొత్తం మీ laptop లోనే.

![10 free editing skills for Claude Code — ideas to publish: Install the pack, Find an idea, Edit your takes, Prepare to publish](/images/guides/creator-skills-10-free-video-editing-skills-for-claude-code/cover.svg)

Comment keyword: **EDIT10** · Topic: AI Tools · Last checked: 2026-11-13

## What you need

- **Claude Code (or Codex/Cursor)** — Paid Claude plan for Claude Code.
- **The skills pack** — Free on GitHub; paste its official setup prompt.
- **Laptop** — Editing runs locally. One cut-out effect works only on Mac.

## Step by step

### Step 1: Install the pack

Open Claude Code in a new folder and paste the official setup prompt from the pack's GitHub page. It installs the skills plus Node 22, FFmpeg, yt-dlp, HyperFrames and GSAP. If it asks to connect an account you don't want, say: skip.

![Install the pack — New folder → 10 skills](/images/guides/creator-skills-10-free-video-editing-skills-for-claude-code/step-1.svg)

### Step 2: Find an idea

Give a topic and ask for 10 ideas with a hook for each. Pick the one you'd personally enjoy making — you'll make a better video.

![Find an idea — Use the find-ideas skill: give me 10 short-video ideas that could do well this week → Ideas](/images/guides/creator-skills-10-free-video-editing-skills-for-claude-code/step-2.svg)

**Prompt · step 2**

```text
Use the find-ideas skill: give me 10 short-video ideas about {topic} that could do well this week, with a hook line for each.
```

### Step 3: Write the script

The script skill writes a short script with a hook in the first 2 seconds, one idea per line and a comment call-to-action at the end. Read it out loud and change any line that doesn't sound like you.

![Write the script — Use the script skill to write a 30-second script for idea #3 → script.md](/images/guides/creator-skills-10-free-video-editing-skills-for-claude-code/step-3.svg)

**Prompt · step 3**

```text
Use the script skill to write a {len}-second script for idea #[number]. Hook in 2 seconds, one idea per line, ending with a comment call-to-action.
```

### Step 4: Edit your takes

Record each line 2–3 times, drop all takes in the folder and ask for the edit. Claude picks the best take of each line, cuts silences and adds captions, then shows you before rendering.

![Edit your takes — takes/ → The edit](/images/guides/creator-skills-10-free-video-editing-skills-for-claude-code/step-4.svg)

**Prompt · step 4**

```text
Use the edit-video skill to edit {takes} into a {len}-second reel. Pick the best take of each line, cut silences, add captions. Show me before rendering.
```

### Step 5: Add a motion style

Try a few motion styles on the same edit with 5-second previews, then choose one. Using the same style every time makes your channel recognisable.

![Add a motion style — Apply a different motion style to the same edit, 5-second preview of each → Same edit](/images/guides/creator-skills-10-free-video-editing-skills-for-claude-code/step-5.svg)

**Prompt · step 5**

```text
Apply a different motion style from the pack to the same edit and give me a 5-second preview of each so I can choose.
```

### Step 6: Prepare to publish

Claude writes the caption, 5 hashtags and a title — it never posts anything itself. You copy the text and post the reel yourself.

![Prepare to publish — Write the caption, 5 hashtags and a title. Don't publish anything → Nothing auto-posts](/images/guides/creator-skills-10-free-video-editing-skills-for-claude-code/step-6.svg)

**Prompt · step 6**

```text
Write the caption, 5 hashtags and a title for this reel. Don't publish anything — just give me the text.
```

## Limits, straight talk

- The setup prompt also tries to connect a FavStash account — say 'skip FavStash' if you don't want it. breakout-card cut-out works only on macOS.

## Useful links

- [HyperFrames (HeyGen)](https://github.com/heygen-com/hyperframes)

## Questions people ask

### Do I need a Mac?

No — everything works on Windows or Mac, except one cut-out effect that only works on macOS.

### What if setup asks to connect an account?

If it's an account you don't want, just say 'skip'. The skills work without it.

### Is it free?

The skill pack is free and open-source. Claude Code needs a paid Claude plan.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/creator-skills-10-free-video-editing-skills-for-claude-code/). Republished with permission.*
