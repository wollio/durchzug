module.exports = {
  purge: ['./src/**/*.hbs', './src/main.js'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['FUNGIS', 'Arial', 'sans-serif'],
      'serif': ['serif']
    },
    extend: {
      colors: {
        'blue': '#0029FF',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['even'],
      padding: ['even', 'odd']
    },
  },
  plugins: [],
}
