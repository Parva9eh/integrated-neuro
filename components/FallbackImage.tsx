"use client";

import Image from "next/image";
import { useState } from "react";

type FallbackImageProps = {
  src: string;
  fallbackSrc: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function FallbackImage({
  src,
  fallbackSrc,
  alt,
  fill,
  width,
  height,
  className,
  sizes,
  priority,
}: FallbackImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const hasFallenBack = currentSrc === fallbackSrc;

  return (
    <Image
      src={currentSrc}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      className={className}
      sizes={sizes}
      priority={priority}
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
      unoptimized={hasFallenBack && fallbackSrc.endsWith(".svg")}
    />
  );
}