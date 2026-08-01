import Link from "next/link";
import { Magnetic } from "./MagneticButton";

type Variant = "solid" | "outline" | "ghost";

const variantClasses: Record<Variant, string> = {
  solid: "bg-charcoal text-white hover:bg-sage-deep",
  outline: "border border-charcoal text-charcoal hover:bg-charcoal hover:text-white",
  ghost: "text-charcoal hover:text-sage-deep underline underline-offset-4",
};

export function Button({
  href,
  children,
  variant = "solid",
  external = false,
  className = "",
  icon,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
  icon?: React.ReactNode;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-label text-xs uppercase tracking-widest2 transition ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {icon}
      {children}
    </>
  );

  return (
    <Magnetic>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {content}
        </a>
      ) : (
        <Link href={href} className={classes}>
          {content}
        </Link>
      )}
    </Magnetic>
  );
}
