import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#14231f',
        forest: '#173f35',
        moss: '#6d8f71',
        paper: '#f6f4ee',
        copper: '#b56d43',
        line: '#d9ddd3',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        serif: ['var(--font-newsreader)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
