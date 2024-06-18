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
        background: {
          primary: "#0D090A",
          secondary: "#221D1F",
        },
        text: {
          primary: "#FB3792",
          secondary: "#FB3792",
        },
      },
    },
  },
  plugins: [],
};
export default config;
