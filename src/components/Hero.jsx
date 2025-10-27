import React from 'react';
import { siteContent } from '../data/content';
import Image from './Image';

export default function Hero({ onCTAClick }) {
  return (
    <section id="home" className="relative">
      <div className="relative h-[60vh] sm:h-[70vh] w-full overflow-hidden rounded-b-3xl">
        <Image
          src={siteContent.hero.image}
          alt="Vakmanschap in uitvoering"
          className="h-full w-full object-cover"
          rounded={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
            <h1 className="text-white text-3xl sm:text-5xl font-semibold max-w-3xl">
              {siteContent.hero.heading}
            </h1>
            <p className="mt-4 text-white/90 max-w-2xl">
              {siteContent.hero.subheading}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button
                onClick={() => onCTAClick?.('contact')}
                className="inline-flex items-center rounded-md bg-white text-neutral-900 px-4 py-2 font-medium hover:bg-neutral-100"
              >
                {siteContent.hero.ctaPrimary}
              </button>
              <button
                onClick={() => onCTAClick?.('projecten')}
                className="inline-flex items-center rounded-md bg-neutral-900 text-white px-4 py-2 font-medium hover:bg-neutral-800"
              >
                {siteContent.hero.ctaSecondary}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="-mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white p-6 shadow border border-neutral-200">
            <h2 className="text-xl font-semibold mb-3">{siteContent.about.title}</h2>
            <p className="text-neutral-700 leading-relaxed">{siteContent.about.text}</p>
            <p className="text-neutral-700 leading-relaxed mt-3">{siteContent.about.extra}</p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {siteContent.about.serviceImages.map((src, idx) => (
              <div
                key={idx}
                className={(idx === 1 ? 'col-span-2 ' : '') + 'overflow-hidden rounded-2xl border border-neutral-200'}
              >
                <Image src={src} alt="Service" className="h-48 w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
