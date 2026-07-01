import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        "paper-warm": "var(--paper-warm)",
        "paper-deep": "var(--paper-deep)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        forest: "var(--forest)",
        "forest-deep": "var(--forest-deep)",
        walnut: "var(--walnut)",
        brass: "var(--brass)",
        line: "var(--line)",
      },
      fontFamily: {
        display: "var(--display)",
        sans: "var(--sans)",
      },
    },
  },
  plugins: [],
};

export default config;
