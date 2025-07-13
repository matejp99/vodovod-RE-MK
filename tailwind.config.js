/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        ameda: ['ameda','sans-serif'],
        montserrat: ['montserrat', 'sans-serif'],
      },
      fontSize: {
        nav: '16px',
      }
    },
  },
  plugins: [],
}
