/** @type {import('tailwindcss').Config} */
export default {
  // Specify the files that Tailwind should scan for classes
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],

  // Theme configuration
  theme: {
    // Extend or override existing theme properties
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },

      // Define custom colors
      colors: {
        TiffanyBlue: "#76D4DF",
        TealBlue: "#3D8891",
        MidnightGreen: "#214953",
        // DarkSlateGray: "#214953",
        RaisinBlack: "#2B2121",
        Licorice: "#1D1616",
        AliceBlue: "#F3FAFD",
        SilverSand: "#AFB1B6",
        // whites: "#FFFFFF",
        Teal: "#2E666D",
        PaynesGray: "#4D7179",
      },

      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
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
