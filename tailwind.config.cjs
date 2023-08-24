/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'special-gray': '#F5F0F0',
        'special-red': '#EC6666',
        ...defaultTheme.colors,
      },
      gridAutoColumns: {
        '2fr': 'repeat(auto-fill, minmax(186px, 1fr))',
      },
    },
  },
  plugins: [],
};
