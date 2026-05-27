import { Zap, Brain, FileDown, Shield } from "lucide-react"

const features = [
  {
    icon: Zap,
    iconColor: "text-[#F97316]",
    title: "リアルタイム記録",
    description: "2PT・3PT・FT・リバウンド・スティール…全スタッツをワンタップで",
  },
  {
    icon: Shield,
    iconColor: "text-[#60A5FA]",
    title: "グッドディフェンス（GDF）を数値化",
    description: "スティールだけでなく、ディフェンスのプレッシャーで奪ったターンオーバーもチーム貢献としてカウント。「守備が良かった」を、データで証明する。",
  },
  {
    icon: Brain,
    iconColor: "text-[#60A5FA]",
    title: "AIスタッツ分析",
    description: "試合終了後にAIが自動でレポート生成。強み・改善点を即把握",
  },
  {
    icon: FileDown,
    iconColor: "text-[#FBBF24]",
    title: "PDF・画像エクスポート",
    description: "スコアシートをPDFや画像で保存。チームへの共有も簡単",
  },
]

export function FeatureCards() {
  return (
    <section className="py-12 lg:py-20 bg-[#0D0D0D]">
      <div className="w-full max-w-[430px] lg:max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6"
            >
              <feature.icon className={`w-8 h-8 ${feature.iconColor} mb-4`} />
              <h3 className="text-lg font-bold text-[#F5F5F5] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#737373] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
