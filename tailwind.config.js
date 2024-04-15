/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '150%'],
      base: ['24px', '24%'],
      lg: ['32px', '150%'],
      xl: ['40px', '150%'],
    },
    extend: {
      fontFamily:{
        Outfit:['Outfit','sans-serif']

      }
    },

    colors: {
      'Till10101': "#76D4DF",
      "Till091": "#3D8891",
      "Till01": "#214953",
      "black02": "#2B2121",
      "black01": "#1D1616",
      "blue01": "#F3FAFD",
      "Dark Till": "#214953",
      "Grey": "#AFB1B6",
      "whites": "#FFFFFF",
      "blue01": "#2E666D",
      "Aqua": "#4D7179"
      
    },
  },
  plugins: [],
}