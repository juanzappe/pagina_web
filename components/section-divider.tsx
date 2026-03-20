export function SectionDivider() {
  return (
    <div className="shell mt-16 flex items-center justify-center gap-4" aria-hidden="true">
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-forest/10 to-transparent" />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-terracotta/30">
        <path
          d="M12 2C12 2 8 6 8 10c0 2 1.5 3.5 4 3.5S16 12 16 10c0-4-4-8-4-8z"
          fill="currentColor"
        />
        <path
          d="M12 22v-8M9 17l3-3 3 3"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-forest/10 to-transparent" />
    </div>
  );
}
