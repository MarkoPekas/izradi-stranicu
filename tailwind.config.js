module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'google': '0 2px 4px -2px rgb(175 175 175 / 0.5)'
      },
      fontSize: {
        'xxs': '.6rem',
      },
      backgroundColor: {
        '118AB2': '#118AB2',
        '073B4C': '#073B4C',
      },
      borderColor: {
        '118AB2': '#118AB2',
        '073B4C': '#073B4C',
      },
      textColor: {
        '118AB2': '#118AB2',
        '073B4C': '#073B4C',
      },
      minWidth: {
        '135px': '135px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
