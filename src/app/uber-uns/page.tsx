import type { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerReveal from "@/components/StaggerReveal";

export const metadata: Metadata = {
  title: "Über Uns | Muca Kebap",
  description:
    "Erfahren Sie mehr über Muca Kebap: 100% Halal, täglich frische Zutaten und höchste Hygienestandards in Berlin-Kreuzberg.",
};

export default function UeberUns() {
  return (
    <>
      {/* Hero – solid color, no background image */}
      <section className="bg-muca-dark py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <ScrollReveal>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/logo-circle.svg`}
              alt="Muca Kebap"
              width={100}
              height={100}
              className="mx-auto mb-8"
            />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
              Über Uns
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Die Geschichte hinter Muca Kebap
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story – split layout */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <ScrollReveal direction="left">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-muca-dark mb-6">
                Unsere Leidenschaft für Qualität
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Muca Kebap steht für eine klare Überzeugung: Gutes Essen beginnt mit erstklassigen
                Zutaten. Mitten in Berlin-Kreuzberg, am Oranienplatz, haben wir einen Ort geschaffen,
                an dem Tradition auf höchste Qualitätsansprüche trifft.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Jeder Döner, den wir servieren, erzählt von unserer Hingabe an authentischen
                Geschmack und handwerklicher Sorgfalt. Wir glauben, dass man den Unterschied
                schmecken kann – und unsere Gäste bestätigen das jeden Tag aufs Neue.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/food-1.jpg`}
                  alt="Frischer Döner von Muca Kebap"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pillars – cards with numbers */}
      <section className="py-20 bg-muca-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-muca-dark mb-16">
              Wofür wir stehen
            </h2>
          </ScrollReveal>
          <StaggerReveal className="grid grid-cols-1 gap-8 md:grid-cols-3" stagger={0.2}>
            {/* Halal */}
            <div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
              <span className="absolute -top-4 -right-2 text-[120px] font-black text-muca-yellow/10 leading-none select-none">01</span>
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
                  <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-muca-dark mb-4">100% Halal</h3>
                <p className="text-gray-600 leading-relaxed">
                  Alle unsere Fleischprodukte stammen aus zertifizierten Halal-Quellen. Wir achten
                  streng darauf, dass jede Zutat unseren hohen Standards entspricht. Vertrauen und
                  Transparenz sind uns wichtig.
                </p>
              </div>
            </div>

            {/* Hygiene */}
            <div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
              <span className="absolute -top-4 -right-2 text-[120px] font-black text-muca-yellow/10 leading-none select-none">02</span>
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-muca-dark mb-4">Höchste Hygiene</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sauberkeit ist bei uns keine Option, sondern Grundvoraussetzung. Unsere Küche wird
                  täglich gründlich gereinigt und wir übertreffen die gesetzlichen Hygienevorschriften
                  bei Weitem.
                </p>
              </div>
            </div>

            {/* Fresh */}
            <div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
              <span className="absolute -top-4 -right-2 text-[120px] font-black text-muca-yellow/10 leading-none select-none">03</span>
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-muca-yellow/20">
                  <svg className="h-8 w-8 text-muca-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-muca-dark mb-4">Täglich frisch</h3>
                <p className="text-gray-600 leading-relaxed">
                  Jeden Morgen beginnt unser Tag mit der Zubereitung frischer Zutaten. Unser
                  hausgemachtes Brot wird täglich gebacken und das Dönerfleisch frisch am Spieß
                  aufgesteckt.
                </p>
              </div>
            </div>
          </StaggerReveal>
        </div>
      </section>

      {/* Second story block – reversed */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <ScrollReveal direction="left" className="order-2 lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/food-2.jpg`}
                  alt="Muca Kebap Zubereitung"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-muca-dark mb-6">
                Von der Auswahl bis zum Teller
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Von der Auswahl der frischesten Zutaten bis hin zur liebevollen Zubereitung: Bei
                Muca Kebap ist alles darauf ausgerichtet, Ihnen ein unvergessliches
                Geschmackserlebnis zu bieten.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Nichts kommt von gestern – bei uns zählt nur die Frische des heutigen Tages. Das
                Ergebnis? Ein Döner, der nicht nur satt macht, sondern glücklich.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muca-dark py-16">
        <ScrollReveal className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Überzeugen Sie sich selbst
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Besuchen Sie uns am Oranienplatz und erleben Sie den Unterschied.
          </p>
          <a
            href="https://maps.app.goo.gl/hVg8qfacf4grf7up6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-muca-yellow px-8 py-4 text-lg font-bold text-muca-dark shadow-lg transition-transform hover:scale-105"
          >
            Wegbeschreibung
          </a>
        </ScrollReveal>
      </section>
    </>
  );
}
