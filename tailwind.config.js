/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        purple:
        {
          400: '#5046e4',
          200: '#e0e7ff'

        },
        grey: {
          100: '#ebebeb'
        }
      }
    },
  },
  plugins: [],
}

