"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/LangContext";
import RevealOnScroll from "@/components/RevealOnScroll";
import Counter from "@/components/Counter";
import CertMarquee from "@/components/CertMarquee";

export default function AboutPage() {
  const { t } = useLang();

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-28 bg-[var(--color-cream)] overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-[var(--color-sand)] opacity-25 blur-3xl pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6">
          <RevealOnScroll className="text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 justify-center text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[var(--color-mauve)] mb-4">
              <span className="w-6 h-px bg-[var(--color-mauve)]" />
              {t("nav_about")}
              <span className="w-6 h-px bg-[var(--color-mauve)]" />
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-brown-dark)] mb-6 leading-tight">{t("about_title")}</h1>
            <p className="text-base text-[var(--color-olive)] leading-relaxed max-w-lg mx-auto">{t("hero_desc")}</p>
          </RevealOnScroll>
        </div>
      </section>

      <CertMarquee />

      {/* Hakkımızda + Kurucu */}
      <section className="py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Hakkımızda Metni */}
          <RevealOnScroll className="max-w-3xl mx-auto text-center mb-24">
            <span className="inline-flex items-center gap-2 justify-center text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[var(--color-mauve)] mb-4">
              <span className="w-6 h-px bg-[var(--color-mauve)]" />
              Hikayemiz
              <span className="w-6 h-px bg-[var(--color-mauve)]" />
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-brown-dark)] mb-8 leading-tight">Hakkımızda</h2>
            <p className="text-[0.94rem] leading-[1.85] mb-5 text-[var(--color-olive)]">
              BEİSYA, T.C. Sağlık Bakanlığı onaylı, temiz içerikli dermokozmetik ürünleriyle cilt bakımında güven ve etkinliği bir araya getirir. Kadın, erkek ve çocuk cildine uyumlu olarak geliştirilen ürünlerimiz; vücudun her bölgesine özel çözümler sunarken, yalnızca bakım değil aynı zamanda destekleyici tedavi yaklaşımıyla fark yaratır.
            </p>
            <p className="text-[0.94rem] leading-[1.85] mb-5 text-[var(--color-olive)]">
              Dermatologlar ve kadın doğum hekimleri tarafından tercih edilen BEİSYA, güçlü Ar-Ge altyapısı ve binlerce özgün formülüyle bilimsel temelli, yüksek performanslı kişisel bakım deneyimi sunar.
            </p>
            <p className="text-[0.94rem] leading-[1.85] mb-8 text-[var(--color-olive)] font-semibold">
              BEİSYA – Bilimle Gelişen, Güvenle Kullanılan Bakım.
            </p>
            <Link
              href="/urunlerimiz"
              className="inline-flex items-center px-8 py-3.5 rounded-full bg-[var(--color-mauve)] text-white text-sm font-medium hover:bg-[var(--color-mauve-dark)] hover:-translate-y-0.5 transition-all duration-300"
            >
              {t("hero_cta")}
            </Link>
          </RevealOnScroll>

          {/* Kurucu */}
          <RevealOnScroll className="flex justify-center">
            <div className="flex flex-col items-center bg-[var(--color-cream)] rounded-2xl overflow-hidden border border-[var(--color-sand)]/30 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(129,91,91,0.08)] transition-all duration-500 w-72 mb-5">
              <div className="relative w-full aspect-[3/4] bg-[var(--color-beige)]">
                <Image
                  src="/images/founder.jpg"
                  alt="Kurucu"
                  fill
                  className="object-cover"
                  sizes="288px"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="font-serif text-lg text-[var(--color-brown-dark)] mb-1">ASLI AŞCI</h3>
                <p className="text-[0.75rem] font-medium tracking-wide uppercase text-[var(--color-mauve)]">Kurucu & Yönetim Kurulu Başkanı</p>
              </div>
            </div>
          </RevealOnScroll>

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

      {/* Values */}
      <section className="py-28 bg-[var(--color-cream)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <RevealOnScroll className="text-center mb-14">
            <span className="inline-block text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[var(--color-mauve)] mb-4">{t("values_tag")}</span>
            <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-brown-dark)]">{t("values_title")}</h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🌿", key: 1 },
              { icon: "🚀", key: 2 },
              { icon: "🔬", key: 3 },
              { icon: "📦", key: 4 },
              { icon: "↩️", key: 5 },
              { icon: "🐰", key: 6 },
            ].map((v, i) => (
              <RevealOnScroll key={v.key} delay={i * 80} className="h-full">
                <div className="p-7 bg-white rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(129,91,91,0.06)] border border-[var(--color-sand)]/20 h-full">
                  <span className="text-2xl mb-4 block">{v.icon}</span>
                  <h3 className="text-[0.92rem] font-semibold text-[var(--color-brown-dark)] mb-2">{t(`val${v.key}_title`)}</h3>
                  <p className="text-[0.82rem] text-[var(--color-olive)] leading-relaxed">{t(`val${v.key}_desc`)}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
