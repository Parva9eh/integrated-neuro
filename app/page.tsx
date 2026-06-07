import Image from "next/image";
import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { Section } from "@/components/Section";
import { ServiceCard } from "@/components/ServiceCard";
import { teamMembers } from "@/content/team";
import { siteConfig } from "@/lib/site";

const values = [
  {
    title: "Empowerment",
    description:
      "We meet people where they are, helping them find purpose and rebuild connection with their community.",
  },
  {
    title: "Collaboration",
    description:
      "Our team works together to create clear action plans and continuity of care across disciplines.",
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
      <Section className="!py-0">
        <div className="grid items-center gap-10 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-accent">
              Vancouver, BC
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-primary md:text-5xl">
              Integrated care for neurological health and mental wellness
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              {siteConfig.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <CTAButton href="/book" variant="primary">
                Book Appointment
              </CTAButton>
              <CTAButton href="/contact" variant="outline">
                Contact Us
              </CTAButton>
            </div>
          </div>

          <div className="rounded-2xl bg-accent-light p-8 md:p-10">
            <h2 className="font-serif text-2xl font-semibold text-primary">
              How can we help?
            </h2>
            <p className="mt-3 text-muted">
              Choose the pathway that best fits your needs.
            </p>
            <div className="mt-6 grid gap-4">
              <ServiceCard
                title="Neurological Rehabilitation"
                description="Neuropsychological assessment and support for brain injury, concussion, stroke, dementia, and other neurological conditions."
                href="/services/neuropsychology"
                accent="border-primary"
              />
              <ServiceCard
                title="Counselling & Mental Health"
                description={`Individual and family counselling through ${siteConfig.counsellingBrand}. Now accepting ICBC and FNHA coverage.`}
                href="/services/counselling"
                accent="border-accent"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section variant="muted">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-semibold text-primary">
            Our approach
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            A process built on empowerment, collaboration, and expertise.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <h3 className="font-serif text-xl font-semibold text-primary">
                {value.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted">
                {value.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <CTAButton href="/about" variant="outline">
            Learn about our approach
          </CTAButton>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-serif text-3xl font-semibold text-primary">
              Meet our team
            </h2>
            <p className="mt-3 max-w-xl text-muted">
              Dedicated professionals committed to holistic, evidence-informed
              care.
            </p>
          </div>
          <Link
            href="/team"
            className="text-sm font-semibold text-primary hover:underline"
          >
            View full profiles →
          </Link>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex items-center gap-6 rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full bg-accent-light">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-primary">
                  {member.name}
                </h3>
                <p className="text-sm text-muted">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section variant="primary" className="text-center">
        <h2 className="font-serif text-3xl font-semibold">
          Ready to take the next step?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">
          Book online through our secure scheduling system or reach out with
          questions.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <CTAButton
            href={siteConfig.booking.general}
            external
            variant="secondary"
          >
            Book Appointment
          </CTAButton>
          <CTAButton href="/contact" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
            Contact Us
          </CTAButton>
        </div>
      </Section>
    </>
  );
}