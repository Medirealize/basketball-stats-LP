"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Crown, Check } from "lucide-react"

const premiumFeatures = [
  "AIスタッツ分析レポート",
  "PDFスコアシート出力",
  "クラウド同期・複数端末対応",
  "試合数無制限",
  "詳細ターンオーバー追跡",
]

export function PremiumSection() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="py-12 lg:py-20 bg-[#0D0D0D]">
      <div className="w-full max-w-[430px] lg:max-w-xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <Crown className="w-8 h-8 text-[#FBBF24]" />
          <h2 className="text-2xl lg:text-3xl font-black text-[#F5F5F5]">
            プレミアムプラン
          </h2>
        </div>

        {/* Features List */}
        <div className="space-y-4 mb-8">
          {premiumFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-[#FBBF24]/20 flex items-center justify-center">
                <Check className="w-3 h-3 text-[#FBBF24]" />
              </div>
              <span className="text-[#F5F5F5]">✦ {feature}</span>
            </div>
          ))}
        </div>

        {/* Pricing Card */}
        <div className="bg-[#1A1A1A] border-2 border-[#FBBF24]/50 rounded-2xl p-6 gold-glow">
          {/* Toggle */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                !isYearly
                  ? "bg-[#FBBF24] text-[#0D0D0D]"
                  : "bg-[#2A2A2A] text-[#737373]"
              }`}
            >
              月額プラン
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                isYearly
                  ? "bg-[#FBBF24] text-[#0D0D0D]"
                  : "bg-[#2A2A2A] text-[#737373]"
              }`}
            >
              年額プラン
            </button>
          </div>

          {/* Price */}
          <div className="text-center mb-6">
            <div className="text-4xl font-black text-[#F5F5F5]">
              {isYearly ? "¥6,000" : "¥680"}
              <span className="text-lg font-normal text-[#737373]">
                {isYearly ? "/年" : "/月"}
              </span>
            </div>
            {isYearly && (
              <div className="mt-2">
                <p className="text-sm text-[#737373]">月換算 ¥500</p>
                <p className="text-sm text-[#FBBF24] font-semibold">年間 ¥2,160 お得！</p>
              </div>
            )}
          </div>

          {/* CTA Button */}
          <a href="https://bscore.medirealize.jp/ja/login">
            <Button className="w-full bg-[#FBBF24] hover:bg-[#F59E0B] text-[#0D0D0D] font-bold rounded-2xl py-6 text-base gold-glow">
              プレミアムを試す
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
