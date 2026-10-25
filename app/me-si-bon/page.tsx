import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { SignatureVisual } from "@/components/SignatureVisual";
import { MesibonExplorer } from "@/components/MesibonExplorer";
import { mesibonWhyChoose } from "@/data/mesibon-products";
import { whatsappLink } from "@/data/business";
import { Button } from "@/components/Button";
import { IconChat } from "@/components/icons";

export const metadata: Metadata = {
  title: "Me Si Bon Essential Oils",
  description:
    "Me Si Bon 100% pure essential oils, blends, rollers, lotions, and sprays — available at Clinique Estique, Middelburg.",
  alternates: { canonical: "/me-si-bon" },
};

export default function MesiBonPage() {
  return (
    <div className="pb-24">
      <section className="container-x grid gap-12 py-16 md:grid-cols-2 md:items-center md:py-24">
        <Reveal>
          <p className="font-label text-xs uppercase tracking-widest2 text-sage-deep">Me Si Bon</p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-charcoal md:text-5xl">
            100% pure essential oils, for the salon chair and for home.
          </h1>
          <p className="mt-5 font-body leading-relaxed text-charcoal/75">
            Me Si Bon oils are steam-distilled or cold-pressed and never diluted with synthetic
            ingredients — a clean, concentrated range used in treatments at Clinique Estique and
            available to take home.
          </p>
          <div className="mt-8">
            <Button
              href={whatsappLink("Hi Clinique Estique, I'd like to enquire about Me Si Bon products.")}
              external
              icon={<IconChat className="h-4 w-4" />}
            >
              Enquire on WhatsApp
            </Button>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <SignatureVisual type="oils" className="w-full" />
        </Reveal>
      </section>

      <section className="container-x">
        <Reveal>
          <h2 className="font-display text-2xl text-charcoal">Why choose Me Si Bon?</h2>
        </Reveal>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mesibonWhyChoose.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-md border border-grey/60 bg-white p-6">
                <p className="font-display text-lg text-charcoal">{item.title}</p>
                <p className="mt-2 font-body text-sm leading-relaxed text-charcoal/65">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-x mt-20">
        <Reveal>
          <h2 className="font-display text-2xl text-charcoal">Browse the range</h2>
        </Reveal>
        <div className="mt-6">
          <MesibonExplorer />
        </div>
      </section>
    </div>
  );
}
