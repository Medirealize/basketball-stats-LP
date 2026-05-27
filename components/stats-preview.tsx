import { Badge } from "@/components/ui/badge"
import { Sparkles, FileText, Shield } from "lucide-react"

const statsData = [
  { number: "4", name: "田中 太郎", pts: 24, rbd: 8, ast: 5, stl: 3, blk: 1, tov: 2, highlight: true },
  { number: "7", name: "佐藤 健", pts: 18, rbd: 4, ast: 7, stl: 2, blk: 0, tov: 3, highlight: false },
  { number: "11", name: "鈴木 翔", pts: 12, rbd: 10, ast: 2, stl: 1, blk: 3, tov: 1, highlight: false },
  { number: "23", name: "山田 大輝", pts: 8, rbd: 3, ast: 4, stl: 4, blk: 0, tov: 2, highlight: false },
]

export function StatsPreview() {
  return (
    <section className="py-12 lg:py-20 bg-[#0D0D0D]">
      <div className="w-full max-w-[430px] lg:max-w-4xl mx-auto px-6">
        <h2 className="text-2xl lg:text-3xl font-black text-[#F5F5F5] text-center mb-8">
          スタッツプレビュー
        </h2>

        {/* Stats Table Card */}
        <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[500px]">
              <thead>
                <tr className="border-b border-[#2A2A2A]">
                  <th className="py-4 px-4 text-left text-xs font-semibold text-[#737373]">#</th>
                  <th className="py-4 px-4 text-left text-xs font-semibold text-[#737373]">選手</th>
                  <th className="py-4 px-4 text-center text-xs font-semibold text-[#737373]">PTS</th>
                  <th className="py-4 px-4 text-center text-xs font-semibold text-[#737373]">RBD</th>
                  <th className="py-4 px-4 text-center text-xs font-semibold text-[#737373]">AST</th>
                  <th className="py-4 px-4 text-center text-xs font-semibold text-[#737373]">STL</th>
                  <th className="py-4 px-4 text-center text-xs font-semibold text-[#737373]">BLK</th>
                  <th className="py-4 px-4 text-center text-xs font-semibold text-[#737373]">TOV</th>
                </tr>
              </thead>
              <tbody>
                {statsData.map((player, index) => (
                  <tr
                    key={index}
                    className={`border-b border-[#2A2A2A] last:border-b-0 ${
                      player.highlight ? "bg-[#F97316]/10" : ""
                    }`}
                  >
                    <td className="py-3 px-4 text-sm text-[#F5F5F5] font-semibold">
                      {player.number}
                    </td>
                    <td className="py-3 px-4 text-sm text-[#F5F5F5]">
                      {player.name}
                    </td>
                    <td className={`py-3 px-4 text-center text-sm font-bold ${
                      player.highlight ? "text-[#F97316]" : "text-[#F5F5F5]"
                    }`}>
                      {player.pts}
                    </td>
                    <td className="py-3 px-4 text-center text-sm text-[#F5F5F5]">
                      {player.rbd}
                    </td>
                    <td className="py-3 px-4 text-center text-sm text-[#F5F5F5]">
                      {player.ast}
                    </td>
                    <td className="py-3 px-4 text-center text-sm text-[#F5F5F5]">
                      {player.stl}
                    </td>
                    <td className="py-3 px-4 text-center text-sm text-[#F5F5F5]">
                      {player.blk}
                    </td>
                    <td className="py-3 px-4 text-center text-sm text-[#F5F5F5]">
                      {player.tov}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 p-4 border-t border-[#2A2A2A]">
            <Badge className="bg-[#FBBF24]/20 text-[#FBBF24] border-none font-semibold">
              <Sparkles className="w-3 h-3 mr-1" />
              AI分析レポート ✦ PREMIUM
            </Badge>
            <Badge className="bg-[#60A5FA]/20 text-[#60A5FA] border-none font-semibold">
              <FileText className="w-3 h-3 mr-1" />
              PDFエクスポート
            </Badge>
          </div>
        </div>

        {/* GDF Highlight Banner */}
        <div className="mt-6 bg-blue-950/40 border border-blue-500/30 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-[#60A5FA] flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-[#60A5FA] mb-1">
                GDF — グッドディフェンス
              </h4>
              <p className="text-xs text-white/60 leading-relaxed">
                一般的なスタッツアプリでは記録されない「守備貢献」を独自指標で可視化。
                チームプレッシャーによるターンオーバー誘発をスコアに反映します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
