---
title: "Edit videos with Claude Code — build your own AI video editor"
slug: edit-videos-with-claude-code-diy-ai-video-editor-setup
category: "AI Tools"
description: "Turn one folder on your laptop into an AI video editor. Drop raw footage in, write what you want, and Claude cuts pauses, adds…"
date: 2026-11-13
updated: 2026-11-13
tags: ["Claude Code", "AI video editing", "FFmpeg", "Remotion", "Whisper", "style.md"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/edit-videos-with-claude-code-diy-ai-video-editor-setup/
---
# Edit videos with Claude Code — build your own AI video editor

Turn one folder on your laptop into an AI video editor. Drop raw footage in, write what you want, and Claude cuts pauses, adds captions and music, writes a hook and shows you a storyboard before exporting. No editing app needed.

> **తెలుగులో సారాంశం**
>
> మీ laptop లో ఒక folder ని AI video editor గా మార్చండి — raw footage వేసి ఏం కావాలో రాస్తే, Claude pauses cut చేసి, captions, music, hook పెట్టి storyboard చూపిస్తుంది.

![Edit videos with Claude Code — build your own AI video editor: Make the folder, Install tools, Brand sheet, Edit by asking](/images/guides/edit-videos-with-claude-code-diy-ai-video-editor-setup/cover.svg)

Comment keyword: **EDITOR** · Topic: AI Tools · Last checked: 2026-11-13

## What you need

- **Claude desktop app** — Paid plan; use the Code tab with a Local session.
- **Free tools** — FFmpeg, Node.js, Remotion and Whisper — Claude installs them.
- **3–5 reference videos** — Downloaded videos you're allowed to use, in the style you like.

## Step by step

### Step 1: Make the folder

Create a folder 'AI Video Editor' with three folders inside: Raw Footage, References, Exports. In the Claude desktop app → Code → choose this folder for a Local session.

![Make the folder — AI Video Editor/](/images/guides/edit-videos-with-claude-code-diy-ai-video-editor-setup/step-1.svg)

### Step 2: Install the tools

One prompt does it all.

![Install the tools — Install everything needed to edit videos in this folder. Check each one → ai-video-editor](/images/guides/edit-videos-with-claude-code-diy-ai-video-editor-setup/step-2.svg)

**Prompt · step 2**

```text
Install everything needed to edit videos in this folder: FFmpeg, Node.js, Remotion and Whisper. Check each one works and tell me what you installed. Then make a 3-second test video into Exports/.
```

### Step 3: Create your brand sheet

Put 3–5 videos you're allowed to use, in a style you like, into References/. Claude studies captions, fonts, colours, cut speed, zooms, music and the hook, and writes style.md — your brand sheet. Every edit follows it, so all your videos look like one channel.

![Create your brand sheet — References/ → style.md](/images/guides/edit-videos-with-claude-code-diy-ai-video-editor-setup/step-3.svg)

**Prompt · step 3**

```text
Study every video in References/: captions, fonts, colours, cut speed, zooms, music, sound effects, how the hook works. Write style.md — a brand sheet for '{brand}' that you will follow for every edit. Show it to me.
```

### Step 4: Edit your first video

Drop your raw clip into Raw Footage/ and ask for the edit. Claude cuts pauses and mistakes, suggests 3 hooks, adds captions and music, and shows a storyboard before exporting. Approve the storyboard first — it saves a full re-render.

![Edit your first video — Edit my clip into a 30-second vertical video following style.md → First edit](/images/guides/edit-videos-with-claude-code-diy-ai-video-editor-setup/step-4.svg)

**Prompt · step 4**

```text
Edit {clip} into a {len}-second vertical video following style.md:
- Cut pauses, ums and mistakes.
- Write a strong hook for the first 3 seconds (suggest 3 options).
- Add word-by-word captions and soft background music.
- Show me a storyboard first. Render only after I say OK. Save to Exports/.
```

### Step 5: Fix in plain words and re-export

Say what's wrong like you'd tell a human editor.

![Fix in plain words and re-export — Like telling a human editor → Exports/](/images/guides/edit-videos-with-claude-code-diy-ai-video-editor-setup/step-5.svg)

**Prompt · step 5**

```text
Changes: [what to change]. Keep everything else the same and re-export with a new version number.
```

## Limits, straight talk

- Catches: Claude Code needs a paid Claude plan; 'paste their links' may not work — download reference videos you're allowed to use; copy a style, not someone's content; long or high-res videos render slowly.

## Useful links

- [Claude Code docs](https://docs.claude.com/en/docs/claude-code/overview)
- [Anthropic's official skills (GitHub)](https://github.com/anthropics/skills)
- [Remotion docs](https://www.remotion.dev/docs/)
- [OpenAI Whisper (GitHub)](https://github.com/openai/whisper)

## Questions people ask

### Do I still need an editing app?

No — Claude edits with free tools in the folder. You can still open the result in any editor if you want.

### Can I paste links to reference videos?

Links often don't work. Download the videos you're allowed to use and put them in References/.

### Why is my render slow?

Long or 4K clips take time on a laptop. Start with short 1080p clips.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/edit-videos-with-claude-code-diy-ai-video-editor-setup/). Republished with permission.*
