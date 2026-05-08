import { useTranslations } from "next-intl";

import { projectViews } from "@/domain/portfolio";

export function ProjectsSection() {
  const t = useTranslations("Projects");

  return (
    <section
      aria-labelledby="projects-heading"
      className="section-card mb-6 sm:mb-8"
    >
      <div className="mb-5 flex flex-col items-start gap-1 sm:flex-row sm:items-center sm:justify-between">
        <h2 id="projects-heading" className="text-2xl font-semibold text-white">
          {t("heading")}
        </h2>
        <span className="text-sm text-slate-400">{t("tagline")}</span>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projectViews.map((project) => (
          <article
            key={project.key}
            className="rounded-xl border border-slate-800 bg-slate-900/90 p-4"
          >
            <h3 className="text-base font-semibold text-slate-100">
              {t(`${project.key}.title`)}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {t(`${project.key}.description`)}
            </p>
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
  );
}
