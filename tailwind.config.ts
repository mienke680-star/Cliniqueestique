import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      // Official Clinique Estique palette (Visual Brand Document, p.2).
      // Values live as CSS variables in app/globals.css; the names below are
      // the existing ones, so every component picks up the brand palette.
      colors: {
        sage: {
          DEFAULT: "rgb(var(--ce-sage) / <alpha-value>)",
          pale: "rgb(var(--ce-sage-pale) / <alpha-value>)",
          deep: "rgb(var(--ce-sage-deep) / <alpha-value>)",
        },
        seafoam: "rgb(var(--ce-seafoam) / <alpha-value>)",
        charcoal: "rgb(var(--ce-charcoal) / <alpha-value>)",
        silver: "rgb(var(--ce-offwhite) / <alpha-value>)",
        grey: "rgb(var(--ce-softgrey) / <alpha-value>)",
        ink: "rgb(var(--ce-charcoal) / <alpha-value>)",
        paper: "rgb(var(--ce-paper) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        script: ["var(--font-script)", "cursive"],
        label: ["var(--font-label)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      // Fluid display sizes for section headings (brand serif)
      fontSize: {
        "3xl": ["clamp(1.6rem, 1.25rem + 1.4vw, 1.875rem)", { lineHeight: "1.2" }],
        "4xl": ["clamp(1.9rem, 1.35rem + 2.2vw, 2.25rem)", { lineHeight: "1.15" }],
        "5xl": ["clamp(2.25rem, 1.2rem + 2.9vw, 3rem)", { lineHeight: "1.1" }],
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
