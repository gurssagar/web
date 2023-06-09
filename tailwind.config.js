/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],

  theme: {
    fontFamily: {
      display: ["Satisfy", "cursive"],
      final: ["Stacker", "sans"],
      instrument: ['Rajdhani', "sans-serif"],
    },
    extend: {
      animation: {
        blob: "blob 4s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
      },
      screens: {
        'lg': '992px',
        // => @media (min-width: 992px) { ... }
      },
      backgroundImage: {
        hero: "url('bg.jpg')",
      },
    },
  },
  plugins: [],
}

