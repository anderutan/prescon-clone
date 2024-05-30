/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'icon-dot': '#5E464E',
        'header-main': '#9A6575',
        'bg-main': '#C2C1C0',
        'bg-second': '#231F20',
        'bg-third': '#5F464E',
        'border-color': '#707070',
      },
    },
  },
  plugins: [],
};
