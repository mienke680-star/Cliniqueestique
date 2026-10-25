// Official Clinique Estique logo artwork (Wildchild Design), taken directly
// from the supplied CE_LOGO.pdf as vector paths. Nothing is redrawn or
// retyped: the only processing was removing each page's background and
// trimming the canvas to the artwork. Colour follows `currentColor`, so the
// same file serves the light-ground (charcoal) and dark-ground (white)
// versions shown in the brand document.

const variants = {
  monogram: { src: "/brand/logo/ce-monogram.svg", aspect: 216.08 / 129.85 },
  wordmark: { src: "/brand/logo/ce-wordmark.svg", aspect: 465.51 / 62.59 },
  horizontal: { src: "/brand/logo/ce-logo-horizontal.svg", aspect: 523.48 / 170.99 },
  stacked: { src: "/brand/logo/ce-logo-stacked.svg", aspect: 389.82 / 228.91 },
  full: { src: "/brand/logo/ce-logo-full.svg", aspect: 605.16 / 322.78 },
} as const;

export type LogoVariant = keyof typeof variants;

export function BrandLogo({
  variant,
  className,
  label = "Clinique Estique",
}: {
  variant: LogoVariant;
  className?: string;
  label?: string;
}) {
  const { src, aspect } = variants[variant];
  const mask = `url(${src}) center / contain no-repeat`;
  return (
    <span
      role="img"
      aria-label={label}
      className={`inline-block bg-current ${className ?? ""}`}
      style={{ aspectRatio: aspect, WebkitMask: mask, mask }}
    />
  );
}

export function LogoMark({ className }: { className?: string }) {
  return <BrandLogo variant="monogram" className={className} label="Clinique Estique monogram" />;
}
