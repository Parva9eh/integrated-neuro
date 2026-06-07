import type { MetadataRoute } from "next";
import { publicRoutes } from "@/lib/routes";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, "");

  return publicRoutes
    .filter((route) => route !== "/thank-you/")
    .map((route) => ({
      url: `${baseUrl}${route === "/" ? "/" : route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "/" ? 1 : 0.8,
    }));
}