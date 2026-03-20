interface MediaItemProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
}

export function MediaItem({ src, alt, className = '', loading = 'lazy' }: MediaItemProps) {
  const isVideo = src.endsWith('.mp4');

  if (isVideo) {
    return (
      <video
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
