/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      left: {
        "1/7": "16rem",
        "2/7": "55rem",
        "3/7": "25rem",
        "4/7": "45rem",
        "5/7": "15rem",
        "6/7": "65rem",
      },
      top: {
        "1/7": "60rem",
        "2/7": "90rem",
        "3/7": "110rem",
        "4/7": "140rem",
        "5/7": "160rem",
        "6/7": "170rem",
      }

    },
  },
  plugins: [],
}