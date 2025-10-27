import React from 'react';
import { Phone } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-neutral-900" />
          <span className="font-semibold tracking-tight">BouwPartner</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#home" className="text-sm text-neutral-700 hover:text-neutral-900">Home</a>
          <a href="#projecten" className="text-sm text-neutral-700 hover:text-neutral-900">Projecten</a>
          <a href="#contact" className="text-sm text-neutral-700 hover:text-neutral-900">Contact</a>
        </nav>
        <a
          href="tel:+31000000000"
          className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800"
          aria-label="Bel ons"
        >
          <Phone size={18} />
          Bel nu
        </a>
      </div>
    </header>
  );
}
