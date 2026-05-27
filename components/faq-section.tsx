"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "無料で使えますか？",
    answer:
      "はい。基本的なスタッツ記録（試合3件まで）は無料でご利用いただけます。AI分析・PDF出力・クラウド同期・試合数無制限はプレミアムプラン（月額¥680 / 年額¥6,000）でご利用いただけます。",
  },
  {
    question: "オフラインでも使えますか？",
    answer:
      "スタッツの記録はオフラインでも可能です。クラウド同期・協力記録モードはインターネット接続が必要です。",
  },
  {
    question: "協力記録モードはどうやって使いますか？",
    answer:
      "マスターが👥ボタンから人数（2〜4人）を選び、各担当のURLをLINEやAirDropで共有するだけです。受け取った人は同一アカウントでブラウザを開けば、担当スタッツ専用の画面が起動します。",
  },
  {
    question: "iPhoneとAndroid両方で使えますか？",
    answer:
      "はい。PWA（ウェブアプリ）のため、Safari・Chrome等のブラウザがあればどの端末でも動作します。ホーム画面に追加するとネイティブアプリのように使えます。",
  },
  {
    question: "データはどこに保存されますか？",
    answer:
      "端末のローカルストレージに保存されます。プレミアムプランではSupabaseのクラウドにも自動バックアップされます。",
  },
]

export function FaqSection() {
  return (
    <section className="py-12 lg:py-20 bg-[#0D0D0D]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#F5F5F5] text-center mb-10">
          よくある質問
        </h2>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-[#1A1A1A] border border-white/10 rounded-xl px-5 data-[state=open]:border-[#F97316]/50"
              >
                <AccordionTrigger className="text-[#F5F5F5] text-left hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#A3A3A3] pb-4 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
