/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom1':'#ed563b',
        'navbar-bg':"#3f444a",
        "custom-black":"#000000"
      },
      
    },
  },
  plugins: [],
}