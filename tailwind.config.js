


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
      },
      keyframes: {
        slidein: {
          from: {
            opacity: '0',
            transform: "translateX(-10px)",

          },
          to: {
            opacity: "1",
            transform: "translateX(0)",
          }
        }
      },
      animation:{
        slidein300:"slidein 1s ease 300ms forwards",
        slidein500:"slidein 1s ease 500ms forwards",
        slidein700:"slidein 1s ease 700ms forwards"
      }
    },
  },
  plugins: [],
}



