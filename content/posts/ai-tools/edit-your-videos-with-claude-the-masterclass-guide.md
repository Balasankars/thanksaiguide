---
title: "Edit your videos with Claude — the complete masterclass setup"
slug: edit-your-videos-with-claude-the-masterclass-guide
category: "AI Tools"
description: "A complete, organised video studio inside Claude: one folder with your inbox, brand rules, sounds and a memory file, a dated folder…"
date: 2026-11-13
updated: 2026-11-13
tags: ["Claude Code", "video editing", "Whisper", "ffmpeg", "effects pack", "SFX"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/edit-your-videos-with-claude-the-masterclass-guide/
---
# Edit your videos with Claude — the complete masterclass setup

A complete, organised video studio inside Claude: one folder with your inbox, brand rules, sounds and a memory file, a dated folder per video, an effects pack, and prompts that edit a reel in one go — plus free sound effects that are safe to use.

> **తెలుగులో సారాంశం**
>
> Claude లో పూర్తి video studio — inbox, brand rules, sounds, memory file, ప్రతి video కి dated folder; ఒక్క prompt తో reel edit, ఫ్రీ sound effects తో.

![Edit your videos with Claude — the complete masterclass setup: Studio folders, Your rules, Free sound effects, Edit in one prompt](/images/guides/edit-your-videos-with-claude-the-masterclass-guide/cover.svg)

Comment keyword: **MASTER** · Topic: AI Tools · Last checked: 2026-11-13

## What you need

- **Claude desktop app** — Code tab, paid plan (Pro is enough).
- **Free tools** — ffmpeg, Python, Pillow, numpy and Whisper.
- **Free effects skill (optional)** — An open-source effects skill for talking-head videos.
- **Sound effects** — CC0 sounds from Openverse or Mixkit (check the Mixkit licence).

## Step by step

### Step 1: Build the studio folder

Claude creates one tidy studio folder: inbox for new clips, brand files, sounds, your rules, a placements file and a dated folder for each video. A tidy folder means Claude always knows where things are.

![Build the studio folder — Create this folder structure for my video studio → studio/](/images/guides/edit-your-videos-with-claude-the-masterclass-guide/step-1.svg)

**Prompt · step 1**

```text
Create this folder structure for my video studio:
- inbox/ (new raw clips)
- brand/ (logo, colours, fonts)
- sounds/
- rules.md (my editing rules)
- placements.md (where captions, logo and text can go on screen)
- CLAUDE.md (instructions you read every time: always follow rules.md and placements.md)
- videos/ (one dated folder per video)
Then install ffmpeg, Python with Pillow and numpy, and Whisper. Test them.
```

### Step 2: Write your rules

Write your single most important rule (for example 'never cover my face with text'). Claude adds sensible rules for size, captions, cut speed and music volume. Read rules.md and change anything that doesn't fit you.

![Write your rules — Write rules.md for my brand. My most important rule: … → rules.md](/images/guides/edit-your-videos-with-claude-the-masterclass-guide/step-2.svg)

**Prompt · step 2**

```text
Write rules.md for {brand}. My most important rule: {rule1}. Add sensible rules for vertical 1080x1920, caption style, cut speed, music volume under voice, and 'storyboard before render'. Show me so I can edit.
```

### Step 3: Add free sound effects

Claude finds 15 free CC0 sound effects (free to use, even commercially), saves them and lists each source and licence. Only use sounds with a licence you've checked.

![Add free sound effects — Find 15 free CC0 sound effects for reels, download them into sfx/ → sfx/](/images/guides/edit-your-videos-with-claude-the-masterclass-guide/step-3.svg)

**Prompt · step 3**

```text
Find 15 free CC0 sound effects (whoosh, pop, click, ding, swoosh, bass hit) for reels, download them into sounds/ and list each with its source link and licence.
```

### Step 4: Edit a reel in one prompt

Move a clip from inbox/ to today's dated folder and paste the prompt. Claude edits it following all your files and shows a storyboard before rendering.

![Edit a reel in one prompt — videos/2026-11-16/ → The edit follows your files](/images/guides/edit-your-videos-with-claude-the-masterclass-guide/step-4.svg)

**Prompt · step 4**

```text
Edit the clip in videos/{date}/ following CLAUDE.md, rules.md and placements.md. Cut silences, add captions, zooms on key lines, sound effects from sounds/ and soft music. Storyboard first, render after my OK.
```

### Step 5: Copy a style from references

Drop 2–3 reference reels into the refs folder. Claude copies the pacing and caption style but keeps your brand colours — and never copies their text or footage.

![Copy a style from references — videos/…/refs/ → Your clip](/images/guides/edit-your-videos-with-claude-the-masterclass-guide/step-5.svg)

**Prompt · step 5**

```text
Here are reference reels in videos/{date}/refs/. Edit my clip with the same pacing and caption style, but keep my brand colours from brand/. Learn the style only — don't copy their text or footage.
```

## Limits, straight talk

- Tools are real and free; needs a paid Claude plan (Pro is enough) and the desktop app's Code tab.
- Mixkit sounds are free under the Mixkit licence; the SFX finder only picks CC0 sounds.

## Useful links

- [Mixkit licence](https://mixkit.co/license/)
- [Whisper (OpenAI, GitHub)](https://github.com/openai/whisper)
- [claude-video-effects repo](https://github.com/Vibha-Ramprakash/claude-video-effects)

## Questions people ask

### Which Claude plan do I need?

Pro is enough — you need the desktop app's Code tab.

### Are the sound effects really free?

CC0 sounds are free for any use. Mixkit sounds are free under Mixkit's own licence — read it once.

### Do I need the effects skill?

No, it's optional. Add it later if you want flashy effects on talking-head videos.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/edit-your-videos-with-claude-the-masterclass-guide/). Republished with permission.*
