import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/Components/*.tsx", "./src/app/**/*.tsx"],
  theme: {
    screens: {
      ms: "320px",
      mm: "375px",
      ml: "420px",
      break: "550px",
      md: "765px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    extend: {
      colors: {
        fontColor: "#EEEEEE",
        black: "#0E0E10",
        background: "#0C1A3B",
      },
      fontFamily: {
        textFont: ["Nanum Myeongjo", "serif"],
      },
      backgroundImage: {
        hero: "url(https://utfs.io/f/af9f2fdb-cae0-4888-87bf-18ad9a67710b-1d.jpeg)",
      },
      keyframes: {
        scroll: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        fadeIn: {
          from: {
            opacity: "0.5",
          },
          to: {
            opacity: "1",
          },
        },
      },
      animation: {
        scroll: "scroll 30s linear infinite",
        fade: "fadeIn 1s ease-in-out",
        fadeHome: "fadeIn 1.5s ease-in-out",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
export default config;
