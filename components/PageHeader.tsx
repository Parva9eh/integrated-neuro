type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="border-b border-border bg-accent-light/30">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <h1 className="font-serif text-4xl font-semibold text-primary md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}