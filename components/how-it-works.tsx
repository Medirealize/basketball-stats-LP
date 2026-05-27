const steps = [
  {
    number: 1,
    title: "試合を作成・選手を登録",
  },
  {
    number: 2,
    title: "タップ＆スワイプでリアルタイム記録",
  },
  {
    number: 3,
    title: "試合終了 → スタッツ確認・AI分析・エクスポート",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 lg:py-20 bg-[#0D0D0D]">
      <div className="w-full max-w-[430px] lg:max-w-4xl mx-auto px-6">
        <h2 className="text-2xl lg:text-3xl font-black text-[#F5F5F5] text-center mb-12">
          使い方
        </h2>

        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-6 left-[15%] right-[15%] h-0.5 bg-[#F97316]/30" />

          {/* Steps */}
          <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="flex lg:flex-col items-center lg:items-center gap-4 lg:gap-3 lg:flex-1">
                {/* Step Number */}
                <div className="relative z-10 w-12 h-12 flex-shrink-0 rounded-full bg-[#F97316] flex items-center justify-center orange-glow">
                  <span className="text-white font-black text-lg">{step.number}</span>
                </div>
                
                {/* Arrow for Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-6 mt-14 w-0.5 h-8 bg-[#F97316]/30" />
                )}
                
                {/* Step Title */}
                <p className="text-sm lg:text-base text-[#F5F5F5] lg:text-center font-medium leading-relaxed">
                  {step.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
