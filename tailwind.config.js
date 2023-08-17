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
      spacing: {
        "72px": "72px",
        "200px": "200px",
        "120px": "120px",
      },
      colors: {
        beige: "#DCC1AB",
        grey: "#F5F0EC",
      },
      rotate: {
        270: "270deg",
      },
      letterSpacing: {
        tighter: "-0.01em",
      },
    },
  },
  plugins: [],
};
