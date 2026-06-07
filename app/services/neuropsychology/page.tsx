import { CTAButton } from "@/components/CTAButton";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Neuropsychology",
  description:
    "Clinical neuropsychological assessment and treatment recommendations for brain injury and neurological conditions in Vancouver.",
  path: "/services/neuropsychology",
});

const helpfulWhen = [
  "Concern about decline in thinking skills, attention, or memory",
  "Change in personality or mood due to brain injury or illness",
  "Need to monitor recovery after injury or progression of illness",
  "Mood, sleep, or pain problems impacting cognitive functioning",
];

const questions = [
  "What is the person's level of cognitive functioning?",
  "Does the person need accommodations at home, work, or school?",
  "Can they live safely, drive, or manage finances independently?",
  "Can they successfully return to work or school?",
];

export default function NeuropsychologyPage() {
  return (
    <>
      <PageHeader
        title="Neuropsychology"
        subtitle="Clinical neuropsychology assesses brain-related cognitive and emotional functioning after injury or neurological disease."
      />

      <Section>
        <div className="mx-auto max-w-3xl space-y-6 leading-relaxed text-muted">
          <p>
            <strong className="text-foreground">Clinical Neuropsychology</strong>{" "}
            is a specialty field of psychology that assesses brain-related
            cognitive and emotional functioning after a brain injury or disease,
            such as dementia.
          </p>
          <p>
            <strong className="text-foreground">
              Neuropsychological Assessment
            </strong>{" "}
            generally includes a review of medical, vocational, and school
            records; an interview with you and someone who knows you well; and
            standardized tests and questionnaires. You receive verbal feedback
            and a comprehensive report with diagnosis and treatment
            recommendations.
          </p>
          <p>
            At Integrated Neuro, we are dedicated to providing high-quality,
            timely neuropsychological services focused on patient-centred
            assessment and plans for future care.
          </p>
        </div>
      </Section>

      <Section variant="muted">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-primary">
              When can an assessment help?
            </h2>
            <ul className="mt-4 space-y-3 text-muted">
              {helpfulWhen.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-serif text-2xl font-semibold text-primary">
              Key questions we help answer
            </h2>
            <ul className="mt-4 space-y-3 text-muted">
              {questions.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="text-accent">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
          <h2 className="font-serif text-2xl font-semibold text-primary">
            Fees & coverage
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            Neuropsychological assessments vary in time and cost depending on
            purpose. Services are not covered by BC Medical Services Plan but may
            be partly reimbursed by extended health plans. We follow the fee
            schedule recommended by the Psychological Association of British
            Columbia (BCPA). Contact us for more information.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <CTAButton href={siteConfig.booking.sonia} external>
              Book with Dr. Packwood
            </CTAButton>
            <CTAButton href="/contact" variant="outline">
              Contact Us
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}