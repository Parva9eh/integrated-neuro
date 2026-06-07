import { CTAButton } from "@/components/CTAButton";
import { PageHeader } from "@/components/PageHeader";
import { Prose } from "@/components/Prose";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Neuropsychology",
  description:
    "Clinical neuropsychological assessment and treatment recommendations for brain injury and neurological conditions in Vancouver.",
  path: "/services/neuropsychology/",
});

const helpfulWhen = [
  "Decline in thinking skills, attention, or memory",
  "Change in personality or mood following brain injury or illness",
  "Need to monitor recovery after injury or progression of a condition",
  "Mood, sleep, or pain problems affecting cognitive functioning",
];

const questions = [
  "What is the person's level of cognitive functioning?",
  "Are accommodations needed at home, work, or school?",
  "Can they live safely, drive, or manage finances independently?",
  "Can they successfully return to work or school?",
];

export default function NeuropsychologyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Neuropsychology"
        subtitle="Clinical assessment of brain-related cognitive and emotional functioning after injury or neurological disease."
      />

      <Section>
        <Prose>
          <p>
            <strong>Clinical Neuropsychology</strong> is a specialty within
            psychology that evaluates how the brain affects thinking, emotion, and
            behaviour — particularly after brain injury or conditions such as
            dementia.
          </p>
          <p>
            A <strong>neuropsychological assessment</strong> typically includes
            a review of medical and personal history, interviews with you and
            someone who knows you well, and standardized tests. You receive
            verbal feedback and a comprehensive written report with diagnosis and
            treatment recommendations.
          </p>
          <p>
            At {siteConfig.name}, we provide timely, patient-centred
            neuropsychological services focused on clear answers and practical
            plans for future care.
          </p>
        </Prose>
      </Section>

      <Section variant="muted">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 card-elevated">
            <SectionHeading
              eyebrow="When to seek help"
              title="When can an assessment help?"
            />
            <ul className="mt-6 space-y-3 list-check text-muted">
              {helpfulWhen.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 card-elevated">
            <SectionHeading
              eyebrow="What we answer"
              title="Key questions we help address"
            />
            <ul className="mt-6 space-y-3 list-check text-muted">
              {questions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-border bg-card p-8 md:p-10 card-elevated">
          <SectionHeading title="Fees & coverage" />
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">
            Assessments vary in time and cost depending on purpose. Services are
            not covered by BC Medical Services Plan but may be partly reimbursed
            through extended health plans. Fees follow the schedule recommended
            by the Psychological Association of British Columbia (BCPA).
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton href={siteConfig.booking.sonia} external>
              Book with Dr. Packwood
            </CTAButton>
            <CTAButton href="/contact/" variant="outline">
              Contact Us
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}