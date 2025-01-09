/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Grey: "#ECECEC",
        GreenDark: "#2C3530",
        GreenCard: "#1E3932",
        Cream: "#D2C099",
        CreamLight: "#d8cdb6",
      },
    },
  },
  plugins: [],
};
