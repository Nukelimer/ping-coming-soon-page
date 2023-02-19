/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['{./src/**/*.{html,js}', './index.html'],
  theme: {
    fontFamily: {
      Inter: ['Inter', 'sans-serif'],
    },
    extend: {
      colors: {
        blue: '#4f7df3',
        grey: ' #969696',
      },
    },
  },
  plugins: [],
};
