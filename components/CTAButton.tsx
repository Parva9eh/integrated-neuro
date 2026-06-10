import Link from "next/link";

type CTAButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline" | "outline-light" | "ghost";
  external?: boolean;
  className?: string;
  size?: "default" | "sm";
};

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-light shadow-sm hover:shadow-md",
  secondary:
    "bg-accent text-white hover:bg-accent-dark shadow-[0_2px_12px_rgb(101_188_123/0.25)]",
  accent:
    "bg-accent text-white hover:bg-accent-dark shadow-[0_2px_12px_rgb(101_188_123/0.25)]",
  outline:
    "border-2 border-primary/25 text-primary hover:bg-primary hover:text-white hover:border-primary",
  "outline-light":
    "border-2 border-card text-primary hover:bg-card hover:text-primary shadow-sm",
  ghost:
    "text-primary hover:bg-accent-light",
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
  const classes = `inline-flex items-center justify-center rounded-full font-semibold tracking-wide transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

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