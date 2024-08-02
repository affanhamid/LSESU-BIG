import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "fontColor": "#EEEEEE",
        "black": "#0E0E10",
        "background": "#0C1A3B"
      },
      fontFamily: {
        textFont: ["Playfair Display", 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
