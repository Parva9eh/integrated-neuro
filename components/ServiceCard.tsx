import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  accent?: string;
};

export function ServiceCard({
  title,
  description,
  href,
  accent = "border-primary",
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className={`group flex flex-col rounded-2xl border-t-4 ${accent} border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-md`}
    >
      <h3 className="font-serif text-2xl font-semibold text-primary group-hover:text-primary-dark">
        {title}
      </h3>
      <p className="mt-4 flex-1 leading-relaxed text-muted">{description}</p>
      <span className="mt-6 text-sm font-semibold text-primary">
        Learn more →
      </span>
    </Link>
  );
}