import { Badge } from "@/components/Badge";
import { CTAButton } from "@/components/CTAButton";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Book Appointment",
  description:
    "Book your appointment online through Integrated Neuro's secure Jane App scheduling system.",
  path: "/book/",
});

export default function BookPage() {
  return (
    <>
      <PageHeader
        eyebrow="Scheduling"
        title="Book an Appointment"
        subtitle="Schedule online through our secure Jane App booking system."
      />

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-muted">
            Book neuropsychology or counselling appointments online. Not sure
            which service is right for you? Contact us first — we&apos;re happy
            to help.
          </p>
          <div className="mt-4 flex justify-center">
            <Badge>Counselling: ICBC & FNHA accepted</Badge>
          </div>

          <div className="mt-10">
            <CTAButton
              href={siteConfig.booking.general}
              external
              variant="primary"
              className="min-w-[240px]"
            >
              Book Online — Jane App
            </CTAButton>
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-left card-elevated">
            <h2 className="font-serif text-xl font-semibold text-primary">
              Book with a specific provider
            </h2>
            <p className="mt-2 text-sm text-muted">
              Choose your clinician directly.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <CTAButton href={siteConfig.booking.sonia} external variant="outline" className="flex-1">
                Dr. Sonia Packwood
              </CTAButton>
              <CTAButton href={siteConfig.booking.jennifer} external variant="outline" className="flex-1">
                Jennifer Allen
              </CTAButton>
            </div>
          </div>

          <p className="mt-10 text-muted">
            Prefer to call?{" "}
            <a
              href={siteConfig.contact.phoneHref}
              className="font-semibold text-primary hover:underline"
            >
              {siteConfig.contact.phone}
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}