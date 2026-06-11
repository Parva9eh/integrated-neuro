type PageHeaderProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  eyebrowAccent?: "accent" | "insight" | "primary";
};

const eyebrowColors = {
  accent: "text-accent",
  insight: "text-insight",
  primary: "text-primary",
};

export function PageHeader({
  title,
  subtitle,
  eyebrow,
  eyebrowAccent = "accent",
}: PageHeaderProps) {
  return (
    <div className="page-header-pattern relative overflow-hidden border-b border-border">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "url('/images/neural-accent.svg')",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "bottom",
          backgroundSize: "auto 100%",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:py-24">
        {eyebrow && (
          <p
            className={`text-xs font-bold uppercase tracking-[0.12em] ${eyebrowColors[eyebrowAccent]}`}
          >
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 max-w-4xl font-serif text-3xl font-semibold leading-tight text-primary sm:text-4xl md:text-5xl lg:text-[3.25rem]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}