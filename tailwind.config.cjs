/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blueGray": '#2E304F',
        "darkBlue": '#334D9B'
      }
    },
  },
  plugins: [require('tailwindcss-font-inter')]
}
