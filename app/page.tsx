import Link from "next/link";
import { FallbackImage } from "@/components/FallbackImage";
import { Badge } from "@/components/Badge";
import { CTAButton } from "@/components/CTAButton";
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
      <section className="hero-pattern border-b border-border">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <div>
            <div className="flex flex-wrap gap-2">
              <Badge variant="primary">Downtown Vancouver</Badge>
              <Badge>ICBC & FNHA accepted</Badge>
            </div>
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.15] text-primary md:text-5xl lg:text-[3.4rem]">
              Integrated care for neurological health and mental wellness
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Holistic, evidence-informed support for brain injury, neurological
              conditions, and mental health — helping you move toward a life with
              meaning and purpose.
            </p>
            <p className="mt-3 text-sm text-muted">
              {siteConfig.contact.address}, {siteConfig.contact.city}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton href="/book" variant="primary">
                Book Appointment
              </CTAButton>
              <CTAButton href="/contact" variant="outline">
                Contact Us
              </CTAButton>
            </div>
          </div>

          <div className="space-y-4">
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
              accent="accent"
            />
          </div>
        </div>
      </section>

      <Section variant="muted">
        <SectionHeading
          eyebrow="Our approach"
          title="A process built on trust, collaboration, and expertise"
          description="Whether you are navigating recovery from a brain injury or seeking support for mental health challenges, we are here to guide you."
          align="center"
        />
        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
          {values.map((value, i) => (
            <div
              key={value.title}
              className="rounded-2xl border border-border bg-card p-8 card-elevated"
            >
              <span className="font-serif text-3xl font-semibold text-accent/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-serif text-xl font-semibold text-primary">
                {value.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                {value.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CTAButton href="/about/" variant="outline">
            Learn about our approach
          </CTAButton>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our team"
            title="Meet the people behind your care"
            description="Two dedicated clinicians, one integrated practice."
          />
          <Link
            href="/team/"
            className="shrink-0 text-sm font-semibold text-primary transition-colors hover:text-primary-dark"
          >
            View full profiles →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {teamMembers.map((member) => (
            <Link
              key={member.id}
              href="/team/"
              className="group flex items-center gap-6 rounded-2xl border border-border bg-card p-6 card-elevated transition-all hover:-translate-y-0.5 hover:border-primary/20"
            >
              <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-accent-light">
                <FallbackImage
                  src={member.image}
                  fallbackSrc={member.imageFallback}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
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
          ))}
        </div>
      </Section>

      <Section variant="primary" className="text-center">
        <h2 className="font-serif text-3xl font-semibold md:text-4xl">
          Ready to take the next step?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
          Book online through our secure scheduling system, or reach out with any
          questions.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <CTAButton
            href={siteConfig.booking.general}
            external
            variant="secondary"
          >
            Book Appointment
          </CTAButton>
          <CTAButton
            href="/contact/"
            variant="outline"
            className="border-white/80 text-white hover:bg-white hover:text-primary"
          >
            Contact Us
          </CTAButton>
        </div>
      </Section>
    </>
  );
}