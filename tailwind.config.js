/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary1: '#c0a58e',
        secondary2: '#f2ede9',
        border: '#645649',
        spanColor: '#c5b19f',
        font_color: '#232323',
        custom: {
          DEFAULT: "#10B981",
          light: "#D1FAE5"
        }
      }
    },
  },
  plugins: [],
}