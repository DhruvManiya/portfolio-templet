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
        primary: '#26232c',
        secondary: '#71EAC6',
        font_color: '#b2d1c9',
        custom: {
          DEFAULT: "#10B981",
          light: "#D1FAE5"
        }
      }
      
    },
  },
  plugins: [],
}