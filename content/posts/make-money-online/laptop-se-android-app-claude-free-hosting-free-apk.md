---
title: "Android app from your laptop — Claude + free hosting + free APK"
slug: laptop-se-android-app-claude-free-hosting-free-apk
category: "Make Money Online"
description: "Build a simple app for a local business (PG, clinic, tailor, tuition, pharmacy) with Claude, host it free, turn it into an Android…"
date: 2026-11-13
updated: 2026-11-13
tags: ["Claude", "PWA", "Android APK", "PWABuilder", "Cloudflare Pages", "local business"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/laptop-se-android-app-claude-free-hosting-free-apk/
---
# Android app from your laptop — Claude + free hosting + free APK

Build a simple app for a local business (PG, clinic, tailor, tuition, pharmacy) with Claude, host it free, turn it into an Android APK, show it on the owner's phone and charge for it. No coding skills — Claude writes everything.

> **తెలుగులో సారాంశం**
>
> Local business (PG, clinic, tailor, tuition) కోసం Claude తో simple app తయారు చేసి, ఫ్రీగా host చేసి, Android APK గా మార్చి, owner phone లో demo చూపించి charge చేయండి.

![Android app from your laptop — Claude + free hosting + free APK: Talk to the owner, Claude builds the app, Host it free, Android APK](/images/guides/laptop-se-android-app-claude-free-hosting-free-apk/cover.svg)

Comment keyword: **APP** · Topic: Make Money Online · Last checked: 2026-11-13

## What you need

- **Claude** — Free plan can work for a small app; a paid plan gives longer chats for bigger apps. Use claude.ai in your browser — no Claude Code needed.
- **Cloudflare account** — Free. Hosts your app at a yourname.pages.dev address.
- **PWABuilder** — Free Microsoft tool that turns your web app into an Android APK.
- **Android phone** — To install and demo the app.

## Step by step

### Step 1: Talk to the owner for 10 minutes

Before building, ask what they write in their notebook today. That notebook is your app. Write down the 3–5 things they track and the one reminder they forget most.

![Talk to the owner for 10 minutes — 10 minutes with the owner → their notebook = your app](/images/guides/laptop-se-android-app-claude-free-hosting-free-apk/step-1.svg)

### Step 2: Ask Claude to build the app

Paste this in claude.ai. Claude makes the whole app as one file. Open the preview, test it, and ask for changes in plain words.

![Ask Claude to build the app — Build a mobile-first web app for a PG. The owner needs to track rent → phone showing RENT TRACKER 12 tenants 3 due](/images/guides/laptop-se-android-app-claude-free-hosting-free-apk/step-2.svg)

**Prompt · step 2**

```text
Build a mobile-first web app for a {biz} called "{name}".

The owner needs to track: {track}.

Requirements:
- One single index.html file (HTML, CSS, JavaScript together), no frameworks, no login.
- Big buttons and text that are easy on a phone, colour theme: {color}. Language: {lang}.
- A home dashboard showing today's important numbers (for example: rent due this month, total collected).
- Add, edit and delete records with simple forms. Search by name.
- Each person's phone number opens WhatsApp with a ready reminder message using a wa.me link.
- Save all data in the browser (localStorage) and add a big "Backup" button that downloads all data as a JSON file and a "Restore" button that loads it back.
- Make it installable as an app: add a web app manifest and a simple service worker so it works offline, plus an app icon made with SVG.
- Add 5 sample records so I can demo it.
```

### Step 3: Test like the owner

Add a fake tenant, mark rent paid, send a WhatsApp reminder, take a backup, clear and restore. Fix anything confusing.

![Test like the owner — Test like the owner → I tested the app. Fix these and keep everything else the same](/images/guides/laptop-se-android-app-claude-free-hosting-free-apk/step-3.svg)

**Prompt · step 3**

```text
I tested the app. Fix these and keep everything else the same:
1. [what was confusing]
2. [what didn't work]
3. [what the owner asked to add]
Then give me the full updated index.html, manifest and service worker as separate files.
```

### Step 4: Host it free on Cloudflare Pages

Save the files in one folder on your laptop. In Cloudflare: Workers & Pages → Create → Pages → Upload assets → drag the folder in → Deploy. You get a link like name.pages.dev that opens on any phone.

![Host it free on Cloudflare Pages — app/ → Cloudflare · Pages: Upload assets → name.pages.dev](/images/guides/laptop-se-android-app-claude-free-hosting-free-apk/step-4.svg)

### Step 5: Turn it into an Android APK

Go to pwabuilder.com, paste your pages.dev link, fix any red items it shows (Claude can fix them — paste the message), then Package for Stores → Android → download. Install the APK on the owner's phone for the demo.

![Turn it into an Android APK — pwabuilder.com: Paste your link → app.apk](/images/guides/laptop-se-android-app-claude-free-hosting-free-apk/step-5.svg)

**Prompt · step 5**

```text
PWABuilder shows these issues for my app: [paste the messages]. Fix the manifest and service worker so they pass, and give me the updated files.
```

### Step 6: Demo and price it

Show it on the owner's phone with their real business name. Price for the time you save them — many people start with a one-time setup fee plus a small monthly fee for updates and backups.

![Demo and price it — Demo on their phone → Then price it](/images/guides/laptop-se-android-app-claude-free-hosting-free-apk/step-6.svg)

## Limits, straight talk

- Data lives only in that phone's browser — if Chrome data is cleared, it's gone. Make a weekly Backup a habit for the owner.
- There's no login or encryption, so don't store sensitive documents (ID cards, medical details) in this kind of app.
- Play Store: one-time US$25 developer fee, and new personal accounts must run a closed test with 12+ testers for 14 days before going public. Sharing the APK directly needs 'install unknown apps', which is fine for a demo but not ideal long term.
- Keep the signing key PWABuilder gives you safe — lose it and you can't update the app.
- Doing this for paying clients is commercial use — read Cloudflare's terms.

## Useful links

- [PWABuilder](https://www.pwabuilder.com/)
- [Cloudflare Pages docs](https://developers.cloudflare.com/pages/)
- [Google Play testing rules for new accounts](https://support.google.com/googleplay/android-developer/answer/14151465)
- [Cloudflare Pages limits](https://developers.cloudflare.com/pages/platform/limits/)

## Questions people ask

### Do I need coding skills?

No. Claude writes everything; you test it like the shop owner would.

### Where is the app's data stored?

Only in that phone's browser. If Chrome data is cleared, it's gone — set a weekly backup habit.

### Can I put it on the Play Store?

Yes, with a one-time US$25 developer fee and a 14-day closed test with 12+ testers for new personal accounts.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/laptop-se-android-app-claude-free-hosting-free-apk/). Republished with permission.*
