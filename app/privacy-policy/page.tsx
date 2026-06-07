import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for integratedneuro.ca",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader title="Privacy Policy" />

      <Section>
        <div className="prose-custom mx-auto max-w-3xl space-y-6 text-muted">
          <p>
            <strong className="text-foreground">Last updated:</strong> June 2026
          </p>
          <p>
            {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;us&rdquo;) operates{" "}
            {siteConfig.url}. This policy describes how we collect and use
            information when you visit our website.
          </p>

          <h2 className="font-serif text-xl font-semibold text-primary">
            Information we collect
          </h2>
          <p>
            When you submit our contact form, we collect the information you
            provide (name, phone, email, and message). Please do not include
            medical or health information in website forms.
          </p>
          <p>
            We may collect basic analytics data (page views, browser type) to
            understand how visitors use our site. We do not sell your personal
            information.
          </p>

          <h2 className="font-serif text-xl font-semibold text-primary">
            How we use your information
          </h2>
          <p>
            We use contact form submissions to respond to your inquiries and
            coordinate care. Clinical information is handled separately through
            secure clinical processes, not through this website.
          </p>

          <h2 className="font-serif text-xl font-semibold text-primary">
            Third-party services
          </h2>
          <p>
            Our website may use third-party services including Cloudflare
            (hosting), form processing, Jane App (appointment booking), and
            analytics. These services have their own privacy policies.
          </p>

          <h2 className="font-serif text-xl font-semibold text-primary">
            Contact
          </h2>
          <p>
            Questions about this policy? Email{" "}
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="text-primary hover:underline"
            >
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </div>
      </Section>
    </>
  );
}