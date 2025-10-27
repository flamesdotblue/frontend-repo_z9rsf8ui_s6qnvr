import React, { useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Image({ src, alt, className = '', rounded = 'rounded-xl', fallback = null }) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const handleLoad = () => setLoaded(true);
  const handleError = () => setError(true);

  const fallbackNode = fallback ?? (
    <div
      className={classNames(
        'flex items-center justify-center bg-neutral-100 text-neutral-400',
        rounded,
        'aspect-[4/3] w-full'
      )}
    >
      <span className="text-sm">Afbeelding niet beschikbaar</span>
    </div>
  );

  return (
    <div className={classNames('relative overflow-hidden', rounded, className)}>
      {!loaded && !error && (
        <div className="absolute inset-0 animate-pulse bg-neutral-100" />
      )}
      {error ? (
        fallbackNode
      ) : (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={classNames(
            'h-full w-full object-cover transition-opacity duration-500',
            loaded ? 'opacity-100' : 'opacity-0',
            rounded
          )}
        />
      )}
    </div>
  );
}
