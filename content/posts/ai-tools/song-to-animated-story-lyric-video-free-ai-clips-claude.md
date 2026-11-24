---
title: "Any song → an animated story lyric video with free AI clips + Claude"
slug: song-to-animated-story-lyric-video-free-ai-clips-claude
category: "AI Tools"
description: "Turn a song into a short animated story: Claude plans one shot for every lyric line, a free AI image and video tool draws and animates…"
date: 2026-11-16
updated: 2026-11-16
tags: ["Claude Code", "Google Flow", "Meta AI", "HyperFrames", "whisper.cpp", "FFmpeg"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/song-to-animated-story-lyric-video-free-ai-clips-claude/
---
# Any song → an animated story lyric video with free AI clips + Claude

Turn a song into a short animated story: Claude plans one shot for every lyric line, a free AI image and video tool draws and animates each shot in one art style, and Claude edits the clips into a lyric video with every word on time.

> **తెలుగులో సారాంశం**
>
> పాటను చిన్న animated story గా మార్చండి — ప్రతి lyric line కి Claude ఒక shot plan చేస్తుంది, ఫ్రీ AI tools చిత్రించి animate చేస్తాయి, Claude పదం పదానికి sync చేసి edit చేస్తుంది.

![From a song to an animated story lyric video: your song, a shot list from Claude, AI-painted clips, and the finished lyric video on a phone](/images/guides/song-to-animated-story-lyric-video-free-ai-clips-claude/cover.svg)

Comment keyword: **STORY** · Topic: AI Tools · Last checked: 2026-11-16

## What you need

- **Claude Code** — Plans the story and edits the video. Needs a paid Claude plan and a laptop. Google Antigravity has a free plan and can run the same prompts.
- **Google Flow** — Nano Banana pictures and Veo clips. Free with a Google account: 50 credits a day, so plan a few clips per day.
- **Meta AI (Muse Image)** — Free pictures with daily limits, good at keeping a face the same. Its video option may not be open on every account yet.
- **Your song + lyrics** — song.mp3 and lyrics.txt. Only music you have the right to post.

## Step by step

### Step 1: Set up the video toolkit

Open an empty folder in Claude Code (Antigravity or Codex also work) and paste this once. The agent installs everything and tests it, so you don't type any commands yourself.

![A terminal showing five free tools installed with a pass mark, and the six project folders](/images/guides/song-to-animated-story-lyric-video-free-ai-clips-claude/step-1.svg)

**Prompt · step 1**

```text
Set up this folder as a lyric-video studio. Install and test, one by one: Node.js 22 or newer, FFmpeg, Python 3, whisper.cpp with a small multilingual model, and HyperFrames (it needs Chrome to render). After each install, run a tiny test and tell me pass or fail in one line. Then create these folders: song/, lyrics/, characters/, stills/, clips/, output/. Do not start any video work yet.
```

### Step 2: Turn the song into a story

Put your song file in song/ and the correct lyrics in lyrics/lyrics.txt. Claude writes a small story that fits the words, then a shot list with one row for every lyric line. This table is your plan for the whole video.

![lyrics.txt turning into a shot list table with one row for every lyric line](/images/guides/song-to-animated-story-lyric-video-free-ai-clips-claude/step-2.svg)

**Prompt · step 2**

```text
Read lyrics/lyrics.txt for {song}. My story idea: {story}. Art style: {style}. Main characters: {hero}.

1. Write the story in 5 lines: beginning, middle, turning point, ending, last image.
2. Make a shot list as a table in shots.md, one row per lyric line: shot number, the lyric line, what we see, camera (wide / medium / close), what moves, feeling.
3. For every shot write two prompts: an IMAGE prompt for a still picture in 9:16, and a MOTION prompt for an 8-second clip made from that still.
4. Every image prompt must repeat the art style in the same words and say 'use the attached character sheets exactly'.
5. Describe people only by look and clothes. Never use the name of a real singer, actor or celebrity.

Show me the story first and wait for my OK before writing the shot list.
```

### Step 3: Make the character sheets

Do this once, in Google Flow (Nano Banana) or Meta AI (Muse Image). You will attach these pictures to every shot, and that is what keeps the faces and clothes the same from start to end. Save them in characters/.

![A character sheet with front, side and back views and a face close-up, attached to every shot](/images/guides/song-to-animated-story-lyric-video-free-ai-clips-claude/step-3.svg)

**Prompt · step 3**

```text
Character sheet, {style}, drawn artwork and not a photo. Character: {hero}. Show the same character three times on a plain light background: front view, side view, back view, full body, same height, same clothes and same colours in all three. Add a small close-up of the face. No text, no logo.
```

### Step 4: Paint a still for every shot

Take the IMAGE prompts from shots.md one by one. In Flow, add the character sheets as ingredients. In Meta AI, attach them as reference pictures and keep the 'drawn, never photoreal' line, or it may slip into a realistic look. Save each picture as stills/shot-01.png, shot-02.png and so on.

![Three painted 9:16 stills in one style, and a frame with calm areas kept free for the lyrics](/images/guides/song-to-animated-story-lyric-video-free-ai-clips-claude/step-4.svg)

**Prompt · step 4**

```text
Vertical 9:16 illustration, {style}, drawn artwork, never photoreal. Use the attached character sheets exactly: same face, same clothes, same colours. Scene: [paste the 'what we see' line of this shot]. Camera: [wide / medium / close]. Keep the top quarter and the bottom quarter of the frame calm and uncluttered, because the lyrics will sit there. No text in the picture.
```

### Step 5: Animate each still into a clip

Use frames-to-video in Flow (Veo) with the still as the first frame, or the video option in Meta AI if your account has it. Ask for one small, clear movement per clip. Small movements keep the drawing style and break less often. Save as clips/shot-01.mp4 and so on.

![A still picture turning into an 8-second clip where only the ferris wheel moves](/images/guides/song-to-animated-story-lyric-video-free-ai-clips-claude/step-5.svg)

**Prompt · step 5**

```text
Animate this still for 8 seconds in the same {style} look. Only this moves: [paste the 'what moves' line of this shot]. Everything else stays still. Slow, gentle camera: [slow push-in / slow pan / no camera move]. Do not change the character's face or clothes. No new objects, no text, no music.
```

### Step 6: Let Claude edit the lyric video

Check that song/, lyrics/ and clips/ are filled, then go back to Claude Code and paste this. Claude listens to the vocals, places every word on time, and shows you a short preview before the full render.

![An edit timeline with the song, clips cut on the beat and words lighting up, next to the finished video on a phone](/images/guides/song-to-animated-story-lyric-video-free-ai-clips-claude/step-6.svg)

**Prompt · step 6**

```text
Make the lyric video for {song}.

1. Timing: use whisper.cpp on the song to find when each word is sung, but take the words themselves from lyrics/lyrics.txt (that file is the correct text). Save the word timings to timings.json.
2. Sync check: render a plain black 20-second test where each word appears exactly when it is sung. I will tell you which lines are early or late. Fix them before going on.
3. Edit: place clips/shot-NN.mp4 in the order of shots.md, one clip per lyric line. Cut on the beat or on the first sung word of the line. If a clip is shorter than its line, slow it a little instead of looping.
4. Lyrics on screen: one line at a time, each word lighting up as it is sung. Before placing text, look at the frame and keep words away from faces: use the top or bottom calm area.
5. Effects: choose one text effect per meaning and reuse it (for example a soft glow for love words, a shake for pain words). No random effects.
6. Build it with HyperFrames at 1080x1920, 30 fps. Render the first 15 seconds as output/preview.mp4 and wait for my OK, then render output/final.mp4.
```

## Limits, straight talk

- Songs from films and albums are copyrighted. A lyric video on someone else's song can be muted or claimed. Use your own song, royalty-free music, or add the song from Instagram's own music library.
- 'Free' has limits: Google Flow gives 50 credits a day without a subscription, so a full song takes several days of clips. Meta AI's free pictures also have daily limits.
- Meta's video model was only a preview when it was announced in July 2026. If your Meta AI account has no video option, make the clips in Google Flow.
- Google adds a visible AI mark to Flow videos for users in India, and an invisible one to all outputs. Keep the AI label on when you post.
- Do not type real singers', actors' or celebrities' names in image prompts. The tools block them, and it is not fair to the person.
- Try other looks by changing only the art style line: 2D anime split-screen, miniature painting panels, 90s TV cartoon.

## Useful links

- [Google Flow](https://labs.google/flow)
- [Google Flow help: AI watermarks](https://support.google.com/flow/answer/16353333?hl=en)
- [Google: Veo 3.1 Ingredients to Video](https://blog.google/innovation-and-ai/technology/ai/veo-3-1-ingredients-to-video/)
- [Meta: Introducing Muse Image](https://about.fb.com/news/2026/07/introducing-muse-image/)
- [HyperFrames (GitHub)](https://github.com/heygen-com/hyperframes)

## Questions people ask

### Is it fully free?

The image and video tools have free daily limits, so a full song takes a few days of clips. Claude Code needs a paid plan, or use Google Antigravity's free plan for the same prompts.

### Can I use a film song?

Only music you have the right to post. Otherwise use your own song, royalty-free music, or add the song from Instagram's music library.

### How do I keep the character the same in every shot?

Make the character sheets first (step 3) and attach them to every still you generate.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/song-to-animated-story-lyric-video-free-ai-clips-claude/). Republished with permission.*
