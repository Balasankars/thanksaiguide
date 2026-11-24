---
title: "Edit videos with AI — teach Claude your style from 6 reels"
slug: edit-videos-with-ai-the-cooked-plugin-project
category: "AI Tools"
description: "Show Claude a handful of reels whose editing you love. It learns the style — captions, zooms, cuts, sound — and then edits your own…"
date: 2026-11-12
updated: 2026-11-12
tags: ["Claude Code", "cooked plugin", "AI video editing", "editing style", "transcript editing"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/edit-videos-with-ai-the-cooked-plugin-project/
---
# Edit videos with AI — teach Claude your style from 6 reels

Show Claude a handful of reels whose editing you love. It learns the style — captions, zooms, cuts, sound — and then edits your own phone talking-head clip the same way. You fix things by deleting words in the transcript or giving notes with timestamps.

> **తెలుగులో సారాంశం**
>
> మీకు నచ్చిన 6 reels చూపిస్తే Claude ఆ editing style నేర్చుకుని, మీ phone talking-head clip ని అదే విధంగా edit చేస్తుంది; transcript లో పదాలు delete చేసి fix చేయండి.

![Edit videos with AI — teach Claude your style from 6 reels: Install, Teach your style, Edit your clip, Save rules](/images/guides/edit-videos-with-ai-the-cooked-plugin-project/cover.svg)

Comment keyword: **COOKED** · Topic: AI Tools · Last checked: 2026-11-12

## What you need

- **Claude Code** — Needs a paid Claude plan. Use the Code tab in the Claude desktop app or the terminal.
- **An editing plugin or skill** — A free open-source Claude Code editing plugin (the guide uses one called 'cooked.'). Install only from its official GitHub page.
- **6 reference reels** — Videos you're allowed to download, in the style you want.
- **Laptop** — Rendering happens locally, so a laptop or desktop is needed.

## Step by step

### Step 1: Install Claude Code and the editing plugin

Open Claude Code in a new folder. Paste the plugin's official install command from its GitHub page, then run the setup prompt below so all the tools are ready.

![Install Claude Code and the editing plugin — Set up this folder as my AI video editing workspace → editing-workspace](/images/guides/edit-videos-with-ai-the-cooked-plugin-project/step-1.svg)

**Prompt · step 1**

```text
Set up this folder as my AI video editing workspace.
1. Check whether ffmpeg, Node.js (version 20 or newer), Python 3 and Git are installed. Install anything missing and tell me exactly what you installed.
2. Install Whisper (faster-whisper) so you can get word-by-word timings from my voice.
3. Create folders: raw/ (my clips), refs/ (example videos I like), sounds/, exports/.
4. Test everything: make a 3-second test video with a caption and save it to exports/test.mp4.
```

### Step 2: Teach it your style

Put 6 reels you like into refs/. Claude studies them and writes the style as rules it can reuse.

![Teach it your style — refs/ → styles/my-style.md](/images/guides/edit-videos-with-ai-the-cooked-plugin-project/step-2.svg)

**Prompt · step 2**

```text
Study every video in refs/. For each one, note the caption style (font, size, colour, position, words per line), zoom and punch-in moments, cut speed, transitions, sound effects and music level. Then write a file styles/{style}.md that describes this style as clear rules I can reuse on any video. Show me the rules.
```

### Step 3: Edit your clip

Drop your phone recording into raw/ and ask for the first cut.

![Edit your clip — Edit my clip into a 30-second vertical reel using my style → First cut](/images/guides/edit-videos-with-ai-the-cooked-plugin-project/step-3.svg)

**Prompt · step 3**

```text
Edit {clip} into a {len}-second vertical reel using styles/{style}.md.
- Remove silences, ums and repeated takes.
- Show me the transcript of the cut version and a storyboard of the key moments BEFORE rendering.
- After I approve, render to exports/.
```

### Step 4: Fix by editing the transcript

The easiest way to cut: delete words from the transcript Claude shows you and send it back, or give notes with timestamps.

![Fix by editing the transcript — transcript → Cut by deleting words](/images/guides/edit-videos-with-ai-the-cooked-plugin-project/step-4.svg)

**Prompt · step 4**

```text
Here is the transcript with the parts I want removed deleted: [paste]. Also: at 0:12 zoom in on my face, at 0:20 add a pop sound. Re-render.
```

### Step 5: Save what you like as rules

When a fix works, make it permanent so every future edit already includes it.

![Save what you like as rules — Add the fixes I liked to my style file as permanent rules → styles/my-style.md](/images/guides/edit-videos-with-ai-the-cooked-plugin-project/step-5.svg)

**Prompt · step 5**

```text
Add the fixes I liked in this edit to styles/{style}.md as permanent rules, so you apply them automatically next time.
```

## Limits, straight talk

- Requirements are stated correctly: Claude Code needs a paid Claude plan (free plan doesn't include it); first setup downloads ~1.5 GB; local rendering is free, cloud rendering and optional Gemini/ElevenLabs keys can cost money.

## Useful links

- [Claude Code docs: Skills](https://code.claude.com/docs/en/skills)
- [Learn with Hasan: Claude Code video editing](https://learnwithhasan.com/guide/claude-code-video-editing/)

## Questions people ask

### How many reference reels do I need?

About 6 reels in the style you want, that you're allowed to download.

### How do I fix mistakes?

Delete words in the transcript to cut them, or give notes with timestamps.

### What does it cost?

Claude Code needs a paid plan. Local rendering is free; cloud rendering and optional voice keys can cost money.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/edit-videos-with-ai-the-cooked-plugin-project/). Republished with permission.*
