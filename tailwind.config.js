/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Urbanist', 'sans-serif'],
        custom: ['Urbanist-bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

