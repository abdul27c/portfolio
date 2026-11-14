# Cloud Security & DevSecOps Portfolio

A fast, dark-mode, terminal-editorial portfolio landing page for a Cloud Security & DevSecOps Engineer.

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS · Lucide React

## Sections

1. **Hero** – career-transition headline, core focus (Python, AWS, Terraform, Cloud Security, CI/CD, runtime security), CTAs.
2. **Featured Projects** – AI Agent Security Proxy (with embedded walkthrough), InfraGuard, Cloud Cost Intelligence, AI Token Optimizer.
3. **Video Walkthrough** – dedicated YouTube deep-dive with architecture / threat-modeling chapters.
4. **Skills** – Cloud & Infrastructure, Languages & Scripting, Security & Compliance.
5. **Contact / Footer** – GitHub, LinkedIn, email.

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
| `site.links.linkedin` | Your LinkedIn profile URL |
| `site.links.email` | Your professional email |
| `site.walkthroughVideoId` | The YouTube video ID (the part after `watch?v=`) |
| `projects[].repo` | Direct links to each project repository |

Until a real video ID is set, the video areas render a "coming soon" placeholder instead of a broken embed.

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
  Projects.tsx      # project grid
  ProjectCard.tsx
  VideoSection.tsx  # walkthrough section
  YouTubeEmbed.tsx  # click-to-load YouTube facade (client)
  Skills.tsx
  Footer.tsx        # contact links
  SectionHeading.tsx
lib/
  site.ts           # all editable content
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
