**************PROJECT SETUP

- Create github repo
git init

- Create React Project
npx create-react-app e-commerce

- Install all dependencies

    - Redux & Redux Thunk
    npm install react-redux redux
    npm install redux-thunk

    - React Router v5
    npm i react-router-dom@5

    - Tailwind
npm install -D tailwindcss

npx tailwindcss init 

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}  

@tailwind base;
@tailwind components;
@tailwind utilities;

    - Axios
    npm install axios

    - Toastify
    npm install --save react-toastify

**************CREATE UI
    ## Description

- Create Figma Designs: https://www.figma.com/file/tXhNJv706AWM0lXlyxLH9l/E-commerce-UI---Figma-Ecommerce-UI-Kit-(Demo-Version)-(Community)?type=design&node-id=2793%3A708&mode=design&t=RdSUAxl5CbngLvsT-1
- Use **only Flex** Layout
- Create Layout Components
- Create Page Components (Only Desktop Views): Home, Product List
- Home Page: Slider component
- Activate React Router and Links
- Use **Icon Library**


YEDEKTE DURMASINI İSTEDİĞİM KODLAR
      {/* slider2 */}
      <div className="slider-area bg-carousel2 min-h-[716px] ">
        <div className="container text-white flex flex-col justify-center gap-4 p-[10%] max-w-[1440px] ">
          <h5 className="font-bold">SUMMER 2020</h5>
          <h1 className="font-bold">Vita Classic Product</h1>
          <h4 className="">
            We know how large objects will act, but things on a small scale.
          </h4>
          <div>
            <button className="rounded bg-green text-lg font-bold px-5 py-2 ">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>