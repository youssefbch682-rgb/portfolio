import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Noirs
        "void": "#000000",
        "deep-black": "#080808",
        "carbon": "#0E0E0E",
        "charcoal": "#141414",
        "anthracite": "#1A1A1A",
        "blue-black": "#0A0A12",
        // Violets
        "violet-neon": "#8B5CF6",
        "violet-electric": "#7C3AED",
        "violet-soft": "#A78BFA",
        "violet-deep": "#4C1D95",
        "violet-dark": "#2E1065",
        "violet-glow": "#6D28D9",
        // Neutres
        "frost": "#F8F8FF",
        "silver": "#C4C4D4",
        "mist": "#6B6B80",
      },
      fontFamily: {
        display: ["'Bebas Neue'", "Impact", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-violet": "linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)",
        "radial-violet": "radial-gradient(ellipse at center, rgba(109,40,217,0.15) 0%, transparent 70%)",
        "gradient-dark": "linear-gradient(135deg, #080808 0%, #0A0A12 50%, #080808 100%)",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "grain": "grain 0.5s steps(1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(139,92,246,0.3)" },
          "50%": { boxShadow: "0 0 60px rgba(139,92,246,0.8), 0 0 100px rgba(139,92,246,0.3)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-2%,-3%)" },
          "20%": { transform: "translate(3%,2%)" },
          "30%": { transform: "translate(-1%,4%)" },
          "40%": { transform: "translate(4%,-1%)" },
          "50%": { transform: "translate(-3%,3%)" },
          "60%": { transform: "translate(2%,-4%)" },
          "70%": { transform: "translate(-4%,1%)" },
          "80%": { transform: "translate(3%,3%)" },
          "90%": { transform: "translate(-2%,-2%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
