import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        coffee: {
          50: '#fdf8f3',
          100: '#f9ede0',
          200: '#f2d9bf',
          300: '#e8bf96',
          400: '#dc9e6d',
          500: '#d2844f',
          600: '#c46b3d',
          700: '#a35534',
          800: '#854730',
          900: '#6c3c2a',
          950: '#3a1d14',
        },
        yyc: {
          sky: '#1e3a5f',
          mountain: '#2d4a3e',
          sunrise: '#f4a460',
        }
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to bottom, rgba(30, 58, 95, 0.8), rgba(45, 74, 62, 0.6))',
      },
    },
  },
  plugins: [],
}
export default config