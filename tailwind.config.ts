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
        color_main: "var(--color_main)",
        color_sec: "var(--color_sec)",
        color_sub: "var(--color_sub)",
        color_hover: "var(--color_hover)",
      },
    },
  },
  plugins: [],
};
export default config;
