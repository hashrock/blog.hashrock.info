# hashrock blog

個人ブログです。[Void](https://void.cloud)（Vite + React + Cloudflare Workers）で動く自作 CMS です。

- 記事は D1、アップロード画像は R2 に保存
- 公開ページは ISR でキャッシュし、管理画面で保存した瞬間に `revalidate()` で消して即反映
- 管理画面は `/admin`。`ADMIN_EMAIL` のアカウントだけが登録・ログインできる

Void の CLI は Node 24 以上が必要です。`mise.toml` で指定しているので、初回は `mise trust && mise install` を実行してください。

## コマンド

```sh
pnpm install   # 依存関係のインストール
pnpm dev       # 開発サーバー起動 (localhost:5173)
pnpm build     # 本番ビルド
pnpm deploy    # Cloudflare にデプロイ（D1 マイグレーションも適用される）
```

## 初回セットアップ

```sh
echo 'ADMIN_EMAIL=you@example.com' > .env   # 自分のアドレスにする（スキーマは env.ts）
pnpm void db migrate        # ローカル D1 にテーブルを作る
pnpm import-posts           # content/blog の Markdown から db/import.sql を作る
pnpm void db execute --file db/import.sql
pnpm dev                    # localhost:5173/admin/login で「初回登録」（本番では登録不可）
```

## 構成

```
pages/                  公開ページと管理画面（.server.ts が loader / action）
  [slug].tsx            記事ページ
  admin/                管理画面（記事一覧・エディタ・ログイン）
  _layouts/admin.tsx    管理画面用レイアウト
routes/                 RSS・sitemap・画像配信・管理用 API
middleware/             管理画面のアクセス制御、404 のステータス
db/schema.ts            posts テーブル
src/lib/markdown.ts     Markdown → HTML（保存時に実行して posts.html に入れる）
content/blog/           Astro 時代の記事原本（取り込み元。編集は管理画面で行う）
public/images/          Astro 時代の記事画像
```
