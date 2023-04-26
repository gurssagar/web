/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],

    theme: {
    fontFamily: {
        display: ["Satisfy", "cursive"],
        final: ["Vantage", "sans"],
      instrument: ['Rajdhani', "sans-serif"],
    },
    extend: {
      backgroundImage: {
        hero: "url('bg.jpg')",
      },
    },
  },
  plugins: [],
}

