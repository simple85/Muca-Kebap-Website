"use client";

import Image from "next/image";
import InstagramEmbed from "@/components/InstagramEmbed";
import ReviewCard from "@/components/ReviewCard";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerReveal from "@/components/StaggerReveal";
import { useT } from "@/lib/LanguageContext";

export default function HomeContent() {
  const { t } = useT();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <Image
          src={`${basePath}/images/food-4.jpg`}
          alt="Frischer Döner von Muca Kebap"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <Image
            src={`${basePath}/images/logo-circle.svg`}
            alt="Muca Kebap Logo"
            width={140}
            height={140}
            className="mx-auto mb-6"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Muca Kebap
          </h1>
          <p className="text-xl sm:text-2xl font-light mb-8 drop-shadow">
            {t.hero.tagline}
          </p>
          <a
            href="https://maps.app.goo.gl/hVg8qfacf4grf7up6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-muca-yellow px-8 py-4 text-lg font-bold text-muca-dark shadow-lg transition-transform hover:scale-105"
          >
            {t.hero.cta}
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muca-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerReveal className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center p-8 rounded-2xl bg-white shadow-sm">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muca-yellow/20">
                <svg className="h-8 w-8 text-muca-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-muca-dark mb-2">{t.features.bread.title}</h3>
              <p className="text-gray-600">{t.features.bread.desc}</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white shadow-sm">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muca-red/10">
                <svg className="h-8 w-8 text-muca-red" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-muca-dark mb-2">{t.features.meat.title}</h3>
              <p className="text-gray-600">{t.features.meat.desc}</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-white shadow-sm">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-muca-dark mb-2">{t.features.hygiene.title}</h3>
              <p className="text-gray-600">{t.features.hygiene.desc}</p>
            </div>
          </StaggerReveal>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-muca-dark mb-4">
              {t.instagram.title}
            </h2>
            <p className="text-center text-gray-600 mb-10">
              <a
                href="https://www.instagram.com/mucakebap.berlin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-muca-yellow font-semibold hover:underline"
              >
                @mucakebap.berlin
              </a>
            </p>
          </ScrollReveal>
          <InstagramEmbed />
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-muca-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-2 mb-2">
                <svg className="h-8 w-8" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-muca-dark">
                  {t.reviews.title}
                </h2>
              </div>
              <div className="flex items-center justify-center gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="h-6 w-6 text-muca-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-500">{t.reviews.subtitle}</p>
            </div>
          </ScrollReveal>

          <StaggerReveal className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.reviews.items.map((review, i) => (
              <ReviewCard key={i} {...review} rating={5} badge={t.reviews.badge} />
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muca-yellow py-16">
        <ScrollReveal className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-muca-dark mb-4">
            {t.cta.hungry}
          </h2>
          <p className="text-xl text-muca-dark/80 mb-8">
            {t.cta.solve}
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
            {t.cta.directions}
          </a>
        </ScrollReveal>
      </section>
    </>
  );
}
