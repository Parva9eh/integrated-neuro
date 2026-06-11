import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Resources",
  description:
    "Helpful external resources for brain injury, dementia, and neurological conditions.",
  path: "/resources/",
});

const resourceGroups = [
  {
    title: "General",
    links: [
      { label: "Canadian Psychological Association", href: "https://www.cpa.ca/" },
      { label: "American Academy of Clinical Neuropsychology", href: "https://theaacn.org/" },
    ],
  },
  {
    title: "Dementia",
    links: [
      { label: "Alzheimer Society of Canada", href: "https://www.alzheimer.ca/" },
      { label: "Alzheimer Society of BC", href: "https://www.alzheimer.ca/bc" },
    ],
  },
  {
    title: "Traumatic Brain Injury",
    links: [
      { label: "Brain Injury Canada", href: "https://braininjurycanada.ca/" },
      { label: "Mayo Clinic — TBI", href: "https://www.mayoclinic.com/health/traumatic-brain-injury/DS00552" },
    ],
  },
  {
    title: "Multiple Sclerosis",
    links: [
      { label: "MS Society of Canada", href: "https://mssociety.ca/" },
    ],
  },
  {
    title: "Parkinson's Disease",
    links: [
      { label: "Parkinson Canada", href: "https://www.parkinson.ca/" },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Helpful links"
        title="Resources"
        subtitle="External organizations and information that may support your journey."
      />

      <Section lead>
        <div className="grid gap-6 md:grid-cols-2">
          {resourceGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-card p-8 card-elevated"
            >
              <h2 className="font-serif text-xl font-semibold text-primary">
                {group.title}
              </h2>
              <ul className="mt-5 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-primary transition-colors hover:text-primary-dark hover:underline"
                    >
                      {link.label}
                      <span aria-hidden="true">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}