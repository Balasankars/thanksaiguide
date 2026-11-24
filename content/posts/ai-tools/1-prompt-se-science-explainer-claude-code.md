---
title: "One prompt → animated science explainer with Claude"
slug: 1-prompt-se-science-explainer-claude-code
category: "AI Tools"
description: "One detailed prompt in Claude Code can produce a 30-second animated science explainer — characters, camera, captions and music, all…"
date: 2026-11-13
updated: 2026-11-13
tags: ["Claude Code", "Remotion", "science explainer", "animation", "free source code"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/1-prompt-se-science-explainer-claude-code/
---
# One prompt → animated science explainer with Claude

One detailed prompt in Claude Code can produce a 30-second animated science explainer — characters, camera, captions and music, all made in code and rendered with Remotion. Add your voice after.

> **తెలుగులో సారాంశం**
>
> Claude Code లో ఒక్క detailed prompt తో 30 సెకన్ల animated science explainer — characters, camera, captions, music అన్నీ code లోనే. Post చేసే ముందు facts check చేయండి.

![One prompt → animated science explainer with Claude: One prompt, Fact-check, Your voice, Explainer reel](/images/guides/1-prompt-se-science-explainer-claude-code/cover.svg)

Comment keyword: **SCIENCE** · Topic: AI Tools · Last checked: 2026-11-13

## What you need

- **Claude Code** — Paid plan (uses a lot of usage).
- **Remotion** — Free.

## Step by step

### Step 1: The one prompt

Type your science topic in the box and paste the one long prompt into Claude Code. It plans a mini story (beginning, problem, solution), designs cute original characters for the key parts, adds camera moves, captions and music, then renders a 30-second video. This uses a lot of your plan's usage — run it when you have room.

![The one prompt — Make a 30-second vertical animated science explainer in Remotion about my topic → phone showing WHY IS THE SKY BLUE?](/images/guides/1-prompt-se-science-explainer-claude-code/step-1.svg)

**Prompt · step 1**

```text
Make a 30-second vertical (1080x1920) animated science explainer in Remotion about: {topic}. Cute original characters for the key parts, a story with a beginning, conflict and resolution, smooth camera moves, captions for every line, light background music made in code. Keep the science simple but correct. Render MP4.
```

### Step 2: Fact-check

Ask Claude to list every scientific claim with a reliable source and to flag anything oversimplified. Read the flags carefully — a simple video is fine, a wrong one is not.

![Fact-check — List every scientific claim in the video and a reliable source for each → Claims](/images/guides/1-prompt-se-science-explainer-claude-code/step-2.svg)

**Prompt · step 2**

```text
List every scientific claim in the video and a reliable source for each. Flag anything oversimplified.
```

### Step 3: Add your voice

Record your voice-over and give it to Claude. It moves the scenes and captions to match your timing, so the visuals change exactly when you talk about them.

![Add your voice — voice.mp3 → Matched to your voice](/images/guides/1-prompt-se-science-explainer-claude-code/step-3.svg)

**Prompt · step 3**

```text
Here is my voice-over voice.mp3. Re-time the scenes and captions to match it.
```

### Step 4: Fix

Write your changes as a short list (for example 'slower intro, bigger captions, change the cell colour to green'). Claude re-renders with only those changes.

![Fix — Changes → explainer-v2.mp4](/images/guides/1-prompt-se-science-explainer-claude-code/step-4.svg)

**Prompt · step 4**

```text
Changes: [notes]. Re-render.
```

### Step 5: Make a series

Ask for 10 more topics in the same style. Using the same characters and look across videos turns them into a recognisable series.

![Make a series — Suggest 10 more topics that would work in the same style → Your series](/images/guides/1-prompt-se-science-explainer-claude-code/step-5.svg)

**Prompt · step 5**

```text
Suggest 10 more topics that would work in the same style.
```

## Limits, straight talk

- Heavy token use can burn through your plan's limits.
- Science is simplified and not expert-reviewed — check facts before posting educational content.
- Optional voice tools (OpenAI, ElevenLabs) are paid.

## Useful links

- [Remotion docs](https://www.remotion.dev/docs/)
- [Awesome Opus 5.5 Videos (explainer prompts)](https://aiidelist.com/blog/awesome-opus-5-5-videos)

## Questions people ask

### Is the science always right?

No — it's simplified and not checked by an expert. Always do step 2 and fix anything wrong before posting.

### Why does it use so much of my plan?

One prompt makes a whole video in code, which is a lot of work for Claude. Start with 30 seconds, not longer.

### Can I make it in Telugu?

Yes — record a Telugu voice-over and ask for Telugu captions in step 3.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/1-prompt-se-science-explainer-claude-code/). Republished with permission.*
