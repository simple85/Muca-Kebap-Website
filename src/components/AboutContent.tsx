"use client";

import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerReveal from "@/components/StaggerReveal";
import { useT } from "@/lib/LanguageContext";

export default function AboutContent() {
  const { t } = useT();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <>
      {/* Hero */}
      <section className="bg-muca-dark py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <ScrollReveal>
            <Image
              src={`${basePath}/images/logo-circle.svg`}
              alt="Muca Kebap"
              width={100}
              height={100}
              className="mx-auto mb-8"
            />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
              {t.about.title}
            </h1>
            <p className="text-xl text-gray-300 font-light">
              {t.about.subtitle}
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
                {t.about.passion.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                {t.about.passion.p1}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t.about.passion.p2}
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
                <Image
                  src={`${basePath}/images/food-1.jpg`}
                  alt="Frischer Döner von Muca Kebap"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-muca-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-muca-dark mb-16">
              {t.about.pillars.title}
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
                <h3 className="text-2xl font-bold text-muca-dark mb-4">{t.about.pillars.halal.title}</h3>
                <p className="text-gray-600 leading-relaxed">{t.about.pillars.halal.desc}</p>
              </div>
            </div>

            {/* Hygiene */}
            <div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
              <span className="absolute -top-4 -right-2 text-[120px] font-black text-muca-yellow/10 leading-none select-none">02</span>
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-muca-dark mb-4">{t.about.pillars.hygiene.title}</h3>
                <p className="text-gray-600 leading-relaxed">{t.about.pillars.hygiene.desc}</p>
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
                <h3 className="text-2xl font-bold text-muca-dark mb-4">{t.about.pillars.fresh.title}</h3>
                <p className="text-gray-600 leading-relaxed">{t.about.pillars.fresh.desc}</p>
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
                  src={`${basePath}/images/food-2.jpg`}
                  alt="Muca Kebap Zubereitung"
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-muca-dark mb-6">
                {t.about.selection.title}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                {t.about.selection.p1}
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                {t.about.selection.p2}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-muca-dark py-16">
        <ScrollReveal className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            {t.about.ctaTitle}
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            {t.about.ctaSubtitle}
          </p>
          <a
            href="https://maps.app.goo.gl/hVg8qfacf4grf7up6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-muca-yellow px-8 py-4 text-lg font-bold text-muca-dark shadow-lg transition-transform hover:scale-105"
          >
            {t.cta.directions}
          </a>
        </ScrollReveal>
      </section>
    </>
  );
}
