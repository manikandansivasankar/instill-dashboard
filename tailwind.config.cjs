/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      lg: "1280px",
    },
    fontSize: {
      xs: ["10px", { lineHeight: "16px" }],
      sm: ["12px", { lineHeight: "16.8px" }],
      base: ["14px", { lineHeight: "19.6px" }],
      lg: ["16px", { lineHeight: "19.2px" }],
      xl: ["24px", { lineHeight: "28.8px" }],
    },
    extend: {
      blur: {
        xs: "2px",
      },
      colors: {
        primary: "#3C38CE",
        "primary-light": "#4A4DE6",
        "primary-dark": "#342BC2",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
