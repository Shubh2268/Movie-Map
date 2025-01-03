/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      logoFont: ["Cinzel Decorative"]
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

