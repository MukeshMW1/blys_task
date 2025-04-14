/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",         // If using Vite
    "./src/**/*.{js,ts,jsx,tsx}"  // All files in src with these extensions
  ],
  theme: {
    extend: {
      colors: {
        iceblue: '#a0d2eb',
        frostwhite: 'rgba(255, 255, 255, 0.2)',
      }
    },
  },
  plugins: [],
}
