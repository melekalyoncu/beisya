"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLang } from "@/lib/LangContext";
import { categories } from "@/lib/products";
import LangSwitcher from "./LangSwitcher";

export default function Header() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <LangSwitcher />
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[var(--color-mauve)] shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
            : "bg-[var(--color-mauve)]"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 h-24 flex items-center gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image src="/images/logo.svg" alt="Beisya Logo" width={96} height={96} className="object-contain w-24 h-24" />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8 flex-1 justify-center list-none">
            <li>
              <Link href="/" className="text-sm text-white/70 hover:text-white transition-colors">
                {t("nav_home")}
              </Link>
            </li>
            <li>
              <Link href="/hakkimizda" className="text-sm text-white/70 hover:text-white transition-colors">
                {t("nav_about")}
              </Link>
            </li>
            <li className="relative group">
              <Link
                href="/urunlerimiz"
                className="text-sm text-white/70 hover:text-white transition-colors flex items-center gap-1"
              >
                {t("nav_products")}
                <svg className="w-2.5 h-2.5 transition-transform group-hover:rotate-180" viewBox="0 0 10 10" fill="none">
                  <path d="M2.5 4L5 6.5L7.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
              {/* Dropdown */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-250 z-50">
                <div className="bg-white border border-[var(--color-beige)] rounded-xl p-2 min-w-[260px] shadow-[0_12px_40px_rgba(129,91,91,0.1)]">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/urunlerimiz?kategori=${cat.id}`}
                      className="block px-3 py-2.5 rounded-lg hover:bg-[var(--color-cream)] transition-colors"
                    >
                      <span className="block text-sm font-medium text-[var(--color-brown-dark)]">{t(cat.nameKey)}</span>
                      <span className="block text-xs text-[var(--color-olive)] mt-0.5">{t(cat.descKey)}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <Link href="/iletisim" className="text-sm text-white/70 hover:text-white transition-colors">
                {t("nav_contact")}
              </Link>
            </li>
          </ul>

          {/* CTA */}
          <a
            href="https://www.beisyaonline.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center px-5 py-2 rounded-full bg-white text-[var(--color-mauve)] text-xs font-medium hover:bg-white/90 transition-colors"
          >
            {t("nav_order")}
          </a>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] ml-auto p-1.5 z-[110]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü"
          >
            <span className={`block w-[22px] h-[1.5px] bg-white transition-transform origin-center ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-[22px] h-[1.5px] bg-white transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-[22px] h-[1.5px] bg-white transition-transform origin-center ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden flex flex-col px-6 pb-6 bg-white border-t border-[var(--color-beige)]">
            <Link href="/" onClick={() => setMobileOpen(false)} className="py-3 border-b border-[var(--color-beige)] text-[var(--color-olive)] text-[0.95rem]">
              {t("nav_home")}
            </Link>
            <Link href="/hakkimizda" onClick={() => setMobileOpen(false)} className="py-3 border-b border-[var(--color-beige)] text-[var(--color-olive)] text-[0.95rem]">
              {t("nav_about")}
            </Link>
            <div>
              <button
                onClick={() => setDdOpen(!ddOpen)}
                className="w-full flex items-center justify-between py-3 border-b border-[var(--color-beige)] text-[var(--color-olive)] text-[0.95rem] bg-transparent font-[inherit] cursor-pointer"
              >
                {t("nav_products")}
                <svg className={`w-2.5 h-2.5 transition-transform ${ddOpen ? "rotate-180" : ""}`} viewBox="0 0 10 10" fill="none">
                  <path d="M2.5 4L5 6.5L7.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {ddOpen && (
                <div className="flex flex-col pl-4">
                  {categories.map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/urunlerimiz?kategori=${cat.id}`}
                      onClick={() => setMobileOpen(false)}
                      className="py-2 border-b border-[var(--color-cream)] text-[var(--color-olive)] text-sm hover:text-[var(--color-brown-dark)] transition-colors"
                    >
                      {t(cat.nameKey)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/iletisim" onClick={() => setMobileOpen(false)} className="py-3 border-b border-[var(--color-beige)] text-[var(--color-olive)] text-[0.95rem]">
              {t("nav_contact")}
            </Link>
            <a
              href="https://www.beisyaonline.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center py-3 rounded-full bg-[var(--color-mauve)] text-white text-sm font-medium"
            >
              {t("nav_order")}
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
