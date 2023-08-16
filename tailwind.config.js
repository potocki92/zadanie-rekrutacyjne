/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      spacing: {
        "72px": "72px",
      },
      colors: {
        "beige": "#DCC1AB",
      },
    },
  },
  plugins: [],
};
