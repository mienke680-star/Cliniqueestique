import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { journalPosts } from "@/data/journal";

export const metadata: Metadata = {
  title: "Beauty Journal",
  description:
    "Skincare and treatment guidance from Clinique Estique — facial prep, aftercare basics, IPL explained, and essential oil safety.",
  alternates: { canonical: "/journal" },
};

export default function JournalPage() {
  return (
    <div className="pb-24">
      <section className="container-x py-16 md:py-24">
        <Reveal className="max-w-2xl">
          <p className="font-label text-xs uppercase tracking-widest2 text-sage-deep">
            Beauty Journal
          </p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-charcoal md:text-5xl">
            Guidance to get more from every treatment.
          </h1>
        </Reveal>
      </section>

      <section className="container-x grid gap-6 sm:grid-cols-2">
        {journalPosts.map((post, i) => (
          <Reveal key={post.slug} delay={(i % 2) * 0.1}>
            <Link
              href={`/journal/${post.slug}`}
              className="block h-full rounded-md border border-grey/60 bg-white p-7 transition hover:border-sage-deep"
            >
              <p className="font-label text-xs uppercase tracking-wide text-sage-deep">
                {post.category}
              </p>
              <h2 className="mt-3 font-display text-xl text-charcoal">{post.title}</h2>
              <p className="mt-3 font-body text-sm leading-relaxed text-charcoal/65">
                {post.excerpt}
              </p>
              <span className="mt-5 inline-block font-label text-xs uppercase tracking-wide text-charcoal underline underline-offset-4">
                Read more
              </span>
            </Link>
          </Reveal>
        ))}
      </section>
    </div>
  );
}
