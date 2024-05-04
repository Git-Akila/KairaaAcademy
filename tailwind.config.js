


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "headingFont":["Platypi", "serif"],
        "paraFont":["Anek Devanagari", "sans-serif"],
        "custom1": ['Nunito Sans', 'sans-serif'], 
      }
    },
    screens:{
      xs:"480px",
      sm:"768px",
      md:"1060px",
    }
  },
  plugins: [],
}



