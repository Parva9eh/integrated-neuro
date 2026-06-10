import { siteConfig } from "@/lib/site";

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

const isConfigured =
  FORMSPREE_ENDPOINT.length > 0 &&
  !FORMSPREE_ENDPOINT.includes("placeholder");

const inputClass =
  "mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/15";

export function ContactForm() {
  const thankYouUrl = `${siteConfig.url}/thank-you/`;

  if (!isConfigured) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 card-elevated">
        <h2 className="font-serif text-xl font-semibold text-primary">
          Get in touch
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Please do not include medical information when contacting us. For
          urgent concerns, call{" "}
          <a href={siteConfig.contact.phoneHref} className="font-semibold text-primary">
            {siteConfig.contact.phone}
          </a>
          .
        </p>
        <p className="mt-5 rounded-xl bg-accent-muted px-5 py-4 text-sm text-foreground">
          Online form coming soon. Please call us in the meantime.
        </p>
        <p className="mt-5 text-sm font-medium">
          <a href={siteConfig.contact.phoneHref} className="text-primary hover:underline">
            {siteConfig.contact.phone}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      action={FORMSPREE_ENDPOINT}
      method="POST"
      className="rounded-2xl border border-border bg-card p-8 card-elevated"
    >
      <h2 className="font-serif text-xl font-semibold text-primary">
        Send a message
      </h2>
      <p className="mt-3 text-sm text-muted">
        Please do not include medical or health information. For urgent concerns,
        call{" "}
        <a href={siteConfig.contact.phoneHref} className="font-semibold text-primary">
          {siteConfig.contact.phone}
        </a>
        .
      </p>

      <div className="mt-6 space-y-5">
        <input type="hidden" name="_subject" value="Integrated Neuro — website inquiry" />
        <input type="hidden" name="_next" value={thankYouUrl} />

        <div>
          <label htmlFor="name" className="block text-sm font-medium">
            Name <span className="text-accent" aria-hidden="true">*</span>
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium">
            Phone <span className="text-accent" aria-hidden="true">*</span>
          </label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium">
            Email <span className="text-accent" aria-hidden="true">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium">
            How can we help you?
          </label>
          <textarea id="message" name="message" rows={5} className={inputClass} />
        </div>

        <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

        <button
          type="submit"
          className="w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-md"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}