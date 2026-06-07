import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  icon?: string;
  accent?: "primary" | "accent" | "insight";
};

const accentStyles = {
  primary: {
    text: "text-primary",
    border: "group-hover:border-primary/30",
    card: "card-accent-primary",
  },
  accent: {
    text: "text-accent",
    border: "group-hover:border-accent/40",
    card: "card-accent-accent",
  },
  insight: {
    text: "text-insight",
    border: "group-hover:border-insight/40",
    card: "card-accent-insight",
  },
};

export function ServiceCard({
  title,
  description,
  href,
  icon,
  accent = "primary",
}: ServiceCardProps) {
  const styles = accentStyles[accent];

  return (
    <Link
      href={href}
      className={`card-hover-lift group flex flex-col rounded-2xl border border-border bg-card p-6 card-elevated md:p-8 ${styles.border} ${styles.card}`}
    >
      {icon && (
        <span className={`mb-4 text-2xl ${styles.text}`} aria-hidden="true">
          {icon}
        </span>
      )}
      <h3 className={`font-serif text-2xl font-semibold ${styles.text}`}>
        {title}
      </h3>
      <p className="mt-3 flex-1 leading-relaxed text-muted">{description}</p>
      <span
        className={`mt-6 inline-flex items-center gap-1 text-sm font-semibold ${styles.text}`}
      >
        Learn more
        <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}