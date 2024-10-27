/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      fontFamily: {
        'rub': ["Rubik Bubbles", "sans-serif"],
      
      extend: {}
    },
  },

    plugins: [require('daisyui'),],

  }

