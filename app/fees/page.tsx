import { Badge } from "@/components/Badge";
import { CTAButton } from "@/components/CTAButton";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Fees & Insurance",
  description:
    "Counselling and neuropsychology fees, insurance coverage, ICBC and FNHA information for Integrated Neuro.",
  path: "/fees/",
});

export default function FeesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Transparent pricing"
        title="Fees & Insurance"
        subtitle="Clear fee information and guidance on coverage options."
      />

      <Section>
        <div className="mx-auto max-w-3xl space-y-14">
          <div>
            <SectionHeading title="Counselling fees" description="50-minute sessions" />
            <ul className="mt-6 space-y-3">
              <li className="flex items-baseline justify-between rounded-2xl border border-border bg-card px-6 py-5 card-elevated">
                <span className="text-muted">Registered psychologist</span>
                <strong className="font-serif text-2xl text-primary">$200–$225</strong>
              </li>
              <li className="flex items-baseline justify-between rounded-2xl border border-border bg-card px-6 py-5 card-elevated">
                <span className="text-muted">Registered counsellor or social worker</span>
                <strong className="font-serif text-2xl text-primary">$155</strong>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-accent-muted p-8">
            <SectionHeading title="Neuropsychology assessments" />
            <p className="mt-4 leading-relaxed text-muted">
              Assessments vary in total time and cost depending on purpose. Fees
              follow the schedule recommended by the Psychological Association of
              British Columbia (BCPA). Please contact us for a personalized
              quote.
            </p>
          </div>

          <div>
            <SectionHeading title="Coverage & reimbursement" />
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>
                Services are{" "}
                <strong className="text-foreground">
                  not covered by the BC Medical Services Plan
                </strong>
                , but can generally be reimbursed — at least partly — through
                extended health care plans. Contact your insurer to confirm
                eligibility.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge>ICBC accepted</Badge>
                <Badge>FNHA accepted</Badge>
              </div>
              <p>
                We accept clients with ICBC and First Nations Health Authority
                (FNHA) extended health coverage for counselling services.
              </p>
            </div>
            <div className="mt-8">
              <CTAButton href="/contact/" variant="primary">
                Contact us about coverage
              </CTAButton>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}