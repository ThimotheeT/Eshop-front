/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        primary: "#00AD85",
        brandGrey:"#393E46",
        brandBlue:"#00FFF5",
        brandBlack:"#000000",
        brandWhite:"#eeeeee",
      },
      container:{
        center:true,
        padding:{
          DEFAULT: "1rem",
          sm:"3rem",
        },
      },
      fontFamily:{
        'poppins': ['"Poppins"'],
      }
    },
  },
  plugins: [],
}
