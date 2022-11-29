/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.tsx", "./src/**/*.tsx", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        nft: "url('/background.png')",
      },
    },
  },
  plugins: [],
};
