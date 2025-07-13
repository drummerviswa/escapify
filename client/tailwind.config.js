/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./mock/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        crimson: "#DC143C",
      },
      colors:{
        crimson: "#DC143C",
      },
      textColor:{
        crimson: "#DC143C",
      }
    },
  },
  plugins: [],
};
