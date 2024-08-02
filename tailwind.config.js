/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/Components/*.tsx", "./src/app/**/*.tsx"],
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
