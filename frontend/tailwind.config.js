// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './styles/globals.css',      // include your global CSS
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
