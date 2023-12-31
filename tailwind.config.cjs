/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xm': '0px',
      // => @media (min-width: 460px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'ct': '900px',
      
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      
      'xl': '1280px',
      // => @media (min-width: 1024px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

    },
    fontFamily: { 
      
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

//460px
