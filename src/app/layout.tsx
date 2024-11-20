import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/app/components/layouts/Header";
import Footer from "@/app/components/layouts/Footer";

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
      <body className="">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
