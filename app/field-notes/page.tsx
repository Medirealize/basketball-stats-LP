import type { Metadata } from "next"
import Link from "next/link"
import { groupFieldNotesByDate } from "@/lib/devlog/entries"

export const metadata: Metadata = {
  title: "フィールドノート | Basketball Score LP",
  description: "制作の番外編。日付順の開発メモ。",
  robots: { index: false, follow: false },
}

export default function FieldNotesPage() {
  const grouped = groupFieldNotesByDate()

  return (
    <main className="min-h-screen bg-[#0D0D0D] text-[#F5F5F5]">
      <div className="mx-auto max-w-2xl px-6 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F97316]">
          番外編
        </p>
        <h1 className="mt-3 text-3xl font-black">フィールドノート</h1>
        <p className="mt-4 text-sm leading-relaxed text-[#737373]">
          v0 から Cursor、GitHub、Vercel、Supabase まで──この LP を育てた途中経過を、日付ごとに残した制作日誌です。
          再現用の手順書ではありません。読んだあなた専用の、ベンチ裏の話です。
        </p>

        <div className="mt-12 space-y-14">
          {[...grouped.entries()].map(([date, entries]) => (
            <section key={date}>
              <time
                dateTime={date}
                className="text-sm font-semibold text-[#FBBF24]"
              >
                {formatDateLabel(date)}
              </time>
              <ul className="mt-6 space-y-8">
                {entries.map((entry) => (
                  <li key={entry.slug}>
                    <article className="rounded-2xl border border-white/10 bg-[#1A1A1A] p-6 transition-colors hover:border-[#F97316]/40">
                      <Link href={`/field-notes/${entry.slug}`} className="group block">
                        <h2 className="text-xl font-bold text-[#F5F5F5] group-hover:text-[#F97316] transition-colors">
                          {entry.title}
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed text-[#A3A3A3]">
                          {entry.teaser}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {entry.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-[#0D0D0D] px-2.5 py-1 text-xs text-[#737373]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </Link>
                    </article>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-16 text-center text-xs text-[#525252]">
          <Link href="/" className="hover:text-[#737373] transition-colors">
            ← LP に戻る
          </Link>
        </p>
      </div>
    </main>
  )
}

function formatDateLabel(isoDate: string): string {
  const [year, month, day] = isoDate.split("-").map(Number)
  const date = new Date(year, month - 1, day)
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  }).format(date)
}
