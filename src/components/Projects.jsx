import React, { useMemo, useState } from 'react';
import { projects as allProjects, TAGS } from '../data/projects';
import Image from './Image';

function Tag({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full border text-sm transition-colors ${
        active
          ? 'bg-neutral-900 text-white border-neutral-900'
          : 'bg-white text-neutral-800 border-neutral-300 hover:bg-neutral-50'
      }`}
    >
      {label}
    </button>
  );
}

function ProjectCard({ project, onOpen }) {
  const cover = project.photos?.[0];
  return (
    <div
      onClick={() => onOpen(project)}
      className="group cursor-pointer rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <Image src={cover} alt={project.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform" rounded={false} />
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-1 mb-2">
          {project.tags.slice(0, 3).map((t) => (
            <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200">
              {t}
            </span>
          ))}
        </div>
        <h3 className="font-semibold text-neutral-900">{project.title}</h3>
        <p className="text-sm text-neutral-600">{project.location}</p>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }) {
  const [idx, setIdx] = useState(0);
  if (!project) return null;
  const photos = project.photos || [];

  const prev = (e) => {
    e.stopPropagation();
    setIdx((i) => (i - 1 + photos.length) % photos.length);
  };
  const next = (e) => {
    e.stopPropagation();
    setIdx((i) => (i + 1) % photos.length);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[60] bg-black/70 flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-5xl w-full bg-white rounded-2xl overflow-hidden"
      >
        <div className="relative w-full aspect-[16/9] bg-neutral-100">
          {photos.length > 0 && (
            <Image src={photos[idx]} alt={project.title} className="h-full w-full object-cover" rounded={false} />
          )}
          {photos.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow"
                aria-label="Vorige foto"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow"
                aria-label="Volgende foto"
              >
                ›
              </button>
            </>
          )}
        </div>
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((t) => (
              <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200">
                {t}
              </span>
            ))}
          </div>
          <h3 className="text-2xl font-semibold text-neutral-900">{project.title}</h3>
          <p className="text-neutral-600 mb-4">{project.location}</p>
          <p className="text-neutral-700 leading-relaxed">{project.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function Projects({ latestOnly = false }) {
  const [selectedTags, setSelectedTags] = useState([]);
  const [openProject, setOpenProject] = useState(null);

  const sorted = useMemo(() => {
    return [...allProjects].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, []);

  const filtered = useMemo(() => {
    const base = latestOnly ? sorted.slice(0, 4) : sorted;
    if (selectedTags.length === 0) return base;
    return base.filter((p) => selectedTags.every((t) => p.tags.includes(t)));
  }, [sorted, selectedTags, latestOnly]);

  const toggleTag = (tag) => {
    setSelectedTags((s) => (s.includes(tag) ? s.filter((t) => t !== tag) : [...s, tag]));
  };

  return (
    <section id="projecten" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-neutral-900">
              {latestOnly ? 'Laatste projecten' : 'Projecten'}
            </h2>
            <p className="text-neutral-600">
              {latestOnly ? 'Een selectie van recent werk.' : 'Filter op kenmerken om gericht te zoeken.'}
            </p>
          </div>
          {!latestOnly && (
            <div className="hidden md:block text-sm text-neutral-600">{filtered.length} resultaten</div>
          )}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {TAGS.map((t) => (
            <Tag key={t} label={t} active={selectedTags.includes(t)} onClick={() => toggleTag(t)} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProjectCard key={p.id} project={p} onOpen={setOpenProject} />
          ))}
        </div>

        {latestOnly && (
          <div className="text-center mt-10">
            <a href="#alle-projecten" className="inline-flex items-center rounded-md bg-neutral-900 text-white px-5 py-3 font-medium hover:bg-neutral-800">
              Laat alle projecten zien
            </a>
          </div>
        )}
      </div>

      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  );
}
