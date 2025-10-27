import React, { useState } from 'react';

// Reusable image with loading shimmer and graceful fallback
export default function Image({ src, alt, className = '', rounded = true }) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  if (!src || errored) {
    return (
      <div
        className={
          (rounded ? 'rounded-xl ' : '') +
          'w-full h-full bg-neutral-200 flex items-center justify-center text-neutral-500'
        }
        aria-label={alt}
        role="img"
      >
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <path d="M21 15l-5-5L5 21"></path>
        </svg>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${rounded ? 'rounded-xl' : ''}`}>
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-neutral-200 via-neutral-100 to-neutral-200" />
      )}
      <img
        src={src}
        alt={alt}
        className={`block ${className}`}
        onLoad={() => setLoaded(true)}
        onError={() => setErrored(true)}
      />
    </div>
  );
}
