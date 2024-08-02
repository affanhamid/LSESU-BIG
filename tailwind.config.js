/** @type {import('tailwindcss').Config} */
const { join } = require("path");

const config = {
  content: [
    join(__dirname, "./src/pages/**/*.{js,ts,jsx,tsx,mdx}"),
    join(__dirname, "./src/components/**/*.{js,ts,jsx,tsx,mdx}"),
    join(__dirname, "./src/app/**/*.{js,ts,jsx,tsx,mdx}"),
  ],
  theme: {
    extend: {
      colors: {
        fontColor: "#EEEEEE",
        black: "#0E0E10",
        background: "#0C1A3B",
      },
      fontFamily: {
        textFont: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
