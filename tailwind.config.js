/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{css,js,ts,jsx,tsx}",
    "./src/**/**/*.{css,js,ts,jsx,tsx}",
    "./src/**/**/**/*.{css,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: ['var(--nh-grotesk-dsp)'],
      sans: ['var(--font-nh-grotesk-txp)'],
      mono: ['var(--font-cascadia-code)']
    },
    extend: {
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        borderBMotion: "border--b--motion",
      },
    },
  },
  plugins: [],
};
