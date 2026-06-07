type PageHeaderProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
};

export function PageHeader({ title, subtitle, eyebrow }: PageHeaderProps) {
  return (
    <div className="page-header-pattern border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        {eyebrow && (
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 max-w-4xl font-serif text-4xl font-semibold leading-tight text-primary md:text-5xl lg:text-[3.25rem]">
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