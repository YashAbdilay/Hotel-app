import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ONIX • Agence des commissions d’achat international",
  description: "ONIX facilite l’achat de marchandises entre le pays et l’étranger.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="px-4 py-3 border-b border-black/10 dark:border-white/10 flex items-center gap-3">
          <img src="/onix-logo.svg" alt="ONIX" width="32" height="32" className="select-none" />
          <span className="font-semibold">ONIX</span>
          <a href="/login" className="ml-auto text-sm opacity-80 hover:opacity-100">Connexion</a>
        </header>
        {children}
      </body>
    </html>
  );
}
