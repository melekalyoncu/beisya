"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/LangContext";
import type { Product } from "@/lib/products";

interface Props {
  product: Product;
  hidden?: boolean;
}

export default function ProductCard({ product, hidden }: Props) {
  const { t } = useLang();

  return (
    <Link
      href={`/urunlerimiz/${product.id}`}
      className={`group block bg-white rounded-2xl overflow-hidden transition-all duration-500 relative hover:-translate-y-1 hover:shadow-[0_16px_50px_rgba(129,91,91,0.08)] border border-[var(--color-sand)]/20 ${
        hidden ? "opacity-0 scale-95 pointer-events-none absolute invisible" : ""
      }`}
    >
      {/* Badge */}
      {product.badge && (
        <span className={`absolute top-4 left-4 z-10 text-[0.6rem] font-bold tracking-wider uppercase px-3 py-1.5 rounded-full ${
          product.badge === "badge_new"
            ? "bg-[var(--color-mauve)] text-white"
            : "bg-[var(--color-brown-dark)] text-white"
        }`}>
          {t(product.badge)}
        </span>
      )}

      {/* Image area */}
      <div className="relative h-56 bg-[var(--color-beige)] overflow-hidden">
        <Image
          src={product.image}
          alt={t(product.nameKey)}
          fill
          className="object-contain p-8 product-image-zoom"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="text-[0.62rem] font-bold tracking-[0.15em] uppercase text-[var(--color-mauve)]">
          {t(`cat_${product.category}`)}
        </span>

        <h3 className="font-serif text-base font-medium text-[var(--color-brown-dark)] mt-1.5 mb-2 leading-snug">
          {t(product.nameKey)}
        </h3>
        <p className="text-[0.8rem] text-[var(--color-olive)] mb-4 leading-relaxed line-clamp-2">
          {t(product.descKey)}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.tags.map((tag) => (
            <span key={tag} className="text-[0.65rem] text-[var(--color-olive)] bg-[var(--color-cream)] px-2.5 py-1 rounded-full">
              {t(tag)}
            </span>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between pt-3 border-t border-[var(--color-beige)]">
          <span className="text-xs text-[var(--color-mauve-light)] font-serif italic">beisya</span>
          <span className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-medium border border-[var(--color-sand)] text-[var(--color-brown)] group-hover:border-[var(--color-mauve)] group-hover:text-[var(--color-mauve)] transition-all duration-300">
            {t("prod_view")} →
          </span>
        </div>
      </div>
    </Link>
  );
}
