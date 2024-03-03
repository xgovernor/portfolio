/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{css,js,ts,jsx,tsx}",
    "./src/**/**/*.{css,js,ts,jsx,tsx}",
    "./src/**/**/**/*.{css,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["NHaasGroteskDSPro"],
        secondary: ["Neue Haas Grotesk Display Pro"],
      },
    },
  },
  plugins: [],
};
