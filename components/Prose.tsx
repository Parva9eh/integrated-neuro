type ProseProps = {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "lg";
};

export function Prose({
  children,
  className = "",
  size = "default",
}: ProseProps) {
  const sizeClass = size === "lg" ? "text-lg" : "text-base";

  return (
    <div
      className={`prose-content mx-auto max-w-3xl leading-relaxed text-muted ${sizeClass} ${className}`}
    >
      {children}
    </div>
  );
}