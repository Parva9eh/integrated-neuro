import { siteConfig } from "@/lib/site";

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

const isConfigured =
  FORMSPREE_ENDPOINT.length > 0 &&
  !FORMSPREE_ENDPOINT.includes("placeholder");

export function ContactForm() {
  const thankYouUrl = `${siteConfig.url.replace(/\/$/, "")}/thank-you/`;

  if (!isConfigured) {
    return (
      <div className="space-y-5 rounded-2xl border border-border bg-card p-8 shadow-sm">
        <p className="text-sm text-muted">
          Please do not include medical or health information when contacting
          us. For urgent concerns, call{" "}
          <a href={siteConfig.contact.phoneHref} className="font-medium text-primary">
            {siteConfig.contact.phone}
          </a>
          .
        </p>
        <p className="rounded-lg bg-accent-light/60 p-4 text-sm text-foreground">
          Online form coming soon. Please reach us by phone or email:
        </p>
        <ul className="space-y-2 text-sm">
          <li>
            <a
              href={siteConfig.contact.phoneHref}
              className="font-medium text-primary hover:underline"
            >
              {siteConfig.contact.phone}
            </a>
          </li>
          <li>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="font-medium text-primary hover:underline"
            >
              {siteConfig.contact.email}
            </a>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <form
      action={FORMSPREE_ENDPOINT}
      method="POST"
      className="space-y-5 rounded-2xl border border-border bg-card p-8 shadow-sm"
    >
      <p className="text-sm text-muted">
        Please do not include medical or health information in this form. For
        urgent concerns, call{" "}
        <a href={siteConfig.contact.phoneHref} className="font-medium text-primary">
          {siteConfig.contact.phone}
        </a>
        .
      </p>

      <input type="hidden" name="_subject" value="Integrated Neuro — website inquiry" />
      <input type="hidden" name="_next" value={thankYouUrl} />

      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Name <span className="text-primary" aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-1 w-full rounded-lg border border-border px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium">
          Phone <span className="text-primary" aria-hidden="true">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className="mt-1 w-full rounded-lg border border-border px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email <span className="text-primary" aria-hidden="true">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1 w-full rounded-lg border border-border px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium">
          How can we help you?
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-1 w-full rounded-lg border border-border px-4 py-2.5 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <input
        type="text"
        name="_gotcha"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <button
        type="submit"
        className="w-full rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
      >
        Send Message
      </button>
    </form>
  );
}