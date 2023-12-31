/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    colors: {
      'bg-white': '#f5f4f2',
      'bg-green': '#e6eed8',
      'green': '#008000',
      'yellow': '#f1c848',
      'bg-grey' : '#e8e8e8',
      'bg-dark-grey': '#D3D3D3'
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
