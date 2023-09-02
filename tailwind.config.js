/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-orange': '#CB997E',
        'custom-beige': '#DDBEA9',
        'custom-pink': '#FFE8D6',
        'custom-gray': '#B7B7A4',
        'custom-olive': '#A5A58D',
        'custom-green': '#6B705C',
      },
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans'], // Customize fonts as needed
      },
    },
  },
  plugins: [],
}

