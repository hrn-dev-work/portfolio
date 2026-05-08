# 🚀 HRN Portfolio | Senior Backend Engineer × AI-Driven Development

🌐 **Languages:** [日本語](./README.md) · **English**

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![next-intl](https://img.shields.io/badge/next--intl-i18n-1f6feb?style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

A portfolio site built with Next.js (App Router) and TypeScript.
More than just a digital business card, this site is published as a working example of **a senior backend engineer collaborating with AI agents** in modern frontend delivery.

## 🌐 Live Demo

🔗 [https://portfolio-teal-ten-31.vercel.app/](https://portfolio-teal-ten-31.vercel.app/)

Vercel's CI/CD pipeline auto-deploys every push to `main`.

---

## 🛠 Tech Stack & Tools

### 💻 Frontend (this site)

- **Framework**: Next.js 15 (App Router, RSC)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS
- **Fonts**: Inter + Noto Sans JP via `next/font`
- **i18n**: `next-intl` (`/ja`, `/en` subpaths + `Accept-Language` detection)
- **Icons**: Lucide React

### ⚙️ Core Backend Knowledge (professional experience)

- **Languages / Frameworks**: Java (Spring), PHP (Laravel), Node.js (NestJS)
- **Database**: PostgreSQL, Oracle, MySQL
- **Architecture**: Domain-Driven Design (DDD), Clean Architecture, Layered Design

### 🤖 AI & Development Environment

- **AI Agents**: Cursor, Claude Code, Gemini
- **Infrastructure**: Docker, WSL2 (Ubuntu)
- **Knowledge Base**: Cosense (formerly Scrapbox) for organized technical notes
- **Hardware**: REALFORCE R4

---

## 🧩 Architecture (DDD-aligned)

The codebase deliberately mirrors the DDD and separation-of-concerns principles it advocates: even at portfolio scale, the bounded context is expressed in the folder layout.

```text
src/
├── app/
│   ├── [locale]/           # Locale-scoped routes (/ja, /en)
│   │   ├── layout.tsx      # next/font + NextIntlClientProvider + Metadata
│   │   └── page.tsx        # Thin composition root
│   ├── globals.css
│   ├── robots.ts           # robots.txt
│   └── sitemap.ts          # sitemap with hreflang alternates
├── components/
│   ├── sections/           # Presentation only (Hero / Skills / Projects / Career / Contact)
│   └── LanguageSwitcher.tsx
├── domain/
│   └── portfolio/          # Bounded context "portfolio"
│       ├── types.ts        # View types (Skill / Project / Career)
│       ├── skills.ts       # View data with icon mapping
│       ├── projects.ts
│       ├── career.ts
│       ├── contact.ts
│       └── profile.ts
├── i18n/
│   ├── routing.ts          # locales / defaultLocale / detection
│   ├── navigation.ts       # locale-aware Link / useRouter
│   └── request.ts          # message loader
├── global.d.ts             # next-intl AppConfig augmentation (type-safe keys)
└── middleware.ts           # next-intl middleware

messages/
├── ja.json                 # Hierarchical keys: Index.hero.* / Skills.featured.ddd.* ...
└── en.json                 # Outcome-oriented English copy
```

Design highlights:

- **Domain data vs. presentation**: `components/sections/*` depends on `domain/portfolio/` in a single direction. UI never holds business rules.
- **Type-safe i18n**: `global.d.ts` augments `next-intl` with `Messages: typeof messages`, validating every `t("Index.hero.title")` call at compile time.
- **Composition Root**: `app/[locale]/page.tsx` stays around 40 lines — its sole responsibility is to declaratively wire up the section components.
- **International SEO**: `sitemap.ts` emits `xhtml:link rel="alternate" hreflang="..."` on every URL.

---

## 🌍 Internationalization

| Feature | Setting / Behavior |
|---|---|
| URL format | `/ja/...` and `/en/...` (`localePrefix: "always"`) |
| Default locale | `en` (optimized for international audiences) |
| Auto detection | Inferred from the `Accept-Language` header (`localeDetection: true`) |
| Persistence | The visitor's chosen locale is stored in the `NEXT_LOCALE` cookie and overrides auto detection on subsequent visits |
| Switcher UI | Top-right `LanguageSwitcher` with a Lucide `Languages` icon |

Behavior examples:

- Browser sends `ja-JP` to `/` → 307 redirect to `/ja`
- Browser sends `en-US` or `fr-FR` to `/` → 307 redirect to `/en`
- User clicks `en` in the switcher → all subsequent visits stay on `/en`, ignoring `Accept-Language`

---

## 🎯 Development Philosophy

### 1. Vibe Coding × AI Collaboration

Built in a **Vibe Coding** style that treats AI agents as a coordinated engineering force.
The senior-engineering disciplines I have honed in backend work — DDD-style responsibility separation, robust component design, data integrity — are translated into precise prompts (specifications), while AI handles the implementation. The result is enterprise-grade quality delivered at startup velocity.

### 2. Legacy to Modern

I started my career on heavy waterfall projects in the public sector and finance (Java) and have since moved to modern agile builds — a vulnerability-management SaaS and a healthcare application on TypeScript / NestJS. Knowing the pain of legacy systems lets me evaluate the merits of new technology realistically and make grounded decisions.

### 3. Continuous Learning

Reading notes from technical books and daily learning logs are aggregated in Cosense (formerly Scrapbox) as a personal knowledge base. The "knowledge graph" expands continuously and feeds back into client work.

---

## 📦 Getting Started

Local setup:

```bash
# Clone the repository
git clone https://github.com/hrn-dev-work/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start the dev server (http://localhost:3000)
npm run dev
```

Other scripts:

```bash
npm run build   # Production build (next build)
npm run start   # Serve the production build
npm run lint    # ESLint
```

---

## 🧪 Verification Tips

How to confirm locale detection locally:

```bash
# Falls back to defaultLocale (en)
curl -sS -o /dev/null -w "%{redirect_url}\n" http://localhost:3000/

# Browser sends Japanese → /ja
curl -sS -H "Accept-Language: ja" -o /dev/null \
  -w "%{redirect_url}\n" http://localhost:3000/

# International SEO endpoints
curl -sS http://localhost:3000/robots.txt
curl -sS http://localhost:3000/sitemap.xml
```

When re-testing automatic detection in the browser, clear the `NEXT_LOCALE` cookie via DevTools → Application → Cookies (or open the site in a private window).

---

## 📬 Contact

- **Email**: [hrn.dev.work@gmail.com](mailto:hrn.dev.work@gmail.com)
- **GitHub**: [github.com/hrn-dev-work](https://github.com/hrn-dev-work)
- **LinkedIn**: [linkedin.com/in/hrn-engineer-b1b270409](https://www.linkedin.com/in/hrn-engineer-b1b270409/)
