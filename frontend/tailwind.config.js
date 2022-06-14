const path = require("path");

module.exports = {
  content: ["frontend/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(31, 199, 212)",
        secondary: "rgb(154, 106, 255)",
        "secondary-light": "rgb(198,187,223)",
        white: "#ffffff",
        "gray-900": "#08060b",
        "gray-500": "rgb(65,65,70)",
        "gray-700": "rgb(39, 38, 44)",
      },
    },
  },
  plugins: [],
};
