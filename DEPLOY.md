# Cloudflare Pages — Setup Checklist

## 1. Environment variables (Production)

Cloudflare Dashboard → your Pages project → **Settings** → **Environment variables**

| Variable | Example | When |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://integrated-neuro.pages.dev` | **Now** — redeploy after setting |
| `NEXT_PUBLIC_CF_BEACON_TOKEN` | (from Cloudflare Web Analytics) | Optional |
| `NEXT_PUBLIC_FORMSPREE_ENDPOINT` | `https://formspree.io/f/xxxxx` | When contact form needed |

After adding or changing any variable → **Deployments** → **Retry deployment**.

---

## 2. Cloudflare Web Analytics (free)

1. Cloudflare Dashboard → **Analytics & Logs** → **Web Analytics**
2. **Add a site** → enter your `*.pages.dev` URL
3. Copy the **beacon token**
4. Add as `NEXT_PUBLIC_CF_BEACON_TOKEN` in Pages env vars
5. Redeploy

---

## 3. Contact form (Formspree, free tier)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form → set notification email to `info@integratedneuro.ca`
3. Copy the form endpoint URL
4. Add as `NEXT_PUBLIC_FORMSPREE_ENDPOINT` in Cloudflare env vars
5. Redeploy
6. Test at `/contact/` — submit should redirect to `/thank-you/`

Until Formspree is configured, the contact page shows phone and email instead.

---

## 4. Content still needed from clinic

- [ ] Real headshots for Sonia and Jennifer → replace `public/images/sonia.svg` and `jennifer.svg`
- [ ] Review bios in `content/team.ts`
- [ ] Logo file (optional) → can replace `app/icon.svg`

---

## 5. Later (custom domain)

- Attach `integratedneuro.ca` in Pages → **Custom domains**
- Update `NEXT_PUBLIC_SITE_URL` to `https://integratedneuro.ca`
- Redirect `in-sightwellness.ca` (see `PLAN.md` Phase 5)