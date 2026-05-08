import { useTranslations } from "next-intl";
import Image from "next/image";

import { profileImage } from "@/domain/portfolio";

export function HeroSection() {
  const t = useTranslations("Index.hero");

  return (
    <section
      aria-labelledby="hero-heading"
      className="section-card mb-6 grid items-center gap-6 md:mb-8 md:grid-cols-[minmax(0,1fr)_auto]"
    >
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-[0.2em] text-sky-300 sm:text-sm">
          {t("eyebrow")}
        </p>
        <h1
          id="hero-heading"
          className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl lg:text-5xl"
        >
          <span className="block">{t("nameLine")}</span>
          <span className="block">{t("roleLine")}</span>
        </h1>
        <p className="mt-4 max-w-2xl whitespace-pre-line text-sm leading-7 text-slate-300 sm:mt-5 md:text-base">
          {t("summary")}
        </p>
        <p className="mt-3 text-sm font-medium text-sky-200">{t("highlight")}</p>
      </div>
      <div className="mx-auto w-32 shrink-0 sm:w-36 md:w-44 lg:w-52">
        <Image
          src={profileImage.src}
          alt={t("imageAlt")}
          width={profileImage.width}
          height={profileImage.height}
          className="h-auto w-full rounded-full border border-slate-700 shadow-lg shadow-slate-950/60"
          priority
        />
      </div>
    </section>
  );
}
