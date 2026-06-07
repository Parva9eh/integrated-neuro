import { CTAButton } from "@/components/CTAButton";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Book Appointment",
  description: "Book your appointment online through Integrated Neuro's secure Jane App scheduling system.",
  path: "/book",
});

export default function BookPage() {
  return (
    <>
      <PageHeader
        title="Book an Appointment"
        subtitle="Schedule online through our secure booking system."
      />

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-muted">
            You can book neuropsychology or counselling appointments online. If
            you have questions about which service is right for you, please
            contact us first.
          </p>
          <p className="mt-4 text-sm font-medium text-accent">
            Counselling: ICBC and FNHA coverage accepted.
          </p>

          <div className="mt-10 space-y-4">
            <CTAButton
              href={siteConfig.booking.general}
              external
              variant="primary"
              className="w-full sm:w-auto"
            >
              Book Online — Jane App
            </CTAButton>
          </div>

          <div className="mt-12 rounded-2xl border border-border bg-card p-8 text-left shadow-sm">
            <h2 className="font-serif text-xl font-semibold text-primary">
              Book with a specific provider
            </h2>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <CTAButton href={siteConfig.booking.sonia} external variant="outline">
                Dr. Sonia Packwood
              </CTAButton>
              <CTAButton href={siteConfig.booking.jennifer} external variant="outline">
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