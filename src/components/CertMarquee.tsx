"use client";

import Image from "next/image";

const certs = [
  { src: "/images/saglik-bakanligi.png", alt: "T.C. Sağlık Bakanlığı" },
  { src: "/images/iso.png", alt: "ISO" },
  { src: "/images/gmp.png", alt: "GMP" },
  { src: "/images/helal.png", alt: "Helal Sertifikası" },
];

export default function CertMarquee() {
  const items = [...certs, ...certs, ...certs, ...certs];

  return (
    <div className="py-10 overflow-hidden bg-[var(--color-cream)]">
      <p className="text-center text-[0.7rem] font-semibold tracking-[0.18em] uppercase text-[var(--color-mauve)] mb-6">
        Sertifikalarımız
      </p>
      <div className="flex animate-[marquee_20s_linear_infinite] items-center">
        {items.map((cert, i) => (
          <div key={i} className="flex-shrink-0 mx-10">
            <Image
              src={cert.src}
              alt={cert.alt}
              width={80}
              height={80}
              className="object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
