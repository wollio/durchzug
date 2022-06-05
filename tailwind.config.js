module.exports = {
  purge: ['./src/**/*.hbs', './src/main.js'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Euclid Circular B', 'Arial', 'sans-serif'],
      'serif': ['Suisse Neue', 'serif']
    },
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ['even'],
      padding: ['even', 'odd']
    },
  },
  plugins: [],
}
