import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/Components/*.tsx", "./src/app/**/*.tsx"],
  theme: {
    screens: {
      ms: "320px",
      mm: "375px",
      ml: "452px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        fontColor: "#EEEEEE",
        black: "#0E0E10",
        background: "#0C1A3B",
      },
      fontFamily: {
        textFont: ["Nanum Myeongjo", "serif"],
        headerFont: ["Nanum Myeongjo", "serif"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 30s linear infinite",
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
