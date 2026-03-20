'use client';

import { useEffect, useRef } from 'react';

interface MediaItemProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export function MediaItem({ src, alt, className = '', loading = 'lazy' }: MediaItemProps) {
  const isVideo = src.endsWith('.mp4');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isVideo || !videoRef.current) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => {
      if (!videoRef.current) return;
      if (mq.matches) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    };
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [isVideo]);

  if (isVideo) {
    return (
      <video
        ref={videoRef}
        src={src}
        className={className}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <track kind="descriptions" label={alt} />
      </video>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
    />
  );
}
