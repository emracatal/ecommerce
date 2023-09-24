/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        new: "#111",
        darkBlue: "#252B42",
        gray: "#737373",
        turku:"#23A6F0",
        green:"#2DC071",
      },
      backgroundImage: {
        'herocover2': "url('./assets/herocover2.jpg')",
      }
    },
  },
  plugins: [],
};
