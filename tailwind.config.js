/* @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': '#01051e'
      },
      keyframes: {
        typing: {
          'from': {width: '0'},
          'to': {width: '100%'},
        },
      },
      animation: {
        'typewriter': 'typing 1s steps(20, end) forwads'
      },
      fontFamily: {
        // inter: ["Inter"],
        // viraCode: ["Vira Code"],
        // hack: ["Hack"],
        // openSans: ["Open Sans"],
        // montserrat: ["Montserrat"]
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
