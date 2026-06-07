import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  icon?: string;
  accent?: "primary" | "accent";
};

export function ServiceCard({
  title,
  description,
  href,
  icon,
  accent = "primary",
}: ServiceCardProps) {
  const accentColor = accent === "primary" ? "text-primary" : "text-accent";
  const borderColor =
    accent === "primary" ? "group-hover:border-primary/30" : "group-hover:border-accent/40";

  return (
    <Link
      href={href}
      className={`group flex flex-col rounded-2xl border border-border bg-card p-8 card-elevated transition-all duration-200 hover:-translate-y-0.5 ${borderColor}`}
    >
      {icon && (
        <span className={`mb-4 text-2xl ${accentColor}`} aria-hidden="true">
          {icon}
        </span>
      )}
      <h3 className={`font-serif text-2xl font-semibold ${accentColor}`}>
        {title}
      </h3>
      <p className="mt-3 flex-1 leading-relaxed text-muted">{description}</p>
      <span
        className={`mt-6 inline-flex items-center gap-1 text-sm font-semibold ${accentColor}`}
      >
        Learn more
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}