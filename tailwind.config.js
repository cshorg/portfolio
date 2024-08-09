import { withTV } from "tailwind-variants/dist/transformer.js"

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {}
  },
  plugins: []
})
