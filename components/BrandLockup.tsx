import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

type BrandLockupProps = {
  layout?: "header" | "footer";
  linkToHome?: boolean;
};

const LOGO_HEIGHT = 79;

/** Equal-width slots; header scales down on narrow viewports to avoid crowding the menu. */
const slotWidths = {
  header:
    "w-[5.25rem] min-[360px]:w-[6rem] min-[400px]:w-[6.75rem] sm:w-[8.25rem] md:w-[9.75rem] lg:w-[11.5rem] xl:w-[12.3125rem]",
  footer: "w-full max-w-[10rem] min-[400px]:max-w-[11.5rem] sm:max-w-[12.3125rem]",
} as const;

function LogoSlot({
  src,
  alt,
  href,
  linkToHome,
  widthClass,
}: {
  src: string;
  alt: string;
  href: string;
  linkToHome: boolean;
  widthClass: string;
}) {
  const image = (
    <span
      className={`relative inline-flex shrink-0 items-center justify-start ${widthClass}`}
    >
      <Image
        src={src}
        alt={alt}
        width={389}
        height={LOGO_HEIGHT}
        className="h-auto w-full object-left"
      />
    </span>
  );

  if (!linkToHome) {
    return image;
  }

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 transition-opacity hover:opacity-85"
    >
      {image}
    </Link>
  );
}

export function BrandLockup({
  layout = "header",
  linkToHome = true,
}: BrandLockupProps) {
  const widthClass = slotWidths[layout];

  const integratedMark = (
    <LogoSlot
      src={siteConfig.logo.src}
      alt={siteConfig.name}
      href="/"
      linkToHome={linkToHome}
      widthClass={widthClass}
    />
  );

  const insightMark = (
    <LogoSlot
      src={siteConfig.insightLogo.src}
      alt={siteConfig.insightLogo.alt}
      href={siteConfig.insightLogo.href}
      linkToHome={linkToHome}
      widthClass={widthClass}
    />
  );

  if (layout === "footer") {
    return (
      <div className="max-w-full space-y-3">
        <div className="flex flex-col items-start gap-2.5 sm:gap-3">
          {integratedMark}
          {insightMark}
        </div>
        <p className="max-w-xs text-xs font-medium tracking-wide text-muted sm:max-w-sm">
          One practice · Two service lines
        </p>
      </div>
    );
  }

  return (
    <div
      className="flex min-w-0 max-w-full items-center gap-1.5 min-[360px]:gap-2 sm:gap-2.5 lg:gap-3"
      aria-label={`${siteConfig.name} and ${siteConfig.counsellingBrand}`}
    >
      {integratedMark}
      <span
        className="h-6 w-px shrink-0 self-center bg-border min-[400px]:h-7 sm:h-8 md:h-9 lg:h-10"
        aria-hidden
      />
      {insightMark}
    </div>
  );
}