module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'mainColorOne': '#8bba4a',
        'mainColorTwo': '#0578b7',
        'mainColorThree': '#595959',
        'mainColorFour': '#0c445a',
      },
      width: {
        'ex' : '120%'
      },
      spacing: {
        '20%': '18%',
        're': 'calc(100vw - 18%)'
      },
      screens: {
        'mobile': '900px'
      }
    },
  },
  plugins: [],
}
