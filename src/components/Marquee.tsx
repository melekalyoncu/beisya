"use client";

const items = [
  "Vegan",
  "Cruelty-Free",
  "Sağlık Bakanlığı Onaylı",
  "pH Dengeli",
  "Doğal İçerik",
  "Paraben İçermez",
  "SLS İçermez",
  "İzmir",
];

export default function Marquee() {
  return (
    <div className="border-t border-b border-[var(--color-sand)]/40 py-4 overflow-hidden bg-white">
      <div className="flex animate-[marquee_22s_linear_infinite] whitespace-nowrap">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-4 mx-5 text-[0.7rem] tracking-[0.14em] uppercase text-[var(--color-mauve)]">
            {item}
            <span className="w-1 h-1 rounded-full bg-[var(--color-sand)]" />
          </span>
        ))}
      </div>
    </div>
  );
}
