import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Muca Kebap | Frisch. Halal. Hausgemacht. | Berlin",
  description:
    "Muca Kebap in Berlin-Kreuzberg: Täglich frisches hausgemachtes Hausbrot, frisches Dönerfleisch und einwandfreie Hygiene. Besuchen Sie uns am Oranienplatz!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
