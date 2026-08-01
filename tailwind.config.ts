import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          DEFAULT: "#A3BDB9",
          deep: "#677877",
        },
        charcoal: "#444A54",
        silver: "#E9EBEB",
        grey: "#D9D9D9",
        ink: "#2B2F36",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        script: ["var(--font-script)", "cursive"],
        label: ["var(--font-label)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      maxWidth: {
        content: "1400px",
      },
      letterSpacing: {
        widest2: ".25em",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        ripple: {
          "0%": { transform: "scale(0)", opacity: "0.6" },
          "100%": { transform: "scale(4)", opacity: "0" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.9s cubic-bezier(.16,.8,.3,1) both",
        shimmer: "shimmer 2.5s linear infinite",
        ripple: "ripple 1.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
