"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

type LogoProps = {
  variant?: "full" | "mark";
  className?: string;
  linkToHome?: boolean;
  /** Light backdrop for readability on dark navy surfaces */
  onDark?: boolean;
};

export function Logo({
  variant = "full",
  className = "",
  linkToHome = true,
  onDark = false,
}: LogoProps) {
  const primary =
    variant === "full" ? siteConfig.logo.src : siteConfig.logo.mark;
  const fallback =
    variant === "full" ? siteConfig.logo.fallback : siteConfig.logo.markFallback;
  const [src, setSrc] = useState<string>(primary);

  const imageClasses = onDark
    ? "h-8 w-auto max-w-[150px] contrast-[1.35] saturate-[1.2] brightness-[1.05] sm:h-10 sm:max-w-[220px] md:h-12 md:max-w-[280px]"
    : `contrast-[1.15] saturate-[1.1] ${className}`;

  const image = (
    <Image
      src={src}
      alt={siteConfig.name}
      width={variant === "full" ? 280 : 40}
      height={variant === "full" ? 56 : 40}
      className={`object-contain object-left ${imageClasses}`}
      onError={() => {
        if (src !== fallback) {
          setSrc(fallback);
        }
      }}
      unoptimized={src.endsWith(".svg")}
      priority={variant === "full"}
    />
  );

  const content = onDark ? (
    <span className="inline-flex max-w-[calc(100vw-7rem)] rounded-lg bg-[#0a0a0a] px-2.5 py-1.5 ring-1 ring-white/20 shadow-[0_4px_20px_rgb(0_0_0/0.4)] sm:max-w-none sm:px-4 sm:py-2">
      {image}
    </span>
  ) : (
    image
  );

  if (!linkToHome) {
    return content;
  }

  return (
    <Link href="/" className="group inline-flex shrink-0 items-center">
      {content}
    </Link>
  );
}