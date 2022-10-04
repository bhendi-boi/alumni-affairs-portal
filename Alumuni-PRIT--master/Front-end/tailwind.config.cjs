/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      screens: {
        sm: "570px",

        md: "960px",

        lg: "1440px",
      },
      colors: {
        "cornflower-blue": "#214B8C",
      },
    },
  },
  plugins: [require("daisyui")],
};
