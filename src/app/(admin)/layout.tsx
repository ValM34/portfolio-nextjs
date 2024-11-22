import type { Metadata } from "next";
import "@/app/globals.scss";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="fr">
      <body className="">
        {children}
      </body>
    </html>
  );
}
