"use client";

import Image from "next/image";
import { useLang } from "@/lib/LangContext";
import RevealOnScroll from "./RevealOnScroll";

/* Zigzag layout alternating image/text — matches Figma "Trust our product process" */
const ingredients = [
  {
    nameKey: "ing_tea_tree",
    descKey: "ing_tea_tree_long",
    image: "/images/çay ağacı sabun.jpeg",
  },
  {
    nameKey: "ing_calendula",
    descKey: "ing_calendula_long",
    image: "/images/balans krem.jpeg",
  },
  {
    nameKey: "ing_coconut",
    descKey: "ing_coconut_long",
    image: "/images/terapi krem.jpeg",
  },
];

export default function IngredientShowcase() {
  const { t } = useLang();

  return (
    <section className="py-28 bg-[var(--color-cream)] relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-[var(--color-sand)] opacity-20 blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <RevealOnScroll className="text-center mb-20">
          <span className="inline-block text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[var(--color-mauve)] mb-4">
            {t("ing_tag")}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-brown-dark)]">{t("ing_title")}</h2>
        </RevealOnScroll>

        {/* Zigzag ingredient rows */}
        <div className="space-y-20">
          {ingredients.map((ing, i) => {
            const isEven = i % 2 === 0;
            return (
              <RevealOnScroll key={ing.nameKey} delay={i * 100}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${isEven ? "" : "md:[direction:rtl]"}`}>
                  {/* Image side */}
                  <div className={`${isEven ? "" : "md:[direction:ltr]"}`}>
                    <div className="relative h-72 md:h-80 rounded-2xl overflow-hidden bg-[var(--color-beige)]">
                      <Image
                        src={ing.image}
                        alt={t(ing.nameKey)}
                        fill
                        className="object-contain p-10"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  {/* Text side */}
                  <div className={`${isEven ? "" : "md:[direction:ltr]"}`}>
                    <span className="inline-block w-10 h-px bg-[var(--color-mauve)] mb-6" />
                    <h3 className="font-serif text-2xl md:text-3xl text-[var(--color-brown-dark)] mb-4">{t(ing.nameKey)}</h3>
                    <p className="text-[0.94rem] text-[var(--color-olive)] leading-[1.85]">{t(ing.descKey)}</p>
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
