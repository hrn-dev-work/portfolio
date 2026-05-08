import Image from "next/image";

const skills = [
  { category: "Languages", items: ["TypeScript", "Java", "PHP", "SQL"] },
  { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS"] },
  { category: "Backend", items: ["NestJS", "Laravel", "Spring Boot", "REST API"] },
  { category: "Cloud/Infra", items: ["AWS", "Docker", "WSL2", "CI/CD"] }
];

const certifications = [
  "Oracle Certified Java Programmer Bronze SE",
  "Oracle Certified Java Programmer Silver SE 11",
  "AWS Certified Cloud Practitioner"
];

const projects = [
  {
    title: "医療機関向け AI 連携Web/スマホアプリ開発",
    summary:
      "遅延プロジェクトのリカバリーとして参画。Java から TypeScript へのリプレイスで DDD を用いた再設計、API最適化、DB設計、テスト自動化を担当。",
    stack: ["TypeScript", "NestJS", "Prisma", "PostgreSQL", "Redis", "AWS S3/SQS"],
    metric: "体制: 全体47名 / アプリ30名"
  },
  {
    title: "脆弱性管理プラットフォーム開発・運用保守",
    summary:
      "SaaS バックエンドの新機能開発とリファクタリングを実施。外部API連携、例外ハンドリング共通化、Docker/WSL2を活用した開発標準化を推進。",
    stack: ["PHP", "Laravel", "MySQL", "PostgreSQL", "Docker", "AWS EC2/S3"],
    metric: "開発期間: 7ヶ月 / 7名体制"
  },
  {
    title: "法人向け総合人事システム（3年）",
    summary:
      "法改正対応のシステム改修で、詳細設計・実装・単体テストを継続担当。長期案件で安定運用を重視した改善に従事。",
    stack: ["Java", "JavaScript", "SQL", "PostgreSQL", "Oracle", "Tomcat"],
    metric: "担当期間: 3年 / 14名体制"
  }
];

const career = [
  {
    period: "2024 - Present",
    role: "Senior Backend Engineer",
    detail:
      "モダン技術スタックへの移行とAI駆動開発を推進。PHP（Laravel）による脆弱性管理SaaS開発、TypeScript/NestJSによる医療向けアプリのDDDベース再設計を担当し、リファクタリング、テスト自動化、Docker/WSL2による開発環境標準化を牽引。"
  },
  {
    period: "2021 - 2024",
    role: "Backend Engineer",
    detail:
      "法人向け総合人事システムの法改正対応プロジェクト等に約3年間従事。Java、PostgreSQL、Oracleを用いた詳細設計・実装・テストを継続し、長期案件で安定稼働を支えるシステム改修を担当。"
  },
  {
    period: "2019 - 2021",
    role: "Software Engineer",
    detail:
      "官公庁・金融向けシステム（職業安定所システム、個人年金保険システム等）の開発・保守でキャリアをスタート。Java/SQLを中心にウォーターフォール開発の詳細設計からテストまでを経験し、バックエンド開発の基礎を確立。新人向け社内IT研修の講師も担当。"
  }
];

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl cursor-default px-4 py-8 sm:px-6 md:px-10 md:py-16">
      <section className="section-card mb-6 grid items-center gap-6 md:mb-8 md:grid-cols-[minmax(0,1fr)_auto]">
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-[0.2em] text-sky-300 sm:text-sm">Backend Engineer Portfolio</p>
          <h1 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
            <span className="block">HRN</span>
            <span className="block">バックエンドエンジニア</span>
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:mt-5 md:text-base">
            Java / PHP（Laravel）を軸に7〜8年、近年は TypeScript によるシステムリプレイスにも従事。
            <br />
            AI駆動開発を実務に組み込み、開発速度と品質の両立を重視しています。
          </p>
          <p className="mt-3 text-sm font-medium text-sky-200">
            官公庁・金融・SaaS・医療領域で、設計から運用まで一貫して改善を推進。
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <li
                key={cert}
                className="select-none rounded-md border border-slate-700 bg-slate-800/60 px-2.5 py-1 text-[11px] text-slate-200 sm:px-3 sm:text-xs"
              >
                {cert}
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto w-32 shrink-0 sm:w-36 md:w-44 lg:w-52">
          <Image
            src="/profile-cat.png"
            alt="プロフィール画像"
            width={208}
            height={208}
            className="h-auto w-full rounded-full border border-slate-700 shadow-lg shadow-slate-950/60"
            priority
          />
        </div>
      </section>

      <section className="mb-6 grid gap-4 sm:mb-8 md:grid-cols-2">
        {skills.map((group) => (
          <article key={group.category} className="section-card">
            <h2 className="text-lg font-medium text-white">{group.category}</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="select-none rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1 text-xs text-slate-200 sm:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="section-card mb-6 sm:mb-8">
        <div className="mb-5 flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-semibold text-white">Projects</h2>
          <span className="text-sm text-slate-400">主要案件の抜粋</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="rounded-xl border border-slate-800 bg-slate-900/90 p-4">
              <h3 className="text-base font-semibold text-slate-100">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{project.summary}</p>
              <p className="mt-3 text-xs font-medium text-emerald-300">{project.metric}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="select-none rounded-md border border-slate-700 bg-slate-800/70 px-2.5 py-1 text-xs text-sky-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-8 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <article className="section-card flex flex-col">
          <h2 className="text-2xl font-semibold text-white">Career</h2>
          <ol className="mt-5 space-y-4">
            {career.map((item) => (
              <li key={item.period + item.role} className="border-l border-slate-700 pl-4">
                <p className="text-xs uppercase tracking-wider text-slate-400">{item.period}</p>
                <p className="mt-1 text-base font-medium text-slate-100">{item.role}</p>
                <p className="mt-1 text-sm leading-6 text-slate-300">{item.detail}</p>
              </li>
            ))}
          </ol>
        </article>

        <article className="section-card">
          <h2 className="text-2xl font-semibold text-white">Contact</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">
            技術相談、開発支援、業務委託などのご相談は以下までご連絡ください。
          </p>
          <div className="mt-5 space-y-2 text-sm text-slate-200">
            <p>
              Email:{" "}
              <a className="text-sky-300 underline underline-offset-4 hover:text-sky-200" href="mailto:hrn.dev.work@gmail.com">
                hrn.dev.work@gmail.com
              </a>
            </p>
            <p>
              GitHub:{" "}
              <a
                className="text-sky-300 underline underline-offset-4 hover:text-sky-200"
                href="https://github.com/hrn-dev-work"
                target="_blank"
                rel="noreferrer"
              >
                github.com/hrn-dev-work
              </a>
            </p>
          </div>
          <a
            href="mailto:hrn.dev.work@gmail.com?subject=%E3%80%90%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B%E3%80%91%E3%83%9D%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%AA%E3%82%AA%E3%82%88%E3%82%8A&body=%E3%81%8A%E5%90%8D%E5%89%8D%EF%BC%9A%0A%E4%BC%81%E6%A5%AD%E5%90%8D%EF%BC%9A%0A%E3%81%94%E7%94%A8%E4%BB%B6%EF%BC%9A%0A"
            className="mt-6 inline-flex w-full select-none items-center justify-center rounded-lg bg-sky-500 px-4 py-2.5 text-center text-sm font-medium text-slate-950 no-underline transition hover:bg-sky-400"
          >
            ご相談はこちら（メール）
          </a>
        </article>
      </section>
    </main>
  );
}
