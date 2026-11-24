---
title: "One shot, 10 art styles — a style-montage reel with Claude"
slug: 10-art-styles-one-shot-claude-hyperframes-reel
category: "AI Tools"
description: "Animate one 5-second moment once, then have Claude repaint it in 10 Indian and world art styles — Madhubani, Warli, Tholu Bommalata,…"
date: 2026-11-15
updated: 2026-11-15
tags: ["Claude Code", "HyperFrames", "FFmpeg", "art styles", "Telugu text", "montage reel"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/10-art-styles-one-shot-claude-hyperframes-reel/
---
# One shot, 10 art styles — a style-montage reel with Claude

Animate one 5-second moment once, then have Claude repaint it in 10 Indian and world art styles — Madhubani, Warli, Tholu Bommalata, Ukiyo-e and more — and cut all ten into a 26-second reel where every clip hits on the same beat. You paste prompts and check previews; Claude writes and renders the code.

> **తెలుగులో సారాంశం**
>
> ఒక్క 5 సెకన్ల moment ని ఒకసారి animate చేసి, Claude దాన్ని Madhubani, Warli, Tholu Bommalata, Ukiyo-e వంటి 10 art styles లో మళ్ళీ చిత్రిస్తుంది — beat మీద cut అయ్యే montage reel.

![One shot, 10 art styles — a style-montage reel with Claude: One 5-second shot, Repaint in 10 styles, Render 10 clips, Montage reel](/images/guides/10-art-styles-one-shot-claude-hyperframes-reel/cover.svg)

Comment keyword: **STYLES** · Topic: AI Tools · Last checked: 2026-11-15

## What you need

- **Claude Code (Pro or higher)** — Writes and renders every animation. Needs a paid Claude plan and a laptop or desktop — it does not run on a phone.
- **HyperFrames** — Free, open-source (Apache-2.0) tool that turns an HTML animation into an MP4. Needs Node.js 22 or newer. Claude installs it for you.
- **FFmpeg + Google Chrome** — Both free. FFmpeg encodes the video and adds audio; Chrome is used for previews and rendering.
- **A voice** — Your own recording, or a free local text-to-speech model such as Kokoro-82M.

## Step by step

### Step 1: Set up the project

Make an empty folder (for example kite-styles), open it in Claude Code and send this first message. Claude checks your tools and installs HyperFrames; if Node or FFmpeg is missing it tells you what to install.

![Set up the project — kite-styles/ → claude code](/images/guides/10-art-styles-one-shot-claude-hyperframes-reel/step-1.svg)

**Prompt · step 1**

```text
This folder is for short animations written in HTML and rendered to MP4 with HyperFrames. Please install and set up HyperFrames here, confirm Node.js (22+) and FFmpeg both work, and tell me in plain words if anything is missing. Keep animations in anims/, rendered clips in assets/clips/, audio in assets/audio/ and the final reel in reel/.
```

### Step 2: Build the base shot once

This is the most important step. Claude draws the characters and set as shared shapes in one file, and locks the timing so the key moment always happens at the same second. Look at the still frames carefully and fix poses now — all ten styles inherit them.

![Build the base shot once — the moment (5 s) → 5-second timeline](/images/guides/10-art-styles-one-shot-claude-hyperframes-reel/step-2.svg)

**Prompt · step 2**

```text
Create a 5-second vertical animation (1080x1920, 30 fps) as a HyperFrames HTML page drawn on a canvas.
The moment: {scene}.
The key moment (the hit) must happen at exactly {hit} s, with a short anticipation pose about 0.3 s before it.
Rules:
- Draw every frame only from the current time, with no state carried from earlier frames, so any frame can be rendered on its own. If you need randomness, seed it from the frame number.
- Put all shapes (characters, props, background layers) in one shared file of drawing functions, so other styles can reuse the exact same poses and only change the look.
- Keep any text inside x 60–960, y 250–1500 so Instagram buttons don't cover it.
When it's ready, show me still frames at 0.5 s, {hit} s and 4 s.
```

### Step 3: Repaint it in each style

Send one style per message and check the preview each time. The shapes and timing stay the same — only colours, outlines, textures and the hit effect change. Ask Claude to describe how each style should look before drawing it, so you can correct it early.

![Repaint it in each style — Make a new version of the same shot in this style: Madhubani → Styles](/images/guides/10-art-styles-one-shot-claude-hyperframes-reel/step-3.svg)

**Prompt · step 3**

```text
Make a new version of the same shot in this style: [one style from: {styles}].
Reuse the shared shapes file and keep every pose and the {hit} s hit exactly the same — change only the paint: palette, outlines, fills, textures, background treatment and the effect at the hit.
Before drawing, tell me in 3 short lines what makes this style recognisable and what the hit effect will be. Use Noto Sans Telugu for any Telugu text. Then show me stills at 0.5 s, {hit} s and 4 s.
```

### Step 4: Render the 10 clips

When a style looks right, render it. On a normal laptop ask for one render worker — slower but steadier. Each clip can take a few minutes depending on how heavy the textures are.

![Render the 10 clips — Render this style to a 5-second MP4, one render worker → assets/clips/](/images/guides/10-art-styles-one-shot-claude-hyperframes-reel/step-4.svg)

**Prompt · step 4**

```text
Render this style to a 5-second MP4 in assets/clips/, named after the style. Use one render worker. Then confirm the file length is 5 seconds and the hit is at {hit} s.
```

### Step 5: Cut the montage reel

Every card shows the clip from about one second before the hit, so the hit lands in the middle of each card and the reel gets a steady rhythm.

![Cut the montage reel — Montage reel · 9:16 → phone showing 10 ART STYLES same 5 seconds](/images/guides/10-art-styles-one-shot-claude-hyperframes-reel/step-5.svg)

**Prompt · step 5**

```text
Build a 1080x1920 reel from all clips in assets/clips/.
Open with the title "{title}" at the top.
Then show each style for 2 seconds in a framed card on the right, with a numbered list of style names on the left that highlights the current one. Start each clip about 1 second before its {hit} s hit, so the hit lands in the middle of each card. Use a quick wipe between cards.
End with "{cta}" over a grid of all the clips playing.
Keep all text inside x 60–960, y 250–1500. Render to reel/final.mp4.
```

### Step 6: Add the voiceover

Record the lines yourself or let Claude make them with a free local voice. Style names like Madhubani, Warli and Ukiyo-e often need a pronunciation fix.

![Add the voiceover — Voiceover lines → Voice on the reel](/images/guides/10-art-styles-one-shot-claude-hyperframes-reel/step-6.svg)

**Prompt · step 6**

```text
Add a voiceover to reel/final.mp4: say "{title}" over the title, then say each style name as its card appears, then "{cta}" at the end. Use my recording in assets/audio/ if it's there; otherwise use a free local text-to-speech voice. Fix any mispronounced style names, mix to about -14 LUFS, and render the final MP4.
```

## Limits, straight talk

- This is animation drawn in code, not AI video: flat, graphic characters work well; realistic people don't.
- Claude Code needs a paid Claude plan, and each style plus each render uses your plan's usage. Check previews before rendering — rendering is the slow part.
- If clips flicker or differ between renders, something uses randomness or remembers earlier frames — ask Claude to draw each frame only from the time.
- Instagram covers the top, bottom and right edge with buttons. Keep text inside x 60–960, y 250–1500 and watch the final reel on a phone before posting.
- Art styles are fine to learn from, but invent your own characters — don't recreate famous cartoon or brand characters.

## Useful links

- [HyperFrames (GitHub)](https://github.com/heygen-com/hyperframes)
- [Claude Code](https://claude.com/claude-code)
- [Node.js](https://nodejs.org)
- [FFmpeg](https://ffmpeg.org)
- [Kokoro-82M text-to-speech](https://huggingface.co/hexgrad/Kokoro-82M)
- [Noto Sans Telugu font](https://fonts.google.com/noto/specimen/Noto+Sans+Telugu)

## Questions people ask

### Will it work for realistic people?

No — it's animation drawn in code. Flat, graphic characters look great; realistic faces don't.

### Why does it use so much of my plan?

Each style and each render is work for Claude. Check previews before rendering, because rendering is the slow part.

### Can I choose different art styles?

Yes — swap any of the 10 styles for one you like, keeping the same base shot and beat.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/10-art-styles-one-shot-claude-hyperframes-reel/). Republished with permission.*
