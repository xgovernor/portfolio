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
        fadein: 'fade-in 1s ease-in-out 0.25s 1',
        borderBMotion: "border--b--motion",
      }, keyframes: {
        "fade-in": {
          "0%": {
            opacity: 0
          },
          "100%": {
            opacity: 1
          },
        },
        "fade-out": {
          "0%": {
            opacity: 1
          },
          "100%": {
            opacity: 0
          },
        },
      }
    },
  },
  plugins: [],
};
