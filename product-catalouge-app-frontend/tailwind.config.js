/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: false,
  },
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto"],
        lobster: ["Lobster"],
        dancing: ["Dancing Script"],
      },
    },
  },
  plugins: [require("daisyui")],
};
