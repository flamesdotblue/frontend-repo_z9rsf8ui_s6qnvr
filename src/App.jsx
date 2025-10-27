import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  // Simple hash navigation to jump to full projects list
  useEffect(() => {
    if (window.location.hash === '#alle-projecten') {
      const el = document.getElementById('alle-projecten');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleCTAClick = (section) => {
    const id = section === 'projecten' ? 'projecten' : 'contact';
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Navbar />
      <main>
        <Hero onCTAClick={handleCTAClick} />

        {/* Latest projects preview on homepage */}
        <Projects latestOnly />

        {/* Full projects list anchor */}
        <div id="alle-projecten" className="pt-2" />
        <Projects />

        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-neutral-600">
        © {new Date().getFullYear()} Schippers Bouw & Onderhoud. Alle rechten voorbehouden.
      </footer>
    </div>
  );
}
