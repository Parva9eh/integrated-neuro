import { CTAButton } from "@/components/CTAButton";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Fees & Insurance",
  description:
    "Counselling and neuropsychology fees, insurance coverage, ICBC and FNHA information for Integrated Neuro.",
  path: "/fees",
});

export default function FeesPage() {
  return (
    <>
      <PageHeader
        title="Fees & Insurance"
        subtitle="Transparent fee information and guidance on coverage options."
      />

      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-2xl font-semibold text-primary">
            Counselling fees
          </h2>
          <p className="mt-2 text-muted">50-minute sessions</p>
          <ul className="mt-6 space-y-3 text-lg text-foreground">
            <li className="rounded-lg border border-border bg-card px-6 py-4">
              <strong>$200–$225</strong>{" "}
              <span className="text-muted">with a registered psychologist</span>
            </li>
            <li className="rounded-lg border border-border bg-card px-6 py-4">
              <strong>$155</strong>{" "}
              <span className="text-muted">
                with a registered counsellor or social worker
              </span>
            </li>
          </ul>

          <h2 className="mt-12 font-serif text-2xl font-semibold text-primary">
            Neuropsychology
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Neuropsychological assessments vary considerably in total time and
            cost depending on purpose. Fees follow the schedule recommended by
            the Psychological Association of British Columbia (BCPA). Please
            contact us for a quote.
          </p>

          <h2 className="mt-12 font-serif text-2xl font-semibold text-primary">
            Coverage
          </h2>
          <div className="mt-4 space-y-4 leading-relaxed text-muted">
            <p>
              Services provided are <strong className="text-foreground">not covered by the BC Medical Services Plan</strong>, but can
              generally be reimbursed, at least partly, by extended health care
              plans. Please contact your insurer to determine your eligibility.
            </p>
            <p>
              We are now accepting clients with{" "}
              <strong className="text-foreground">ICBC</strong> and{" "}
              <strong className="text-foreground">
                First Nations Health Authority (FNHA)
              </strong>{" "}
              extended health coverage for counselling services.
            </p>
          </div>

          <div className="mt-10">
            <CTAButton href="/contact" variant="primary">
              Contact us about coverage
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}