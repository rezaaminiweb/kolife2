/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage : {
        cheno : "url('./src/assets/img/Vector_Smart_Object.png')",
        back : "url('../img/Rectangle_1_copy_2.png')",
        back2 : "url('../img/shape4.png')",
        back3:"url('../img/pic23.png')"
      },
      backgroundPosition:{
        center1:'10% 100%'
      },
      
      fontFamily:{
        EstedadMedium : "Estedad Medium",
        EstedadLight : "Estedad Light",
        EstedadBold : 'Estedad Bold' ,
        EstedadBlock : 'Estedad Block',
        DinarOneLight : 'DinarOneLight',
        DinarOneMedium : 'DinarOneMedium',
        DinarTwoLight : 'DinarTwoLight',
        DinarTwomedium:'DinarTwomedium',
        farDinarTwoMedium : 'farDinarTwoMedium',
        hogolures : 'hogolures',
        mgDinarOneMedium : 'mgDinarOneMedium',
        mgDinarOneLight: 'mgDinarOneLight',
        mgDinarTwoLight: 'mgDinarTwoLight',
        mgDinarTwoMedium : 'mgDinarTwoMedium'
      }
    },
  },
  plugins: [],
}
