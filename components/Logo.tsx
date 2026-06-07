"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/lib/site";

type LogoProps = {
  variant?: "full" | "mark";
  className?: string;
  linkToHome?: boolean;
};

export function Logo({
  variant = "full",
  className = "",
  linkToHome = true,
}: LogoProps) {
  const primary =
    variant === "full" ? siteConfig.logo.src : siteConfig.logo.mark;
  const fallback =
    variant === "full" ? siteConfig.logo.fallback : siteConfig.logo.markFallback;
  const [src, setSrc] = useState<string>(primary);

  const image = (
    <Image
      src={src}
      alt={siteConfig.name}
      width={variant === "full" ? 200 : 40}
      height={variant === "full" ? 40 : 40}
      className={`object-contain object-left ${className}`}
      onError={() => {
        if (src !== fallback) {
          setSrc(fallback);
        }
      }}
      unoptimized={src.endsWith(".svg")}
      priority={variant === "full"}
    />
  );

  if (!linkToHome) {
    return image;
  }

  return (
    <Link href="/" className="group inline-flex shrink-0 items-center">
      {image}
    </Link>
  );
}