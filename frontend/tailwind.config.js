const path = require("path");

module.exports = {
  content: ["frontend/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(31, 199, 212)",
        "primary-dark": "rgb(16,149,159)",
        secondary: "rgb(154, 106, 255)",
        "secondary-dark": "rgb(55, 47, 71)",
        "secondary-light": "rgb(198,187,223)",
        white: "#ffffff",
        dark: "#08060b",
        "gray-900": "#08060b",
        "gray-500": "rgb(65,65,70)",
        "gray-700": "rgb(39, 38, 44)",
      },
    },
  },
  plugins: [],
};
