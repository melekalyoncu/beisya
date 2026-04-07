"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/LangContext";
import { categories } from "@/lib/products";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-[var(--color-brown-dark)] text-white/60 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-6">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr] gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 font-serif text-2xl font-semibold tracking-wider text-white">
              <Image src="/images/logo.jpeg" alt="Beisya Logo" width={36} height={36} className="rounded-full object-cover w-9 h-9" />
              beisya
            </Link>
            <p className="text-sm text-white/40 mt-3 leading-relaxed max-w-xs">
              {t("footer_slogan")}
            </p>
            <div className="flex items-center gap-3 mt-5 flex-wrap">
              {(["badge_vegan", "badge_cruelty", "badge_derm"] as const).map((key) => (
                <span key={key} className="text-[0.62rem] text-white/40 border border-white/10 rounded-full px-3 py-1">
                  {t(key)}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[0.7rem] font-bold tracking-[0.14em] uppercase text-white/80 mb-4">
                {t("footer_nav")}
              </h4>
              {[
                { href: "/", key: "nav_home" },
                { href: "/hakkimizda", key: "nav_about" },
                { href: "/urunlerimiz", key: "nav_products" },
                { href: "/iletisim", key: "nav_contact" },
              ].map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="block text-sm text-white/40 mb-2.5 hover:text-white transition-colors"
                >
                  {t(item.key)}
                </Link>
              ))}
            </div>
            <div>
              <h4 className="text-[0.7rem] font-bold tracking-[0.14em] uppercase text-white/80 mb-4">
                {t("footer_cats")}
              </h4>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={`/urunlerimiz?kategori=${cat.id}`}
                  className="block text-sm text-white/40 mb-2.5 hover:text-white transition-colors"
                >
                  {t(cat.nameKey)}
                </Link>
              ))}
            </div>
            <div>
              <h4 className="text-[0.7rem] font-bold tracking-[0.14em] uppercase text-white/80 mb-4">
                {t("footer_contact")}
              </h4>
              <a
                href="https://www.beisyaonline.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-white/40 mb-2.5 hover:text-white transition-colors"
              >
                beisyaonline.com
              </a>
              <p className="text-sm text-white/40 mb-2.5">Karşıyaka, İzmir</p>
              <p className="text-sm text-white/40">{t("contact_cargo_val")}</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 pb-2 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-white/25">
            © {new Date().getFullYear()} Beisya. {t("footer_rights")}
          </span>
          <span className="text-[0.62rem] tracking-[0.1em] uppercase text-white/20">
            {t("footer_slogan")}
          </span>
        </div>
      </div>
    </footer>
  );
}
