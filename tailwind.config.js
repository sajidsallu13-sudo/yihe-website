/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        yihe: {
          navy: "#081F4D",
          blue: "#0E3A8A",

          china: "#C62828",
          chinaDark: "#8E1B1B",

          sand: "#D8C3A5",
          desert: "#F4EBDD",
          gold: "#C9A227",

          cyan: "#19C3D1",

          charcoal: "#17202A",
        },
      },
    },
  },

  plugins: [],
};