import Link from "next/link";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  external?: boolean;
  className?: string;
  size?: "default" | "sm";
};

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow-md",
  secondary:
    "bg-accent text-white hover:bg-[#4f7358] shadow-sm hover:shadow-md",
  outline:
    "border-2 border-primary/80 text-primary hover:bg-primary hover:text-white hover:border-primary",
  ghost:
    "text-primary hover:bg-accent-muted",
};

const sizes = {
  default: "px-6 py-3 text-sm",
  sm: "px-4 py-2 text-sm",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  size = "default",
}: CTAButtonProps) {
  const classes = `inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}