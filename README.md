# Cloud Security & DevSecOps Portfolio

A fast, dark-mode, terminal-editorial portfolio landing page for a Cloud Security & DevSecOps Engineer.

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS · Lucide React

## Sections

1. **Hero** – "Securing AI Systems & Cloud Infrastructure at Scale", core focus tags, CTAs.
2. **About / Introduction** – embedded recruiter intro video (placeholder until a video is set).
3. **Featured Projects** – AI Agent Security Proxy (flagship, embedded walkthrough), InfraGuard, Cloud Cost Intelligence (with Walkthrough link), AI Token Optimizer.
4. **Video Walkthrough** – dedicated YouTube deep-dive with architecture / threat-modeling chapters.
5. **Skills** – Cloud & Infrastructure, Languages & Scripting, Security & Compliance.
6. **Contact / Footer** – GitHub, LinkedIn, email.

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm start       # serve the production build
npm run lint
```

Requires Node.js 18.18+ (20+ recommended).

## Personalise it

All content lives in **`lib/site.ts`** — no need to touch components.

| Field | What to change |
| --- | --- |
| `site.headline` / `site.tagline` | Hero copy |
| `site.links` | GitHub, LinkedIn and email |
| `site.videos.intro` | Recruiter intro video (About section) |
| `site.videos.agentProxyQuick` | AI Agent Security Proxy quick walkthrough (flagship project card) |
| `site.videos.agentProxyDeepDive` | AI Agent Security Proxy deep dive (walkthrough section) |
| `projects[].repo` | "Source" button link for each project |
| `projects[].walkthroughUrl` | Optional "Walkthrough" button next to "Source" |

Video slots accept either a bare YouTube ID or any YouTube URL (`youtu.be/…`, `youtube.com/watch?v=…`, `/embed/…`, `/shorts/…`).
Leave a slot as `""` and it renders a **Coming soon** placeholder in the same 16:9 frame, so adding the video later doesn't change the layout.

## Project structure

```
app/
  layout.tsx        # fonts (Inter + JetBrains Mono), metadata
  page.tsx          # section composition
  globals.css       # Tailwind layers, grid background, reduced-motion
  not-found.tsx
components/
  Nav.tsx           # sticky nav + mobile menu (client)
  Hero.tsx          # headline, focus tags, CTAs, terminal card
  Intro.tsx         # About / recruiter intro video
  Projects.tsx      # project grid
  ProjectCard.tsx
  VideoSection.tsx  # walkthrough section
  YouTubeEmbed.tsx  # click-to-load YouTube facade (client)
  Skills.tsx
  Footer.tsx        # contact links
  SectionHeading.tsx
lib/
  site.ts           # all editable content
  youtube.ts        # YouTube URL/ID parser
tailwind.config.ts  # ink / fog / signal / cyan palette, mono + sans fonts
next.config.ts      # security headers, image domains
```

## Performance & security notes

- The page is fully statically prerendered (~110 kB first-load JS).
- The YouTube iframe is only loaded after the visitor clicks play (thumbnail facade), using the privacy-enhanced `youtube-nocookie.com` domain.
- Fonts are self-hosted via `next/font` with `display: swap`.
- `next.config.ts` sets security headers (HSTS, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`) and disables `X-Powered-By`.
- Respects `prefers-reduced-motion`.

## Deploy

Works out of the box on Vercel: import the repo and deploy. Any Node host running `npm run build && npm start` also works.
