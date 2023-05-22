/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-background": "url('/assets/hero/HeroBg.png')",
      },
    },
  },
  plugins: [],
};
