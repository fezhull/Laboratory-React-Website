/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'working-img' : "url('/img2.jpg')"
      },
      fontFamily: {
        'primary' : ["Poppins", "sans-serif"],
        'secondary' : ["Syne", "sans-serif"],

      },
      colors: {
        'heroBg' : "#0e1122",
        'para' : 'rgb(0 0 0 / 80%)',
        'primary' : '#026635'
      }
    },
  },
  plugins: [],
}

