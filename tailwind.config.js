/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: '#063751',
        100: '#15A3EF',
        200: '#32729C',
        300:'#59a1db',
        400:'#045692'
      },
      backgroundImage: {
        'footer-texture': "url('/images/footer-texture.png')",
      },
      screens: {
        xsm: '300px', 
        giant: '1024px', // Adding custom font size
        // Custom breakpoint for xsm
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },

    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* Hide scrollbar for Chrome, Safari, and Opera */
          '-webkit-overflow-scrolling': 'touch',
          'scrollbar-width': 'none', /* For Firefox */
          '-ms-overflow-style': 'none', /* For IE and Edge */
          '&::-webkit-scrollbar': {
            display: 'none', /* For Chrome, Safari, and Opera */
          },
        },
      }, ['responsive', 'hover']);
    },
  ],
}
