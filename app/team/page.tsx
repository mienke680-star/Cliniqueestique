import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the Clinique Estique team in Middelburg, Mpumalanga.",
  alternates: { canonical: "/team" },
};

function Initial({ name }: { name: string }) {
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-sage/25 font-display text-2xl text-charcoal">
      {name.charAt(0)}
    </div>
  );
}

export default function TeamPage() {
  return (
    <div className="pb-24">
      <section className="container-x py-16 md:py-24">
        <Reveal className="max-w-2xl">
          <p className="font-label text-xs uppercase tracking-widest2 text-sage-deep">Our Team</p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-charcoal md:text-5xl">
            The hands behind every treatment.
          </h1>
          <p className="mt-5 font-body text-charcoal/70">
            Real portraits are being added as they're supplied by the clinic — for now, each team
            member is introduced by name and role.
          </p>
        </Reveal>
      </section>

      <section className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member, i) => (
          <Reveal key={member.name} delay={(i % 3) * 0.08}>
            <div className="h-full rounded-3xl border border-grey/60 bg-white p-7">
              <Initial name={member.name} />
              <h2 className="mt-5 font-display text-xl text-charcoal">{member.name}</h2>
              <p className="mt-1 font-label text-xs uppercase tracking-wide text-sage-deep">
                {member.role}
              </p>
              <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/65">{member.bio}</p>
              {member.unverified && (
                <p className="mt-3 font-body text-xs text-charcoal/40">
                  Role pending current confirmation from the clinic.
                </p>
              )}
            </div>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
