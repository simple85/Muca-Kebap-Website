"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return submitted ? (
    <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
      <svg className="mx-auto h-16 w-16 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h3 className="text-2xl font-bold text-muca-dark mb-2">Vielen Dank!</h3>
      <p className="text-gray-600">Ihre Nachricht wurde gesendet. Wir melden uns so bald wie möglich bei Ihnen.</p>
    </div>
  ) : (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-2xl bg-white p-8 shadow-sm space-y-6"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-muca-dark mb-2">
          Name <span className="text-muca-red">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-muca-dark focus:border-muca-yellow focus:outline-none focus:ring-2 focus:ring-muca-yellow/50"
          placeholder="Ihr Name"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-muca-dark mb-2">
          Telefonnummer <span className="text-muca-red">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-muca-dark focus:border-muca-yellow focus:outline-none focus:ring-2 focus:ring-muca-yellow/50"
          placeholder="Ihre Telefonnummer"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-muca-dark mb-2">
          E-Mail <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-muca-dark focus:border-muca-yellow focus:outline-none focus:ring-2 focus:ring-muca-yellow/50"
          placeholder="Ihre E-Mail-Adresse"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-muca-dark mb-2">
          Nachricht <span className="text-muca-red">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-muca-dark focus:border-muca-yellow focus:outline-none focus:ring-2 focus:ring-muca-yellow/50 resize-vertical"
          placeholder="Ihre Nachricht an uns..."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-muca-yellow px-8 py-4 text-lg font-bold text-muca-dark shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        Nachricht senden
      </button>
    </form>
  );
}
