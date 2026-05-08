# 🚀 HRN Portfolio | Senior Backend Engineer × AI-Driven Development

🌐 **Languages:** **日本語** · [English](./README.en.md)

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![next-intl](https://img.shields.io/badge/next--intl-i18n-1f6feb?style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

Next.js (App Router) と TypeScript で構築したポートフォリオサイトです。
単なる Web 上の名刺ではなく、 **AI エージェントと熟練バックエンドエンジニアの協調** によるモダンなフロントエンド開発の実例として公開しています。

## 🌐 Live Demo

🔗 [https://portfolio-teal-ten-31.vercel.app/](https://portfolio-teal-ten-31.vercel.app/)

※ Vercel の CI/CD パイプラインにより、`main` ブランチへの push で自動デプロイされます。

---

## 🛠 Tech Stack & Tools

### 💻 Frontend (このサイト)

- **Framework**: Next.js 15 (App Router, RSC)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS
- **Fonts**: Inter + Noto Sans JP via `next/font`
- **i18n**: `next-intl` (`/ja`, `/en` サブパス + `Accept-Language` 自動判定)
- **Icons**: Lucide React

### ⚙️ Core Backend Knowledge (実務経験)

- **Languages / Frameworks**: Java (Spring), PHP (Laravel), Node.js (NestJS)
- **Database**: PostgreSQL, Oracle, MySQL
- **Architecture**: Domain-Driven Design (DDD), Clean Architecture, Layered Design

### 🤖 AI & Development Environment

- **AI Agents**: Cursor, Claude Code, Gemini
- **Infrastructure**: Docker, WSL2 (Ubuntu)
- **Knowledge Base**: Cosense (旧 Scrapbox) で技術情報を体系化
- **Hardware**: REALFORCE R4

---

## 🧩 Architecture (DDD-aligned)

「主張している DDD・関心の分離をコード自体で示す」ことを意識し、サイト規模でも Bounded Context をフォルダ構造で表現しています。

```text
src/
├── app/
│   ├── [locale]/           # ロケール別ルート (/ja, /en)
│   │   ├── layout.tsx      # next/font + NextIntlClientProvider + Metadata
│   │   └── page.tsx        # 薄い Composition Root
│   ├── globals.css
│   ├── robots.ts           # robots.txt
│   └── sitemap.ts          # hreflang 付き sitemap
├── components/
│   ├── sections/           # 描画専用 (Hero / Skills / Projects / Career / Contact)
│   └── LanguageSwitcher.tsx
├── domain/
│   └── portfolio/          # Bounded Context "portfolio"
│       ├── types.ts        # View 型 (Skill / Project / Career)
│       ├── skills.ts       # アイコンマッピング含む View データ
│       ├── projects.ts
│       ├── career.ts
│       ├── contact.ts
│       └── profile.ts
├── i18n/
│   ├── routing.ts          # locales / defaultLocale / detection
│   ├── navigation.ts       # locale-aware Link / useRouter
│   └── request.ts          # メッセージ読み込み
├── global.d.ts             # next-intl AppConfig augmentation (型安全なキー)
└── middleware.ts           # next-intl middleware

messages/
├── ja.json                 # 階層キー: Index.hero.* / Skills.featured.ddd.* など
└── en.json                 # ハイエンド英語コピー (outcome-oriented)
```

設計ポイント:

- **ドメインデータと描画の分離**: `domain/portfolio/` を `components/sections/*` から参照する一方向依存。UI 層には業務ルールを置かない
- **型安全な i18n**: `global.d.ts` で `Messages: typeof messages` を augmentation し、`t("Index.hero.title")` のキーをコンパイル時に検証
- **Composition Root**: `app/[locale]/page.tsx` は約 40 行に抑え、各セクションを宣言的に組み立てるだけの責務
- **国際 SEO**: `sitemap.ts` が `xhtml:link rel="alternate" hreflang="..."` を全 URL に付与

---

## 🌍 Internationalization

| 機能 | 設定 / 動作 |
|---|---|
| URL 形式 | `/ja/...` / `/en/...`（`localePrefix: "always"`） |
| デフォルト言語 | `en`（海外クライアント向け） |
| 自動判定 | `Accept-Language` ヘッダで判定（`localeDetection: true`） |
| 永続化 | ユーザーが切り替えた言語は `NEXT_LOCALE` Cookie に保存され、自動判定より優先 |
| 切替 UI | 右上の `LanguageSwitcher`（Lucide `Languages` アイコン付き） |

挙動例:

- ブラウザ `ja-JP` で `/` を開く → `/ja` に 307 リダイレクト
- ブラウザ `en-US` / `fr-FR` などで `/` を開く → `/en` に 307 リダイレクト
- 言語切替ボタンで `en` を選択 → 以降は `Accept-Language` を無視して `/en` を維持

---

## 🎯 Development Philosophy

### 1. Vibe Coding × AI Collaboration

AI エージェントを最大限に活用する **Vibe Coding** スタイルで構築しています。
バックエンド開発で培った「DDD 的な責務分離」「堅牢なコンポーネント設計」「データ整合性」をプロンプト（要件定義）として高精度に言語化し、実装そのものは AI と高速に回す。これにより、エンタープライズ品質とスタートアップ的なスピードの両立を検証しています。

### 2. Legacy to Modern

官公庁・金融向けのウォーターフォール開発（Java）からキャリアをスタートし、現在は脆弱性管理 SaaS や医療機関向けアプリといったモダンなアジャイル開発（TypeScript / NestJS）にシフト。レガシーの苦労を知るからこそ、最新技術のメリットを正しく評価し、地に足の着いた技術選定を行えると考えています。

### 3. Continuous Learning

技術書の読書録や日々の学習ログを Cosense（旧 Scrapbox）に集約し、個人ナレッジベースとして運用。常に「知のネットワーク」を広げ、実務に還元するサイクルを回しています。

---

## 📦 Getting Started

ローカル環境での立ち上げ手順です。

```bash
# リポジトリのクローン
git clone https://github.com/hrn-dev-work/portfolio.git
cd portfolio

# 依存関係のインストール
npm install

# 開発サーバーの起動 (http://localhost:3000)
npm run dev
```

その他のスクリプト:

```bash
npm run build   # 本番ビルド (next build)
npm run start   # ビルド済みサーバを起動
npm run lint    # ESLint
```

---

## 🧪 動作確認のヒント

ロケール検出を手元で確認する例:

```bash
# defaultLocale (en) にフォールバック
curl -sS -o /dev/null -w "%{redirect_url}\n" http://localhost:3000/

# ブラウザ言語が日本語 → /ja
curl -sS -H "Accept-Language: ja" -o /dev/null \
  -w "%{redirect_url}\n" http://localhost:3000/

# 国際 SEO 用ファイル
curl -sS http://localhost:3000/robots.txt
curl -sS http://localhost:3000/sitemap.xml
```

ブラウザで言語自動判定を再テストする際は、DevTools の Application → Cookies から `NEXT_LOCALE` を削除（またはシークレットウィンドウで開く）してください。

---

## 📬 Contact

- **Email**: [hrn.dev.work@gmail.com](mailto:hrn.dev.work@gmail.com)
- **GitHub**: [github.com/hrn-dev-work](https://github.com/hrn-dev-work)
- **LinkedIn**: [linkedin.com/in/hrn-engineer-b1b270409](https://www.linkedin.com/in/hrn-engineer-b1b270409/)
