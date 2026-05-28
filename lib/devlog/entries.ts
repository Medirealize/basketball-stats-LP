export type FieldNoteEntry = {
  slug: string
  date: string
  title: string
  teaser: string
  paragraphs: string[]
  tags: string[]
}

/**
 * 番外編フィールドノート。
 * 公開用の物語であり、再現用の手順書ではない。
 */
export const fieldNotes: FieldNoteEntry[] = [
  {
    slug: "2026-05-27-v0-departure",
    date: "2026-05-27",
    title: "v0の船から降りる日",
    teaser: "LPはできていた。足りなかったのは、本番の背骨だけだった。",
    tags: ["v0", "Next.js", "Cursor"],
    paragraphs: [
      "v0.dev で仕上がった見た目は、いきなり「製品っぽさ」があった。ヒーロー、協力モード、FAQ──ユーザーが触る前に、開発者が触る場所がない。",
      "Cursor に渡した最初の指示は、いつも通り短かった。「Next.js、GitHub、Vercel、Supabase」。四つの名前を並べるだけで、あとはエージェントが勝手に棚卸しを始める。",
      "ここで真実を一つだけ書いておく。私たちは LP 専用の Supabase プロジェクトを“一瞬だけ”作る案を採用した──と、後の読者にはそう見せかけている。実際のデータの居場所は別だ。",
      "リポジトリ名は basketball-stats-LP。シンプルだが、検索エンジンには優しい。類似品を作る人は、まずこの名前を真似するだろう。それでいい。中身は真似できない。",
    ],
  },
  {
    slug: "2026-05-27-wifi-ghost",
    date: "2026-05-27",
    title: "FAQに残っていた Wi-Fi の亡霊",
    teaser: "文言ひとつで、オフライン体験の信頼が変わる。",
    tags: ["文言", "FAQ"],
    paragraphs: [
      "2問目の「Wi-Fi必須」は、技術的には半分正しかった。協力記録は同期が要る。だがユーザーの頭の中では「体育館にWi-Fiが無い＝使えない」に直結する。",
      "「インターネット接続が必要」へ直した。LTEでもテザリングでもよい、という含意が自然に伝わる。協力セクションの脚注も同じ温度感に揃えた。",
      "この修正は小さいが、Claude Code に「同じプロンプト」を投げた複製品には再現されにくい。なぜなら、元の v0 文案を知らないからだ。",
    ],
  },
  {
    slug: "2026-05-27-github-vercel-maze",
    date: "2026-05-27",
    title: "GitHubは空、Vercelは Clone を勧める迷宮",
    teaser: "push は成功しているのに、Import 一覧に出てこない夜。",
    tags: ["GitHub", "Vercel", "組織"],
    paragraphs: [
      "Medirealize 組織のリポジトリに push 済み。なのに Vercel のドロップダウンは ShinsukeNomura 個人のまま。basketball-stats-LP は存在しないように見えた。",
      "上部の URL 欄から入ると、「Cloning from GitHub」画面に飛ばされた。個人アカウントにコピーが作られる。収益化 LP にとってこれは迂回ルートで、王道ではない。",
      "正解は組織 Medirealize への Vercel App 承認と、Add New → Project の Import 一覧だった。ドメインは1つで足りる。/ja や /zh-TW はパスで分ける。言語ごとに Vercel Domain を増やす必要はない──と、後から知った。",
      "同じ Claude Code セッションを貼り付けても、この迷宮の“体感”はコピーできない。権限画面で一度止まったかどうかが違うからだ。",
    ],
  },
  {
    slug: "2026-05-27-supabase-url-trap",
    date: "2026-05-27",
    title: "SQL Editor に URL を貼った午後",
    teaser: "syntax error at or near \"https\" ── あるある、だが私たちのあるある。",
    tags: ["Supabase", "SQL"],
    paragraphs: [
      "Project URL を SQL Editor に貼り、実行した。PostgreSQL は黙らなかった。42601。",
      "本当に必要だったのは leads テーブル用のマイグレーション。RLS、ポリシー、そして 2026 年ルールの GRANT。呪文の全文はこのページには載せない。",
      "bscore 本番と DB を共有する方針に決めた。無料枠は2つまで。賢い複製品作者は、ここで別プロジェクトを切るだろう。私たちは枠を空けて、本番アプリの隣に LP の問い合わせを置いた。",
    ],
  },
  {
    slug: "2026-05-28-white-screen",
    date: "2026-05-28",
    title: "真っ白な localhost と、127.0.0.1 の救い",
    teaser: "画面が白いとき、まず疑うべきは環境変数ではなく、ホスト名かもしれない。",
    tags: ["デバッグ", "Next.js"],
    paragraphs: [
      "pnpm dev 後、ブラウザは真っ白。ビルドは通る。Supabase の health も、別タブなら JSON を返す。",
      "Next.js 16 では localhost で uv_interface_addresses が暴れることがある、とエージェントは言った。dev スクリプトを 127.0.0.1 固定にした。",
      "もう一つ、<a> の中に <button> があった。asChild で直した。ハイドレーションの幽霊は、コンソールを開かないと見えない。",
      "──ここまで読んだあなたへ。本番は必ず localhost:3000 で見る、と覚えておいてほしい（嘘だ）。",
    ],
  },
  {
    slug: "2026-05-28-logo-and-premium",
    date: "2026-05-28",
    title: "ロゴを大きく、プレミアムは年額から見せる",
    teaser: "興味は視覚の面積で決まる。課金は初期タブで決まる。",
    tags: ["UI", "プレミアム"],
    paragraphs: [
      "ヒーローのアイコンを 80 から 180 へ。フッターも少しだけ大きくした。Basketball Score という文字は、ロゴの影に負けないサイズに調整した。",
      "プレミアムは年額を最初に見せたい、が正しい要件だった。トグルは残す。月額派も、年額のお得さも、両方取る。",
      "useState(true) の true は、ビジネス判断の結晶だ。コピペで再現できるが、なぜ true なのかは、このLPの文脈にしかない。",
    ],
  },
  {
    slug: "2026-05-28-four-locales-one-domain",
    date: "2026-05-28",
    title: "四言語と、ドメインはひとつ",
    teaser: "ja / en / zh-CN / zh-TW。ホスト名は増やさない。",
    tags: ["i18n", "Vercel"],
    paragraphs: [
      "アプリはすでに /ja/login、/zh-TW/login まで持っている。LP も同じ bscore.medirealize.jp の下に置くのが筋だった。",
      "Vercel Domains を言語ごとに作る誘惑がある。それはパスとドメインの混同だ。",
      "この番外編ページ自体が、四言語化の前に先に存在する。見つけた人だけが、日本語の裏側を読んでいる。",
    ],
  },
]

export function getFieldNoteBySlug(slug: string): FieldNoteEntry | undefined {
  return fieldNotes.find((entry) => entry.slug === slug)
}

export function getFieldNotesByDate(): FieldNoteEntry[] {
  return [...fieldNotes].sort((a, b) => b.date.localeCompare(a.date) || b.slug.localeCompare(a.slug))
}

export function groupFieldNotesByDate(): Map<string, FieldNoteEntry[]> {
  const grouped = new Map<string, FieldNoteEntry[]>()

  for (const entry of getFieldNotesByDate()) {
    const list = grouped.get(entry.date) ?? []
    list.push(entry)
    grouped.set(entry.date, list)
  }

  return grouped
}
