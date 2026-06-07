# Integrated Neuro Website

Public brochure site for Integrated Neuro — built with Next.js static export and deployed to Cloudflare Pages.

## Stack

- **Next.js** (App Router, static export)
- **TypeScript**
- **Tailwind CSS**
- **Cloudflare Pages** (hosting)

See [PLAN.md](./PLAN.md) for the full project plan.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Public URL (local dev, `*.pages.dev`, or custom domain later) |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | Contact form endpoint (optional for now) |

## Build

```bash
npm run build
```

Static files are output to `out/` — this is what Cloudflare Pages deploys.

## GitHub

```bash
git remote -v
git push -u origin main
```

## Deploy to Cloudflare Pages (free `*.pages.dev` URL)

1. Push this repo to GitHub
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → Connect to Git
3. Select this repository
4. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Node version:** 20
5. Environment variables (Production):
   - `NEXT_PUBLIC_SITE_URL` = your `https://<project>.pages.dev` URL (set after first deploy)
6. Deploy — Cloudflare assigns a free `*.pages.dev` subdomain

Custom domain (`integratedneuro.ca`) and legacy redirects can be added later.

## Project structure

```
app/           → Pages (routes)
components/    → Reusable UI components
content/       → Team data and copy
lib/           → Site config, metadata helpers
public/        → Static assets, _redirects, _headers
```

## Before production launch

- [ ] Replace placeholder headshots in `public/images/`
- [ ] Review team bios in `content/team.ts`
- [ ] Set Formspree endpoint
- [ ] Set `NEXT_PUBLIC_SITE_URL` to the live URL
- [ ] Review all pages with Sonia and Jennifer