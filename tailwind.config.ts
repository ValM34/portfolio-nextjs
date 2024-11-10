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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "github": "#24292d",
        "theme-1-color": "#111827",
        "theme-1-color-gradient": "#111827",
        "theme-2-color": "#f3f4f6",
        "theme-2-color-gradient": "#f3f4f6",
      },
    },
  },
  plugins: [],
};
export default config;
