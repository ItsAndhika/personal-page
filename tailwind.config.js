/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        viraCode: ["Vira Code"],
        hack: ["Hack"],
        openSans: ["Open Sans"],
        montserrat: ["Montserrat"]
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
