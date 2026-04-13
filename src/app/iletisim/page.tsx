"use client";

import Image from "next/image";
import { useLang } from "@/lib/LangContext";
import RevealOnScroll from "@/components/RevealOnScroll";
import CertMarquee from "@/components/CertMarquee";

export default function ContactPage() {
  const { t } = useLang();

  return (
    <div className="pt-24">
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

      <CertMarquee />

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

                {/* WhatsApp İletişim */}
                <a
                  href="https://wa.me/905330630623"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 rounded-2xl bg-[#25D366]/10 hover:-translate-y-0.5 transition-all duration-300 border border-[#25D366]/30 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#25D366] flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <span className="block text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[#25D366] mb-1">
                      WhatsApp
                    </span>
                    <span className="text-sm text-[var(--color-brown-dark)] font-medium group-hover:text-[#25D366] transition-colors">
                      İletişime Geç · 0533 063 06 23
                    </span>
                  </div>
                </a>

                {/* Trust badges */}
                <div className="flex items-center gap-3 flex-wrap pt-2">
                  {(["badge_vegan", "badge_cruelty"] as const).map((key) => (
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
