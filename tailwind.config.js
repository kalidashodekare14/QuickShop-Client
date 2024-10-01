/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "openSans": "Open Sans, sans-serif",
        'motserrat': "Montserrat, sans-serif"
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
