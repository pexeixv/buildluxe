/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: [
          "Plus Jakarta Sans Variable",
          ...defaultTheme.fontFamily.sans,
        ],
        dropShadow: {
          "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
          "4xl": [
            "0 35px 35px rgba(0, 0, 0, 0.25)",
            "0 45px 65px rgba(0, 0, 0, 0.15)",
          ],
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
