import Link from "next/link"

export function DeveloperBanner() {
  return (
    <section className="py-4 bg-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <div className="bg-[#1A1A1A] border-l-4 border-[#F97316] rounded-r-lg px-5 py-3">
          <p className="text-white/70 italic text-sm md:text-base text-center md:text-left">
            {'"'}試合中に1人でスタッツを取るのは限界だった。だから作った。{'"'}
          </p>
          <p className="mt-2 text-center md:text-left">
            <Link
              href="/field-notes"
              className="text-xs font-semibold tracking-wide text-[#F97316] hover:text-[#FB923C] transition-colors"
            >
              番外編: このLPの開発秘話 →
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
