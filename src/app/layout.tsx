import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import CertMarquee from "@/components/CertMarquee";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { LangProvider } from "@/lib/LangContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Beisya – Dermokozmetik Vegan Cilt Bakımı",
  description: "",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/images/beisyalogo-16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/beisyalogo-32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/beisyalogo-48.png", sizes: "48x48", type: "image/png" },
      { url: "/images/beisyalogo-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    images: ["/images/beisyalogo.jpeg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-gray-600 leading-relaxed">
        <LangProvider>
          <Header />
          <CertMarquee />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </LangProvider>
      </body>
    </html>
  );
}
