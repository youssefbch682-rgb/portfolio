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
        "ring-red": "#C0392B",
        "ring-red-deep": "#96281B",
        "night-blue": "#0D1B2A",
        "night-blue-mid": "#1A2E44",
        "steel": "#4A5568",
        "steel-light": "#718096",
        "neon-white": "#F0F4F8",
        "gold": "#D4A017",
      },
      fontFamily: {
        display: ["'Bebas Neue'", "'Impact'", "sans-serif"],
        body: ["'Inter'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        "flicker": "flicker 3s infinite",
        "slide-up": "slideUp 0.8s ease forwards",
        "pulse-ring": "pulseRing 2s ease-in-out infinite",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
          "75%": { opacity: "0.95" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        pulseRing: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(192,57,43,0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(192,57,43,0.8)" },
        },
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(192,57,43,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(192,57,43,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
    },
  },
  plugins: [],
};

export default config;
