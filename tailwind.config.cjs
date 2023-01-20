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
        "darkBlue": '#334D9B',
        "darkerBlue": '#0D47A1',
        "dirtyWhite": '#EEF2FE',
        "lightBlue": '#527AF5',
        "lightGray": '#7886A3'
      }
    },
  },
  plugins: [require('tailwindcss-font-inter')]
}
