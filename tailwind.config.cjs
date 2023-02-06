/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "968px",
      xl: "1024px",
      "2xl": "1200px",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      lineHeight: {
        title: "120%",
        text: "180%",
      },
      transitionDuration: {
        400: "0.4s",
      },
    },
  },
  plugins: [],
};
