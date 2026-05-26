import type { Metadata } from "next";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Kontakt | Muca Kebap",
  description:
    "Kontaktieren Sie Muca Kebap am Oranienplatz 2, 10999 Berlin. Anfahrt, Öffnungszeiten und Kontaktdaten.",
};

export default function Kontakt() {
  return <ContactContent />;
}
