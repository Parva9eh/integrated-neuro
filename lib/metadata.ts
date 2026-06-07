import type { Metadata } from "next";
import { siteConfig } from "./site";

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const fullTitle =
    title === "Home" ? siteConfig.name : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description: description ?? siteConfig.description,
    openGraph: {
      title: fullTitle,
      description: description ?? siteConfig.description,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      locale: "en_CA",
      type: "website",
    },
  };
}