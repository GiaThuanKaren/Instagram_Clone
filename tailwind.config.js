/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        SlideIn: {
          "0%": {
            // display: "none",
            // opacity: "0",
            transform: "translateX(-100%)",
            opacity: "0"
          },
          "90%": {
            opacity: "0.6"
          },
          "100%": {
            display: "block",
            opacity: "1",

          },
        },
        SlideOut: {
          "0%": {
            display: "block",
            opacity: "1",
          },
          "100%": {
            display: "none",
            opacity: "0",
            transform: "translateX(-100%)",
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
