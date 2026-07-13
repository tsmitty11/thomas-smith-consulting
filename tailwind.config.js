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
      colors: {
        swiss: {
          ink: "#1A1A1A",
          charcoal: "#2E2E2E",
          gray: "#4D4D4D",
          offwhite: "#EDEDED",
          red: "#C8403A",
          "red-dark": "#8C2B24",
          "red-light": "#DD7C6E",
          yellow: "#F0BB3E",
          "yellow-light": "#F6DD84",
          blue: "#2C5D82",
          "blue-light": "#5C9BC7",
          "blue-deep": "#1F4E72",
        },
      },
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
