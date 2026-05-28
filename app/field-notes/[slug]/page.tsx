import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import {
  fieldNotes,
  getFieldNoteBySlug,
  getFieldNotesByDate,
} from "@/lib/devlog/entries"

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return fieldNotes.map((entry) => ({ slug: entry.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const entry = getFieldNoteBySlug(slug)

  if (!entry) {
    return { title: "フィールドノート" }
  }

  return {
    title: `${entry.title} | フィールドノート`,
    description: entry.teaser,
    robots: { index: false, follow: false },
  }
}

export default async function FieldNoteArticlePage({ params }: PageProps) {
  const { slug } = await params
  const entry = getFieldNoteBySlug(slug)

  if (!entry) {
    notFound()
  }

  const all = getFieldNotesByDate()
  const index = all.findIndex((item) => item.slug === slug)
  const newer = index > 0 ? all[index - 1] : null
  const older = index < all.length - 1 ? all[index + 1] : null

  return (
    <main className="min-h-screen bg-[#0D0D0D] text-[#F5F5F5]">
      <article className="mx-auto max-w-2xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F97316]">
          番外編
        </p>
        <time
          dateTime={entry.date}
          className="mt-4 block text-sm text-[#FBBF24]"
        >
          {entry.date}
        </time>
        <h1 className="mt-2 text-3xl font-black leading-tight">{entry.title}</h1>
        <p className="mt-4 text-[#737373]">{entry.teaser}</p>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-[#D4D4D4]">
          {entry.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <aside className="mt-12 rounded-xl border border-dashed border-[#F97316]/30 bg-[#1A1A1A]/50 p-5 text-sm text-[#737373]">
          <p>
            この記事は公開用の制作メモです。環境変数・RLS・デプロイの実値は意図的に省略しています。
            同じプロンプトを別の Claude Code に渡しても、ここまでの「迷い」は再現されません。
          </p>
        </aside>

        <nav className="mt-12 flex flex-col gap-4 border-t border-[#2A2A2A] pt-8 text-sm sm:flex-row sm:justify-between">
          {newer ? (
            <Link
              href={`/field-notes/${newer.slug}`}
              className="text-[#737373] hover:text-[#F5F5F5] transition-colors"
            >
              ← {newer.title}
            </Link>
          ) : (
            <span />
          )}
          {older ? (
            <Link
              href={`/field-notes/${older.slug}`}
              className="text-right text-[#737373] hover:text-[#F5F5F5] transition-colors sm:ml-auto"
            >
              {older.title} →
            </Link>
          ) : null}
        </nav>

        <p className="mt-10 text-center text-xs text-[#525252]">
          <Link href="/field-notes" className="hover:text-[#737373] transition-colors">
            一覧へ
          </Link>
          <span className="mx-2">·</span>
          <Link href="/" className="hover:text-[#737373] transition-colors">
            LP へ
          </Link>
        </p>
      </article>
    </main>
  )
}
