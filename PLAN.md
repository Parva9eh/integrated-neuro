# Plan: Integrated Neuro Website (Next.js + Cloudflare Pages)

## Current status

| Item | Status |
|---|---|
| **GitHub repo** | [github.com/Parva9eh/integrated-neuro](https://github.com/Parva9eh/integrated-neuro) |
| **Branch** | `main` |
| **Hosting** | Cloudflare Pages (free `*.pages.dev` URL) — live ✅ |
| **CI/CD** | `git push` → auto-deploy verified ✅ |
| **Routing** | `trailingSlash: true` — Cloudflare 404 fix applied ✅ |
| **Theme & branding** | Light theme, dual logos (Integrated Neuro + IN-Sight) ✅ |
| **Responsive layout** | Header dual logos, footer grid, mobile nav ✅ |
| **Contact form** | Formspree + Turnstile — configured and tested ✅ |
| **Analytics** | Cloudflare Web Analytics (production only; skipped on localhost) ✅ |
| **Custom domain** | Deferred (`integratedneuro.ca` later) |
| **Legacy redirects** | `/book/` → `/contact/` on Pages; `in-sightwellness.ca` later |

**Next action:** Content review with clinic (headshots, bios) — see Phase 0. Custom domain when ready.

---

## 1. Project goals

Build a new **public brochure site** for the clinic that:

- Replaces both [integratedneuro.ca](https://integratedneuro.ca/) and [in-sightwellness.ca](https://in-sightwellness.ca/)
- Uses **Next.js static export** hosted on **Cloudflare Pages** (free tier)
- Presents **one practice, two service lines** (Neurological care + Counselling/IN-Sight)
- Shows **only 2 staff**: Dr. Sonia Packwood and Jennifer Allen
- **No group photos**
- **Contact-first UX** — CTAs point to `/contact/` (Jane App booking removed)
- Uses a simple contact form (no patient health data)
- Redirects the old IN-Sight domain and retires both WordPress installs after launch

---

## 2. Technical stack

| Layer | Choice |
|---|---|
| Framework | **Next.js 16** (App Router, static export) |
| Styling | **Tailwind CSS** |
| Hosting | **Cloudflare Pages** (free `*.pages.dev`) |
| Forms | **Formspree** + **Cloudflare Turnstile** (env-driven) |
| Analytics | **Cloudflare Web Analytics** (production only, env-driven) |
| Booking | **Contact form / phone** (no Jane App) |

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
/contact/                      Contact form + clinic details
/thank-you/                    Form submission confirmation
/privacy-policy/               Privacy policy
```

**Redirects:** `/book/` → `/contact/` (301, `public/_redirects`)

---

## 4. Contact form — decision record

### Chosen approach (now): Formspree + Turnstile — **$0/month**

| Piece | Role |
|---|---|
| **Formspree** (free) | Receives POST, emails `info@integratedneuro.ca` |
| **Cloudflare Turnstile** (free) | Bot challenge before submit |
| **Honeypot** (`_gotcha`) | Catches naive bots; fake success if filled |
| **Field max lengths** | Limits payload abuse |
| **Restrict to Domain** | Formspree project setting — blocks foreign-origin spam |

**Spam layers (in order):** honeypot → Turnstile widget → Formspree CAPTCHA verify → domain restriction → Formspree server checks.

**Email behaviour today:**

| Field | Value |
|---|---|
| **From** | `Formspree <noreply@formspree.io>` — fixed on free plan |
| **Reply-To** | Visitor’s email (field named `email`) — **Reply works correctly** |
| **Subject** | `Integrated Neuro — website inquiry` (hidden `_subject`) |

**Acceptable for now:** sender looks generic, but replying goes straight to the visitor.

**Sender cannot be changed on Formspree free.** Custom `@integratedneuro.ca` sender requires **Formspree Business** + verified DNS domain, or switching to a self-hosted email path (below).

---

### Option comparison

#### A. Formspree + Turnstile — **current**

| | |
|---|---|
| **Monthly cost** | $0 |
| **Submissions** | 50/month (free) |
| **Sender** | `noreply@formspree.io` |
| **Spam** | Turnstile + honeypot + domain restrict |
| **Setup** | ~15 min (dashboard + env vars) |
| **Maintenance** | None |

#### B. Formspree Business + custom domain — **branded sender, easiest upgrade**

| | |
|---|---|
| **Monthly cost** | Paid (Business plan) |
| **Submissions** | Higher limits |
| **Sender** | e.g. `Integrated Neuro <info@integratedneuro.ca>` |
| **Setup** | Verify `integratedneuro.ca` DNS in Formspree → Project → sending domain |
| **When** | After custom domain is live and branded email matters |

Steps: Formspree [Account → Domains](https://formspree.io/account/domains) → add DNS records in Cloudflare → Project **Settings** → sending domain → optional **Templates** for from name.

#### C. Cloudflare Worker + Resend — **$0 at low volume, more work**

| | |
|---|---|
| **Monthly cost** | $0 for typical clinic volume |
| **Submissions** | Resend free: **3,000 emails/month**, **100/day** cap |
| **Worker** | Cloudflare free: **100,000 requests/day** |
| **Sender** | `info@integratedneuro.ca` (or similar) via Resend + DNS (SPF/DKIM) |
| **Spam** | You implement Turnstile server verify + rate limiting in Worker |
| **Setup** | ~1–2 hours + ongoing maintenance |
| **When** | Want branded sender without Formspree Business; comfortable owning backend code |

**Not free in every sense:** domain registration (~$10–15/year), engineering time, and you must add rate limiting so bots cannot burn the Resend quota.

#### D. Web3Forms (alternative form service)

| | |
|---|---|
| **Monthly cost** | $0 |
| **Submissions** | 250/month (free) |
| **Sender** | `notify@web3forms.com` (custom **from name** only on free, not custom address) |
| **Turnstile** | Paid tier on Web3Forms |
| **Verdict** | Not chosen — already invested in Formspree + Turnstile stack |

---

### Recommendation timeline

| Phase | Action |
|---|---|
| **Now** | Keep Formspree + Turnstile (working, $0, secure enough) |
| **Custom domain live** | Add hostname to Turnstile + Formspree **Restrict to Domain** |
| **Later (optional)** | Formspree Business **or** Worker + Resend if `@integratedneuro.ca` sender is required |

---

## 5. Environment variables

See [DEPLOY.md](./DEPLOY.md) for step-by-step Cloudflare setup.

| Variable | Production (Cloudflare) | `.env.local` (dev) |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | **Required** — `https://integrated-neuro.pages.dev` | Optional — `http://localhost:3000` for local preview |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | **Required** for live form | Only if testing form locally |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | **Required** with form | Only if testing Turnstile locally |
| `NEXT_PUBLIC_CF_BEACON_TOKEN` | Optional | Not needed — analytics skipped on localhost |

**Rules:**

- `NEXT_PUBLIC_*` values are **baked in at build time**. Cloudflare vars apply to production deploys after redeploy.
- **`.env.local` is not required for production.** Copy values there only to test the contact form on `npm run dev`.
- Turnstile **secret key** goes in **Formspree dashboard only** — never in frontend env vars.
- Resend API key (if Worker path later) would live in **Worker secrets** — never `NEXT_PUBLIC_*`.

---

## 6. Formspree dashboard notes

| Setting | Where to find it |
|---|---|
| **Notification email** | Form → Workflow → Email action, or Form Settings |
| **Turnstile secret** | Form → Settings → CAPTCHA → Cloudflare Turnstile |
| **Restrict to Domain** | **Project** (not individual form) → **Settings** tab → enter hostname only, e.g. `integrated-neuro.pages.dev` (no `https://`) |
| **Custom sender** | Business plan → Account → Domains → Project sending domain |

With **Restrict to Domain** enabled, `localhost` submissions may be rejected or marked spam — test on the deployed site.

Site sends `Referrer-Policy: strict-origin-when-cross-origin` (`public/_headers`) — compatible with Formspree domain checks.

---

## 7. Implementation phases

### Phase 0 — Prep (clinic) — needs your input
- [ ] Confirm final service list (drop OT unless actively offered)
- [ ] Provide 2 individual headshots (Sonia, Jennifer)
- [ ] Approve bios in `content/team.ts`
- [ ] Gather logo files (optional — placeholder favicon in `app/icon.svg`)

### Phase 1 — Scaffold & design system ✅

### Phase 2 — Core pages ✅

### Phase 3 — Forms, SEO, polish — mostly complete
- [x] Contact form with Formspree + Turnstile + honeypot
- [x] Thank-you page (`/thank-you/`)
- [x] Meta titles/descriptions + Open Graph + Twitter cards
- [x] `sitemap.xml` and `robots.txt`
- [x] Clinic favicon (`app/icon.svg`)
- [x] Skip-to-content link + mobile nav aria labels
- [x] Cloudflare Web Analytics (production-only guard)
- [x] Responsive header (dual logos) and footer grid
- [x] `NEXT_PUBLIC_SITE_URL` in Cloudflare
- [x] Formspree + Turnstile env vars in Cloudflare — form tested ✅
- [ ] `NEXT_PUBLIC_CF_BEACON_TOKEN` (optional)
- [ ] Replace placeholder headshots
- [ ] Full accessibility review with clinic

### Phase 4 — Cloudflare deployment

#### 4a. Initial deploy ✅
- [x] GitHub + Cloudflare Pages connected
- [x] Build: `npm run build` → `out/`
- [x] Site live on `*.pages.dev`
- [x] All routes working (`trailingSlash` fix)
- [x] Env vars configured; contact form live
- [ ] Smoke-test all pages on live URL (ongoing after changes)

#### 4b. Custom domain — deferred
- [ ] Attach `integratedneuro.ca` in Pages → Custom domains
- [ ] Update `NEXT_PUBLIC_SITE_URL` to `https://integratedneuro.ca`
- [ ] Update Turnstile allowed domains + Formspree **Restrict to Domain**
- [ ] Decide on branded email sender (Formspree Business vs Worker + Resend)

### Phase 5 — Migration & decommission — deferred
- [ ] Redirect `in-sightwellness.ca` → new site
- [ ] Retire WordPress installs after launch

---

## 8. Launch checklist

### Done
- [x] Site live on Cloudflare Pages
- [x] Contact form delivering to clinic email
- [x] Turnstile spam protection active
- [x] Responsive layout (header logos, footer)

### Your action items now
1. Review live site on mobile
2. Send preview URL to Sonia & Jennifer for content review
3. (Optional) Enable Cloudflare Web Analytics → set beacon token → redeploy
4. Provide real headshots when ready

### Before public launch (custom domain)
- [ ] Real headshots
- [ ] Content approved by clinic
- [ ] Custom domain attached
- [ ] Formspree/Turnstile domains updated for `integratedneuro.ca`
- [ ] Branded email sender decision (if required)
- [ ] Old WordPress sites redirected