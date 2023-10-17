/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
      },
      colors: {
        new: "#111",
        darkblue: "#252B42",
        gray: "#737373",
        turku: "#23A6F0",
        green: "#2DC071",
        lightgray: "#737373",
        verylightgray: "#F9F9F9",
        verylightgray2: "#E6E6E6",
        verylightgray3: "#FAFAFA",
        secondarycolor1: "#23856D",
        alertcolor: "#E77C40",
        yellowstar: "#F3CD03",
        danger: "#E74040",
        hovercolor: "#2A7CC7",
        lightblue: "#B2E3FF",
      },
      backgroundImage: {
        herocover2: "url('./assets/herocover2.jpg')",
        shopcardMan: "url('./assets/shopcardMan.png')",
        shopcardWomen: "url('./assets/shopcardWomen.png')",
        shopcardKids: "url('./assets/shopcardKids.png')",
        shopcardAcc: "url('./assets/shopcardAcc.png')",
        carousel2: "url('./assets/carousel2.png')",
        containerfluid: "url('./assets/containerfluid.png')",
        cardcover1: "url('./assets/cardcover1.png')",
        singleproduct1: "url('./assets/singleproduct1.jpg')",
      },
      screens: {
        // xl: { max: "1279px" },
        // // => @media (max-width: 1279px) { ... }

        // lg: { max: "1023px" },
        // // => @media (max-width: 1023px) { ... }

        // md: { max: "767px" },
        // // => @media (max-width: 767px) { ... }

        mobile: { max: "639px" },
        // => @media (max-width: 639px) { ... }

        tablet: { max: "900px" },
        // => @media (max-width: 900px) { ... }
      },
    },
  },
  plugins: [require("daisyui")],
};
