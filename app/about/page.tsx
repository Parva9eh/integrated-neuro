import { CTAButton } from "@/components/CTAButton";
import { PageHeader } from "@/components/PageHeader";
import { Prose } from "@/components/Prose";
import { Section } from "@/components/Section";
import { SectionImage } from "@/components/SectionImage";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "About",
  description:
    "Learn about Integrated Neuro's collaborative, evidence-informed approach to neurological rehabilitation and mental wellness.",
  path: "/about/",
});

const steps = [
  {
    title: "Determine where you are",
    description:
      "We assess your current cognitive, emotional, and behavioural functioning using evidence-based tools and our team's clinical expertise.",
  },
  {
    title: "Outline what matters most",
    description:
      "You are at the centre of your recovery. Your priorities shape the plan — built around the function and lifestyle you want to work toward.",
  },
  {
    title: "Develop your roadmap",
    description:
      "We coordinate continuity of care and, wherever possible, support your return to school, work, or meaningful community involvement.",
  },
  {
    title: "Guide you toward independence",
    description:
      "You and your support network receive practical and emotional guidance through transitional periods — toward lasting, meaningful change.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="An integrated approach to recovery"
        subtitle="Tailored assessment and treatment for injury, aging, and mental wellness — delivered with collaboration and continuity of care."
      />

      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <SectionImage
            src={siteConfig.sectionImages.about}
            alt="Integrated Neuro collaborative care approach"
            aspect="landscape"
          />
          <Prose size="lg">
          <p>
            {siteConfig.name} provides holistic, evidence-informed interventions
            for brain injury and neurological conditions. We specialize in
            supporting individuals who have experienced mild to severe brain
            injury or been diagnosed with a neurological illness such as
            dementia.
          </p>
          <p>
            Through our counselling division, {siteConfig.counsellingBrand}, we
            also help individuals and families facing everyday mental health
            challenges — from anxiety and grief to trauma and life transitions.
          </p>
          <p>
            Recovery can feel like a maze. We work to untangle it by considering
            your whole experience — physical, emotional, and social — so you can
            move toward a life with meaning and purpose.
          </p>
          </Prose>
        </div>
      </Section>

      <Section variant="muted">
        <SectionHeading
          eyebrow="Our process"
          title="Four steps to rehabilitation"
          align="center"
        />
        <ol className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-border bg-card p-8 card-elevated"
            >
              <span className="font-serif text-2xl font-semibold text-accent/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-serif text-xl font-semibold text-primary">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <div className="text-center">
          <CTAButton href="/services/neuropsychology/" variant="primary">
            Explore our services
          </CTAButton>
        </div>
      </Section>
    </>
  );
}
