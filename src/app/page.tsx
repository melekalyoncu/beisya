"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/LangContext";
import RevealOnScroll from "@/components/RevealOnScroll";
import Counter from "@/components/Counter";
import Marquee from "@/components/Marquee";
import CertMarquee from "@/components/CertMarquee";

export default function HomePage() {
  const { t } = useLang();

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[var(--color-cream)]">
        {/* Decorative blobs */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[var(--color-sage)] opacity-20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-[var(--color-sand)] opacity-25 blur-3xl pointer-events-none" />

        {/* Botanical SVG */}
        <svg className="absolute top-16 right-4 w-64 h-64 text-[var(--color-sage)] opacity-40 pointer-events-none" viewBox="0 0 200 200" fill="none">
          <path d="M180 20c-30 40-60 50-90 80s-40 60-70 80" stroke="currentColor" strokeWidth="0.8" />
          <path d="M140 40c-10 20-30 30-50 50" stroke="currentColor" strokeWidth="0.6" />
          <ellipse cx="120" cy="50" rx="8" ry="14" transform="rotate(-30 120 50)" stroke="currentColor" strokeWidth="0.5" fill="none" />
          <ellipse cx="155" cy="35" rx="6" ry="11" transform="rotate(-50 155 35)" stroke="currentColor" strokeWidth="0.5" fill="none" />
        </svg>

        <div className="max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full relative z-10">
          {/* Left — text */}
          <RevealOnScroll>
            <p className="text-[0.7rem] font-medium tracking-[0.25em] uppercase text-[var(--color-mauve)] mb-5">
              {t("hero_label")}
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[3.8rem] font-medium text-[var(--color-brown-dark)] leading-[1.08] tracking-tight mb-6">
              {t("hero_title")}
            </h1>
            <p className="text-base text-[var(--color-olive)] max-w-[440px] mb-10 leading-relaxed">
              {t("hero_desc")}
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link
                href="/urunlerimiz"
                className="inline-flex items-center px-9 py-4 rounded-full bg-[var(--color-mauve)] text-white text-sm font-medium hover:bg-[var(--color-mauve-dark)] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
              >
                {t("hero_cta")}
              </Link>
              <Link
                href="/hakkimizda"
                className="inline-flex items-center px-9 py-4 rounded-full border border-[var(--color-sand)] text-[var(--color-brown)] text-sm font-medium hover:border-[var(--color-mauve)] hover:-translate-y-0.5 transition-all duration-300"
              >
                {t("hero_more")}
              </Link>
            </div>
          </RevealOnScroll>

          {/* Right — hero image */}
          <RevealOnScroll delay={150} className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px]">
              {/* Background shape */}
              <div className="absolute inset-4 rounded-[2.5rem] bg-[var(--color-sage)] opacity-30 -z-10" />
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[3/4] shadow-2xl">
                <Image
                  src="/images/cilt.jpeg"
                  alt="Beisya cilt bakımı"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 480px"
                  priority
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-5 py-4 z-20">
                <p className="text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-[var(--color-mauve)] mb-0.5">100% Vegan</p>
                <p className="text-[0.7rem] text-[var(--color-olive)]">Doğal İçerik</p>
              </div>
              {/* Floating badge top-right */}
              <div className="absolute -top-3 -right-3 bg-[var(--color-mauve)] rounded-2xl shadow-xl px-4 py-3 z-20">
                <p className="text-[0.7rem] font-semibold text-white">Dermokozmetik</p>
              </div>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left — image composition */}
            <RevealOnScroll>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-lg">
                    <Image
                      src="/images/krem.jpeg"
                      alt="Beisya krem bakımı"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 280px"
                    />
                  </div>
                  <div className="relative rounded-3xl overflow-hidden aspect-[3/4] mt-12 shadow-lg">
                    <Image
                      src="/images/su.jpeg"
                      alt="Beisya su bakımı"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 280px"
                    />
                  </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border-2 border-[var(--color-sage)] opacity-40 -z-10" />
                <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-[var(--color-cream)] -z-10" />
              </div>
            </RevealOnScroll>

            {/* Right — text */}
            <RevealOnScroll delay={120}>
              <span className="inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[var(--color-mauve)] mb-4">
                <span className="w-8 h-px bg-[var(--color-mauve)]" />
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
          </div>
        </div>
      </section>

      {/* ═══ WHAT MAKES US DIFFERENT ═══ */}
      <section className="py-28 bg-[var(--color-cream)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <RevealOnScroll className="text-center mb-16">
            <span className="inline-block text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[var(--color-mauve)] mb-4">{t("values_tag")}</span>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-brown-dark)]">{t("values_title")}</h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3, 4, 5, 6].map((n) => {
              const icons = [
                <svg key="leaf" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22c-4-3-8-7-8-12C4 5 8 2 12 2s8 3 8 8c0 5-4 9-8 12z" /><path d="M12 22V8" /><path d="M8 12c2-1 4-1 4-4" /><path d="M16 12c-2-1-4-1-4-4" /></svg>,
                <svg key="drop" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" /></svg>,
                <svg key="flask" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 3h6M10 3v6.5L4 20h16L14 9.5V3" /><path d="M8 14h8" /></svg>,
                <svg key="box" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="7" width="18" height="14" rx="2" /><path d="M16 7V5a4 4 0 00-8 0v2" /><circle cx="12" cy="14" r="2" /></svg>,
                <svg key="refresh" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1 4v6h6" /><path d="M23 20v-6h-6" /><path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15" /></svg>,
                <svg key="heart" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>,
              ];
              return (
                <RevealOnScroll key={n} delay={(n - 1) * 80} className="h-full">
                  <div className="p-7 bg-white rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(107,124,94,0.1)] group border border-[var(--color-sand)]/20 h-full">
                    <span className="text-[var(--color-mauve)] mb-4 block">{icons[n - 1]}</span>
                    <h3 className="text-[0.92rem] font-semibold text-[var(--color-brown-dark)] mb-2">{t(`val${n}_title`)}</h3>
                    <p className="text-[0.82rem] text-[var(--color-olive)] leading-relaxed">{t(`val${n}_desc`)}</p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
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

      <CertMarquee />

      {/* ═══ CTA ═══ */}
      <section className="py-28 bg-[var(--color-cream)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <RevealOnScroll>
            <div className="bg-[var(--color-sage)] rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-white/5 pointer-events-none" />

              <span className="inline-block text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[var(--color-mauve-dark)] mb-4">{t("cta_tag")}</span>
              <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-brown-dark)] mb-4">{t("cta_title")}</h2>
              <p className="max-w-[460px] mx-auto text-[0.94rem] text-[var(--color-olive)] leading-relaxed mb-10">{t("cta_desc")}</p>
              <a
                href="https://www.beisyaonline.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-10 py-4 rounded-full bg-[var(--color-mauve)] text-white text-sm font-semibold hover:bg-[var(--color-mauve-dark)] hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300"
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
