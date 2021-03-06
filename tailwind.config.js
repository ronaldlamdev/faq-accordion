module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '.1': '.1rem'
      },
      colors: {
      'veryDarkDesaturatedBlue' : 'hsl(238, 29%, 16%)',
      'softRed' : 'hsl(14, 88%, 65%)',
      'softViolet' : 'hsl(273, 75%, 66%)',
      'softBlue' : 'hsl(240, 73%, 65%)',
      'veryDarkGrayishBlue' : 'hsl(237, 12%, 33%)',
      'darkGrayishBlue' : 'hsl(240, 6%, 50%)',
      'lightGrayishBlue' : 'hsl(240, 5%, 91%)'
      },
      screens: {
        '445': '445px',
        '527': '527px',
        '1440': '1440px',
        '1920': '1920px'
      },
    },
  },
  plugins: [],
}
