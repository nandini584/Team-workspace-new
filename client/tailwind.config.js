/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./Pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      "muted-neutral":"#FFC5B2",
      "neutral":"#FF9E80",
      "main":"#FF764A",
      "dark":"#FF5F2B",
      "muted-dark":"#D74126",
    },
    fontfamily:{
      jost: ['Jost'],
      inter:['Inter']
    }
  },
  plugins: [],
}