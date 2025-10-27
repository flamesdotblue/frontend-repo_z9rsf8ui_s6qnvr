import React from 'react';
import { siteContent } from '../data/content';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded bg-neutral-900 text-white flex items-center justify-center font-bold">
            {siteContent.company.logoText.charAt(0)}
          </div>
          <span className="font-semibold text-neutral-900">
            {siteContent.company.name}
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
          <a href="#home" className="hover:text-neutral-900">Home</a>
          <a href="#projecten" className="hover:text-neutral-900">Projecten</a>
          <a href="#contact" className="hover:text-neutral-900">Contact</a>
        </nav>
        <a
          href={`tel:${siteContent.company.phone.replace(/\s|–/g, '')}`}
          className="inline-flex items-center rounded-md bg-neutral-900 text-white px-3 py-2 text-sm hover:bg-neutral-800"
        >
          Bel: {siteContent.company.phone}
        </a>
      </div>
    </header>
  );
}
