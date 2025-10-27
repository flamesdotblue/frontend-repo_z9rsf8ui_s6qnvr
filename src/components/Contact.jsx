import React from 'react';
import { siteContent } from '../data/content';

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-neutral-200 p-6 bg-white">
            <h3 className="text-xl font-semibold mb-2">Neem contact op</h3>
            <p className="text-neutral-700 mb-4">{siteContent.contactIntro}</p>
            <ul className="space-y-1 text-neutral-800 mb-6">
              <li><strong>Telefoon:</strong> {siteContent.company.phone}</li>
              <li><strong>E-mail:</strong> {siteContent.company.email}</li>
              <li><strong>Werkgebied:</strong> {siteContent.serviceArea}</li>
            </ul>
            <div className="rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                alt="Gereedschap"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          <form className="rounded-2xl border border-neutral-200 p-6 bg-white space-y-4">
            <h3 className="text-xl font-semibold">Stuur een bericht</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm text-neutral-700">Naam</label>
                <input type="text" className="h-10 rounded-md border border-neutral-300 px-3 focus:outline-none focus:ring-2 focus:ring-neutral-300" placeholder="Uw naam" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm text-neutral-700">E-mail</label>
                <input type="email" className="h-10 rounded-md border border-neutral-300 px-3 focus:outline-none focus:ring-2 focus:ring-neutral-300" placeholder="naam@voorbeeld.nl" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-neutral-700">Telefoon</label>
              <input type="tel" className="h-10 rounded-md border border-neutral-300 px-3 focus:outline-none focus:ring-2 focus:ring-neutral-300" placeholder="06 1234 5678" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-neutral-700">Bericht</label>
              <textarea rows="5" className="rounded-md border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-300" placeholder="Waarmee kunnen we helpen?" />
            </div>
            <button type="button" className="inline-flex items-center rounded-md bg-neutral-900 text-white px-4 py-2 font-medium hover:bg-neutral-800">
              Verstuur bericht
            </button>
            <p className="text-xs text-neutral-500">Dit formulier is een demo. Koppeling aan e-mail of CRM is eenvoudig toe te voegen.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
