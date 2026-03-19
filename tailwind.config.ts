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
        forest: '#49614F',
        sage: '#93A486',
        cream: '#FAF6EF',
        sand: '#E7D5BA',
        terracotta: '#B87352',
        ink: '#243127',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
      boxShadow: {
        soft: '0 20px 55px rgba(63, 82, 67, 0.12)',
      },
      backgroundImage: {
        floral:
          'radial-gradient(circle at top left, rgba(184, 115, 82, 0.18), transparent 35%), radial-gradient(circle at bottom right, rgba(147, 164, 134, 0.24), transparent 30%)',
        'floral-strong':
          'radial-gradient(circle at top left, rgba(184, 115, 82, 0.22), transparent 28%), radial-gradient(circle at bottom right, rgba(147, 164, 134, 0.28), transparent 32%), linear-gradient(180deg, rgba(255,255,255,0.86), rgba(255,255,255,0.78))',
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
