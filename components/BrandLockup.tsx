import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

type BrandLockupProps = {
  layout?: "header" | "footer";
  linkToHome?: boolean;
};

const LOGO_HEIGHT = 79;

const slotWidths = {
  header: "w-[197px] sm:w-[217px]",
  footer: "w-[217px] sm:w-[236px]",
} as const;

function LogoSlot({
  src,
  alt,
  href,
  linkToHome,
  widthClass,
  priority = false,
}: {
  src: string;
  alt: string;
  href: string;
  linkToHome: boolean;
  widthClass: string;
  priority?: boolean;
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
        priority={priority}
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
      priority={layout === "header"}
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
        <div className="flex flex-col items-start gap-3">
          {integratedMark}
          {insightMark}
        </div>
        <p className={`${widthClass} text-xs font-medium tracking-wide text-muted`}>
          One practice · Two service lines
        </p>
      </div>
    );
  }

  return (
    <div
      className="flex min-w-0 items-center gap-2.5 sm:gap-3"
      aria-label={`${siteConfig.name} and ${siteConfig.counsellingBrand}`}
    >
      {integratedMark}
      <span className="h-9 w-px shrink-0 self-center bg-border sm:h-10" aria-hidden />
      {insightMark}
    </div>
  );
}