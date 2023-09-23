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