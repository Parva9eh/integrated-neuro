import Image from "next/image";

type SectionImageProps = {
  src: string;
  alt: string;
  aspect?: "wide" | "landscape" | "photo";
  priority?: boolean;
  className?: string;
};

const aspectClasses = {
  wide: "aspect-21/9 md:aspect-5/2",
  landscape: "aspect-3/2",
  photo: "aspect-4/3",
};

export function SectionImage({
  src,
  alt,
  aspect = "wide",
  priority = false,
  className = "",
}: SectionImageProps) {
  return (
    <figure
      className={`overflow-hidden rounded-2xl border-2 border-border bg-card shadow-(--shadow-card) ring-1 ring-primary/10 ${className}`}
    >
      <div className={`relative ${aspectClasses[aspect]}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={priority}
        />
      </div>
    </figure>
  );
}