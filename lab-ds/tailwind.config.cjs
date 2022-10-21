/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
        xs: 14,
        sm: 16,
        md: 18,
        lg: 20,
        xl: 24,
       '2xl':32
    },


    colors: {

      'black' : '#000000',
      'white' : '#ffffff',

      'gray-900': '#121214',
      'gray-800': '#202024',
      'gray-400': '#7c7c8a',
      'gray-200': '#c4c4cc',
      'gray-100': '#e1e1e6',

      'orange-500': '#f66c0b',
      'orange-300': '#fd841f',
      'orange-100': '#FBC199',

      'transparent': 'transparent'

    },

    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },

      animation: {
        'spin-slow': 'spin 8s linear infinite',
      }
    },
  },
  plugins: [],
}
