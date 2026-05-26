import type { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "Über Uns | Muca Kebap",
  description:
    "Erfahren Sie mehr über Muca Kebap: 100% Halal, täglich frische Zutaten und höchste Hygienestandards in Berlin-Kreuzberg.",
};

export default function UeberUns() {
  return <AboutContent />;
}
