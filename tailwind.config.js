/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        transform: ["hover", "focus"],
      },
      transitionProperty: {
        width: "width",
      },
      fontSize: {
        "40px": "40px",
      },
      spacing: {
        "72px": "72px",
        "200px": "200px",
        "120px": "120px",
        "160px": "160px",
      },
      colors: {
        beige: "#DCC1AB",
        grey: "#F5F0EC",
        white: "#FFFFFF",
        green: "#1B5B31",
      },
      rotate: {
        270: "270deg",
      },
      letterSpacing: {
        tighter: "-0.01em",
        tight: "-0.02em",
      },
      maxHeight: {
        378: "378px",
      },
    },
  },
  plugins: [],
};
