import Link from "next/link"

export function DevelopmentStorySection() {
  return (
    <section className="py-12 lg:py-16 bg-[#0D0D0D] border-y border-white/10">
      <div className="w-full max-w-[430px] lg:max-w-4xl mx-auto px-6">
        <div className="rounded-2xl bg-[#1A1A1A] border border-[#F97316]/40 p-6 lg:p-8">
          <p className="text-xs font-bold tracking-[0.2em] text-[#F97316]">番外編</p>
          <h2 className="mt-3 text-2xl lg:text-3xl font-black text-[#F5F5F5]">
            このアプリの開発秘話
          </h2>
          <p className="mt-4 text-sm lg:text-base leading-relaxed text-[#A3A3A3]">
            STLを誰が担当すると試合終盤で記録が崩れないか、Foul入力をどの順番で置くと迷わないか、
            得点ボタンをどの局面で優先するか。バスケの試合展開から逆算した調整ログを日付ごとに公開しています。
          </p>
          <div className="mt-6">
            <Link
              href="/field-notes"
              className="inline-flex items-center justify-center rounded-xl bg-[#F97316] hover:bg-[#EA580C] text-white font-bold px-5 py-3 transition-colors"
            >
              開発秘話を読む
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
