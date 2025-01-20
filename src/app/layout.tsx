import type { Metadata } from "next";
import "@/app/globals.scss";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Découvrez mon portfolio de projets de développement web et découvrez mes compétences en programmation!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="fr">
      <body className="text-slate-300 text-xl sm:text-2xl">
        {/* <Header /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
