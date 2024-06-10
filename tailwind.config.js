/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(213, 232, 255)',
        border: 'rgba(213, 232, 255, 0.3)',
      }
    },
  },
  plugins: [],
}