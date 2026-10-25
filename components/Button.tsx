import Link from "next/link";
import { Magnetic } from "./MagneticButton";

type Variant = "solid" | "outline" | "ghost";

// Brand button system: primary in deep sage-grey, secondary as a hairline
// outline, tertiary as an underlined text link.
const variantClasses: Record<Variant, string> = {
  solid: "bg-sage-deep text-white shadow-[0_10px_24px_-14px_rgba(68,74,84,0.55)] hover:bg-charcoal",
  outline: "border border-charcoal/45 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-white",
  ghost: "text-charcoal underline decoration-sage underline-offset-[6px] hover:text-sage-deep hover:decoration-sage-deep",
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
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-label text-xs uppercase tracking-widest2 transition duration-300 ease-out active:scale-[0.98] ${variantClasses[variant]} ${className}`;

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
