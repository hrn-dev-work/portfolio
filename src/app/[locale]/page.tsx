import { hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import {
  CareerSection,
  ContactSection,
  HeroSection,
  ProjectsSection,
  SkillsSection
} from "@/components/sections";
import { routing } from "@/i18n/routing";

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl cursor-default px-4 py-8 sm:px-6 md:px-10 md:py-16">
      <header className="mb-4 flex items-center justify-end sm:mb-6">
        <LanguageSwitcher />
      </header>

      <HeroSection />
      <SkillsSection />
      <ProjectsSection />

      <section className="mb-8 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <CareerSection />
        <ContactSection />
      </section>
    </main>
  );
}
