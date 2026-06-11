type MapEmbedProps = {
  embedSrc: string;
  mapsLink: string;
  title: string;
  className?: string;
};

export function MapEmbed({
  embedSrc,
  mapsLink,
  title,
  className = "",
}: MapEmbedProps) {
  return (
    <div className={`flex min-w-0 flex-col ${className}`}>
      <div className="relative aspect-4/3 w-full min-h-44 overflow-hidden rounded-xl border border-border bg-accent-muted shadow-(--shadow-soft) sm:min-h-52 sm:rounded-2xl lg:min-h-0 lg:flex-1 lg:aspect-auto">
        <iframe
          src={embedSrc}
          title={title}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <p className="mt-2.5 text-sm sm:mt-3">
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary hover:underline"
        >
          Open in Google Maps
        </a>
      </p>
    </div>
  );
}