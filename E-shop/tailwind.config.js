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
        primary: "#ff0000",
        brandBlood:"#950101",
        brandBrown:"#3D0000",
        brandBlack:"#000000",
        brandWhite:"#eeeeee",
      },
      container:{
        center:true,
        padding:{
          DEFAULT: "1rem",
          sm:"3rem",
        },
      }
    },
  },
  plugins: [],
}
