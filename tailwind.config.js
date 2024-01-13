/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage : {
        cheno : "url('./src/assets/img/Vector_Smart_Object.png')"
      },
      fontFamily:{
        shabnama : 'shabnama',
        shabnama1 : 'shabnama1',
        shabnama2 : 'shabnama2',
        shabnama3 : 'shabnama3'
      }
    },
  },
  plugins: [],
}
