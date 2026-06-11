type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted" | "primary" | "card";
  /** First section below PageHeader — consistent hero-to-content spacing */
  lead?: boolean;
};

const variants = {
  default: "bg-background",
  muted: "section-contour",
  primary: "section-primary-pattern text-white",
  card: "bg-card border-y border-border",
};

const spacing = {
  default: "py-20 md:py-28",
  lead: "py-10 sm:py-12 md:py-16",
} as const;

export function Section({
  children,
  className = "",
  id,
  variant = "default",
  lead = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${spacing[lead ? "lead" : "default"]} ${variants[variant]} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}