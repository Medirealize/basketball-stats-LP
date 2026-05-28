import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-12 bg-[#0D0D0D] border-t border-[#2A2A2A]">
      <div className="w-full max-w-[430px] lg:max-w-4xl mx-auto px-6">
        {/* App Name & Tagline */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Image
              src="/images/icon-512.webp"
              alt="Basketball Score App"
              width={64}
              height={64}
              className="rounded-xl"
            />
            <h3 className="text-xl font-bold text-[#F5F5F5]">Basketball Score</h3>
          </div>
          <p className="text-sm text-[#737373]">
            みんなで作るバスケスタッツ！
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <Link
            href="#how-it-works"
            className="text-[#737373] hover:text-[#F5F5F5] transition-colors"
          >
            使い方
          </Link>
          <Link
            href="https://bscore.medirealize.jp/ja/terms"
            className="text-[#737373] hover:text-[#F5F5F5] transition-colors"
          >
            利用規約
          </Link>
          <Link
            href="https://bscore.medirealize.jp/ja/privacy"
            className="text-[#737373] hover:text-[#F5F5F5] transition-colors"
          >
            プライバシーポリシー
          </Link>
          <Link
            href="https://bscore.medirealize.jp/ja/legal"
            className="text-[#737373] hover:text-[#F5F5F5] transition-colors"
          >
            特定商取引法に基づく表記
          </Link>
          <Link
            href="/field-notes"
            className="text-[#F97316] hover:text-[#FB923C] transition-colors font-semibold"
          >
            開発秘話
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-[#525252]">
          © 2025 Basketball Score
        </p>
      </div>
    </footer>
  )
}
