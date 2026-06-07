# Plan: Integrated Neuro Website (Next.js + Cloudflare Pages)

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
| Framework | **Next.js 15** (App Router) | Modern, familiar, good component model |
| Output mode | **`output: 'export'`** | Pure static HTML — no Node server in production |
| Language | **TypeScript** | Safer content and components |
| Styling | **Tailwind CSS** | Fast, consistent, easy to maintain |
| Fonts | **next/font** | No external font requests, better performance |
| Images | **next/image** with static export rules | Optimized headshots |
| Forms | **Formspree** or **Cloudflare Forms** | No backend to maintain |
| Analytics | **Cloudflare Web Analytics** | Free, privacy-friendly |
| Booking | External link → `integratedneuro.janeapp.com` | Already in use |
| DNS / CDN | **Cloudflare** | Free tier, DDoS protection, SSL |
| CI/CD | **Git push → Cloudflare Pages auto-deploy** | Free, simple |

**Out of scope:** WordPress, CMS, database, auth, patient portal, Jane App embed, group photos.

---

## 3. Information architecture

```
integratedneuro.ca/
├── /                          Home
├── /about                     Our integrated approach
├── /services/neuropsychology
├── /services/counselling      (IN-Sight brand section)
├── /fees                      Fees, insurance, ICBC, FNHA
├── /team                      Sonia + Jennifer only
├── /resources                 Trimmed external links (optional v1)
├── /book                      CTA page → Jane App
├── /contact                   Form + address + phone
└── /privacy-policy
```

---

## 4. Implementation phases

### Phase 0 — Prep (clinic)
- [ ] Confirm final service list (drop OT unless actively offered)
- [ ] Provide 2 individual headshots (Sonia, Jennifer)
- [ ] Approve bios for Sonia and Jennifer
- [ ] Confirm Jane App booking URLs per provider
- [ ] Gather logo files
- [ ] Access: domain registrar, Cloudflare, old WordPress

### Phase 1 — Scaffold & design system
- [x] Initialize Next.js + TypeScript + Tailwind
- [x] Configure `output: 'export'`
- [x] Set up root layout, fonts, color tokens
- [x] Build Header, Footer, MobileNav, CTAButton
- [x] Add placeholder pages for all routes

### Phase 2 — Core pages
- [x] Home (two-pathway layout)
- [x] About
- [x] Neuropsychology + Counselling service pages
- [x] Fees
- [x] Team (2 members only)
- [x] Book + Contact

### Phase 3 — Forms, SEO, polish
- [ ] Wire contact form (Formspree or Cloudflare Forms)
- [ ] Meta titles/descriptions per page
- [ ] Open Graph tags + favicon
- [ ] Cloudflare Web Analytics
- [ ] Accessibility pass

### Phase 4 — Cloudflare deployment
- [ ] Point DNS for `integratedneuro.ca` to Cloudflare
- [ ] Create Cloudflare Pages project
- [ ] Build: `npm run build` → output `out`
- [ ] Attach custom domain + SSL

### Phase 5 — Migration & decommission
- [ ] 301 redirects from `in-sightwellness.ca`
- [ ] 301 redirects for old Integrated Neuro URLs
- [ ] Update Google Business Profile, Jane App links
- [ ] Cancel old WordPress hosting after 30 days

---

## 5. Redirect map

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

## 6. Cloudflare Pages settings

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Build output directory | `out` |
| Node version | 20+ |

---

## 7. Cost estimate

| Item | Cost |
|---|---|
| Cloudflare Pages | $0/month |
| Domain | ~$15/year |
| Formspree (optional) | $0–10/month |
| **Total ongoing** | **~$15–135/year** |

---

## 8. Launch checklist

- [ ] All pages reviewed by Sonia/Jennifer
- [ ] Phone, email, address correct
- [ ] Jane App links tested
- [ ] Contact form delivers to correct inbox
- [ ] No group photos; only 2 team members
- [ ] Privacy policy updated
- [ ] DNS + SSL active
- [ ] Old site redirects live