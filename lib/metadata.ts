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

  const desc = description ?? siteConfig.description;

  return {
    title: fullTitle,
    description: desc,
    openGraph: {
      title: fullTitle,
      description: desc,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      locale: "en_CA",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description: desc,
    },
  };
}