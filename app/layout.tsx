import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}