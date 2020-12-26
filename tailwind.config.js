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
      height: {
        sixPercent: "70%",
      },

      keyframes: {
        fade: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },

      animation: {
        fade: "fade 0.3s ease-in-out forwards",
      },
    },
  },
  variants: {
    extend: {
      scale: ["responsive", "hover", "focus", "group-hover"],
      transform: ["responsive", "hover", "group-hover"],
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
