---
title: "Any song → a motion-designed lyric video with Claude"
slug: any-song-motion-designed-lyric-video-claude-code-hyperframes
category: "AI Tools"
description: "Turn a song into a lyric video where every sung word appears exactly on time with bold motion typography — in Telugu, Hindi, English…"
date: 2026-11-13
updated: 2026-11-13
tags: ["lyric video", "HyperFrames", "Claude Code", "whisper-cpp", "Hindi lyrics", "motion design"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/any-song-motion-designed-lyric-video-claude-code-hyperframes/
---
# Any song → a motion-designed lyric video with Claude

Turn a song into a lyric video where every sung word appears exactly on time with bold motion typography — in Telugu, Hindi, English or mixed. Claude times every word, tests the sync with you, decides the visual direction, shows a 5-second proof, then renders.

> **తెలుగులో సారాంశం**
>
> పాటను bold motion typography తో lyric video గా మార్చండి — ప్రతి పదం పాడిన క్షణంలోనే తెరపై వస్తుంది; Telugu, Hindi, English లేదా mixed lyrics అన్నీ పనిచేస్తాయి.

![Any song → a motion-designed lyric video with Claude: Song + lyrics, Time every word, Creative direction, Lyric video](/images/guides/any-song-motion-designed-lyric-video-claude-code-hyperframes/cover.svg)

Comment keyword: **LYRICS** · Topic: AI Tools · Last checked: 2026-11-13

## What you need

- **Claude Code** — Paid plan.
- **Free tools** — Node 22+, ffmpeg, whisper-cpp, HyperFrames — Claude installs.
- **Song + lyrics** — song.mp3 and lyrics.txt. Only songs you have rights to post.

## Step by step

### Step 1: Setup

Put song.mp3 and lyrics.txt (the correct words, one line per sung line) in a new folder, open Claude Code there and paste the prompt. Claude installs the free tools and checks both files are found.

![Setup — your folder → setup](/images/guides/any-song-motion-designed-lyric-video-claude-code-hyperframes/step-1.svg)

**Prompt · step 1**

```text
Install Node 22+, ffmpeg, whisper-cpp and HyperFrames. Check {song} and lyrics.txt are in this folder.
```

### Step 2: Time every word

whisper-cpp listens to the song to find when each word is sung; the words themselves come from lyrics.txt, because speech recognition often mishears song lyrics — especially Telugu or mixed lyrics.

![Time every word — Two sources → word timings](/images/guides/any-song-motion-designed-lyric-video-claude-code-hyperframes/step-2.svg)

**Prompt · step 2**

```text
Use whisper-cpp and lyrics.txt to find the exact start and end time of every sung word in {song}. Lyrics.txt is the correct text — use it, not the transcription, for the words.
```

### Step 3: Sync test by ear

Before any design, Claude makes a plain black video where each word flashes white exactly when it's sung. Watch it with headphones and tell Claude which lines feel early or late (for example 'line 4 is 0.2 s late'). Fixing timing here saves you from re-rendering a finished design.

![Sync test by ear — phone showing WORD → You say](/images/guides/any-song-motion-designed-lyric-video-claude-code-hyperframes/step-3.svg)

**Prompt · step 3**

```text
Make a plain black video where each word flashes white exactly when sung, with the song as audio. I'll watch and tell you which lines are early or late.
```

### Step 4: Creative direction

Claude explains what the song is about and proposes a visual direction: fonts, colours, how words move and how the energy builds toward the chorus. Change anything you don't like before saying OK.

![Creative direction — Describe what this song is about and its mood. Propose a visual direction → direction](/images/guides/any-song-motion-designed-lyric-video-claude-code-hyperframes/step-4.svg)

**Prompt · step 4**

```text
Describe what this song is about and its mood ({mood}). Propose a visual direction: fonts, colours, how words move, how intensity builds. Wait for my OK.
```

### Step 5: 5-second proof

Claude builds only the best 5 seconds (usually the chorus) in that style. If you love it, go ahead; if not, change the direction now — it's quick at this stage.

![5-second proof — Whole song → proof.mp4](/images/guides/any-song-motion-designed-lyric-video-claude-code-hyperframes/step-5.svg)

**Prompt · step 5**

```text
Build only the best 5 seconds of the song in that direction and render it.
```

### Step 6: Full render

Claude builds the full lyric video and renders at 1080×1920. Watch once more for any word that's late before posting.

![Full render — After you like the proof → phone showing EVERY WORD on time](/images/guides/any-song-motion-designed-lyric-video-claude-code-hyperframes/step-6.svg)

**Prompt · step 6**

```text
Build the full lyric video and render at 1080x1920.
```

## Limits, straight talk

- Only use songs you have rights to post.

## Useful links

- [HyperFrames (HeyGen)](https://github.com/heygen-com/hyperframes)
- [Skeleton lyric video (row 3)](https://aanshai.vercel.app/skeleton)

## Questions people ask

### Can I use any film song?

Only songs you have the rights to post. Film and album songs are usually copyrighted — your video can be muted or removed.

### Does it work for Telugu lyrics?

Yes. Because the words come from your lyrics.txt, Telugu and mixed-language lyrics show correctly.

### Do I need a paid plan?

Yes, Claude Code needs a paid Claude plan. All the other tools are free.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/any-song-motion-designed-lyric-video-claude-code-hyperframes/). Republished with permission.*
