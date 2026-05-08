"use client";

import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type AppLocale } from "@/i18n/routing";

export function LanguageSwitcher() {
  const t = useTranslations("LanguageSwitcher");
  const activeLocale = useLocale() as AppLocale;
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const onSelect = (next: AppLocale) => {
    if (next === activeLocale) return;
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <div
      className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-2 py-1 shadow-sm shadow-slate-950/40 backdrop-blur-sm"
      role="group"
      aria-label={t("label")}
    >
      <Languages
        className="ml-1 h-3.5 w-3.5 text-slate-400"
        strokeWidth={2}
        aria-hidden
      />
      {routing.locales.map((locale) => {
        const isActive = locale === activeLocale;
        return (
          <button
            key={locale}
            type="button"
            onClick={() => onSelect(locale)}
            disabled={isPending || isActive}
            aria-pressed={isActive}
            className={[
              "select-none rounded-full px-2.5 py-1 text-xs font-medium transition",
              isActive
                ? "bg-sky-500 text-slate-950"
                : "text-slate-300 hover:bg-slate-800 hover:text-sky-200",
              isPending && !isActive ? "opacity-60" : ""
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {t(locale)}
          </button>
        );
      })}
    </div>
  );
}
