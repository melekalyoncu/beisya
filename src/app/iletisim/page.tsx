"use client";

import Image from "next/image";
import { useLang } from "@/lib/LangContext";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function ContactPage() {
  const { t } = useLang();

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-20 bg-[var(--color-cream)] overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[350px] h-[350px] rounded-full bg-[var(--color-sand)] opacity-25 blur-3xl pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <RevealOnScroll>
            <span className="inline-flex items-center gap-2 justify-center text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[var(--color-mauve)] mb-4">
              <span className="w-6 h-px bg-[var(--color-mauve)]" />
              {t("nav_contact")}
              <span className="w-6 h-px bg-[var(--color-mauve)]" />
            </span>
            <h1 className="font-serif text-3xl md:text-4xl text-[var(--color-brown-dark)] mb-4">{t("contact_title")}</h1>
          </RevealOnScroll>
        </div>
      </section>

      {/* Content */}
      <section className="py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left — contact details */}
            <RevealOnScroll>
              <div className="space-y-6">
                {[
                  { label: t("contact_address"), value: "Cumhuriyet Mah. 6701 Sok. No: 39 D: 10\nKarşıyaka, İZMİR", icon: "📍" },
                  { label: t("contact_web"), value: "beisyaonline.com", icon: "🌐", link: "https://www.beisyaonline.com" },
                  { label: t("contact_cargo"), value: t("contact_cargo_val"), icon: "📦" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 rounded-2xl bg-[var(--color-cream)] hover:-translate-y-0.5 transition-all duration-300 border border-[var(--color-sand)]/20">
                    <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-lg shrink-0 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <span className="block text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[var(--color-mauve)] mb-1">
                        {item.label}
                      </span>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-[var(--color-brown-dark)] font-medium border-b border-[var(--color-sand)] hover:border-[var(--color-mauve)] transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-[var(--color-olive)] leading-relaxed whitespace-pre-line">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}

                {/* Trust badges */}
                <div className="flex items-center gap-3 flex-wrap pt-2">
                  {(["badge_vegan", "badge_cruelty", "badge_derm"] as const).map((key) => (
                    <span key={key} className="flex items-center gap-1.5 text-[0.68rem] text-[var(--color-olive)] bg-[var(--color-cream)] rounded-full px-3 py-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-mauve)]" />
                      {t(key)}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

            {/* Right — CTA card */}
            <RevealOnScroll delay={120}>
              <div className="relative rounded-3xl overflow-hidden h-full min-h-[400px] bg-[var(--color-mauve)]">
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-white/5 pointer-events-none" />

                {/* Floating products */}
                {["/images/balans krem.jpeg", "/images/süper tonik.jpeg"].map((src, i) => (
                  <div
                    key={src}
                    className="absolute w-14 h-14 rounded-xl overflow-hidden opacity-15"
                    style={{
                      top: `${25 + i * 35}%`,
                      right: `${8 + i * 12}%`,
                      animation: `float 7s ease-in-out infinite`,
                      animationDelay: `${-i * 3}s`,
                    }}
                  >
                    <Image src={src} alt="" fill className="object-contain p-1" sizes="56px" />
                  </div>
                ))}

                <div className="relative z-10 h-full flex flex-col justify-center p-10 md:p-14">
                  <h3 className="font-serif text-2xl text-white mb-3">{t("contact_cta_title")}</h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-8 max-w-sm">{t("contact_cta_desc")}</p>
                  <a
                    href="https://www.beisyaonline.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center self-start px-8 py-3.5 rounded-full bg-white text-[var(--color-mauve)] text-sm font-semibold hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
                  >
                    {t("contact_cta_btn")}
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </div>
  );
}
