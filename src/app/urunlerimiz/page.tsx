"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useLang } from "@/lib/LangContext";
import { categories, products } from "@/lib/products";
import RevealOnScroll from "@/components/RevealOnScroll";
import ProductCard from "@/components/ProductCard";
import CertMarquee from "@/components/CertMarquee";

const categoryImages: Record<string, string> = {
  sabun: "/images/baby sabun.jpeg",
  yuz: "/images/comedone şampuan.jpeg",
  krem: "/images/terapi krem.jpeg",
  losyon: "/images/süper tonik.jpeg",
  genital: "/images/intim şampuan.jpeg",
  sac: "/images/saç şampuan.jpeg",
};

function ProductsContent() {
  const { t } = useLang();
  const searchParams = useSearchParams();
  const [filter, setFilter] = useState<string>("all");

  useEffect(() => {
    const cat = searchParams.get("kategori");
    if (cat && categories.some((c) => c.id === cat)) {
      setFilter(cat);
    }
  }, [searchParams]);

  const filtered = filter === "all" ? products : products.filter((p) => p.category === filter);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-20 bg-[var(--color-cream)] overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[350px] h-[350px] rounded-full bg-[var(--color-sand)] opacity-25 blur-3xl pointer-events-none" />
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <RevealOnScroll>
            <span className="inline-flex items-center gap-2 justify-center text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[var(--color-mauve)] mb-4">
              <span className="w-6 h-px bg-[var(--color-mauve)]" />
              {t("nav_products")}
              <span className="w-6 h-px bg-[var(--color-mauve)]" />
            </span>
            <h1 className="font-serif text-3xl md:text-4xl text-[var(--color-brown-dark)] mb-4">{t("products_title")}</h1>
            <p className="text-sm text-[var(--color-olive)] max-w-md mx-auto">{t("hero_desc")}</p>
          </RevealOnScroll>
        </div>
      </section>

      <CertMarquee />

      {/* Category Cards */}
      <section className="py-10 bg-white border-b border-[var(--color-beige)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`group relative p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer overflow-hidden ${
                  filter === cat.id
                    ? "border-[var(--color-mauve)] bg-[var(--color-cream)]"
                    : "border-[var(--color-beige)] bg-white hover:border-[var(--color-sand)]"
                }`}
              >
                <div className="relative w-10 h-10 mb-2 rounded-lg overflow-hidden bg-[var(--color-beige)]">
                  <Image src={categoryImages[cat.id]} alt={t(cat.nameKey)} fill className="object-contain p-1" sizes="40px" />
                </div>
                <span className="block text-sm font-semibold text-[var(--color-brown-dark)]">{t(cat.nameKey)}</span>
                <span className="block text-[0.68rem] text-[var(--color-olive)] mt-0.5">{t(cat.shortKey)}</span>
                {filter === cat.id && (
                  <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-[var(--color-mauve)] rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-[var(--color-cream)]">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Filter pills */}
          <div className="flex gap-2 justify-center flex-wrap mb-12">
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer border ${
                filter === "all"
                  ? "bg-[var(--color-mauve)] text-white border-[var(--color-mauve)]"
                  : "bg-white text-[var(--color-olive)] border-[var(--color-sand)] hover:border-[var(--color-mauve)]"
              }`}
            >
              {t("filter_all")} ({products.length})
            </button>
            {categories.map((cat) => {
              const count = products.filter((p) => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`px-6 py-2.5 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer border ${
                    filter === cat.id
                      ? "bg-[var(--color-mauve)] text-white border-[var(--color-mauve)]"
                      : "bg-white text-[var(--color-olive)] border-[var(--color-sand)] hover:border-[var(--color-mauve)]"
                  }`}
                >
                  {t(cat.nameKey)} ({count})
                </button>
              );
            })}
          </div>

          {/* Results count */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-[var(--color-olive)]">
              <span className="font-semibold text-[var(--color-brown-dark)]">{filtered.length}</span> ürün
            </p>
            <div className="h-px flex-1 bg-[var(--color-sand)]/40 mx-6" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p, i) => (
              <RevealOnScroll key={p.id} delay={i * 50}>
                <ProductCard product={p} />
              </RevealOnScroll>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="text-[var(--color-olive)] text-lg">Bu kategoride henüz ürün bulunmamaktadır.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <RevealOnScroll>
            <div className="bg-[var(--color-mauve)] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5 pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-56 h-56 rounded-full bg-white/5 pointer-events-none" />
              <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">{t("cta_title")}</h2>
              <p className="max-w-md mx-auto text-sm text-white/70 mb-8">{t("cta_desc")}</p>
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
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="pt-16 min-h-screen" />}>
      <ProductsContent />
    </Suspense>
  );
}
