import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/Components/*.tsx",
    "./src/app/**/*.tsx",
  ],
  theme: {
    screens: {
      'ms': '320px',
      'mm': '375px',
      'ml': '452px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        "fontColor": "#EEEEEE",
        "black": "#0E0E10",
        "background": "#0C1A3B"
      },
      fontFamily: {
        textFont: ["Lato", 'sans-serif'],
        headerFont: ["Playfair Display", 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
