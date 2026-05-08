import { useTranslations } from "next-intl";

import { careerViews } from "@/domain/portfolio";

export function CareerSection() {
  const t = useTranslations("Career");

  return (
    <article
      aria-labelledby="career-heading"
      className="section-card flex flex-col"
    >
      <h2 id="career-heading" className="text-2xl font-semibold text-white">
        {t("heading")}
      </h2>
      <ol className="mt-5 space-y-4">
        {careerViews.map((item) => (
          <li key={item.key} className="border-l border-slate-700 pl-4">
            <p className="text-xs uppercase tracking-wider text-slate-400">
              <time>{t(`${item.key}.period`)}</time>
            </p>
            <p className="mt-1 text-base font-medium text-slate-100">
              {t(`${item.key}.role`)}
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-300">
              {t(`${item.key}.detail`)}
            </p>
          </li>
        ))}
      </ol>
    </article>
  );
}
