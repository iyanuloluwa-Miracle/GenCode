/** @type {import('tailwindcss').Config} */
export default {
  // Specify the files that Tailwind should scan for classes
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  // Theme configuration
  theme: {
    // Define font sizes
    // fontSize: {
    //   xs: ['12px', '16px'],
    //   sm: ['14px', '150%'],
    //   sm01:['33px'],
    //   base: ['24px', '24%'],
    //   base02: ['12px', '24px'],
    //   base2: ['32px', '150%'],
    //   xl: ['40px', '150%'],
    // },

    // Extend or override existing theme properties
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
    },

    // Define custom colors
    colors: {
      Till10101: "#76D4DF",
      Till091: "#3D8891",
      Till01: "#214953",
      black02: "#2B2121",
      black01: "#1D1616",
      blue01: "#F3FAFD",
      "Dark Till": "#214953",
      Grey: "#AFB1B6",
      whites: "#FFFFFF",
      blue01: "#2E666D",
      Aqua: "#4D7179",
    },

    // // Define screen breakpoints for responsive design
    // screens: {
    //   'sm': '640px',
    //   'md': '768px',
    //   'lg': '1024px',
    //   'xl': '1280px',
    //   '2xl': '1536px',
    // },
  },

  // Plugins configuration (currently none)
  plugins: [],
};
