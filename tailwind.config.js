/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkblue:'#063751',
        100:'#15A3EF',
        200:'#32729C'
        
      }
    },
  },
  plugins: [],
}