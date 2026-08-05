# HRN Portfolio | Senior Backend Engineer × AI-Driven Development

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![next-intl](https://img.shields.io/badge/next--intl-i18n-1f6feb?style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

A portfolio site built with Next.js (App Router) and TypeScript.
More than a digital business card — a working example of a senior backend engineer collaborating with AI agents on modern frontend delivery.

> **TaxPort** (tax-filing support app) lives in a separate repo: [`../taxport`](../taxport) (`~/workspace/taxport`).

## Live Demo

[https://portfolio-teal-ten-31.vercel.app/](https://portfolio-teal-ten-31.vercel.app/)

Vercel CI/CD auto-deploys every push to `main`.

## Tech Stack

### Frontend (this site)

- **Framework**: Next.js 15 (App Router, RSC)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS
- **Fonts**: Inter + Noto Sans JP via `next/font`
- **i18n**: `next-intl` (`/ja`, `/en` subpaths + `Accept-Language` detection)
- **Icons**: Lucide React

### Backend experience

- **Languages / Frameworks**: Java (Spring), PHP (Laravel), Node.js (NestJS)
- **Database**: PostgreSQL, Oracle, MySQL
- **Architecture**: Domain-Driven Design (DDD), Clean Architecture, Layered Design

### AI & environment

- **AI Agents**: Cursor, Claude Code, Gemini
- **Infrastructure**: Docker, WSL2 (Ubuntu)
- **Knowledge Base**: Cosense (formerly Scrapbox)

## Architecture

Folder layout mirrors DDD-style separation even at portfolio scale:

```text
src/
├── app/
│   ├── [locale]/           # Locale-scoped routes (/ja, /en)
│   │   ├── layout.tsx      # next/font + NextIntlClientProvider + Metadata
│   │   └── page.tsx        # Thin composition root
│   ├── globals.css
│   ├── robots.ts
│   └── sitemap.ts          # hreflang alternates
├── components/
│   ├── sections/           # Presentation only
│   └── LanguageSwitcher.tsx
├── domain/
│   └── portfolio/          # Bounded context (types + view data)
├── i18n/                   # routing / navigation / request
├── global.d.ts             # type-safe next-intl keys
└── middleware.ts

messages/
├── ja.json
└── en.json
```

- **Domain vs presentation**: `components/sections/*` depends on `domain/portfolio/` one-way; UI holds no business rules.
- **Type-safe i18n**: `global.d.ts` validates `t("...")` keys at compile time.
- **Composition root**: `app/[locale]/page.tsx` stays thin (~40 lines) and wires sections declaratively.
- **International SEO**: `sitemap.ts` emits `hreflang` alternates on every URL.

## Internationalization

| Feature | Behavior |
|---|---|
| URL format | `/ja/...` and `/en/...` (`localePrefix: "always"`) |
| Default locale | `en` |
| Auto detection | `Accept-Language` (`localeDetection: true`) |
| Persistence | `NEXT_LOCALE` cookie overrides auto detection |
| Switcher | Top-right `LanguageSwitcher` |

Examples: `ja-JP` → `/ja`; `en-US` / other → `/en`; switcher choice sticks via cookie.

## Development Philosophy

**Vibe Coding** with AI agents: backend discipline (DDD-style separation, solid components, data integrity) becomes precise prompts, while AI accelerates implementation. Career path spans legacy waterfall (public sector / finance, Java) to modern TypeScript / NestJS agile work — which keeps tech choices grounded. Continuous learning notes live in Cosense.

## Getting Started

```bash
git clone https://github.com/hrn-dev-work/portfolio.git
cd portfolio
npm install
npm run dev   # http://localhost:3000
```

```bash
npm run build   # Production build
npm run start   # Serve production build
npm run lint    # ESLint
```

Locale check tips:

```bash
curl -sS -o /dev/null -w "%{redirect_url}\n" http://localhost:3000/
curl -sS -H "Accept-Language: ja" -o /dev/null -w "%{redirect_url}\n" http://localhost:3000/
curl -sS http://localhost:3000/robots.txt
curl -sS http://localhost:3000/sitemap.xml
```

Clear the `NEXT_LOCALE` cookie (or use a private window) when re-testing auto detection.

## Contact

- **Email**: [hrn.dev.work@gmail.com](mailto:hrn.dev.work@gmail.com)
- **GitHub**: [github.com/hrn-dev-work](https://github.com/hrn-dev-work)
- **LinkedIn**: [linkedin.com/in/hrn-engineer-b1b270409](https://www.linkedin.com/in/hrn-engineer-b1b270409/)

---

# HRN Portfolio（日本語）| シニアバックエンドエンジニア × AI 駆動開発

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![next-intl](https://img.shields.io/badge/next--intl-i18n-1f6feb?style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

Next.js (App Router) と TypeScript で構築したポートフォリオサイトです。
単なる Web 上の名刺ではなく、**AI エージェントと熟練バックエンドエンジニアの協調**によるモダンなフロントエンド開発の実例として公開しています。

> **TaxPort**（確定申告支援アプリ）は別リポジトリに分離しました: [`../taxport`](../taxport)（`~/workspace/taxport`）。

## Live Demo

[https://portfolio-teal-ten-31.vercel.app/](https://portfolio-teal-ten-31.vercel.app/)

`main` への push で Vercel CI/CD が自動デプロイします。

## Tech Stack

### Frontend（このサイト）

- **Framework**: Next.js 15 (App Router, RSC)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS
- **Fonts**: Inter + Noto Sans JP via `next/font`
- **i18n**: `next-intl`（`/ja`, `/en` サブパス + `Accept-Language` 自動判定）
- **Icons**: Lucide React

### Backend 経験

- **Languages / Frameworks**: Java (Spring), PHP (Laravel), Node.js (NestJS)
- **Database**: PostgreSQL, Oracle, MySQL
- **Architecture**: Domain-Driven Design (DDD), Clean Architecture, Layered Design

### AI & 開発環境

- **AI Agents**: Cursor, Claude Code, Gemini
- **Infrastructure**: Docker, WSL2 (Ubuntu)
- **Knowledge Base**: Cosense（旧 Scrapbox）

## Architecture

サイト規模でも Bounded Context をフォルダ構造で表現しています。

```text
src/
├── app/
│   ├── [locale]/           # ロケール別ルート (/ja, /en)
│   │   ├── layout.tsx      # next/font + NextIntlClientProvider + Metadata
│   │   └── page.tsx        # 薄い Composition Root
│   ├── globals.css
│   ├── robots.ts
│   └── sitemap.ts          # hreflang 付き
├── components/
│   ├── sections/           # 描画専用
│   └── LanguageSwitcher.tsx
├── domain/
│   └── portfolio/          # Bounded Context（型 + View データ）
├── i18n/                   # routing / navigation / request
├── global.d.ts             # 型安全な next-intl キー
└── middleware.ts

messages/
├── ja.json
└── en.json
```

- **ドメインと描画の分離**: `components/sections/*` → `domain/portfolio/` の一方向依存。UI に業務ルールを置かない
- **型安全な i18n**: `global.d.ts` で `t("...")` キーをコンパイル時検証
- **Composition Root**: `app/[locale]/page.tsx` は約 40 行でセクションを組み立てるだけ
- **国際 SEO**: `sitemap.ts` が全 URL に `hreflang` を付与

## Internationalization

| 機能 | 動作 |
|---|---|
| URL 形式 | `/ja/...` / `/en/...`（`localePrefix: "always"`） |
| デフォルト | `en` |
| 自動判定 | `Accept-Language`（`localeDetection: true`） |
| 永続化 | `NEXT_LOCALE` Cookie が自動判定より優先 |
| 切替 UI | 右上の `LanguageSwitcher` |

例: `ja-JP` → `/ja`、`en-US` など → `/en`。切替後は Cookie で維持。

## Development Philosophy

**Vibe Coding** で AI エージェントと協調。バックエンドで培った責務分離・コンポーネント設計・データ整合性をプロンプトとして精密化し、実装は AI と高速に回す。官公庁・金融のウォーターフォール（Java）から、TypeScript / NestJS のアジャイルへ。レガシーの苦労を知るから技術選定が地に足につく。学習ログは Cosense に集約。

## Getting Started

```bash
git clone https://github.com/hrn-dev-work/portfolio.git
cd portfolio
npm install
npm run dev   # http://localhost:3000
```

```bash
npm run build   # 本番ビルド
npm run start   # ビルド済みサーバ起動
npm run lint    # ESLint
```

ロケール確認の例:

```bash
curl -sS -o /dev/null -w "%{redirect_url}\n" http://localhost:3000/
curl -sS -H "Accept-Language: ja" -o /dev/null -w "%{redirect_url}\n" http://localhost:3000/
curl -sS http://localhost:3000/robots.txt
curl -sS http://localhost:3000/sitemap.xml
```

自動判定を再テストするときは `NEXT_LOCALE` Cookie を削除するか、シークレットウィンドウで開いてください。

## Contact

- **Email**: [hrn.dev.work@gmail.com](mailto:hrn.dev.work@gmail.com)
- **GitHub**: [github.com/hrn-dev-work](https://github.com/hrn-dev-work)
- **LinkedIn**: [linkedin.com/in/hrn-engineer-b1b270409](https://www.linkedin.com/in/hrn-engineer-b1b270409/)
