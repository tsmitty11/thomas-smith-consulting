const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./assets/**/*.js",
    "./content/**/*.md",
    "./layouts/**/*.html",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "neue-haas-grotesk-text",
          "neue-haas-grotesk-display",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      keyframes: {
        "logo-carousel": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-50% - 2rem))" },
        },
      },
      animation: {
        "logo-carousel": "logo-carousel 32s linear infinite",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
