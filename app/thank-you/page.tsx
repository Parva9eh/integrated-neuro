import Link from "next/link";
import { CTAButton } from "@/components/CTAButton";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createMetadata({
  title: "Thank You",
  description: "Thank you for contacting Integrated Neuro.",
  path: "/thank-you/",
});

export default function ThankYouPage() {
  return (
    <>
      <PageHeader
        title="Thank you"
        subtitle="Your message has been received. We will get back to you shortly."
      />

      <Section lead>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-muted">
            If your inquiry is urgent, please call us at{" "}
            <a
              href={siteConfig.contact.phoneHref}
              className="font-semibold text-primary hover:underline"
            >
              {siteConfig.contact.phone}
            </a>
            .
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <CTAButton href="/" variant="primary">
              Back to Home
            </CTAButton>
            <CTAButton href="/contact/" variant="outline">
              Contact Us
            </CTAButton>
          </div>
          <p className="mt-8 text-sm text-muted">
            Need to send another message?{" "}
            <Link href="/contact/" className="font-medium text-primary hover:underline">
              Contact us again
            </Link>
          </p>
        </div>
      </Section>
    </>
  );
}