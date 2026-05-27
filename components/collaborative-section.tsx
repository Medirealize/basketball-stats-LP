"use client"

import { Badge } from "@/components/ui/badge"

const collaborationModes = [
  {
    title: "2人体制",
    borderColor: "border-violet-500",
    isHighlighted: false,
    roles: [
      { name: "得点+ボール", stats: "2PT・3PT・FT・AST・STL・TOV", color: "border-l-emerald-600" },
      { name: "リバウンド+ディフェンス", stats: "OR・DRリバウンド・BLK・ファウル", color: "border-l-blue-600" },
    ],
  },
  {
    title: "3人体制",
    borderColor: "border-sky-400",
    isHighlighted: false,
    roles: [
      { name: "得点", stats: "2PT・3PT・FTの成功/失敗", color: "border-l-emerald-600" },
      { name: "ボール+リバウンド", stats: "AST・STL・TOV・OR・DRリバウンド", color: "border-l-orange-700" },
      { name: "ディフェンス", stats: "ブロック・ファウル", color: "border-l-red-900" },
    ],
  },
  {
    title: "4人体制",
    borderColor: "border-[#F97316]",
    isHighlighted: true,
    roles: [
      { name: "得点", stats: "2PT・3PT・FTの成功/失敗", color: "border-l-emerald-600" },
      { name: "ボール", stats: "アシスト・スティール・ターンオーバー", color: "border-l-orange-700" },
      { name: "リバウンド", stats: "OR・DRリバウンド", color: "border-l-blue-600" },
      { name: "ディフェンス", stats: "ブロック・ファウル", color: "border-l-red-900" },
    ],
  },
]

export function CollaborativeSection() {
  return (
    <section className="py-12 lg:py-20 bg-[#0D0D0D]">
      <div className="w-full max-w-[430px] lg:max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-8">
          <Badge className="bg-[#F97316]/20 text-[#F97316] border-none font-semibold mb-4">
            NEW FEATURE
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-black text-[#F5F5F5] mb-4">
            最大4人で分担記録
          </h2>
          <p className="text-[#737373] leading-relaxed">
            役割URLをシェアするだけ。それぞれの専用UIで同時記録、
            <br className="hidden lg:block" />
            試合後にワンタップで統合。
          </p>
        </div>

        {/* Collaboration Cards */}
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3">
          {collaborationModes.map((mode, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-[280px] lg:w-auto bg-[#1A1A1A] border-2 ${mode.borderColor} rounded-2xl p-5 transition-all duration-300 ${
                mode.isHighlighted ? "animate-pulse-glow" : ""
              }`}
            >
              <h3 className="text-lg font-bold text-[#F5F5F5] mb-4">
                {mode.title}
              </h3>
              <div className="space-y-3">
                {mode.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className={`bg-[#0D0D0D] rounded-xl p-3 border-l-4 ${role.color}`}>
                    <p className="text-sm font-semibold text-[#F5F5F5]">
                      {role.name}
                    </p>
                    <p className="text-xs text-[#737373] mt-1">{role.stats}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mt-6 text-sm text-[#737373] text-center">
          全員が同一アカウントでログイン。安定したインターネット接続を推奨。
        </p>
      </div>
    </section>
  )
}
