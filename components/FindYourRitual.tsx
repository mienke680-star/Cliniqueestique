"use client";

import { useState } from "react";
import Link from "next/link";
import { ritualGoals } from "@/data/rituals";
import { ceTreatmentCategories } from "@/data/ce-treatments";
import { whatsappLink } from "@/data/business";
import { ritualMessage } from "@/lib/whatsapp";
import { IconChat } from "./icons";
import { Reveal } from "./Reveal";

export function FindYourRitual() {
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(id: string) {
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));
  }

  const chosen = ritualGoals.filter((g) => selected.includes(g.id));
  const recommendedSlugs = Array.from(new Set(chosen.flatMap((g) => g.categorySlugs)));
  const recommendedCategories = recommendedSlugs
    .map((slug) => ceTreatmentCategories.find((c) => c.slug === slug))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));
  const includesMesibon = recommendedSlugs.includes("me-si-bon");

  return (
    <section className="container-x py-24 md:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-label text-xs uppercase tracking-widest2 text-sage-deep">
          Find Your Ritual
        </p>
        <h2 className="mt-4 font-display text-3xl leading-tight text-charcoal md:text-4xl">
          Not sure where to start? Tell us what you're after.
        </h2>
        <p className="mt-4 font-body text-charcoal/70">
          Select what matters most to you right now. We'll suggest treatment categories to
          explore — this is a guide, not a diagnosis, and every plan is confirmed in person.
        </p>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
        {ritualGoals.map((goal) => {
          const active = selected.includes(goal.id);
          return (
            <button
              key={goal.id}
              onClick={() => toggle(goal.id)}
              aria-pressed={active}
              className={`rounded-full border px-5 py-2.5 font-label text-xs uppercase tracking-wide transition ${
                active
                  ? "border-charcoal bg-charcoal text-white"
                  : "border-grey text-charcoal/70 hover:border-charcoal/50"
              }`}
            >
              {goal.label}
            </button>
          );
        })}
      </Reveal>

      {chosen.length > 0 && (
        <Reveal delay={0.15} className="mx-auto mt-12 max-w-3xl rounded-md border border-grey/70 bg-silver/50 p-8">
          <p className="font-label text-xs uppercase tracking-widest2 text-charcoal">
            Suggested for you
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {recommendedCategories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/treatments/${cat.slug}`}
                  className="flex items-center justify-between rounded-md bg-white px-4 py-3 font-body text-sm text-charcoal transition hover:bg-white/70"
                >
                  <span>{cat.name}</span>
                  <span className="text-xs text-sage-deep">{cat.startingFrom}</span>
                </Link>
              </li>
            ))}
            {includesMesibon && (
              <li>
                <Link
                  href="/me-si-bon"
                  className="flex items-center justify-between rounded-md bg-white px-4 py-3 font-body text-sm text-charcoal transition hover:bg-white/70"
                >
                  <span>Me Si Bon Essential Oils</span>
                </Link>
              </li>
            )}
          </ul>
          <a
            href={whatsappLink(ritualMessage(chosen.map((c) => c.label)))}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-sage-deep px-6 py-3 font-label text-xs uppercase tracking-widest2 text-white transition hover:bg-charcoal"
          >
            <IconChat className="h-4 w-4" />
            Send my ritual to WhatsApp
          </a>
        </Reveal>
      )}
    </section>
  );
}
