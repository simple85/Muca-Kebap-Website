import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Kontakt | Muca Kebap",
  description:
    "Kontaktieren Sie Muca Kebap am Oranienplatz 2, 10999 Berlin. Anfahrt, Öffnungszeiten und Kontaktdaten.",
};

export default function Kontakt() {
  return (
    <>
      {/* Hero – solid color */}
      <section className="bg-muca-dark py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <ScrollReveal>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
              Kontakt
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Wir freuen uns auf Ihren Besuch
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Info */}
            <ScrollReveal direction="left">
              <h2 className="text-3xl font-extrabold text-muca-dark mb-8">
                Besuchen Sie uns
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-muca-yellow/20">
                    <svg className="h-6 w-6 text-muca-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-muca-dark">Adresse</h3>
                    <p className="text-gray-600">Oranienpl. 2, 10999 Berlin</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-muca-yellow/20">
                    <svg className="h-6 w-6 text-muca-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-muca-dark">Telefon</h3>
                    <a href="tel:0000" className="text-gray-600 hover:text-muca-yellow transition-colors">
                      0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-muca-yellow/20">
                    <svg className="h-6 w-6 text-muca-yellow" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-muca-dark">Instagram</h3>
                    <a
                      href="https://www.instagram.com/mucakebap.berlin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-muca-yellow transition-colors"
                    >
                      @mucakebap.berlin
                    </a>
                  </div>
                </div>
              </div>

              {/* Storefront Image */}
              <div className="mt-10 relative h-80 overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/images/storefront.jpg"
                  alt="Muca Kebap Laden am Oranienplatz"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>

            {/* Google Map */}
            <ScrollReveal direction="right">
              <h2 className="text-3xl font-extrabold text-muca-dark mb-8">
                So finden Sie uns
              </h2>
              <div className="overflow-hidden rounded-2xl shadow-md h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.5!2d13.4150553!3d52.5022533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84f00176a48f9%3A0xb35c875372c434e0!2sMuca%20Kebap!5e0!3m2!1sde!2sde!4v1700000000000!5m2!1sde!2sde"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Muca Kebap auf Google Maps"
                />
              </div>
              <div className="mt-6 text-center">
                <a
                  href="https://maps.app.goo.gl/hVg8qfacf4grf7up6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-muca-yellow px-8 py-4 text-lg font-bold text-muca-dark shadow-lg transition-transform hover:scale-105"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  In Google Maps öffnen
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muca-yellow py-16">
        <ScrollReveal className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-muca-dark mb-4">
            Hunger?
          </h2>
          <p className="text-xl text-muca-dark/80 mb-8">
            Wir können das lösen!
          </p>
          <a
            href="https://maps.app.goo.gl/hVg8qfacf4grf7up6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-muca-dark px-10 py-5 text-xl font-bold text-white shadow-xl transition-transform hover:scale-105"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Wegbeschreibung
          </a>
        </ScrollReveal>
      </section>
    </>
  );
}
