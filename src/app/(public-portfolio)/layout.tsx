import type { Metadata } from "next";
import "@/app/globals.scss";
import Header from "@/components/layouts/public/Header";
import Footer from "@/components/layouts/public/Footer";

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
