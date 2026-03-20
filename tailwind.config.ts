import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: '#4A6480',
        sage: '#7EC8C8',
        cream: '#F8F1E8',
        sand: '#F2D4C4',
        terracotta: '#D4952B',
        ink: '#2A1F1A',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-cormorant)', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 55px rgba(74, 100, 128, 0.10)',
      },
      backgroundImage: {
        floral:
          'radial-gradient(circle at top left, rgba(212, 149, 43, 0.14), transparent 35%), radial-gradient(circle at bottom right, rgba(126, 200, 200, 0.18), transparent 30%)',
        'floral-strong':
          'radial-gradient(circle at top left, rgba(212, 149, 43, 0.16), transparent 28%), radial-gradient(circle at bottom right, rgba(126, 200, 200, 0.20), transparent 32%), linear-gradient(180deg, rgba(255,255,255,0.88), rgba(248,241,232,0.82))',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
