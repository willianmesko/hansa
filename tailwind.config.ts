import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      strokeWidth: {
        "3": "3px",
      },
      borderWidth: {
        "1": "1px",
      },
      colors: {
        blue: "var(--blue)",
        green: "var(--green)",
        purple: "var(--purple)",
        orange: "var(--orange)",
        yellow: "var(--yellow)",
        "gray-light": "var(--gray-light)",

        "brand-blue": "#383965",
      },
    },
  },
  plugins: [],
} satisfies Config;
