/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    'thankyou.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins']
      },
      animation: {
        'rotating': 'rotating 5s linear infinite',
        'wiggle': 'wiggle 1s linear infinite',
      },
      keyframes: {
        rotating: {
          '0%': { transform: 'rotate(0)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        wiggle: {
          '0%': { transform: 'rotate(-30deg)' },
          '50%': { transform: 'rotate(30deg)' },
          '100%': { transform: 'rotate(-30deg)' },
        },
      },
      colors: {
        'main-color': '#0E0E0E',
        'sec-color': '#F8F7F4'
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

