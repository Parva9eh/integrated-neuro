import { CTAButton } from "@/components/CTAButton";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Counselling",
  description:
    "Tailored counselling for anxiety, depression, grief, trauma, and life transitions. ICBC and FNHA coverage accepted.",
  path: "/services/counselling",
});

export default function CounsellingPage() {
  return (
    <>
      <PageHeader
        title="Counselling & Mental Health"
        subtitle={`Tailored counselling through ${siteConfig.counsellingBrand} for individuals and families facing life's challenges.`}
      />

      <Section>
        <div className="mx-auto max-w-3xl space-y-6 leading-relaxed text-muted">
          <p className="text-lg italic text-foreground">
            &ldquo;Mental strength is not the ability to stay out of the
            darkness, it&apos;s the ability to sit present in the darkness
            knowing that the light will shine again.&rdquo;
          </p>
          <p>
            A counsellor&apos;s main focus is to help individuals and their
            families gain insight and cope with the emotional toll of challenging
            life circumstances or difficulties of everyday living.
          </p>
          <p>
            Our team supports individuals through anxiety, depression, grief,
            loss, trauma, relationship challenges, and adjustment to health
            changes — including brain injury, concussion, stroke, and dementia.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border-2 border-accent bg-accent-light/50 p-8">
          <h2 className="font-serif text-xl font-semibold text-primary">
            Now accepting ICBC and FNHA coverage
          </h2>
          <p className="mt-3 text-muted">
            We accept clients with ICBC and First Nations Health Authority
            (FNHA) extended health coverage. Contact us if you need help
            understanding your eligibility.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium">
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
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <h2 className="font-serif text-2xl font-semibold text-primary">
            Fees
          </h2>
          <ul className="mt-4 space-y-2 text-muted">
            <li>
              <strong className="text-foreground">$225</strong> — 50-minute
              session with a registered psychologist
            </li>
            <li>
              <strong className="text-foreground">$155</strong> — 50-minute
              session with a registered counsellor or social worker
            </li>
          </ul>
          <p className="mt-4 text-sm text-muted">
            Services are not covered by BC MSP but may be reimbursed by extended
            health plans. See our{" "}
            <a href="/fees" className="font-medium text-primary hover:underline">
              fees page
            </a>{" "}
            for details.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
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