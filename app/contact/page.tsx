import { ContactForm } from "@/components/ContactForm";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Integrated Neuro in Vancouver. Suite 300, 1090 Homer Street. Phone 647-693-7520.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We're ready to help. Reach out by phone, email, or the form below."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-primary">
              Visit us
            </h2>
            <address className="mt-4 space-y-1 not-italic leading-relaxed text-muted">
              <p>{siteConfig.contact.address}</p>
              <p>{siteConfig.contact.city}</p>
            </address>

            <h2 className="mt-10 font-serif text-2xl font-semibold text-primary">
              Get in touch
            </h2>
            <ul className="mt-4 space-y-2 text-muted">
              <li>
                Phone:{" "}
                <a
                  href={siteConfig.contact.phoneHref}
                  className="font-medium text-primary hover:underline"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>Fax: {siteConfig.contact.fax}</li>
              <li>
                Email:{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="font-medium text-primary hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          <ContactForm />
        </div>
      </Section>
    </>
  );
}