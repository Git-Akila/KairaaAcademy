const { transform } = require('framer-motion');



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "headingFont":["Platypi", "serif"],
        "paraFont":['Nunito Sans', 'sans-serif'],
        "custom1": ['Nunito Sans', 'sans-serif'], 
      }
    },
    screens:{
      xs:"480px",
      sm:"768px",
      md:"1060px",
    },

    animation: {
      spin: 'spin 6s linear infinite',
      
    },
    keyframes: {
      spin: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
     
    },

  },
  variants:{},
  plugins: [],
}
// "paraFont":["Anek Devanagari", "sans-serif"],


