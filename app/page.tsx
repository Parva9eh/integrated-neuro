import Link from "next/link";
import { AnimateIn } from "@/components/AnimateIn";
import { FallbackImage } from "@/components/FallbackImage";
import { CTAButton } from "@/components/CTAButton";
import { NeuralVisual } from "@/components/NeuralVisual";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { teamMembers } from "@/content/team";
import { siteConfig } from "@/lib/site";

const values = [
  {
    title: "Empowerment",
    description:
      "We meet people where they are, helping them find purpose and rebuild connection with their community after injury or illness.",
  },
  {
    title: "Collaboration",
    description:
      "Our professionals work together to create clear action plans and continuity of care across disciplines.",
  },
  {
    title: "Expertise",
    description:
      "Evidence-informed assessments and interventions grounded in current neurological and mental health research.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero-light hero-pattern relative overflow-hidden border-b border-border md:min-h-140">
        <div className="absolute top-1/2 z-2 hidden w-100 -translate-y-1/2 md:right-[2%] md:block lg:w-125">
          <NeuralVisual className="w-full animate-float opacity-80" />
        </div>

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-2 md:gap-12 md:py-28">
          <div>
            <h1 className="animate-fade-in-up font-serif text-4xl font-semibold leading-[1.12] text-primary md:text-5xl lg:text-[3.4rem]">
              Integrated care for neurological health and mental wellness
            </h1>
            <p className="animate-fade-in-up animate-delay-100 mt-6 text-lg leading-relaxed text-muted">
              Holistic, evidence-informed support for brain injury, neurological
              conditions, and mental health — helping you move toward a life
              with meaning and purpose.
            </p>
            <div className="animate-fade-in-up animate-delay-200 mt-8 flex flex-wrap gap-3">
              <CTAButton href="/contact/" variant="accent">
                Contact Us
              </CTAButton>
              <CTAButton href="/services/neuropsychology/" variant="outline">
                Our Services
              </CTAButton>
            </div>
          </div>

          <div className="animate-fade-in-up animate-delay-300 relative z-10 space-y-4">
            <ServiceCard
              title="Neurological Rehabilitation"
              description="Neuropsychological assessment and support for brain injury, concussion, stroke, dementia, and other neurological conditions."
              href="/services/neuropsychology/"
              icon="◈"
              accent="primary"
            />
            <ServiceCard
              title="Counselling & Mental Health"
              description={`Individual and family counselling through ${siteConfig.counsellingBrand} — anxiety, grief, trauma, and life transitions.`}
              href="/services/counselling/"
              icon="◎"
              accent="insight"
            />
          </div>
        </div>
      </section>

      <Section variant="muted">
        <AnimateIn>
          <SectionHeading
            eyebrow="Our approach"
            title="A process built on trust, collaboration, and expertise"
            description="Whether you are navigating recovery from a brain injury or seeking support for mental health challenges, we are here to guide you."
            align="center"
          />
        </AnimateIn>
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
          {values.map((value, i) => (
            <AnimateIn key={value.title} delay={i * 100}>
              <div className="card-hover-lift h-full rounded-2xl border border-border bg-card p-8 card-elevated">
                <span className="font-serif text-3xl font-semibold text-accent/60">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-serif text-xl font-semibold text-primary">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">
                  {value.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
        <AnimateIn className="mt-12 text-center" delay={300}>
          <CTAButton href="/about/" variant="outline">
            Learn about our approach
          </CTAButton>
        </AnimateIn>
      </Section>

      <Section>
        <AnimateIn>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Our team"
              title="Meet the people behind your care"
              description="Two dedicated clinicians, one integrated practice."
            />
            <Link
              href="/team/"
              className="shrink-0 text-sm font-semibold text-primary transition-colors hover:text-accent"
            >
              View full profiles →
            </Link>
          </div>
        </AnimateIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {teamMembers.map((member, i) => (
            <AnimateIn key={member.id} delay={i * 120}>
              <Link
                href="/team/"
                className="card-hover-lift group flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-5 card-elevated hover:border-primary/30 sm:flex-row sm:items-center sm:gap-6 sm:p-6"
              >
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-accent-light sm:h-28 sm:w-28">
                  <FallbackImage
                    src={member.image}
                    fallbackSrc={member.imageFallback}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="112px"
                  />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-primary">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-accent">
                    {member.role}
                  </p>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                    {member.summary}
                  </p>
                </div>
              </Link>
            </AnimateIn>
          ))}
        </div>
      </Section>
    </>
  );
}
