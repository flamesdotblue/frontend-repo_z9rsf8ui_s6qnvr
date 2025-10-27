import React from 'react';
import Image from './Image';

export default function Hero() {
  const handleScroll = (e) => {
    e.preventDefault();
    const el = document.querySelector('#projecten');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
            Vakmanschap in elke verbouwing
          </h1>
          <p className="mt-4 max-w-prose text-neutral-600">
            Wij realiseren hoogwaardige renovaties en nieuwbouwprojecten met aandacht voor detail. Van ontwerp tot oplevering – één aanspreekpunt, duidelijke planning.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projecten"
              onClick={handleScroll}
              className="rounded-lg bg-neutral-900 px-4 py-2 text-white shadow-sm hover:bg-neutral-800"
            >
              Bekijk projecten
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-neutral-300 px-4 py-2 text-neutral-900 hover:bg-neutral-50"
            >
              Vrijblijvend gesprek
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/0 via-white/20 to-white/60" />
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop"
            alt="Renovatieproject"
            className="aspect-[4/3]"
            rounded="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
