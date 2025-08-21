import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connexion • ONIX",
  description: "Accès sécurisé à l’espace ONIX",
  robots: { index: false, follow: true },
};

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return children;
}