import { Badge } from "@/components/Badge";
import { CTAButton } from "@/components/CTAButton";
import { PageHeader } from "@/components/PageHeader";
import { Prose } from "@/components/Prose";
import { Section } from "@/components/Section";
import { SectionImage } from "@/components/SectionImage";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Counselling",
  description:
    "Tailored counselling for anxiety, depression, grief, trauma, and life transitions. ICBC and FNHA coverage accepted.",
  path: "/services/counselling/",
});

export default function CounsellingPage() {
  return (
    <>
      <PageHeader
        eyebrow="IN-Sight Mind Body Wellness"
        eyebrowAccent="insight"
        title="Counselling & Mental Health"
        subtitle={`Individual and family counselling for those facing life's challenges — provided through ${siteConfig.counsellingBrand}.`}
      />

      <Section lead>
        <SectionImage
          src={siteConfig.sectionImages.counselling}
          alt="Counselling and mental wellness support"
          className="mb-10"
        />
        <Prose>
          <blockquote className="border-l-4 border-insight pl-6 font-serif text-xl italic text-foreground">
            &ldquo;Mental strength is not the ability to stay out of the
            darkness — it&apos;s the ability to sit present in the darkness,
            knowing the light will shine again.&rdquo;
          </blockquote>
          <p>
            Counselling helps individuals and families gain insight and cope
            with the emotional toll of challenging circumstances — whether
            navigating everyday stress or adjusting to significant life changes.
          </p>
          <p>
            We support clients through anxiety, depression, grief, loss, trauma,
            relationship challenges, and adjustment to health changes —
            including brain injury, concussion, stroke, and dementia.
          </p>
        </Prose>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-insight/30 bg-insight-muted p-8 md:p-10 card-elevated card-accent-insight">
          <div className="flex flex-wrap gap-2">
            <Badge variant="insight">ICBC accepted</Badge>
            <Badge variant="insight">FNHA accepted</Badge>
          </div>
          <h2 className="mt-4 font-serif text-2xl font-semibold text-primary">
            Extended health coverage
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            We accept clients with ICBC and First Nations Health Authority
            (FNHA) coverage for counselling. Contact us if you need help
            understanding your eligibility.
          </p>
          <div className="mt-5 flex flex-wrap gap-5 text-sm font-semibold">
            <a
              href="https://www.icbc.com/claims/injury/Pages/your-injury-benefits.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              ICBC injury benefits →
            </a>
            <a
              href="https://www.fnha.ca/benefits/mental-health"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              FNHA mental health →
            </a>
          </div>
        </div>
      </Section>

      <Section variant="muted">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 md:p-10 card-elevated">
          <SectionHeading title="Session fees" />
          <ul className="mt-6 space-y-3">
            <li className="flex flex-col gap-1 rounded-xl bg-insight-muted px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
              <span className="min-w-0 text-muted">
                Licensed Psychologist (50 min)
              </span>
              <strong className="shrink-0 font-serif text-xl text-primary">
                $250
              </strong>
            </li>
            <li className="flex flex-col gap-1 rounded-xl bg-insight-muted px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
              <span className="min-w-0 text-muted">
                Registered Social Worker or Counsellor (50 min)
              </span>
              <strong className="shrink-0 font-serif text-xl text-primary">
                $165
              </strong>
            </li>
          </ul>
          <p className="mt-5 text-sm text-muted">
            Not covered by BC MSP. May be reimbursed through extended health
            plans. See our{" "}
            <a
              href="/fees/"
              className="font-semibold text-primary hover:underline"
            >
              fees page
            </a>{" "}
            for full details.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton href="/contact/">Contact Us</CTAButton>
            <CTAButton href="/fees/" variant="outline">
              View Fees
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
