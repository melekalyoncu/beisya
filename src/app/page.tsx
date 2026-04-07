"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/LangContext";
import RevealOnScroll from "@/components/RevealOnScroll";
import Counter from "@/components/Counter";
import Marquee from "@/components/Marquee";
import CertMarquee from "@/components/CertMarquee";

const productShowcase = [
  "/images/balans krem.jpeg",
  "/images/comedone şampuan.jpeg",
  "/images/süper tonik.jpeg",
  "/images/exe losyon.jpeg",
];

export default function HomePage() {
  const { t } = useLang();

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[var(--color-cream)]">
        {/* Decorative blob — top right */}
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-[var(--color-sand)] opacity-30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-[350px] h-[350px] rounded-full bg-[var(--color-sage)] opacity-20 blur-3xl pointer-events-none" />

        {/* Botanical decorative branch — top right */}
        <svg className="absolute top-12 right-0 w-72 h-72 text-[var(--color-sand)] opacity-60 pointer-events-none" viewBox="0 0 200 200" fill="none">
          <path d="M180 20c-30 40-60 50-90 80s-40 60-70 80" stroke="currentColor" strokeWidth="0.8" />
          <path d="M140 40c-10 20-30 30-50 50" stroke="currentColor" strokeWidth="0.6" />
          <path d="M160 60c-5 15-20 30-40 40" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="180" cy="20" r="3" fill="currentColor" opacity="0.3" />
          <circle cx="90" cy="100" r="2" fill="currentColor" opacity="0.3" />
          <ellipse cx="120" cy="50" rx="8" ry="14" transform="rotate(-30 120 50)" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <ellipse cx="155" cy="35" rx="6" ry="11" transform="rotate(-50 155 35)" stroke="currentColor" strokeWidth="0.5" fill="none" />
        </svg>

        <div className="max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full relative z-10">
          {/* Left — text */}
          <RevealOnScroll>
            <p className="text-[0.7rem] font-medium tracking-[0.2em] uppercase text-[var(--color-mauve)] mb-5">
              {t("hero_label")}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.6rem] font-medium text-[var(--color-brown-dark)] leading-[1.1] tracking-tight mb-6">
              {t("hero_title")}
            </h1>
            <p className="text-base text-[var(--color-olive)] max-w-[440px] mb-10 leading-relaxed">
              {t("hero_desc")}
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/hakkimizda"
                className="inline-flex items-center px-8 py-3.5 rounded-full bg-[var(--color-mauve)] text-white text-sm font-medium hover:bg-[var(--color-mauve-dark)] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
              >
                {t("nav_about")}
              </Link>
              <Link
                href="/urunlerimiz"
                className="inline-flex items-center px-8 py-3.5 rounded-full border border-[var(--color-sand)] text-[var(--color-brown)] text-sm font-medium hover:border-[var(--color-mauve)] hover:-translate-y-0.5 transition-all duration-300"
              >
                {t("hero_cta")}
              </Link>
            </div>
          </RevealOnScroll>

          {/* Right — product composition */}
          <RevealOnScroll delay={150} className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] h-[420px]">
              {/* Main product — center */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-64 z-10">
                <Image
                  src="/images/comedone şampuan.jpeg"
                  alt="Beisya"
                  fill
                  className="object-contain drop-shadow-xl"
                  sizes="200px"
                  priority
                />
              </div>
              {/* Scattered products */}
              {[
                { src: "/images/balans krem.jpeg", top: "5%", left: "5%", w: "w-28", h: "h-32", z: "z-0", delay: 0 },
                { src: "/images/süper tonik.jpeg", top: "10%", left: "68%", w: "w-24", h: "h-32", z: "z-0", delay: 1.5 },
                { src: "/images/exe losyon.jpeg", top: "62%", left: "0%", w: "w-24", h: "h-28", z: "z-0", delay: 3 },
                { src: "/images/terapi krem.jpeg", top: "60%", left: "72%", w: "w-24", h: "h-28", z: "z-0", delay: 2 },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`absolute ${item.w} ${item.h} ${item.z}`}
                  style={{
                    top: item.top,
                    left: item.left,
                    animation: `float 7s ease-in-out infinite`,
                    animationDelay: `${-item.delay}s`,
                  }}
                >
                  <Image src={item.src} alt="" fill className="object-contain drop-shadow-md opacity-80" sizes="120px" />
                </div>
              ))}
              {/* Decorative circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-[var(--color-sand)] opacity-50 -z-10" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full bg-[var(--color-beige)] opacity-40 -z-10" />
            </div>
          </RevealOnScroll>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-gradient-to-b from-[var(--color-mauve-light)] to-transparent" style={{ animation: "scroll-pulse 2s ease-in-out infinite" }} />
        </div>
      </section>

      <Marquee />

      {/* ═══ ABOUT SECTION ═══ */}
      <section className="py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <RevealOnScroll>
              <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[var(--color-mauve)] mb-4">
                <span className="w-6 h-px bg-[var(--color-mauve)]" />
                {t("nav_about")}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-brown-dark)] leading-tight mb-6">{t("about_title")}</h2>
              <p className="text-[0.94rem] leading-[1.85] mb-4 text-[var(--color-olive)]">{t("about_p1")}</p>
              <p className="text-[0.94rem] leading-[1.85] mb-8 text-[var(--color-olive)]">{t("about_p2")}</p>
              <Link
                href="/hakkimizda"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[var(--color-mauve)] text-white text-sm font-medium hover:bg-[var(--color-mauve-dark)] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
              >
                {t("hero_more")} →
              </Link>
            </RevealOnScroll>

            {/* Product mosaic */}
            <RevealOnScroll delay={120}>
              <div className="grid grid-cols-2 gap-4">
                {productShowcase.map((src, i) => (
                  <div
                    key={src}
                    className={`relative rounded-2xl overflow-hidden bg-[var(--color-beige)] group hover:shadow-[0_12px_40px_rgba(129,91,91,0.1)] transition-all duration-500 hover:-translate-y-1 ${
                      i % 2 === 1 ? "mt-8" : ""
                    }`}
                  >
                    <div className="relative h-48">
                      <Image
                        src={src}
                        alt="Beisya ürün"
                        fill
                        className="object-contain p-6 group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 50vw, 250px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { val: <Counter target={100} suffix="%" />, label: t("stat_vegan") },
              { val: "0", label: t("stat_test") },
              { val: "pH", label: t("stat_ph") },
              { val: <Counter target={50} suffix="+" />, label: t("stat_products") },
            ].map((s, i) => (
              <RevealOnScroll key={i} delay={i * 100}>
                <div className="bg-[var(--color-cream)] rounded-2xl p-6 text-center hover:-translate-y-1 transition-all duration-300 border border-[var(--color-sand)]/30">
                  <div className="font-serif text-3xl md:text-4xl text-[var(--color-mauve)] leading-none mb-2">{s.val}</div>
                  <span className="text-[0.7rem] font-medium tracking-[0.1em] uppercase text-[var(--color-olive)]">{s.label}</span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VALUES ═══ */}
      <section className="py-28 bg-[var(--color-cream)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <RevealOnScroll className="text-center mb-14">
            <span className="inline-block text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[var(--color-mauve)] mb-4">{t("values_tag")}</span>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-brown-dark)]">{t("values_title")}</h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6].map((n) => {
              const icons = ["🌿", "🚀", "🔬", "📦", "↩️", "🐰"];
              return (
                <RevealOnScroll key={n} delay={(n - 1) * 80} className="h-full">
                  <div className="p-7 bg-white rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(129,91,91,0.06)] group border border-[var(--color-sand)]/20 h-full">
                    <span className="text-2xl mb-4 block">{icons[n - 1]}</span>
                    <h3 className="text-[0.92rem] font-semibold text-[var(--color-brown-dark)] mb-2">{t(`val${n}_title`)}</h3>
                    <p className="text-[0.82rem] text-[var(--color-olive)] leading-relaxed">{t(`val${n}_desc`)}</p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <CertMarquee />

      {/* ═══ CTA ═══ */}
      <section className="py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <RevealOnScroll>
            <div className="bg-[var(--color-mauve)] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-white/5 pointer-events-none" />

              <span className="inline-block text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[var(--color-sage)] mb-4">{t("cta_tag")}</span>
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">{t("cta_title")}</h2>
              <p className="max-w-[460px] mx-auto text-[0.94rem] text-white/70 leading-relaxed mb-10">{t("cta_desc")}</p>
              <a
                href="https://www.beisyaonline.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-10 py-4 rounded-full bg-white text-[var(--color-mauve)] text-sm font-semibold hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
              >
                {t("cta_button")}
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
