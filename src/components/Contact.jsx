import React, { useState } from 'react';
import Image from './Image';

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 800);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">Neem contact op</h2>
          <p className="mt-2 text-neutral-600">
            Vertel ons meer over je project. We reageren doorgaans binnen één werkdag.
          </p>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-neutral-700">Naam</label>
              <input id="name" name="name" required className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 outline-none ring-neutral-300 placeholder:text-neutral-400 focus:ring-2" placeholder="Voor- en achternaam" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-neutral-700">E-mail</label>
              <input id="email" type="email" name="email" required className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 outline-none ring-neutral-300 placeholder:text-neutral-400 focus:ring-2" placeholder="jij@bedrijf.nl" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-neutral-700">Bericht</label>
              <textarea id="message" name="message" rows={4} required className="mt-1 w-full rounded-lg border border-neutral-300 px-3 py-2 outline-none ring-neutral-300 placeholder:text-neutral-400 focus:ring-2" placeholder="Waarmee kunnen we helpen?" />
            </div>
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex w-full items-center justify-center rounded-lg bg-neutral-900 px-4 py-2 font-medium text-white hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-70 md:w-auto"
            >
              {status === 'submitting' ? 'Verzenden…' : status === 'success' ? 'Verzonden! ✅' : 'Verstuur bericht'}
            </button>
          </form>
        </div>
        <div className="relative">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/0 via-white/10 to-white/60" />
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop"
            alt="Team aan het werk"
            className="aspect-[4/3]"
            rounded="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
