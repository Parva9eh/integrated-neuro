# Plan: Integrated Neuro Website (Next.js + Cloudflare Pages)

## Current status

| Item | Status |
|---|---|
| **GitHub repo** | [github.com/Parva9eh/integrated-neuro](https://github.com/Parva9eh/integrated-neuro) |
| **Branch** | `main` |
| **Hosting** | Cloudflare Pages (free `*.pages.dev` URL) — live ✅ |
| **CI/CD** | `git push` → auto-deploy verified ✅ |
| **Routing** | `trailingSlash: true` — Cloudflare 404 fix applied ✅ |
| **Custom domain** | Deferred (`integratedneuro.ca` later) |
| **Legacy redirects** | Deferred (`in-sightwellness.ca` later) |

**Next action:** Complete Cloudflare env vars — see [DEPLOY.md](./DEPLOY.md)

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

| Layer | Choice |
|---|---|
| Framework | **Next.js 16** (App Router, static export) |
| Styling | **Tailwind CSS** |
| Hosting | **Cloudflare Pages** (free `*.pages.dev`) |
| Forms | **Formspree** (optional, env-driven) |
| Analytics | **Cloudflare Web Analytics** (optional, env-driven) |
| Booking | **Jane App** (external link) |

---

## 3. Information architecture

```
/                              Home
/about/                        Our integrated approach
/services/neuropsychology/     Neuropsychology assessments
/services/counselling/         IN-Sight counselling + ICBC/FNHA
/fees/                         Fees, insurance
/team/                         Sonia + Jennifer only
/resources/                    External links
/book/                         Jane App booking
/contact/                      Contact form
/thank-you/                    Form submission confirmation
/privacy-policy/               Privacy policy
```

---

## 4. Implementation phases

### Phase 0 — Prep (clinic) — needs your input
- [ ] Confirm final service list (drop OT unless actively offered)
- [ ] Provide 2 individual headshots (Sonia, Jennifer)
- [ ] Approve bios in `content/team.ts`
- [x] Confirm Jane App booking URLs
- [ ] Gather logo files (optional — placeholder favicon in `app/icon.svg`)

### Phase 1 — Scaffold & design system ✅

### Phase 2 — Core pages ✅

### Phase 3 — Forms, SEO, polish — in progress
- [x] Contact form with Formspree support + fallback (phone/email when not configured)
- [x] Thank-you page (`/thank-you/`)
- [x] Meta titles/descriptions + Open Graph + Twitter cards
- [x] `sitemap.xml` and `robots.txt`
- [x] Clinic favicon (`app/icon.svg`)
- [x] Skip-to-content link + mobile nav aria labels
- [x] Cloudflare Web Analytics component (needs env var)
- [ ] Set `NEXT_PUBLIC_SITE_URL` in Cloudflare → redeploy
- [ ] Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` → redeploy → test form
- [ ] Set `NEXT_PUBLIC_CF_BEACON_TOKEN` → redeploy
- [ ] Replace placeholder headshots
- [ ] Full accessibility review with clinic

### Phase 4 — Cloudflare deployment

#### 4a. Initial deploy ✅
- [x] GitHub + Cloudflare Pages connected
- [x] Build: `npm run build` → `out/`
- [x] Site live on `*.pages.dev`
- [x] All routes working (`trailingSlash` fix)
- [ ] Set `NEXT_PUBLIC_SITE_URL` env var
- [ ] Smoke-test all pages on live URL

#### 4b. Custom domain — deferred

### Phase 5 — Migration & decommission — deferred

---

## 5. Environment variables

See [DEPLOY.md](./DEPLOY.md) for step-by-step Cloudflare setup.

| Variable | Required now? |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | **Yes** — set to your `*.pages.dev` URL |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | When contact form needed |
| `NEXT_PUBLIC_CF_BEACON_TOKEN` | Optional |

---

## 6. Launch checklist

### Your action items now
1. Set `NEXT_PUBLIC_SITE_URL` in Cloudflare → redeploy
2. (Optional) Enable Formspree + set endpoint → redeploy → test `/contact/`
3. (Optional) Enable Cloudflare Web Analytics → set beacon token → redeploy
4. Review live site on mobile
5. Send preview URL to Sonia & Jennifer for content review

### Before public launch (custom domain)
- [ ] Real headshots
- [ ] Content approved by clinic
- [ ] Custom domain attached
- [ ] Old WordPress sites redirected