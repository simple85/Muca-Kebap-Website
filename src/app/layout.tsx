import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  metadataBase: new URL("https://simple85.github.io/Muca-Kebap-Website"),
  title: "Muca Kebap | Frisch. Halal. Hausgemacht. | Berlin",
  description:
    "Muca Kebap in Berlin-Kreuzberg: Täglich frisches hausgemachtes Hausbrot, frisches Dönerfleisch und einwandfreie Hygiene. Besuchen Sie uns am Oranienplatz!",
  openGraph: {
    title: "Muca Kebap | Frisch. Halal. Hausgemacht.",
    description:
      "Muca Kebap in Berlin-Kreuzberg: Frisches Hausbrot, Dönerfleisch vom Spieß und höchste Hygiene. Besuchen Sie uns am Oranienplatz!",
    images: [`${basePath}/images/og-image.png`],
    type: "website",
    locale: "de_DE",
  },
  twitter: {
    card: "summary",
    title: "Muca Kebap | Frisch. Halal. Hausgemacht.",
    description:
      "Muca Kebap in Berlin-Kreuzberg: Frisches Hausbrot, Dönerfleisch vom Spieß und höchste Hygiene.",
    images: [`${basePath}/images/og-image.png`],
  },
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
