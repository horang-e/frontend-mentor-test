/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors: {
      mid_blue: 'hsl(238, 40%, 52%)',
      dark_blue: 'hsl(212, 24%, 26%)',
      light_red: 'hsl(358, 79%, 66%)', grayish_blue: 'hsl(211, 10%, 45%)',
      light_grayish_blue: 'hsl(239, 57%, 85%)',
      light_grayish_red: 'hsl(357, 100%, 86%)',
      light_gray: 'hsl(223, 19%, 93%)',
      very_light_gray: 'hsl(228, 33%, 97%)',
      white: 'white',
      red: 'red-600',
      black: 'black'
    },

    extend: {
      backgroundImage: {
        'minus': "url('/images/icon-minus.svg')",
        'plus': "url('/images/icon-plus.svg')",
      }
    },
  },
  plugins: [],
}

