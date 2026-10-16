import type { Metadata } from "next";
import { Sora, Work_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ÉCLAT SERVICES – Nettoyage Professionnel à Cotonou & Abomey-Calavi",
  description: "Agence de nettoyage résidentiel et professionnel au Bénin. Devis gratuit sous 24h, sans engagement.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${sora.variable} ${workSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}