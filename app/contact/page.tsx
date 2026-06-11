import { ContactForm } from "@/components/ContactForm";
import { MapEmbed } from "@/components/MapEmbed";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SectionImage } from "@/components/SectionImage";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Contact",
  description: `Contact Integrated Neuro in Vancouver. ${siteConfig.contact.address}, ${siteConfig.contact.city}. Phone ${siteConfig.contact.phone}.`,
  path: "/contact/",
});

const infoCardClass =
  "min-w-0 rounded-2xl border border-border bg-card p-5 card-elevated sm:p-6 lg:p-8";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Contact Us"
        subtitle="Request an appointment or ask a question — call us or use the form below."
      />

      <Section lead>
        <SectionImage
          src={siteConfig.sectionImages.contact}
          alt="Integrated Neuro clinic and care team"
        />

        <div className="mt-6 grid min-w-0 gap-6 sm:mt-8 sm:gap-8 lg:mt-10 lg:grid-cols-2 lg:items-stretch lg:gap-10">
          <div className="flex min-w-0 flex-col gap-5 sm:gap-6 lg:h-full">
            <div className={infoCardClass}>
              <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-accent">
                Direct contact
              </h2>
              <ul className="mt-3 space-y-3 text-muted sm:mt-4">
                <li>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-muted/70">
                    Phone
                  </span>
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="text-base font-medium text-primary hover:underline sm:text-lg"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
              </ul>
            </div>

            <div className={`${infoCardClass} flex flex-col lg:flex-1`}>
              <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-accent">
                Visit us
              </h2>
              <address className="mt-3 space-y-1 not-italic text-sm leading-relaxed text-foreground sm:mt-4 sm:text-base">
                <p className="font-medium">{siteConfig.contact.address}</p>
                <p className="text-muted">{siteConfig.contact.city}</p>
              </address>

              <MapEmbed
                className="mt-5 sm:mt-6 lg:min-h-0 lg:flex-1"
                embedSrc={siteConfig.contact.mapsEmbed}
                mapsLink={siteConfig.contact.mapsLink}
                title={`Map showing Integrated Neuro at ${siteConfig.contact.address}, ${siteConfig.contact.city}`}
              />
            </div>
          </div>

          <ContactForm className="min-w-0 lg:h-full" />
        </div>
      </Section>
    </>
  );
}