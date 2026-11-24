---
title: "LinkedIn on autopilot — in your own voice"
slug: linkedin-on-autopilot-voice-file-12-skills-typefully
category: "Social Media"
description: "Teach Claude how you write from your own past posts, use free LinkedIn writing skills, connect a scheduler, then plan, draft, review…"
date: 2026-11-13
updated: 2026-11-13
tags: ["LinkedIn", "Typefully", "voice.md", "Claude skills", "content planning"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/linkedin-on-autopilot-voice-file-12-skills-typefully/
---
# LinkedIn on autopilot — in your own voice

Teach Claude how you write from your own past posts, use free LinkedIn writing skills, connect a scheduler, then plan, draft, review and schedule a week of posts in about 20 minutes.

> **తెలుగులో సారాంశం**
>
> మీ పాత posts నుండి Claude మీ writing style నేర్చుకుని, వారానికి 5 LinkedIn posts plan, draft, schedule చేస్తుంది — సుమారు 20 నిమిషాల్లో.

![LinkedIn on autopilot — in your own voice: Your past posts, Map your voice, Plan the week, Schedule](/images/guides/linkedin-on-autopilot-voice-file-12-skills-typefully/cover.svg)

Comment keyword: **LINKEDIN** · Topic: Social Media · Last checked: 2026-11-13

## What you need

- **Claude** — Paid plan recommended (Projects + connectors).
- **Typefully** — Official Claude connector; free plan has limits.
- **Your past posts** — Copy them manually — safer than scraping.

## Step by step

### Step 1: Collect your posts

Copy your last 20 LinkedIn posts into one document by hand. It's safer than scraping and you only do it once.

![Collect your posts — Your last 20 posts](/images/guides/linkedin-on-autopilot-voice-file-12-skills-typefully/step-1.svg)

### Step 2: Map your voice

Claude studies your posts and writes voice.md: sentence length, favourite words, how you open and close, emojis and tone. Save it in a Claude Project so every chat remembers it.

![Map your voice — Study these 20 posts and write voice.md → voice.md](/images/guides/linkedin-on-autopilot-voice-file-12-skills-typefully/step-2.svg)

**Prompt · step 2**

```text
Study these 20 posts and write voice.md: sentence length, words I use often, how I open and close, emojis, formatting, tone. I'm a {role}.
```

### Step 3: Plan the week

Claude plans 5 posts for next week in 5 formats (story, how-to, opinion, list, carousel) with a hook for each. Swap any topic you don't like.

![Plan the week — Plan 5 LinkedIn posts for next week on my topics → Next week](/images/guides/linkedin-on-autopilot-voice-file-12-skills-typefully/step-3.svg)

**Prompt · step 3**

```text
Plan 5 LinkedIn posts for next week on {topics}: one story, one how-to, one opinion, one list, one carousel. Hook for each.
```

### Step 4: Draft in my voice

Claude drafts all 5 following voice.md. Read each one and change anything that doesn't sound like you — your edits make the next week even better.

![Draft in my voice — Draft all 5 following voice.md. Sound human — no buzzwords → draft · Monday](/images/guides/linkedin-on-autopilot-voice-file-12-skills-typefully/step-4.svg)

**Prompt · step 4**

```text
Draft all 5 following voice.md. Make them sound human, not AI — no buzzwords.
```

### Step 5: Schedule

Connect Typefully in Claude's connectors, review each draft once more, then ask Claude to schedule them Mon–Fri. The free Typefully plan has a post limit.

![Schedule — Schedule the approved posts in Typefully for Mon–Fri at 9 am → Scheduled](/images/guides/linkedin-on-autopilot-voice-file-12-skills-typefully/step-5.svg)

**Prompt · step 5**

```text
Schedule the approved posts in Typefully for Mon–Fri at 9 am.
```

## Limits, straight talk

- Typefully is now an official Claude connector and works on its free plan (limited posts).
- Skills pack is free/open source.
- Pulling posts with Apify or browser automation is scraping — safest to copy your own posts manually.

## Useful links

- [Typefully: official Claude connector](https://typefully.com/changelog/typefully-claude-connector)
- [linkedin-skills (GitHub)](https://github.com/sergebulaev/linkedin-skills)

## Questions people ask

### Is automating LinkedIn safe?

Scheduling through an official tool like Typefully is fine. Avoid scraping or bots that act like you on LinkedIn.

### Which Claude plan works?

A paid plan is best (Projects and connectors). On the free plan you can still draft posts.

### Can I post in Telugu?

Yes, if your audience reads Telugu — tell Claude the language when drafting.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/linkedin-on-autopilot-voice-file-12-skills-typefully/). Republished with permission.*
