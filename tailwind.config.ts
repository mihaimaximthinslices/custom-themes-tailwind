import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        "bg-color-1": "var(--bg-color-1)",
        "bg-color-2": "var(--bg-color-2)",
        "ic-color-1": "var(--ic-color-1)",
        "ic-color-2": "var(--ic-color-2)",
        "ic-color-3": "var(--ic-color-3)",
        "bs-color-1": "var(--bs-color-1)",
        "bs-color-2": "var(--bs-color-2)",
        "bs-color-3": "var(--bs-color-3)",
        "s-color-1": "var(--s-color-1)",
        "s-color-2": "var(--s-color-2)",
        "t-color-1": "var(--t-color-1)",
        "t-color-2": "var(--t-color-2)",
      },
    },
  },
  plugins: [],
};
export default config;
