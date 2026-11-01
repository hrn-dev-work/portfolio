# HRN Portfolio | Backend Engineer × AI-Driven Development

[![日本語](https://img.shields.io/badge/%E6%97%A5%E6%9C%AC%E8%AA%9E-57606a?style=for-the-badge)](./README.md) [![English](https://img.shields.io/badge/English-0969da?style=for-the-badge)](./README.en.md)

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![next-intl](https://img.shields.io/badge/next--intl-i18n-1f6feb?style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

A portfolio site built with Next.js (App Router) and TypeScript.
More than a digital business card — a working example of a backend engineer collaborating with AI agents on modern frontend delivery.

> **TaxPort** (tax-filing support app) lives in a separate repo: [`../taxport`](https://github.com/hrn-dev-work/TaxPort) (`~/workspace/taxport`).

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

- **Languages / Frameworks**: Java (Spring), TypeScript (NestJS). PHP (Laravel) is project work, not a primary stack.
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
