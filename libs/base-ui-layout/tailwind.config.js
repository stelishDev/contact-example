const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  purge: [
    join(__dirname, './src/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary': '#00a3ff',
        'secondary': '#f9f9f9',
        'tertiary': '#6e0d83',
        charcoal: '#303030',
        'light-grey': '#D9E0E2',
      },
      spacing: {
        1: '8px',
        2: '16px',
        3: '24px',
        4: '25%',
      },
    },
  },
  plugins: [],
}

