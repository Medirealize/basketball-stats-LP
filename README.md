# Basketball Score LP

`v0.dev` で作成した LP を、`Next.js + Supabase + Vercel + GitHub` で運用するためのプロジェクトです。

## 1) ローカル開発セットアップ

1. 依存をインストール

```bash
pnpm install
```

2. 環境変数を作成

```bash
cp .env.example .env.local
```

3. `.env.local` に以下を設定

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

4. 開発サーバー起動

```bash
pnpm dev
```

5. ヘルスチェック

`http://localhost:3000/api/health` で Supabase 接続確認ができます。

## 2) Supabase 初期化

1. Supabase で新規プロジェクトを作成
2. SQL Editor で `supabase/migrations/20260527100000_create_leads_table.sql` を実行
3. Project Settings > API から URL / anon key / service role key を取得して `.env.local` に設定

## 3) GitHub 連携

リモートは以下に設定済みです。

- https://github.com/Medirealize/basketball-stats-LP.git

初回 push:

```bash
git add .
git commit -m "chore: bootstrap LP project stack"
git push -u origin main
```

## 4) Vercel 連携

チーム `shinsukenomuras-projects` 内にプロジェクトを作成します。

1. [Vercel Dashboard](https://vercel.com/shinsukenomuras-projects) を開く
2. **Add New… → Project**
3. GitHub の `Medirealize/basketball-stats-LP` を Import
4. Framework Preset: **Next.js**（自動検出）
5. Environment Variables に `.env.local` と同じ3項目を登録
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
6. **Deploy**

CLI を使う場合（ログイン後）:

```bash
pnpm dlx vercel link --scope shinsukenomuras-projects
pnpm dlx vercel env pull .env.local
pnpm dlx vercel
```

## 5) 実装済みの基盤ファイル

- Supabase browser client: `lib/supabase/client.ts`
- Supabase server client: `lib/supabase/server.ts`
- Supabase admin client: `lib/supabase/admin.ts`
- Health API: `app/api/health/route.ts`
- SQL migration: `supabase/migrations/20260527100000_create_leads_table.sql`
