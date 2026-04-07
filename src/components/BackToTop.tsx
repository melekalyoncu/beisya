"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-4 w-10 h-10 rounded-full bg-white text-[var(--color-brown-dark)] border border-[var(--color-sand)] text-sm cursor-pointer z-[90] shadow-sm transition-all duration-300 hover:bg-[var(--color-brown-dark)] hover:text-white hover:border-[var(--color-brown-dark)] max-md:bottom-20 ${
        visible ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-3 invisible"
      }`}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}
