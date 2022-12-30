/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        SlideIn: {
          "0%": {
            display: "none",
            opacity: "0",
            transform: "translateX(-100%)",
          },
          "100%": {
            display: "block",
            opacity: "1",
          },
        },
      },
      animation: {
        SlideIn: "SlideIn 300ms ease-in-out",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
