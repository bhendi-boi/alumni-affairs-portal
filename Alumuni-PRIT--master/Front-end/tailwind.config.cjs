/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.jsx",
    "./src/components/**/*.jsx",
    "./src/components/*.jsx",
    "./src/pages/**/**.jsx",
    "./src/pages/events/*.jsx",
    "./src/pages/events/components/*.jsx",
    "./src/pages/about/**/*.jsx",
  ],
  theme: {
    fontFamily: {
      head: ["Lexend Deca", "sans-serif"],
    },
    extend: {
      screens: {
        xs: "400px",

        sm: "570px",

        md: "960px",

        lg: "1440px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        // gray: colors.gray,
        green: colors.emerald,
        purple: colors.violet,
        yellow: colors.amber,
        pink: colors.fuchsia,
        "cornflower-blue": "#214B8C",
        error: "rgb(220,38,38)",
        title: "gray-800",
        subtitle: "gray-700",
        paragraph: "gray-600",
      },
    },
  },
  plugins: [require("daisyui")],
};
