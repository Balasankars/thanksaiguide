---
title: "Shadow puppet reels with Claude — script, Telugu captions & voice sync"
slug: shadow-puppet-reels-with-claude-telugu-voice-sync
category: "AI Tools"
description: "Turn a 30-second story into an animated shadow puppet reel inside a Claude chat: black silhouette puppets on a lamp-lit screen,…"
date: 2026-11-15
updated: 2026-11-15
tags: ["Claude", "Code execution", "ElevenLabs", "Shadow puppet", "Telugu captions", "10 styles"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/shadow-puppet-reels-with-claude-telugu-voice-sync/
---
# Shadow puppet reels with Claude — script, Telugu captions & voice sync

Turn a 30-second story into an animated shadow puppet reel inside a Claude chat: black silhouette puppets on a lamp-lit screen, Telugu captions, and your own voiceover synced line by line. Claude draws every frame in code and renders the MP4, so you can change any puppet, light or timing with one sentence. Works in 10 other styles too.

> **తెలుగులో సారాంశం**
>
> 30 సెకన్ల కథను Claude chat లోనే shadow puppet reel గా — lamp-lit screen మీద నల్లని బొమ్మలు, Telugu captions, మీ voice line by line sync.

![Shadow puppet reels with Claude — script, Telugu captions & voice sync: Story script, Record the voice, Pick a style, Claude animates + syncs](/images/guides/shadow-puppet-reels-with-claude-telugu-voice-sync/cover.svg)

Comment keyword: **PUPPET** · Topic: AI Tools · Last checked: 2026-11-15

## What you need

- **Claude (any plan)** — Turn on Settings → Capabilities → Code execution and file creation. It is available on Free, Pro and Max, on web, desktop and mobile. Long renders use a lot of your plan's usage.
- **A voice** — Record your own voice on your phone (free), or use a text-to-speech tool. ElevenLabs' free plan is non-commercial only and needs attribution; paid plans include a commercial license.
- **Instagram / YouTube** — To post the finished MP4 as a reel or short.

## Step by step

### Step 1: Write the story script

Ask for time blocks with a picture and a voiceover line each. The first 3 seconds must hook, the last line is your call-to-action. About 75 words fits 30 seconds.

![Write the story script — Write a powerful 40-second story script for an Instagram reel in Telugu → Script](/images/guides/shadow-puppet-reels-with-claude-telugu-voice-sync/step-1.svg)

**Prompt · step 1**

```text
Write a powerful {len}-second story script for an Instagram reel in {lang}.
Story: {story}

Format: 5 time blocks (for example 0-4s, 4-11s, 11-17s, 17-23s, 23-{len}s). For each block give:
- VISUAL: what we see (simple, puppet-friendly actions)
- VOICEOVER: one {lang} line

Rules:
- Open with a hook question or a surprising result in the first 3 seconds.
- Total voiceover about 75 words for 30 seconds (scale for other lengths).
- End with: {cta}
- Treat myths and legends as stories, not facts.
```

### Step 2: Get the voiceover text only

A clean version you can paste straight into a voice tool or read aloud.

![Get the voiceover text only — Give me only the Telugu voiceover text. No scene notes, no timings, no emojis → voiceover.txt](/images/guides/shadow-puppet-reels-with-claude-telugu-voice-sync/step-2.svg)

**Prompt · step 2**

```text
Give me only the {lang} voiceover text for audio making. No scene notes, no timings, no emojis. One sentence per line.
```

### Step 3: Record the voice

Record yourself on your phone in a quiet room, or paste the text into a text-to-speech tool and download the MP3. Leave a short pause (about half a second) between lines — Claude uses those pauses later to sync the pictures to your words.

![Record the voice — Two ways → voice.mp3](/images/guides/shadow-puppet-reels-with-claude-telugu-voice-sync/step-3.svg)

### Step 4: Pick a style

Shadow puppet is the default. To change the look and keep the same story, copy one of these lines into "Animation style" in Your details above.

![Pick a style — Animation style → Same story](/images/guides/shadow-puppet-reels-with-claude-telugu-voice-sync/step-4.svg)

**Prompt · step 4**

```text
Pick ONE style and paste its description into "Animation style" in Your details:

1. Shadow puppet: black silhouettes with small punched-hole patterns held by thin visible rods, slight puppet jerkiness, a warm amber cloth screen lit from behind with cloth texture, flicker and vignette
2. Paper-cut layers: cut paper in flat colours stacked in 4-5 depth layers with soft drop shadows, paper grain and slight parallax
3. Kalamkari folk art: flat earthy colours (madder red, indigo, mustard, black), bold black outlines, floral borders top and bottom, like a painted scroll coming alive
4. Warli tribal: white triangle-and-circle stick figures on terracotta brown, simple geometric shapes, bouncy rhythmic loops
5. Watercolour wash: soft bleeding colours, visible paper texture, light pencil sketch under the paint, wet-paint wipe transitions
6. Ink brush: black ink brush strokes on cream rice paper, splashes for motion, one red accent colour, strokes draw themselves on
7. Neon line glow: single glowing lines (cyan, pink, gold) on deep navy, light trails, soft bloom glow, lines draw on
8. Pixel art: retro pixel art on a 270x480 grid scaled up 4x with no smoothing, 16-colour palette, 4-frame sprite animation
9. Low-poly 3D look: flat-shaded triangle shapes with warm/cool directional lighting, slow camera-like pans, depth fog
10. Rangoli motion: everything formed from coloured dots and kolam lines that draw themselves, mandala blooms on a dark floor
```

### Step 5: Build the animation

Claude writes the animation as code, checks preview stills, fixes problems and sends a silent MP4. Rendering takes a few minutes.

![Build the animation — Make a 40-second vertical video of this script. 1080×1920, 30 fps, no audio yet → phone showing SHADOW PUPPETS](/images/guides/shadow-puppet-reels-with-claude-telugu-voice-sync/step-5.svg)

**Prompt · step 5**

```text
Make a {len}-second vertical video of this script.
Specs: 1080x1920, 30 fps, MP4, no audio yet.
Style: {style}.

For every scene in the script:
- Build the characters and set from simple shapes so they stay identical in every frame.
- Add a big on-screen title for the key moments.
- Put the voiceover lines as {lang} captions in the lower part of the frame, but not in the bottom 300 px or top 150 px (Instagram buttons cover those).
- Use a proper {lang} font so letters join correctly (for Telugu: Ramabhadra or Noto Sans Telugu).

First show me one preview still of each scene. Fix anything that looks wrong, then render and send the MP4.
```

### Step 6: Review and fix

Watch the video and say what you see in plain words, not how to fix it in code. Send all your changes in one message so Claude re-renders only once.

![Review and fix — Say what you see → video-v2.mp4](/images/guides/shadow-puppet-reels-with-claude-telugu-voice-sync/step-6.svg)

**Prompt · step 6**

```text
Watch the video and fix only these, keep everything else the same:
1. [what looks wrong + which scene, e.g. the mouse is too small in scene 2]
2. [another fix]
3. [another fix]
Then re-render and send the new MP4.
```

### Step 7: Sync with your voice

Attach your MP3 in the same chat. Claude finds the pauses, matches each phrase to a script line, retimes the scenes and captions, and adds the audio.

![Sync with your voice — Your MP3 → Synced to your voice](/images/guides/shadow-puppet-reels-with-claude-telugu-voice-sync/step-7.svg)

**Prompt · step 7**

```text
Here is my voiceover audio for this video. Find the pauses, match each phrase to the script lines, retime the scenes and captions so every visual lands on its words, add the audio, and send the final MP4. Make the video as long as the audio plus half a second, and fade the audio out at the end.
```

## Limits, straight talk

- This is code-drawn animation, not AI video: simple flat or silhouette characters look great, realistic people do not.
- Turn on Code execution and file creation in Claude's settings first, or Claude can't render the video.
- Each full render and fix round uses your Claude plan's usage. Batch your fixes into one message.
- ElevenLabs' free plan is for non-commercial use with attribution only. For a monetised or business account, use your own voice or a paid voice plan.
- Stay in the same chat for edits. A new chat starts from zero and has to rebuild the animation.
- Present myths and festival legends as stories, and invent your own characters rather than copying famous ones.

## Useful links

- [Claude: create and edit files](https://support.claude.com/en/articles/12111783-create-and-edit-files-with-claude)
- [ElevenLabs: publishing & licences](https://help.elevenlabs.io/hc/en-us/articles/13313564601361)
- [Noto Sans Telugu font](https://fonts.google.com/noto/specimen/Noto+Sans+Telugu)
- [Ramabhadra font](https://fonts.google.com/specimen/Ramabhadra)

## Questions people ask

### Do I need Claude Code?

No. It works in a normal Claude chat with code execution and file creation turned on — even on the free plan.

### Can captions be in Telugu?

Yes — that's the main idea of this guide. Your own Telugu voice syncs line by line.

### Can I use other styles?

Yes — the same steps work in 10 other styles.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/shadow-puppet-reels-with-claude-telugu-voice-sync/). Republished with permission.*
