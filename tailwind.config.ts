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
        forest: '#4E6A57',
        sage: '#A8B79D',
        cream: '#F8F3EA',
        sand: '#E6D8C3',
        rose: '#D8B7AA',
        ink: '#2F3A32',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
      boxShadow: {
        soft: '0 18px 45px rgba(78, 106, 87, 0.12)',
      },
      backgroundImage: {
        floral:
          'radial-gradient(circle at top left, rgba(216, 183, 170, 0.35), transparent 35%), radial-gradient(circle at bottom right, rgba(168, 183, 157, 0.4), transparent 30%)',
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
