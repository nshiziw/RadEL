/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'gold': {
        DEFAULT: '#FFA12E',
        dark: '#D99A46',
        light: '#F5C48D',
      },
      'navy-green': {
        DEFAULT: '#0E343D',
        dark: '#0B212B',
        light: '#1B374A',
      },
      'snow': {
        DEFAULT: '#FFFBFE',
        dark: '#E7E7E7',
        light: '#F6F6F6',
      }
    },
    fontFamily: {
      italiana: ['Italiana', 'serif'], // Italiana as serif fallback
      poppins: ['Poppins', 'sans-serif'], // Poppins as sans-serif fallback
    },
  },
  plugins: [],
}