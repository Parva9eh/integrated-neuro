type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted" | "primary" | "card";
};

const variants = {
  default: "bg-background",
  muted: "section-contour",
  primary: "section-primary-pattern text-white",
  card: "bg-card border-y border-border",
};

export function Section({
  children,
  className = "",
  id,
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${variants[variant]} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}