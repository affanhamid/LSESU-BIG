import type { Config } from "tailwindcss";

const config: Config = {
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
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        fadeIn: {
          from: { opacity: "0.5" },
          to: { opacity: "1" },
        },
      },
      animation: {
        scroll: "scroll 30s linear infinite",
        fade: "fadeIn 1s ease-in-out",
        fadeHome: "fadeIn 1.5s ease-in-out",
      },
    },
  },
  plugins: [
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        ".clip-hexagon": {
          "-webkit-clip-path":
            "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)",
          "clip-path":
            "polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
export default config;
