import { CTAButton } from "@/components/CTAButton";
import { PageHeader } from "@/components/PageHeader";
import { Prose } from "@/components/Prose";
import { Section } from "@/components/Section";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const siteUrl = siteConfig.url;

const tocLinks = [
  { href: "#terms-of-use", label: "Terms of use" },
  { href: "#privacy-policy", label: "Privacy policy" },
  { href: "#contact", label: "Contact us" },
] as const;

const privacySections = [
  {
    id: "information-we-collect",
    title: "Information we collect",
    paragraphs: [
      "When you submit our contact form, we collect the information you provide — such as your name, phone number, email address, and message. Please do not include medical, health, or other sensitive personal information in website forms.",
      "We may also collect basic analytics data (for example, page views and browser type) to understand how visitors use our site. We do not sell your personal information.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How we use your information",
    paragraphs: [
      "We use contact form submissions to respond to inquiries and coordinate next steps. Clinical and health information is handled separately through secure clinical processes, not through this website.",
    ],
  },
  {
    id: "safeguarding",
    title: "Safeguarding your information",
    paragraphs: [
      "We take reasonable steps to protect personal information, including secure hosting, access controls, and up-to-date security practices appropriate to the services we use.",
    ],
  },
  {
    id: "your-choices",
    title: "Your choices and access",
    paragraphs: [
      "You may contact us to ask questions about this policy, request access to personal information we hold about you, or ask us to correct or update it. If you wish to withdraw consent for non-essential uses of your information, please contact us and we will assist you.",
      "We retain personal information only as long as needed to respond to your inquiry and meet applicable legal requirements. When information is no longer required, we take steps to delete or anonymize it.",
    ],
  },
  {
    id: "third-party",
    title: "Third-party services",
    paragraphs: [
      "Our website may use third-party services such as Cloudflare (hosting and security), form processing, and analytics. These providers process data according to their own privacy policies.",
      "Pages on our site may include embedded content from other websites (such as videos or articles). That content may behave as if you had visited the other site directly and may be subject to that site's tracking or cookies.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and analytics",
    paragraphs: [
      "We may use cookies or similar technologies for basic site analytics and performance. You can control cookies through your browser settings. Disabling cookies may affect some site functionality.",
    ],
  },
  {
    id: "bc-rights",
    title: "Privacy rights in British Columbia",
    paragraphs: [
      "If you have questions about your privacy rights in British Columbia, you may contact the Office of the Information and Privacy Commissioner for BC.",
    ],
    externalLink: {
      href: "https://www.oipc.bc.ca/",
      label: "Visit oipc.bc.ca",
    },
  },
] as const;

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy and terms of use for integratedneuro.ca — how Integrated Neuro collects, uses, and protects your information.",
  path: "/privacy-policy/",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy & Terms of Use"
        subtitle="How we handle your information and the terms for using our website."
      />

      <Section className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="rounded-2xl border border-border bg-card p-6 card-elevated md:p-8">
            <p className="text-sm text-muted">
              <strong className="text-foreground">Last updated:</strong> June 2026
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
              &ldquo;our&rdquo;) operates{" "}
              <a href={siteUrl}>{siteUrl}</a>. This page describes the terms
              under which you may use our website and how we handle information
              collected through it.
            </p>
          </div>

          <nav
            aria-label="On this page"
            className="rounded-2xl border border-border bg-accent-light px-6 py-5"
          >
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-accent">
              On this page
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
              {tocLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary transition-colors hover:text-accent-dark"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Section>

      <Section variant="muted" id="terms-of-use" className="scroll-mt-24">
        <SectionHeading title="Terms of use" />
        <Prose className="mt-8">
          <p>
            The {siteConfig.name} website and the information or materials on it
            are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo;
            basis. We make no representations or warranties, express or implied,
            regarding the website or its content.
          </p>
          <p>
            We assume no responsibility and shall not be liable for any damage to
            your computer equipment or other property arising from your access to,
            use of, or browsing on this website, any linked external sites, or
            your downloading of materials from this website or linked sites. In no
            event shall {siteConfig.name} be liable for any injury, loss, claim, or
            damage of any kind arising out of or connected with use of this website
            or any linked site.
          </p>
          <p>
            As a convenience, we may include links to websites outside our control.
            We provide no endorsement of those sites and are not responsible for
            their content, products, services, or privacy practices. If you access
            linked websites, you do so at your own risk.
          </p>
          <p>
            Materials on {siteUrl} are protected by copyright. Copyright &copy;{" "}
            {new Date().getFullYear()} {siteConfig.name}. All rights reserved. You
            may view content for informational purposes only. You may not modify,
            copy, or distribute website materials without our express written
            permission.
          </p>
          <p>
            You may not frame our content or use techniques that make our content
            appear to be part of another website without permission. We reserve the
            right to require removal of any link to our website at any time.
          </p>
        </Prose>
      </Section>

      <Section id="privacy-policy" className="scroll-mt-24">
        <SectionHeading
          title="Privacy policy"
          description="We believe in building relationships founded on trust and respect. That includes being clear about what information we collect, how we use it, and how we keep it safe."
        />
        <div className="mx-auto mt-10 max-w-3xl space-y-5">
          {privacySections.map((section) => (
            <article
              key={section.id}
              id={section.id}
              className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 card-elevated md:p-8"
            >
              <h3 className="font-serif text-xl font-semibold text-primary">
                {section.title}
              </h3>
              <div className="mt-4 space-y-4 leading-relaxed text-muted">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
                {"externalLink" in section && section.externalLink && (
                  <p>
                    <a
                      href={section.externalLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-primary hover:underline"
                    >
                      {section.externalLink.label} →
                    </a>
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section variant="muted" id="contact" className="scroll-mt-24">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 text-center card-elevated md:p-10">
          <h2 className="font-serif text-2xl font-semibold text-primary">
            Questions about this policy?
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted">
            Contact us through our website form or by phone. We&apos;re happy to
            help with questions about your personal information.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButton href="/contact/">Contact Us</CTAButton>
            <CTAButton
              href={siteConfig.contact.phoneHref}
              variant="outline"
              external
            >
              {siteConfig.contact.phone}
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}