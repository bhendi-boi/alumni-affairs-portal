/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      screens: {
        xs: "400px",

        sm: "570px",

        md: "960px",

        lg: "1440px",
      },
      colors: {
        "cornflower-blue": "#214B8C",
        error: "rgb(220,38,38)",
      },
    },
  },
  plugins: [require("daisyui")],
};
