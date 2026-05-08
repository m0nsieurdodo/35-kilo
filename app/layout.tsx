import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import "./globals.css";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "35 kilos d'espoir — Quiz CM2",
  description:
    "Testez vos connaissances sur le roman « 35 kilos d'espoir » d'Anna Gavalda !",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${baloo.variable} ${nunito.variable}`}>
      <body className="font-body bg-amber-50 min-h-screen">{children}</body>
    </html>
  );
}
