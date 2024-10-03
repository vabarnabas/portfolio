import type { Config } from "tailwindcss"

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
          primary: "#001624",
          secondary: "#00263D",
        },
        text: {
          primary: "#FB3792",
          secondary: "#de237a",
        },
      },
    },
  },
  plugins: [],
}
export default config
