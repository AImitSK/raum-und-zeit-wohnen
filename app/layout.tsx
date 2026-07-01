import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://raumundzeit-bo.de"
  ),
  title: "RAUM & ZEIT – Möbliertes Apartment im Südbahnhof Bad Oeynhausen",
  description:
    "Stilvoll möbliertes Apartment im historischen Südbahnhof. Ca. 40 m², frisch renoviert, Boxspringbett, voll ausgestattete Küche, WLAN, Smart-TV. Ideal für Geschäftsreisende & Klinikbesucher.",
  openGraph: {
    title: "RAUM & ZEIT – Apartment Bad Oeynhausen",
    description:
      "Stilvoll möbliertes Apartment im historischen Südbahnhof von Bad Oeynhausen. Ca. 40 m², frisch renoviert, voll ausgestattet. Direkt anfragen.",
    images: ["/bilder/gebaeudefassade.jpg"],
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${cormorant.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}
