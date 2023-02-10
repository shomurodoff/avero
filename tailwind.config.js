/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./containers/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
    "./UI/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
      container: {
        center: true,
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        graphik: ["Graphik", "sans-serif"],
        prodis: ["SF Pro Display", "sans-serif"],
      },
      borderRadius: {
        large: "25px",
        medium: "15px",
        default: "10px",
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
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
