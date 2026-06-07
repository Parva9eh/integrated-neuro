import { Badge } from "@/components/Badge";
import { CTAButton } from "@/components/CTAButton";
import { PageHeader } from "@/components/PageHeader";
import { Prose } from "@/components/Prose";
import { Section } from "@/components/Section";
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
        title="Counselling & Mental Health"
        subtitle={`Individual and family counselling for those facing life's challenges — provided through ${siteConfig.counsellingBrand}.`}
      />

      <Section>
        <Prose>
          <blockquote className="border-l-4 border-accent pl-6 font-serif text-xl italic text-foreground">
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
            We support clients through anxiety, depression, grief, loss,
            trauma, relationship challenges, and adjustment to health changes —
            including brain injury, concussion, stroke, and dementia.
          </p>
        </Prose>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-accent/30 bg-accent-muted p-8 md:p-10">
          <div className="flex flex-wrap gap-2">
            <Badge>ICBC accepted</Badge>
            <Badge>FNHA accepted</Badge>
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
            <li className="flex items-baseline justify-between rounded-xl bg-accent-muted px-5 py-4">
              <span className="text-muted">Registered psychologist (50 min)</span>
              <strong className="font-serif text-xl text-primary">$225</strong>
            </li>
            <li className="flex items-baseline justify-between rounded-xl bg-accent-muted px-5 py-4">
              <span className="text-muted">Counsellor / social worker (50 min)</span>
              <strong className="font-serif text-xl text-primary">$155</strong>
            </li>
          </ul>
          <p className="mt-5 text-sm text-muted">
            Not covered by BC MSP. May be reimbursed through extended health
            plans. See our{" "}
            <a href="/fees/" className="font-semibold text-primary hover:underline">
              fees page
            </a>{" "}
            for full details.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton href={siteConfig.booking.jennifer} external>
              Book with Jennifer
            </CTAButton>
            <CTAButton href={siteConfig.booking.general} external variant="outline">
              Book Online
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}