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
        cpdf: {
          blue: "#005494",
          "blue-light": "#0073C4",
          "blue-dark": "#003B69",
          teal: "#005494",
          "teal-light": "#0073C4",
          "teal-dark": "#003B69",
          dark: "#F8FAFC",
          darker: "#FFFFFF",
          "dark-card": "#FFFFFF",
          "dark-border": "#E2E8F0",
          muted: "#475569",
          light: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-merriweather)", "Georgia", "serif"],
      },
      backgroundImage: {
        "gradient-cpdf": "linear-gradient(135deg, #0B1426 0%, #0D2B3E 50%, #0B1426 100%)",
        "gradient-hero": "linear-gradient(135deg, #060D1A 0%, #0D2B3E 40%, #005494 100%)",
        "gradient-teal": "linear-gradient(135deg, #0073C4 0%, #005494 100%)",
        "gradient-card": "linear-gradient(135deg, #0F1E35 0%, #0D2B3E 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        "float-slow": "float 8s ease-in-out 1s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      boxShadow: {
        "cpdf-glow": "0 0 40px rgba(0, 84, 148, 0.15)",
        "cpdf-glow-blue": "0 0 40px rgba(26, 82, 118, 0.3)",
        "card-hover": "0 20px 60px rgba(0, 0, 0, 0.4)",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};

export default config;
