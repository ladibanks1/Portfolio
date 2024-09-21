/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primarys : "#1b1b1b"
      },
      fontFamily : {
        inter :  ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
}

