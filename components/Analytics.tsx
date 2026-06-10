import Script from "next/script";
import { siteConfig } from "@/lib/site";

const beaconToken = process.env.NEXT_PUBLIC_CF_BEACON_TOKEN;

/** Cloudflare RUM only allows http://localhost (no port); skip on local dev hosts. */
function shouldLoadAnalytics(): boolean {
  if (!beaconToken) return false;
  if (process.env.NODE_ENV !== "production") return false;
  return !/localhost|127\.0\.0\.1/i.test(siteConfig.url);
}

export function Analytics() {
  if (!shouldLoadAnalytics()) {
    return null;
  }

  return (
    <Script
      defer
      src="https://static.cloudflareinsights.com/beacon.min.js"
      data-cf-beacon={JSON.stringify({ token: beaconToken })}
      strategy="afterInteractive"
    />
  );
}