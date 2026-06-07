import { AnimateIn } from "@/components/AnimateIn";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { teamMembers } from "@/content/team";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Our Team",
  description:
    "Meet Dr. Sonia Packwood and Jennifer Allen of Integrated Neuro in Vancouver, BC.",
  path: "/team/",
});

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Who we are"
        title="Our Team"
        subtitle="Two clinicians, one integrated practice — committed to holistic, evidence-informed care."
      />

      <Section>
        <div className="space-y-10">
          {teamMembers.map((member, i) => (
            <AnimateIn key={member.id} delay={i * 100}>
              <TeamMemberCard member={member} />
            </AnimateIn>
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Our mission"
            title="The highest quality of care, support, and education"
            align="center"
          />
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-muted">
            {siteConfig.name} offers evidence-based assessments, interventions,
            and treatments — delivered with empathy and trust, helping clients
            and their families understand their situation and move forward with
            confidence.
          </p>
        </div>
      </Section>
    </>
  );
}