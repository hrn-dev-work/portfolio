import { useTranslations } from "next-intl";

import { featuredSkills, skillCategories } from "@/domain/portfolio";

export function SkillsSection() {
  const t = useTranslations("Skills");

  return (
    <section className="mb-6 sm:mb-8" aria-labelledby="skills-heading">
      <div className="mb-5 flex flex-col items-start gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-sky-300">{t("eyebrow")}</p>
          <h2
            id="skills-heading"
            className="mt-1 text-2xl font-semibold text-white sm:text-3xl"
          >
            {t("heading")}
          </h2>
        </div>
        <span className="text-sm text-slate-400">{t("tagline")}</span>
      </div>

      <div className="mb-5 grid gap-4 md:grid-cols-2">
        {featuredSkills.map((skill) => {
          const Icon = skill.icon;
          const tags = t.raw(`featured.${skill.key}.tags`) as string[];
          return (
            <article
              key={skill.key}
              className="group relative overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/40 backdrop-blur-sm transition hover:border-slate-700"
            >
              <div
                className={`pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br ${skill.accent} blur-2xl`}
                aria-hidden
              />
              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/80 text-sky-300 transition group-hover:text-sky-200">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-sky-300">
                    {t(`featured.${skill.key}.subtitle`)}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold text-white sm:text-xl">
                    {t(`featured.${skill.key}.title`)}
                  </h3>
                </div>
              </div>
              <p className="relative mt-4 text-sm leading-7 text-slate-300">
                {t(`featured.${skill.key}.description`)}
              </p>
              <ul className="relative mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className="select-none rounded-md border border-slate-700/80 bg-slate-800/60 px-2.5 py-1 text-xs text-slate-200"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {skillCategories.map((group) => {
          const CategoryIcon = group.icon;
          return (
            <article key={group.key} className="section-card">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/70 text-sky-300">
                  <CategoryIcon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold text-white sm:text-lg">
                    {t(`categories.${group.key}.title`)}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {t(`categories.${group.key}.description`)}
                  </p>
                </div>
              </div>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <li
                      key={item.name}
                      className="group/badge inline-flex select-none items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1.5 text-xs text-slate-200 transition hover:border-sky-500/60 hover:bg-slate-800 hover:text-sky-200 sm:text-sm"
                    >
                      <ItemIcon
                        className="h-3.5 w-3.5 text-sky-300/80 transition group-hover/badge:text-sky-200"
                        strokeWidth={2}
                      />
                      {item.name}
                    </li>
                  );
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
