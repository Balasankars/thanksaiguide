---
title: "Reel studio kit — Claude Code makes the whole reel from one command"
slug: reel-studio-kit-claude-code-se-poori-reel-ek-command
category: "Social Media"
description: "A free kit for the Claude desktop app's Code tab: type 'reel banao: [topic]', approve the script, and Claude makes the voice…"
date: 2026-11-13
updated: 2026-11-13
tags: ["Claude Code", "reel kit", "Remotion", "Whisper", "captions", "free"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/reel-studio-kit-claude-code-se-poori-reel-ek-command/
---
# Reel studio kit — Claude Code makes the whole reel from one command

A free kit for the Claude desktop app's Code tab: type 'reel banao: [topic]', approve the script, and Claude makes the voice, word-synced captions, scenes, renders, and checks every frame against Instagram's no-go zones.

> **తెలుగులో సారాంశం**
>
> Claude desktop app Code tab లో ఒక్క command తో పూర్తి reel — script approve చేస్తే voice, captions, scenes, render, Instagram safe-zone check అన్నీ kit చేస్తుంది.

![Reel studio kit — Claude Code makes the whole reel from one command: Install the kit, reel banao: topic, Approve the script, Finished reel](/images/guides/reel-studio-kit-claude-code-se-poori-reel-ek-command/cover.svg)

Comment keyword: **REELKIT** · Topic: Social Media · Last checked: 2026-11-13

## What you need

- **Claude Pro/Max** — For the Code tab.
- **Node 18+, ffmpeg, Python 3.11–3.13** — Plus local Whisper (~480 MB).
- **A real voice** — Demo voice is a placeholder; use your own, a paid TTS or a free local clone.

## Step by step

### Step 1: Install the kit

Download the kit from its official GitHub page, open the folder in the Claude desktop app → Code tab, and follow the README. Setup installs Node, ffmpeg, Python and a local Whisper model (about 480 MB), so do it on Wi-Fi.

![Install the kit — the kit's official page: Download the kit → needs](/images/guides/reel-studio-kit-claude-code-se-poori-reel-ek-command/step-1.svg)

### Step 2: Make a reel

Type the kit's command followed by your topic. Claude writes a script first and waits — nothing is rendered yet.

![Make a reel — claude code → The kit does](/images/guides/reel-studio-kit-claude-code-se-poori-reel-ek-command/step-2.svg)

**Prompt · step 2**

```text
reel banao: {topic}
```

### Step 3: Approve the script

Read the script slowly. Ask for changes now (stronger hook, shorter, simpler words) — changing a script is free, changing a rendered video costs time.

![Approve the script — script (wait for your OK) → Make the hook stronger and the script 5 seconds shorter](/images/guides/reel-studio-kit-claude-code-se-poori-reel-ek-command/step-3.svg)

**Prompt · step 3**

```text
Make the hook stronger and the script 5 seconds shorter.
```

### Step 4: Check the render

After you approve, the kit makes the voice, captions and scenes, renders, and checks every frame against Instagram's no-go zones (where buttons cover the screen). Still watch the whole reel yourself on your phone.

![Check the render — phone showing SAFE ZONE checked → Look for](/images/guides/reel-studio-kit-claude-code-se-poori-reel-ek-command/step-4.svg)

### Step 5: Feedback in plain words

Tell Claude what's wrong like you'd tell an editor, with the time it happens (for example 'avatar covers the text at 0:08'). It fixes only that and re-renders.

![Feedback in plain words — Captions are too small and the avatar covers the text at 0:08. Fix and re-render → reel-v2.mp4](/images/guides/reel-studio-kit-claude-code-se-poori-reel-ek-command/step-5.svg)

**Prompt · step 5**

```text
Captions are too small and the avatar covers the text at 0:08. Fix and re-render.
```

## Limits, straight talk

- Demo voice and the illustrated/pixel avatars are placeholders — real voice needs OpenAI/ElevenLabs (paid) or a free local clone.

## Useful links

- [Remotion licence](https://www.remotion.dev/license)

## Questions people ask

### Is the demo voice good enough to post?

No — it's a placeholder. Use your own recording, a paid voice tool or a free local voice clone of your own voice.

### Which Claude plan do I need?

Pro or Max, because the kit runs in the desktop app's Code tab.

### Can I make Telugu reels?

Yes — write the topic in Telugu or ask for a Telugu script, and use a Telugu voice.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/reel-studio-kit-claude-code-se-poori-reel-ek-command/). Republished with permission.*
