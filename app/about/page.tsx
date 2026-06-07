import { CTAButton } from "@/components/CTAButton";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description:
    "Learn about Integrated Neuro's collaborative, evidence-informed approach to neurological rehabilitation and mental wellness.",
  path: "/about",
});

const steps = [
  {
    title: "Determine where you are",
    description:
      "Your current cognitive, emotional, and behavioural status is assessed using evidence-based tools and our team's broad expertise.",
  },
  {
    title: "Outline what matters most",
    description:
      "Your priorities guide the plan. Recovery should be built around the function and lifestyle you want to work toward.",
  },
  {
    title: "Develop your roadmap",
    description:
      "We coordinate continuity of care and, wherever possible, support your return to school, work, or meaningful community involvement.",
  },
  {
    title: "Guide you toward independence",
    description:
      "You and your support network receive practical and emotional guidance through transitional periods and lasting change.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="An integrated approach to recovery"
        subtitle="Tailored assessment and treatment services for injury, aging, and mental wellness — delivered with collaboration and continuity of care."
      />

      <Section>
        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-muted">
          <p>
            Integrated Neuro is home to a dedicated team of healthcare
            professionals committed to holistic, evidence-informed interventions
            for brain injury and other neurological conditions.
          </p>
          <p>
            We specialize in services for individuals who have experienced
            moderate to severe brain injury or have been diagnosed with a
            neurological illness, such as dementia. Through our counselling
            division, IN-Sight Mind Body Wellness, we also support individuals
            facing everyday mental health challenges.
          </p>
          <p>
            The path to recovery can feel like a maze. We work to untangle that
            maze while contemplating your recovery in holistic terms —
            physical, emotional, and social.
          </p>
        </div>
      </Section>

      <Section variant="muted">
        <h2 className="text-center font-serif text-3xl font-semibold text-primary">
          Your four steps to rehabilitation
        </h2>
        <ol className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <span className="text-sm font-semibold text-accent">
                Step {index + 1}
              </span>
              <h3 className="mt-2 font-serif text-xl font-semibold text-primary">
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
          <CTAButton href="/services/neuropsychology" variant="primary">
            Explore our services
          </CTAButton>
        </div>
      </Section>
    </>
  );
}