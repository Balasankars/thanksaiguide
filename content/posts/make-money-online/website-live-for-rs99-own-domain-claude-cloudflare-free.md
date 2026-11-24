---
title: "₹99 website — your own domain + Claude + free Cloudflare hosting"
slug: website-live-for-rs99-own-domain-claude-cloudflare-free
category: "Make Money Online"
description: "Buy a cheap domain (₹99–₹299 for the first year), let Claude build your website, and put it live on your own domain with Cloudflare Pag…"
date: 2026-11-15
updated: 2026-11-15
tags: ["Claude", "GoDaddy / BigRock", "GitHub", "Cloudflare Pages", "custom domain"]
author: "Sai Ramesh Ponugupati"
source: https://thanksai.blog/guides/website-live-for-rs99-own-domain-claude-cloudflare-free/
---
# ₹99 website — your own domain + Claude + free Cloudflare hosting

Buy a cheap domain (₹99–₹299 for the first year), let Claude build your website, and put it live on your own domain with Cloudflare Pages' free plan — no hosting bill. Two ways: through a private GitHub repo (the site updates every time you change a file) or by dragging your files straight into Cloudflare.

> **తెలుగులో సారాంశం**
>
> ₹99–₹299 కి cheap domain కొని, Claude తో website తయారు చేసి, Cloudflare Pages ఫ్రీ plan లో మీ సొంత domain మీద live చేయండి — hosting బిల్లు లేదు.

![₹99 website — your own domain + Claude + free Cloudflare hosting: Cheap domain, Claude builds it, Free Cloudflare hosting, Live on your domain](/images/guides/website-live-for-rs99-own-domain-claude-cloudflare-free/cover.svg)

Comment keyword: **Rs.99 website** · Topic: Make Money Online · Last checked: 2026-11-15

## What you need

- **Domain registrar** — GoDaddy, BigRock or any registrar. Endings like .xyz, .live, .shop, .blog, .me often have ₹99–₹299 first-year offers — but renewal is usually much higher. Check the renewal price before you pay.
- **Claude** — The free plan is enough for a simple website. Use claude.ai in your browser — no coding.
- **GitHub (optional)** — Free account. Private repositories are free. Needed only for the auto-update method.
- **Cloudflare account** — Free plan: unlimited bandwidth for static sites, free HTTPS, and your own domain.

## Step by step

### Step 1: Pick and buy a cheap domain

Search your name on GoDaddy or BigRock. Endings like .xyz, .live, .link, .shop, .me or .blog often show ₹99–₹299 for year 1. Before paying: look at the renewal price (shown at checkout), add 18% GST to your budget, and untick extras like email, website builder or SSL — Cloudflare gives you free HTTPS. Not sure what name to buy? Ask Claude first.

![Pick and buy a cheap domain — Suggest 15 short domain names, easy to say and spell → registrar · search: Is your name free?](/images/guides/website-live-for-rs99-own-domain-claude-cloudflare-free/step-1.svg)

**Prompt · step 1**

```text
I'm making a website called "{name}" about {topic}.
Suggest 15 short domain names that are easy to say and spell on a phone.
Rules: max 14 letters before the dot, no hyphens, no numbers, no confusing spellings.
For each name, suggest the best ending from .com, .in, .xyz, .live, .blog, .me, .shop and say in one line why it fits.
Then pick your top 3 and tell me what to type in the registrar's search box.
```

### Step 2: Ask Claude to build the website

Paste this in claude.ai. Claude makes the whole site as one index.html file. Open the preview and check it on your phone size.

![Ask Claude to build the website — Build a complete website. One single index.html file → preview · index.html: Your site name](/images/guides/website-live-for-rs99-own-domain-claude-cloudflare-free/step-2.svg)

**Prompt · step 2**

```text
Build a complete website for "{name}" — {topic}. It will live at {domain}.

Requirements:
- One single index.html file (HTML, CSS and JavaScript together). No frameworks, no build step.
- Mobile-first, fast, and good-looking on a phone. Style: {color}.
- Sections: {sections}.
- A sticky top bar with the name and a main button.
- A WhatsApp button that opens a chat with a ready message (use a wa.me link; I'll give my number).
- Proper page title, meta description and Open Graph tags for sharing on WhatsApp/Instagram, plus an SVG favicon.
- Use placeholder text where you don't know my details, and list at the end what I must replace.
```

### Step 3: Change it until it's final

Ask for changes in plain words, one message at a time. When you're happy, download index.html and put it in a new folder on your laptop (images go in the same folder). The file must be named exactly index.html.

![Change it until it's final — Ask in plain words → my-site/](/images/guides/website-live-for-rs99-own-domain-claude-cloudflare-free/step-3.svg)

**Prompt · step 3**

```text
Change these and keep everything else the same:
1. [what you want changed]
2. [what looks wrong on mobile]
3. [text or section to add]
Then give me the full final index.html again.
```

### Step 4: Put the files in a private GitHub repo

Skip this step if you want the shortcut (step 7). On github.com: New repository → name it → choose Private → Create. Click "uploading an existing file", drag in everything from your folder (index.html must be at the top level, not inside another folder) → Commit changes. Later, to update the site, upload the new index.html here the same way.

![Put the files in a private GitHub repo — github.com/new: New repository → Private repo](/images/guides/website-live-for-rs99-own-domain-claude-cloudflare-free/step-4.svg)

### Step 5: Connect GitHub to Cloudflare Pages

In Cloudflare: Workers & Pages → Create application → Pages → Import an existing Git repository. Sign in to GitHub and give access to only this one repo. Pick the repo → Framework preset: None → leave the build command empty (no build needed for one HTML file) → Save and Deploy. In a minute you get a free name.pages.dev link. From now on, every change you commit on GitHub goes live by itself.

![Connect GitHub to Cloudflare Pages — Cloudflare · Workers & Pages: Import a Git repository → my-site.pages.dev](/images/guides/website-live-for-rs99-own-domain-claude-cloudflare-free/step-5.svg)

### Step 6: Connect your own domain

In Cloudflare, add your domain (Add a domain → Free plan). Cloudflare shows 2 nameservers — copy them. At GoDaddy: My Products → your domain → DNS → Nameservers → Change → "I'll use my own nameservers" → paste both → Save (turn off DNSSEC there first if it's on). When Cloudflare shows the domain as Active (minutes to a few hours, sometimes up to a day), open your Pages project → Custom domains → Set up a custom domain → type {domain} → Activate. Add www.{domain} too. HTTPS turns on automatically.

![Connect your own domain — Cloudflare · Add a domain: 2 nameservers to copy → Then in Pages](/images/guides/website-live-for-rs99-own-domain-claude-cloudflare-free/step-6.svg)

### Step 7: Shortcut: skip GitHub

For a basic site you don't plan to edit often: Workers & Pages → Create application → Pages → Drag and drop your files → give the project a name → drop your folder (or a .zip) → Deploy. Then connect your domain exactly like step 6. To update later, open the project → Create new deployment → drop the new files. Note: a drag-and-drop project can't be switched to GitHub later — you'd make a new project and move the domain.

![Shortcut: skip GitHub — my-site/ → Cloudflare · Pages: Upload your folder → Live](/images/guides/website-live-for-rs99-own-domain-claude-cloudflare-free/step-7.svg)

## Limits, straight talk

- ₹99 is a first-year offer. Add 18% GST, and expect renewal to cost much more (often ₹1,000+ a year for .xyz, .live or .shop). Check the renewal price at checkout and decide how many years you want before you pay.
- The free Cloudflare Pages plan is for static websites: 500 deploys a month, up to 20,000 files and 25 MiB per file — plenty for a basic site. Logins, databases or payment forms need extra tools.
- Changing nameservers can take a few hours (sometimes up to a day). If you already use email on this domain, make sure those DNS records are copied into Cloudflare before you switch.
- Pick GitHub or drag-and-drop before you start: a drag-and-drop project can't be connected to GitHub later, and a GitHub project can't take drag-and-drop uploads.
- Anything inside your website files is public, even if the GitHub repo is private. Never put passwords or API keys in index.html.
- Free plans and offers change — check Cloudflare's and your registrar's current pages before you buy.

## Useful links

- [Cloudflare Pages — Git integration](https://developers.cloudflare.com/pages/get-started/git-integration/)
- [Cloudflare Pages — drag and drop upload](https://developers.cloudflare.com/pages/get-started/direct-upload/)
- [Cloudflare Pages — custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)
- [Change nameservers to Cloudflare](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/)
- [Cloudflare Pages free plan limits](https://developers.cloudflare.com/pages/platform/limits/)
- [Create a GitHub repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository)

## Questions people ask

### Is the domain really ₹99?

Only for the first year, plus 18% GST. Renewal usually costs much more — check the renewal price before you pay.

### Is hosting free forever?

Cloudflare Pages' free plan is generous for simple static sites. Logins, databases or payments need extra tools.

### GitHub or drag-and-drop?

Drag-and-drop is quickest. GitHub is better if you'll update the site often — every change goes live automatically.

---

*Originally published on [ThanksAI](https://thanksai.blog/guides/website-live-for-rs99-own-domain-claude-cloudflare-free/). Republished with permission.*
