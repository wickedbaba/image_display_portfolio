/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#E8D5B7',  // Darker base cream
          light: '#F2E3CC',    // Slightly darker light cream
          dark: '#D4C4A7',     // Darker cream for hover/active states
        }
      }
    },
  },
  plugins: [],
};
