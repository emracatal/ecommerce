/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        montserrat:"'Montserrat', sans-serif",
      },
      colors: {
        new: "#111",
        darkblue: "#252B42",
        gray: "#737373",
        turku:"#23A6F0",
        green:"#2DC071",
        lightgray:"#737373",
        verylightgray:"#F9F9F9",
        verylightgray2:"#E6E6E6",
        verylightgray3:"#FAFAFA",
        secondarycolor1:"#23856D",
        alertcolor:"#E77C40",
      },
      backgroundImage: {
        'herocover2': "url('./assets/herocover2.jpg')",
        'shopcardMan': "url('./assets/shopcardMan.png')",
        'shopcardWomen': "url('./assets/shopcardWomen.png')",
        'shopcardKids': "url('./assets/shopcardKids.png')",
        'shopcardAcc': "url('./assets/shopcardAcc.png')",
        'carousel2': "url('./assets/carousel2.png')",
        'containerfluid': "url('./assets/containerfluid.png')",
        'cardcover1': "url('./assets/cardcover1.png')",
      },

    },
  },
  plugins: [],
};

