import React, { useMemo, useState } from 'react';
import Image from './Image';

const TAGS = ['Alle', 'Renovatie', 'Nieuwbouw', 'Interieur'];

const PROJECTS = [
  {
    id: 'p1',
    title: 'Moderne Keukenrenovatie',
    tags: ['Renovatie', 'Interieur'],
    image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
    description:
      'Volledige keukentransformatie met maatwerk kasten, natuursteen blad en energiezuinige verlichting. Oplevering binnen 4 weken.',
  },
  {
    id: 'p2',
    title: 'Duurzame Nieuwbouwwoning',
    tags: ['Nieuwbouw'],
    image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1600&auto=format&fit=crop',
    description:
      'Energieneutrale woning met warmtepomp, drievoudig glas en hoogwaardige afwerking. EPC < 0,2.',
  },
  {
    id: 'p3',
    title: 'Zolder tot Thuiswerkplek',
    tags: ['Renovatie', 'Interieur'],
    image: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1600&auto=format&fit=crop',
    description:
      'Slimme indeling met dakkapel, akoestische wanden en ingebouwde opbergruimte. Klaar in 2 weken.',
  },
  {
    id: 'p4',
    title: 'Uitbouw achtergevel',
    tags: ['Renovatie', 'Nieuwbouw'],
    image: 'https://images.unsplash.com/photo-1752945490118-5b1518f98d77?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxVaXRib3V3JTIwYWNodGVyZ2V2ZWx8ZW58MHwwfHx8MTc2MTU2ODU1Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    description:
      'Licht en ruimte met stalen pui, vloerverwarming en naadloze aansluiting op tuin.',
  },
];

function Chip({ active, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className={[
        'rounded-full px-4 py-2 text-sm',
        active ? 'bg-neutral-900 text-white' : 'border border-neutral-300 text-neutral-700 hover:bg-neutral-50',
      ].join(' ')}
    >
      {label}
    </button>
  );
}

export default function Projects() {
  const [activeTag, setActiveTag] = useState('Alle');
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    if (activeTag === 'Alle') return PROJECTS;
    return PROJECTS.filter((p) => p.tags.includes(activeTag));
  }, [activeTag]);

  const openModal = (project) => {
    setSelected(project);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <section id="projecten" className="bg-neutral-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">Projecten</h2>
            <p className="mt-1 text-neutral-600">Een selectie van recent werk.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <Chip key={t} label={t} active={t === activeTag} onClick={() => setActiveTag(t)} />
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <button
              key={p.id}
              onClick={() => openModal(p)}
              className="group text-left"
              aria-label={`Open details van ${p.title}`}
            >
              <div className="overflow-hidden rounded-2xl">
                <Image src={p.image} alt={p.title} className="aspect-[4/3]" rounded="rounded-2xl" />
              </div>
              <div className="mt-3">
                <h3 className="font-medium text-neutral-900 group-hover:underline">{p.title}</h3>
                <div className="mt-1 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white px-2 py-1 text-xs text-neutral-600 ring-1 ring-neutral-200">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open && selected && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-3xl rounded-2xl bg-white p-4 shadow-xl md:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <Image src={selected.image} alt={selected.title} className="aspect-[16/9]" rounded="rounded-xl" />
            </div>
            <div className="mt-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-neutral-900">{selected.title}</h3>
                <button onClick={closeModal} className="rounded-lg border border-neutral-300 px-3 py-1.5 text-sm hover:bg-neutral-50">
                  Sluiten
                </button>
              </div>
              <p className="mt-2 text-neutral-700">{selected.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
