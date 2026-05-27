import { ClipboardList, BarChart3, User } from "lucide-react"

const personas = [
  {
    icon: ClipboardList,
    iconColor: "text-[#F97316]",
    title: "チームスタッフ・マネージャー",
    body: "紙のスコアシートでの手計算から卒業。試合中のデータが即座に集計される。",
  },
  {
    icon: BarChart3,
    iconColor: "text-[#60A5FA]",
    title: "コーチ・監督",
    body: "試合後すぐにスタッツで振り返り。AIレポートで選手ごとの課題を把握。",
  },
  {
    icon: User,
    iconColor: "text-[#FBBF24]",
    title: "選手本人・保護者",
    body: "自分のスタッツを試合ごとに記録・蓄積。成長を数字で確認できる。",
  },
]

export function TargetAudienceSection() {
  return (
    <section className="py-12 lg:py-20 bg-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#F5F5F5] text-center mb-10">
          こんな人におすすめ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personas.map((persona, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] border-l-4 border-[#F97316] rounded-2xl p-5"
            >
              <persona.icon className={`w-8 h-8 ${persona.iconColor} mb-4`} />
              <h3 className="text-lg font-bold text-[#F5F5F5] mb-2">
                {persona.title}
              </h3>
              <p className="text-[#A3A3A3] text-sm leading-relaxed">
                {persona.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
