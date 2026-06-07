type BadgeProps = {
  children: React.ReactNode;
  variant?: "accent" | "primary" | "outline";
};

const variants = {
  accent: "bg-accent-light text-accent border-accent/20",
  primary: "bg-primary/10 text-primary border-primary/15",
  outline: "bg-card text-muted border-border",
};

export function Badge({ children, variant = "accent" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide ${variants[variant]}`}
    >
      {children}
    </span>
  );
}