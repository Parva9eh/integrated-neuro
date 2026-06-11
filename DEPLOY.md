# Cloudflare Pages — Setup Checklist

## 1. Environment variables (Production)

Cloudflare Dashboard → your Pages project → **Settings** → **Environment variables**

| Variable | Example | When |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://integrated-neuro.pages.dev` | **Now** — redeploy after setting |
| `NEXT_PUBLIC_CF_BEACON_TOKEN` | (from Cloudflare Web Analytics) | Optional |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | `https://formspree.io/f/xxxxx` | When contact form needed |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | (from Cloudflare Turnstile) | With contact form — spam protection |

After adding or changing any variable → **Deployments** → **Retry deployment**.

---

## 2. Cloudflare Web Analytics (free)

1. Cloudflare Dashboard → **Analytics & Logs** → **Web Analytics**
2. **Add a site** → enter your `*.pages.dev` URL
3. Copy the **beacon token**
4. Add as `NEXT_PUBLIC_CF_BEACON_TOKEN` in Pages env vars
5. Redeploy

---

## 3. Contact form (Formspree + Turnstile, free)

**Formspree** delivers submissions to email; **Cloudflare Turnstile** blocks bots (no paid CAPTCHA).

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form → set notification email to `info@integratedneuro.ca`
3. Copy the form endpoint URL → `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
4. Cloudflare Dashboard → **Turnstile** → **Add widget**
   - Domains: your `*.pages.dev` URL, `integratedneuro.ca`, and `localhost` for testing
   - Widget mode: **Managed** (invisible challenge for most users)
5. Copy the **Site Key** → `NEXT_PUBLIC_TURNSTILE_SITE_KEY` in Pages env vars
6. Copy the **Secret Key** → Formspree form **Settings** → **CAPTCHA** → **Cloudflare Turnstile**
7. Formspree → open your **Project** (not a single form) → **Settings** tab → **Restrict to Domain** → enter hostname only, e.g. `integrated-neuro.pages.dev` (no `https://`)
8. Redeploy and test at `/contact/` → should redirect to `/thank-you/`

Until Formspree is configured, the contact page shows phone only.

**Spam layers:** honeypot field, Turnstile verification, Formspree server-side checks, domain restriction.

---

## 4. Content still needed from clinic

- [ ] Real headshots for Sonia and Jennifer → add `sonia.jpg` and `jennifer.jpg` (fallback: `headshot.svg`)
- [ ] Review bios in `content/team.ts`
- [ ] Logo file (optional) → can replace `app/icon.svg`

---

## 5. Later (custom domain)

- Attach `integratedneuro.ca` in Pages → **Custom domains**
- Update `NEXT_PUBLIC_SITE_URL` to `https://integratedneuro.ca`
- Redirect `in-sightwellness.ca` (see `PLAN.md` Phase 5)