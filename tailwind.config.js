/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        graphik: ["Graphik", "sans-serif"],
      },
      colors: {
        "primary-blue": "#043785",
        "primary-red": "#FF354D",
        "primary-gray": "#484F53",
        "secondary-gray": "#7c7c7c",
      },
      boxShadow: {
        modal: "0px -2px 4px rgba(121, 121, 121, 0.17);",
      },
  
    },

    container: {
      screens: {
        "2xl": "1440px",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
