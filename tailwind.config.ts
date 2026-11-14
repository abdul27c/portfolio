import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#07090c",
          900: "#0b0f14",
          800: "#11161d",
          700: "#1a212b",
          600: "#2a3340",
        },
        fog: {
          100: "#e6edf3",
          300: "#a9b4c0",
          500: "#6b7785",
        },
        signal: {
          DEFAULT: "#3dff9a",
          dim: "#1f8f57",
        },
        cyan: {
          DEFAULT: "#38e1ff",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      keyframes: {
        blink: { "0%, 49%": { opacity: "1" }, "50%, 100%": { opacity: "0" } },
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
