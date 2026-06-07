# Integrated Neuro Website

Public brochure site for [Integrated Neuro](https://integratedneuro.ca) — built with Next.js static export and deployed to Cloudflare Pages.

## Stack

- **Next.js** (App Router, static export)
- **TypeScript**
- **Tailwind CSS**
- **Cloudflare Pages** (hosting)

See [PLAN.md](./PLAN.md) for the full project plan and migration checklist.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and set your Formspree endpoint:

```bash
cp .env.example .env.local
```

## Build

```bash
npm run build
```

Static files are output to `out/` — this is what Cloudflare Pages deploys.

## Deploy to Cloudflare Pages

1. Push this repo to GitHub/GitLab
2. In Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → Connect to Git
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node version:** 20
4. Add environment variable `NEXT_PUBLIC_FORMSPREE_ENDPOINT` (if using Formspree)
5. Attach custom domain `integratedneuro.ca`

## Project structure

```
app/           → Pages (routes)
components/    → Reusable UI components
content/       → Team data and copy
lib/           → Site config, metadata helpers
public/        → Static assets, _redirects, _headers
```

## Before launch

- [ ] Replace placeholder headshots in `public/images/`
- [ ] Review team bios in `content/team.ts`
- [ ] Set Formspree endpoint in Cloudflare env vars
- [ ] Configure `in-sightwellness.ca` redirects at DNS/Cloudflare level
- [ ] Review all pages with Sonia and Jennifer