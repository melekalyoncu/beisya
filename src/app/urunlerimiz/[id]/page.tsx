"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/LangContext";
import { products, categories } from "@/lib/products";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { t } = useLang();
  const product = products.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center bg-[var(--color-cream)]">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-[var(--color-brown-dark)] mb-4">Ürün Bulunamadı</h1>
          <Link href="/urunlerimiz" className="text-[var(--color-mauve)] hover:underline">
            ← Ürünlere Dön
          </Link>
        </div>
      </div>
    );
  }

  const category = categories.find((c) => c.id === product.category);
  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="pt-24">
      {/* Breadcrumb */}
      <div className="bg-[var(--color-cream)] border-b border-[var(--color-sand)]/30">
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-xs text-[var(--color-olive)]">
            <Link href="/" className="hover:text-[var(--color-mauve)] transition-colors">{t("nav_home")}</Link>
            <span>/</span>
            <Link href="/urunlerimiz" className="hover:text-[var(--color-mauve)] transition-colors">{t("nav_products")}</Link>
            <span>/</span>
            {category && (
              <>
                <Link href={`/urunlerimiz?kategori=${category.id}`} className="hover:text-[var(--color-mauve)] transition-colors">
                  {t(category.nameKey)}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-[var(--color-brown-dark)] font-medium">{t(product.nameKey)}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-16 md:py-24 bg-[var(--color-cream)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <RevealOnScroll>
              <div className="max-w-[500px] mx-auto w-full">
                <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-[var(--color-beige)]">
                  {product.badge && (
                    <span className={`absolute top-6 left-6 z-10 text-[0.65rem] font-bold tracking-wider uppercase px-4 py-2 rounded-full ${
                      product.badge === "badge_new"
                        ? "bg-[var(--color-mauve)] text-white"
                        : "bg-[var(--color-brown-dark)] text-white"
                    }`}>
                      {t(product.badge)}
                    </span>
                  )}
                  <Image
                    src={activeImage === 1 && product.image2 ? product.image2 : product.image}
                    alt={t(product.nameKey)}
                    fill
                    className="object-contain p-12 md:p-16"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                {product.image2 && (
                  <div className="flex gap-3 mt-4 justify-center">
                    {[product.image, product.image2].map((src, i) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => setActiveImage(i)}
                        className={`relative w-20 h-20 rounded-xl overflow-hidden bg-[var(--color-beige)] border-2 transition-colors ${
                          activeImage === i ? "border-[var(--color-mauve)]" : "border-transparent hover:border-[var(--color-sand)]"
                        }`}
                        aria-label={`${t(product.nameKey)} ${i + 1}`}
                      >
                        <Image src={src} alt="" fill className="object-contain p-2" sizes="80px" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </RevealOnScroll>

            {/* Info */}
            <RevealOnScroll delay={100}>
              <div>
                {category && (
                  <Link
                    href={`/urunlerimiz?kategori=${category.id}`}
                    className="inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[var(--color-mauve)] mb-4 hover:text-[var(--color-mauve-dark)] transition-colors"
                  >
                    <span className="w-6 h-px bg-[var(--color-mauve)]" />
                    {t(category.nameKey)}
                  </Link>
                )}
                <h1 className="font-serif text-3xl md:text-4xl lg:text-[2.8rem] font-medium text-[var(--color-brown-dark)] leading-tight mb-6">
                  {t(product.nameKey)}
                </h1>
                <p className="text-base text-[var(--color-olive)] leading-[1.85] mb-8">
                  {t(product.descKey)}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.72rem] text-[var(--color-mauve)] bg-white px-4 py-2 rounded-full border border-[var(--color-sand)]/40"
                    >
                      {t(tag)}
                    </span>
                  ))}
                </div>

                {/* Trust badges */}
                <div className="flex items-center gap-4 mb-10 flex-wrap">
                  {(["badge_vegan", "badge_cruelty", "badge_derm"] as const).map((key) => (
                    <span key={key} className="flex items-center gap-1.5 text-[0.7rem] text-[var(--color-olive)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-mauve)]" />
                      {t(key)}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex gap-3 flex-wrap">
                  <a
                    href="https://www.beisyaonline.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-10 py-4 rounded-full bg-[var(--color-mauve)] text-white text-sm font-semibold hover:bg-[var(--color-mauve-dark)] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                  >
                    {t("nav_order")}
                  </a>
                  <Link
                    href="/urunlerimiz"
                    className="inline-flex items-center px-8 py-4 rounded-full border border-[var(--color-sand)] text-[var(--color-brown)] text-sm font-medium hover:border-[var(--color-mauve)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    ← {t("nav_products")}
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-6">
            <RevealOnScroll className="text-center mb-12">
              <span className="inline-block text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[var(--color-mauve)] mb-3">
                {category ? t(category.nameKey) : ""}
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-brown-dark)]">Benzer Ürünler</h2>
            </RevealOnScroll>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p, i) => (
                <RevealOnScroll key={p.id} delay={i * 80}>
                  <Link
                    href={`/urunlerimiz/${p.id}`}
                    className="group block bg-white rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(129,91,91,0.08)] transition-all duration-500 border border-[var(--color-sand)]/20"
                  >
                    <div className="relative h-56 bg-[var(--color-beige)] overflow-hidden">
                      {p.badge && (
                        <span className={`absolute top-4 left-4 z-10 text-[0.6rem] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full ${
                          p.badge === "badge_new" ? "bg-[var(--color-mauve)] text-white" : "bg-[var(--color-brown-dark)] text-white"
                        }`}>
                          {t(p.badge)}
                        </span>
                      )}
                      <Image
                        src={p.image}
                        alt={t(p.nameKey)}
                        fill
                        className="object-contain p-8 product-image-zoom"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <span className="text-[0.62rem] font-bold tracking-[0.15em] uppercase text-[var(--color-mauve)]">
                        {category ? t(category.nameKey) : ""}
                      </span>
                      <h3 className="font-serif text-base font-medium text-[var(--color-brown-dark)] mt-1.5 mb-2 leading-snug">
                        {t(p.nameKey)}
                      </h3>
                      <p className="text-[0.8rem] text-[var(--color-olive)] line-clamp-2 leading-relaxed">
                        {t(p.descKey)}
                      </p>
                    </div>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
