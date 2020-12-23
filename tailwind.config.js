const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: "true",
        padding: "1rem",
      },
      colors: {
        secondary: "#FFD200",
        blueSecondary: "#9DC0FB",
      },
      fontFamily: {
        body: ["Khula", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
