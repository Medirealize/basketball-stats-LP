import { Check, X } from "lucide-react"

const comparisons = [
  {
    before: "試合後に手計算で集計",
    after: "リアルタイムで自動集計",
  },
  {
    before: "1人で全スタッツは限界",
    after: "最大4人で役割を分担して記録",
  },
  {
    before: "データがその場限り",
    after: "クラウドで蓄積・どの端末でも確認",
  },
  {
    before: "守備貢献は数値化できない",
    after: "GDFで「ディフェンスの良さ」を数値化",
  },
  {
    before: "分析は勘と経験",
    after: "AIが自動でレポート生成",
  },
  {
    before: "PDFや画像化が手間",
    after: "ワンタップでエクスポート",
  },
]

export function ComparisonSection() {
  return (
    <section className="py-12 lg:py-20 bg-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#F5F5F5] text-center mb-10">
          従来の方法と比べると
        </h2>

        <div className="max-w-3xl mx-auto bg-[#1A1A1A] rounded-2xl overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-2 border-b border-white/10">
            <div className="p-4 text-center border-r border-white/10">
              <span className="text-[#737373] font-semibold text-sm md:text-base">
                {"📋 "}従来（紙・メモ）
              </span>
            </div>
            <div className="p-4 text-center">
              <span className="text-[#F97316] font-semibold text-sm md:text-base">
                {"🏀 "}Basketball Score
              </span>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-2 ${
                index !== comparisons.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              <div className="p-4 border-r border-white/10 flex items-center gap-2">
                <X className="w-4 h-4 text-[#737373] flex-shrink-0" />
                <span className="text-[#737373] text-sm">{row.before}</span>
              </div>
              <div className="p-4 flex items-center gap-2">
                <Check className="w-4 h-4 text-[#F97316] flex-shrink-0" />
                <span className="text-[#F5F5F5] text-sm">{row.after}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
