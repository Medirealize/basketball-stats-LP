"use client"

import { Button } from "@/components/ui/button"
import { Smartphone, Cloud, Users } from "lucide-react"
import Image from "next/image"

function PhoneMockup() {
  return (
    <div className="relative w-[280px] h-[560px] mx-auto">
      {/* Phone Frame */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2A2A2A] to-[#1A1A1A] rounded-[3rem] border-[8px] border-[#1A1A1A] shadow-2xl">
        {/* Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#0D0D0D] rounded-full" />
        
        {/* Screen Content */}
        <div className="absolute top-10 left-2 right-2 bottom-2 bg-[#0D0D0D] rounded-[2rem] overflow-hidden p-3">
          {/* Header */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#60A5FA] text-[10px]">ホーム</span>
            <span className="text-white text-xs font-medium">練習試合</span>
            <span className="text-[#F97316] text-[10px] bg-[#F97316]/20 px-2 py-0.5 rounded">試合終了</span>
          </div>

          {/* Score Header */}
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-bold text-sm">TEAM A</span>
            <div className="flex items-center gap-1">
              <span className="bg-white text-black text-[10px] px-2 py-0.5 rounded-full font-bold">1Q</span>
              <span className="text-[#737373] text-[10px]">2Q</span>
              <span className="text-[#737373] text-[10px]">3Q</span>
              <span className="text-[#737373] text-[10px]">4Q</span>
              <span className="text-[#FBBF24] text-[10px]">OT1</span>
            </div>
            <span className="text-white font-bold text-sm">TEAM B</span>
          </div>

          {/* Score */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-white font-black text-3xl">24</span>
            <span className="text-[#737373]">-</span>
            <span className="text-white font-black text-3xl">18</span>
          </div>

          {/* Opponent Team Panel */}
          <div className="bg-[#1A1A1A] rounded-xl p-2 mb-2 border-l-2 border-[#FBBF24]">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1">
                <span className="text-[8px] bg-[#333] text-[#737373] px-1 rounded">相手</span>
                <span className="text-white text-[10px]">TEAM B</span>
              </div>
              <span className="text-[#737373] text-[8px] bg-[#333] px-1.5 py-0.5 rounded">交代</span>
            </div>
            <div className="flex gap-1">
              {["#1", "#3", "#9", "#12", "#20"].map((num) => (
                <div key={num} className="flex-1 bg-[#2A2A2A] rounded-lg py-1.5 text-center">
                  <span className="text-white text-[10px] font-bold block">{num}</span>
                  <span className="text-[#737373] text-[8px]">F:0</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Buttons */}
          <div className="mb-2">
            <div className="flex gap-1 mb-1">
              <button className="flex-1 bg-[#1A1A1A] border border-[#333] rounded py-1 text-[#737373] text-[8px]">簡略</button>
              <button className="flex-1 bg-[#F97316]/20 border border-[#F97316] rounded py-1 text-[#F97316] text-[8px]">詳細記録 PRO</button>
            </div>
            <div className="grid grid-cols-3 gap-1 mb-1">
              <button className="bg-[#1A1A1A] rounded py-1.5 text-white text-[9px]">ORbd</button>
              <button className="bg-[#1A1A1A] rounded py-1.5 text-white text-[9px]">DRbd</button>
              <button className="bg-[#1A1A1A] rounded py-1.5 text-white text-[9px]">Ast</button>
            </div>
            <div className="grid grid-cols-4 gap-1">
              <button className="bg-[#1A1A1A] rounded py-1.5 text-[#60A5FA] text-[9px]">Blk</button>
              <button className="bg-[#1A1A1A] rounded py-1.5 text-white text-[9px]">Stl</button>
              <button className="bg-[#1A1A1A] rounded py-1.5 text-[#FBBF24] text-[9px]">Foul</button>
              <button className="bg-[#1A1A1A] rounded py-1.5 text-[#EF4444] text-[9px]">Tov</button>
            </div>
          </div>

          {/* My Team Panel */}
          <div className="bg-[#1A1A1A] rounded-xl p-2 border-l-2 border-[#22D3EE]">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1">
                <span className="text-[8px] bg-[#22D3EE] text-black px-1 rounded font-bold">マイチーム</span>
                <span className="text-white text-[10px]">TEAM A</span>
              </div>
              <span className="text-[#737373] text-[8px] bg-[#333] px-1.5 py-0.5 rounded">交代</span>
            </div>
            <div className="flex gap-1">
              {["#4", "#14", "#30", "#33", "#37"].map((num) => (
                <div key={num} className="flex-1 bg-[#2A2A2A] rounded-lg py-1.5 text-center">
                  <span className="text-white text-[10px] font-bold block">{num}</span>
                  <span className="text-[#737373] text-[8px]">F:0</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating glow effect */}
      <div className="absolute -inset-4 bg-[#F97316]/20 rounded-[4rem] blur-3xl -z-10" />
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center court-pattern overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-6 py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* App Logo & Title */}
            <div className="mb-6 flex flex-col items-center lg:items-start">
              <Image
                src="/images/icon-512.webp"
                alt="Basketball Score App"
                width={180}
                height={180}
                className="rounded-3xl mb-4 shadow-2xl"
              />
              <h2 className="text-3xl lg:text-4xl font-bold text-[#F5F5F5]">
                Basketball Score
              </h2>
            </div>

            {/* Headline */}
            <h1 className="text-3xl lg:text-5xl font-black text-[#F5F5F5] leading-tight">
              <span className="block">バスケのスタッツを</span>
              <span className="block">みんなで作ろう</span>
            </h1>

            {/* Subtext */}
            <p className="mt-6 text-[#737373] text-base leading-relaxed max-w-md">
              タップするだけ。試合中のスタッツをリアルタイムで記録。
              最大4人で役割を分担して記録できる協力モード搭載。
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button
                asChild
                className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-bold rounded-2xl px-8 py-6 text-base orange-glow"
              >
                <a href="https://bscore.medirealize.jp/ja/login">無料で始める</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="w-full bg-transparent border-white/30 text-white hover:bg-white/10 font-bold rounded-2xl px-8 py-6 text-base"
              >
                <a href="#how-it-works">使い方を見る</a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-[#737373]">
              <div className="flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-[#F97316]" />
                <span>PWA対応</span>
              </div>
              <div className="flex items-center gap-2">
                <Cloud className="w-4 h-4 text-[#60A5FA]" />
                <span>クラウド同期</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#FBBF24]" />
                <span>最大4人協力</span>
              </div>
            </div>
          </div>

          {/* Right: Phone Mockup */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="animate-float">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
