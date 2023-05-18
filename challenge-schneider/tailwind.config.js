/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sch-green': '#46cd4d',
        'sch-blue': '#44b4d9'
      }
    },
  },
  plugins: [],
}