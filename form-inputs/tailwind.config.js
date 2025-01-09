/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Gray: "#636363",
        Gray_D: "#3C3C3C ",
        Gray_L: "#929292",
        Green: "#019116",
      },
    },
  },
  plugins: [],
};
