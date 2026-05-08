import { useTranslations } from "next-intl";

import { contactInfo } from "@/domain/portfolio";

function buildMailtoHref(email: string, subject: string, body: string) {
  return (
    `mailto:${email}` +
    `?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(body)}`
  );
}

export function ContactSection() {
  const t = useTranslations("Contact");
  const mailtoHref = buildMailtoHref(
    contactInfo.email,
    t("mailto.subject"),
    t("mailto.body")
  );

  return (
    <article
      aria-labelledby="contact-heading"
      className="section-card"
    >
      <h2 id="contact-heading" className="text-2xl font-semibold text-white">
        {t("heading")}
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-300">{t("description")}</p>
      <div className="mt-5 space-y-2 text-sm text-slate-200">
        <p>
          {t("emailLabel")}:{" "}
          <a
            className="text-sky-300 underline underline-offset-4 hover:text-sky-200"
            href={`mailto:${contactInfo.email}`}
          >
            {contactInfo.email}
          </a>
        </p>
        <p>
          {t("githubLabel")}:{" "}
          <a
            className="text-sky-300 underline underline-offset-4 hover:text-sky-200"
            href={contactInfo.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            {contactInfo.githubLabel}
          </a>
        </p>
      </div>
      <a
        href={mailtoHref}
        className="mt-6 inline-flex w-full select-none items-center justify-center rounded-lg bg-sky-500 px-4 py-2.5 text-center text-sm font-medium text-slate-950 no-underline transition hover:bg-sky-400"
      >
        {t("ctaLabel")}
      </a>
    </article>
  );
}
