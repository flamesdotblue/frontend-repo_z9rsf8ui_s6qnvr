import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-neutral-200 py-8">
        <div className="mx-auto max-w-6xl px-4 text-sm text-neutral-500">
          © {new Date().getFullYear()} BouwPartner. Alle rechten voorbehouden.
        </div>
      </footer>
    </div>
  );
}
