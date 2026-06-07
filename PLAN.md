# Plan: Integrated Neuro Website (Next.js + Cloudflare Pages)

## Current status

| Item | Status |
|---|---|
| **GitHub repo** | [github.com/Parva9eh/integrated-neuro](https://github.com/Parva9eh/integrated-neuro) |
| **Branch** | `main` |
| **Hosting** | Cloudflare Pages (free `*.pages.dev` URL) — live ✅ |
| **CI/CD** | `git push` → auto-deploy verified ✅ |
| **Custom domain** | Deferred (`integratedneuro.ca` later) |
| **Legacy redirects** | Deferred (`in-sightwellness.ca` later) |

---

## 1. Project goals

Build a new **public brochure site** for the clinic that:

- Replaces both [integratedneuro.ca](https://integratedneuro.ca/) and [in-sightwellness.ca](https://in-sightwellness.ca/)
- Uses **Next.js static export** hosted on **Cloudflare Pages** (free tier)
- Presents **one practice, two service lines** (Neurological care + Counselling/IN-Sight)
- Shows **only 2 staff**: Dr. Sonia Packwood and Jennifer Allen
- **No group photos**
- Links booking to **Jane App** (no custom booking system)
- Uses a simple contact form (no patient health data)
- Redirects the old IN-Sight domain and retires both WordPress installs after launch

---

## 2. Technical stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 16** (App Router) | Modern, familiar, good component model |
| Output mode | **`output: 'export'`** | Pure static HTML — no Node server in production |
| Language | **TypeScript** | Safer content and components |
| Styling | **Tailwind CSS** | Fast, consistent, easy to maintain |
| Fonts | **next/font** (Source Sans 3 + Source Serif 4) | No external font requests |
| Images | **next/image** with `unoptimized: true` | Required for static export |
| Forms | **Formspree** (via `NEXT_PUBLIC_FORMSPREE_ENDPOINT`) | No backend to maintain |
| Analytics | **Cloudflare Web Analytics** | Free, privacy-friendly |
| Booking | External link → `integratedneuro.janeapp.com` | Already in use |
| DNS / CDN | **Cloudflare** | Free tier, DDoS protection, SSL |
| CI/CD | **Git push → Cloudflare Pages auto-deploy** | Free, simple |

**Out of scope (for now):** WordPress, CMS, database, auth, patient portal, Jane App embed, group photos, custom domain.

---

## 3. Information architecture

```
/                              Home
/about                         Our integrated approach
/services/neuropsychology      Neuropsychology assessments
/services/counselling          IN-Sight counselling + ICBC/FNHA
/fees                          Fees, insurance, ICBC, FNHA
/team                          Sonia + Jennifer only
/resources                     Trimmed external links
/book                          CTA page → Jane App
/contact                       Form + address + phone
/privacy-policy                Privacy policy
```

---

## 4. Implementation phases

### Phase 0 — Prep (clinic)
- [ ] Confirm final service list (drop OT unless actively offered)
- [ ] Provide 2 individual headshots (Sonia, Jennifer) — placeholders in `public/images/`
- [ ] Approve bios for Sonia and Jennifer (`content/team.ts`)
- [x] Confirm Jane App booking URLs per provider
- [ ] Gather logo files
- [ ] Access: domain registrar, Cloudflare, old WordPress (for later migration)

### Phase 1 — Scaffold & design system ✅
- [x] Initialize Next.js + TypeScript + Tailwind
- [x] Configure `output: 'export'`
- [x] Set up root layout, fonts, color tokens
- [x] Build Header, Footer, MobileNav, CTAButton
- [x] Add all route pages

### Phase 2 — Core pages ✅
- [x] Home (two-pathway layout)
- [x] About
- [x] Neuropsychology + Counselling service pages
- [x] Fees
- [x] Team (2 members only)
- [x] Book + Contact
- [x] Resources + Privacy Policy

### Phase 3 — Forms, SEO, polish
- [ ] Wire contact form (set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in Cloudflare)
- [x] Meta titles/descriptions per page (`lib/metadata.ts`)
- [x] Open Graph tags per page
- [ ] Replace favicon with clinic branding
- [ ] Cloudflare Web Analytics
- [ ] Accessibility pass
- [ ] Replace placeholder headshots

### Phase 4 — Cloudflare deployment (free `*.pages.dev`)

#### 4a. Initial deploy ✅
- [x] Push repo to GitHub (`Parva9eh/integrated-neuro`)
- [x] Connect Cloudflare Pages to GitHub
- [x] Set build command: `npm run build`
- [x] Confirm build output directory: `out`
- [x] Confirm Node.js version: `20`
- [x] First production deployment succeeds
- [x] Live on `*.pages.dev`
- [ ] Set `NEXT_PUBLIC_SITE_URL` env var to `*.pages.dev` URL
- [ ] Redeploy after env var is set
- [ ] Smoke-test all pages on live URL

#### 4b. Custom domain — deferred
- [ ] Point DNS for `integratedneuro.ca` to Cloudflare
- [ ] Attach custom domain in Cloudflare Pages
- [ ] Update `NEXT_PUBLIC_SITE_URL` to `https://integratedneuro.ca`
- [ ] Redeploy

### Phase 5 — Migration & decommission — deferred
- [ ] 301 redirects from `in-sightwellness.ca` (rules ready in `public/_redirects`)
- [ ] 301 redirects for old Integrated Neuro URLs (rules ready in `public/_redirects`)
- [ ] Update Google Business Profile, Jane App links
- [ ] Cancel old WordPress hosting after 30 days

---

## 5. Environment variables

Set in Cloudflare Pages → **Settings** → **Environment variables** (Production):

| Variable | Value | Required |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://<project>.pages.dev` (then custom domain later) | Yes, after first deploy |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | `https://formspree.io/f/your-id` | When contact form needed |

> `NEXT_PUBLIC_*` variables are baked in at build time — redeploy after changing them.

---

## 6. Cloudflare Pages settings

| Setting | Value |
|---|---|
| Framework preset | Next.js (or None) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | `/` |
| Node version | `20` (also set in `.nvmrc`) |

### Deploy workflow

```
git push origin main  →  Cloudflare builds  →  static files in out/  →  live on *.pages.dev
```

### Already in repo (deploy automatically)

- `public/_headers` — security headers
- `public/_redirects` — legacy URL redirects (active once custom domain is attached)
- `.nvmrc` — Node 20

---

## 7. Redirect map (for Phase 5)

| Old URL | New URL |
|---|---|
| `/integrated-approach/` | `/about/` |
| `/neuropsychology/` | `/services/neuropsychology/` |
| `/psychotherapy/` | `/services/counselling/` |
| `/counselling/` (IN-Sight) | `/services/counselling/` |
| `/fees/` | `/fees/` |
| `/our-team/` | `/team/` |
| `/contact-us/` | `/contact/` |
| `/resources/` | `/resources/` |
| Broken pages (OT, careers) | `/` |

---

## 8. Cost estimate

| Item | Cost |
|---|---|
| Cloudflare Pages | $0/month |
| GitHub (public repo) | $0/month |
| `*.pages.dev` subdomain | $0/month |
| Domain (`integratedneuro.ca`) | ~$15/year (when attached) |
| Formspree (optional) | $0–10/month |
| **Total ongoing (current)** | **$0/month** |

---

## 9. Launch checklist

### Now (free `*.pages.dev` preview)
- [x] First Cloudflare deployment succeeds
- [ ] `NEXT_PUBLIC_SITE_URL` set and redeployed
- [ ] All pages load on `*.pages.dev`
- [ ] Jane App links open correctly
- [ ] Mobile layout looks correct

### Before public launch (custom domain)
- [ ] All pages reviewed by Sonia/Jennifer
- [ ] Phone, email, address correct
- [ ] Contact form delivers to correct inbox
- [ ] No group photos; only 2 team members
- [ ] Real headshots replace placeholders
- [ ] Privacy policy reviewed
- [ ] Custom domain + SSL active
- [ ] Old site redirects live