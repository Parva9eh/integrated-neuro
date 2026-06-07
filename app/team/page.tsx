import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { teamMembers } from "@/content/team";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Our Team",
  description:
    "Meet Dr. Sonia Packwood and Jennifer Allen of Integrated Neuro in Vancouver, BC.",
  path: "/team",
});

export default function TeamPage() {
  return (
    <>
      <PageHeader
        title="Our Team"
        subtitle="Dedicated professionals committed to holistic, evidence-informed care."
      />

      <Section>
        <div className="space-y-12">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </Section>

      <Section variant="muted">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-2xl font-semibold text-primary">
            Our mission
          </h2>
          <p className="mt-4 leading-relaxed text-muted">
            {siteConfig.name} is dedicated to providing the highest quality of
            care, support, and education. Our expertise offers evidence-based
            assessments, interventions, and treatments, delivered in a seamless
            and holistic manner centred around empathy, trust, and helping our
            clients and their families understand their situation.
          </p>
        </div>
      </Section>
    </>
  );
}