import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { IconChat } from "@/components/icons";
import { business, whatsappLink } from "@/data/business";
import brows from "@/public/images/results/brows.jpg";
import lashes from "@/public/images/results/lashes.jpg";
import decolletage from "@/public/images/results/decolletage.jpg";

export const metadata: Metadata = {
  title: "Results & Transformations",
  description:
    "Before-and-after results from Clinique Estique in Middelburg: brows, lashes and pigmentation.",
  alternates: { canonical: "/results" },
};

type Result = {
  title: string;
  src: StaticImageData;
  alt: string;
  // The supplied images are before/after composites; `split` is where the
  // second half starts (percent), so the labels sit on the right halves.
  layout: "side-by-side" | "stacked";
  split: number;
  wide?: boolean;
};

const results: Result[] = [
  {
    title: "Lashes",
    src: lashes,
    alt: "Before and after: natural lashes on top, the same lashes lifted and defined below",
    layout: "stacked",
    split: 48.2,
  },
  {
    title: "Décolleté pigmentation",
    src: decolletage,
    alt: "Before and after: pigmentation spots across the chest on top, visibly clearer skin below",
    layout: "stacked",
    split: 49.4,
  },
  {
    title: "Brows",
    src: brows,
    alt: "Before and after: a softer, sparser brow on the left, a fuller and more defined brow on the right",
    layout: "side-by-side",
    split: 51.2,
    wide: true,
  },
];

const label =
  "absolute rounded-full bg-charcoal/75 px-3 py-1 font-label text-[11px] uppercase tracking-widest2 text-white backdrop-blur-sm";

function ResultCard({ result, sizes }: { result: Result; sizes: string }) {
  const afterPos =
    result.layout === "stacked"
      ? { top: `calc(${result.split}% + 0.75rem)`, left: "0.75rem" }
      : { top: "0.75rem", left: `calc(${result.split}% + 0.75rem)` };

  return (
    <figure>
      <div className="relative overflow-hidden rounded-md bg-charcoal">
        <Image
          src={result.src}
          alt={result.alt}
          placeholder="blur"
          sizes={sizes}
          className="h-auto w-full"
        />
        <span aria-hidden className={label} style={{ top: "0.75rem", left: "0.75rem" }}>
          Before
        </span>
        <span aria-hidden className={label} style={afterPos}>
          After
        </span>
      </div>
      <figcaption className="mt-4 font-display text-xl text-charcoal">{result.title}</figcaption>
    </figure>
  );
}

export default function ResultsPage() {
  const pair = results.filter((r) => !r.wide);
  const wide = results.filter((r) => r.wide);

  return (
    <div className="pb-24 md:pb-32">
      <section className="container-x pb-10 pt-14 md:pb-14 md:pt-20">
        <Reveal className="max-w-2xl">
          <p className="font-label text-xs uppercase tracking-widest2 text-sage-deep">Results</p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-charcoal md:text-5xl">
            Real results, honestly shown.
          </h1>
          <p className="mt-5 max-w-[60ch] font-body text-base leading-relaxed text-charcoal/75">
            Before and after, side by side. Every skin responds differently, so every plan starts
            with a consultation.
          </p>
        </Reveal>
      </section>

      {/* Two portrait composites side by side, the wide brow composite below */}
      <section className="container-x">
        <div className="grid gap-12 md:grid-cols-2 md:gap-8 lg:gap-12">
          {pair.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <ResultCard result={r} sizes="(min-width: 1400px) 640px, (min-width: 768px) 48vw, 92vw" />
            </Reveal>
          ))}
        </div>
        {wide.map((r) => (
          <Reveal key={r.title} className="mx-auto mt-12 max-w-4xl md:mt-16">
            <ResultCard result={r} sizes="(min-width: 1024px) 896px, 92vw" />
          </Reveal>
        ))}

        <p className="mt-12 max-w-[60ch] font-body text-sm text-charcoal/70">
          Results vary from person to person. Advanced treatments are only recommended following a
          consultation with our therapists.
        </p>
      </section>

      <section className="container-x mt-20 md:mt-28">
        <Reveal>
          <div className="flex flex-col items-start gap-6 border-t border-grey pt-12 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl font-display text-2xl leading-snug text-charcoal md:text-3xl">
              See more recent work on Instagram, or tell us what you would like to change.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                href={whatsappLink("Hi Clinique Estique, I'd like to book a consultation.")}
                external
                icon={<IconChat className="h-4 w-4" />}
              >
                Book on WhatsApp
              </Button>
              <Button href={business.instagram.url} external variant="outline">
                View Instagram
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
