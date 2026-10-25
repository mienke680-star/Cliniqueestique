import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { IconChat } from "@/components/icons";
import { whatsappLink } from "@/data/business";
import { team } from "@/data/team";
import { teamGroupPhoto, teamPortraitFocus, teamPortraits } from "@/data/team-photos";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the Clinique Estique team in Middelburg, Mpumalanga.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  // Founder first, then the team, all at the same card size
  const pictured = team.filter((m) => teamPortraits[m.name]);
  const others = team.filter((m) => !teamPortraits[m.name]);

  return (
    <div className="pb-24 md:pb-32">
      {/* Intro */}
      <section className="container-x pb-10 pt-14 md:pb-14 md:pt-20">
        <Reveal className="max-w-2xl">
          <p className="font-label text-xs uppercase tracking-widest2 text-sage-deep">Our Team</p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-charcoal md:text-5xl">
            The hands behind every treatment.
          </h1>
          <p className="mt-5 max-w-[60ch] font-body text-base leading-relaxed text-charcoal/75">
            A small, close-knit team in Middelburg. Every treatment begins with listening to
            what you want for your skin.
          </p>
        </Reveal>
      </section>

      {/* Group portrait: full photo on phones, a wide crop (all heads kept) from tablet up */}
      <section className="container-x">
        <Reveal>
          <figure className="relative aspect-[1345/1170] w-full overflow-hidden rounded-md bg-charcoal md:aspect-[16/9]">
            <Image
              src={teamGroupPhoto}
              alt="The Clinique Estique team together: Yvette, Lorraine, Christie, Hesri and Erin"
              fill
              priority
              placeholder="blur"
              sizes="(min-width: 1400px) 1320px, 100vw"
              className="object-cover object-top"
            />
          </figure>
        </Reveal>
      </section>

      {/* Team: 5 across on wide screens, 3 on laptops, 2 on tablets, portrait-beside-text rows on phones */}
      <section className="container-x mt-20 md:mt-28">
        <Reveal>
          <h2 className="font-display text-3xl leading-tight text-charcoal md:text-4xl">
            Meet the team
          </h2>
        </Reveal>

        <ul className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-14 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-5 xl:gap-x-6">
          {pictured.map((member, i) => (
            <li key={member.name}>
              <Reveal delay={(i % 5) * 0.07}>
                <article className="grid grid-cols-[38%_1fr] items-start gap-5 sm:block">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-charcoal">
                    <Image
                      src={teamPortraits[member.name]}
                      alt={`Portrait of ${member.name}, ${member.role}`}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1280px) 20vw, (min-width: 1024px) 30vw, (min-width: 640px) 50vw, 45vw"
                      className="object-cover"
                      style={{ transform: "scale(1.35)", transformOrigin: teamPortraitFocus[member.name] }}
                    />
                  </div>
                  <div className="sm:mt-5">
                    <h3 className="font-display text-2xl leading-tight text-charcoal">{member.name}</h3>
                    <p className="mt-1.5 font-label text-xs uppercase tracking-widest2 text-sage-deep">
                      {member.role}
                    </p>
                    <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/75">{member.bio}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        {others.length > 0 && (
          <p className="mt-12 font-body text-sm text-charcoal/70">
            Also on the team:{" "}
            {others.map((m, i) => (
              <span key={m.name}>
                {i > 0 && ", "}
                {m.name} ({m.role})
              </span>
            ))}
          </p>
        )}
      </section>

      {/* Closing invitation */}
      <section className="container-x mt-24 md:mt-32">
        <Reveal>
          <div className="flex flex-col items-start gap-6 border-t border-grey pt-12 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl font-display text-2xl leading-snug text-charcoal md:text-3xl">
              Not sure who to see? Tell us what you have in mind and we'll help you choose the
              right therapist.
            </p>
            <Button
              href={whatsappLink("Hi Clinique Estique, I'd like to book an appointment.")}
              external
              icon={<IconChat className="h-4 w-4" />}
            >
              Book on WhatsApp
            </Button>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
