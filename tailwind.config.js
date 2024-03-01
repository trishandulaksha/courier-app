/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        anta: ["Anta", "sans-serif"],
        dosis: ["Dosis", "sans-serif"],
        "kdam-thmor-pro": ["Kdam Thmor Pro", "sans-serif"],
        "kode-mono": ["Kode Mono", "monospace"],
        lora: ["Lora", "serif"],
        "madimi-one": ["Madimi One", "cursive"],
      },
    },
  },
  plugins: [],
};
