import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { journalPosts, findJournalPost } from "@/data/journal";
import { Reveal } from "@/components/Reveal";

export function generateStaticParams() {
  return journalPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = findJournalPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/journal/${post.slug}` },
  };
}

export default function JournalPostPage({ params }: { params: { slug: string } }) {
  const post = findJournalPost(params.slug);
  if (!post) notFound();

  return (
    <article className="container-x max-w-2xl py-16 pb-24 md:py-24">
      <Reveal>
        <Link
          href="/journal"
          className="font-label text-xs uppercase tracking-widest2 text-sage-deep hover:text-charcoal"
        >
          ← Beauty Journal
        </Link>
        <p className="mt-5 font-label text-xs uppercase tracking-wide text-sage-deep">
          {post.category}
        </p>
        <h1 className="mt-3 font-display text-3xl leading-tight text-charcoal md:text-4xl">
          {post.title}
        </h1>
        <div className="mt-8 space-y-5 font-body leading-relaxed text-charcoal/75">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
        <p className="mt-8 border-t border-grey/70 pt-6 font-body text-xs text-charcoal/50">
          General guidance only, not a substitute for advice from your therapist. Always consult
          our team about what's right for your skin.
        </p>
      </Reveal>
    </article>
  );
}
