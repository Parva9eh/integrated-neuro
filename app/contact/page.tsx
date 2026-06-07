import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Integrated Neuro in Vancouver. Suite 300, 1090 Homer Street. Phone 647-693-7520.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Contact Us"
        subtitle="We're ready to help. Reach out by phone, email, or the form below."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-10">
            <div className="rounded-2xl border border-border bg-card p-8 card-elevated">
              <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-accent">
                Visit us
              </h2>
              <address className="mt-4 space-y-1 not-italic text-base leading-relaxed text-foreground">
                <p className="font-medium">{siteConfig.contact.address}</p>
                <p className="text-muted">{siteConfig.contact.city}</p>
              </address>
            </div>

            <div className="rounded-2xl border border-border bg-card p-8 card-elevated">
              <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-accent">
                Direct contact
              </h2>
              <ul className="mt-4 space-y-3 text-muted">
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-muted/70">
                    Phone
                  </span>
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="text-lg font-medium text-primary hover:underline"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-muted/70">
                    Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="font-medium text-primary hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-muted/70">
                    Fax
                  </span>
                  <span>{siteConfig.contact.fax}</span>
                </li>
              </ul>
            </div>
          </div>

          <ContactForm />
        </div>
      </Section>
    </>
  );
}