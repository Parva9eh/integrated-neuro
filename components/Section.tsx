type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted" | "primary";
};

const variants = {
  default: "bg-background",
  muted: "bg-accent-light/40",
  primary: "bg-primary text-white",
};

export function Section({
  children,
  className = "",
  id,
  variant = "default",
}: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${variants[variant]} ${className}`}>
      <div className="mx-auto max-w-6xl px-6">{children}</div>
    </section>
  );
}