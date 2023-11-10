**\*\***\*\***\*\***PROJECT SETUP

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

/** @type {import('tailwindcss').Config} \*/
module.exports = {
content: [
"./src/**/\*.{js,jsx,ts,tsx}",
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

**\*\***\*\***\*\***CREATE UI ## Description

- Create Figma Designs: https://www.figma.com/file/tXhNJv706AWM0lXlyxLH9l/E-commerce-UI---Figma-Ecommerce-UI-Kit-(Demo-Version)-(Community)?type=design&node-id=2793%3A708&mode=design&t=RdSUAxl5CbngLvsT-1
- Use **only Flex** Layout
- Create Layout Components
- Create Page Components (Only Desktop Views): Home, Product List
- Home Page: Slider component
- Activate React Router and Links
- Use **Icon Library**

REACT HOOK FORM:npm install react-hook-form

YEDEKTE DURMASINI İSTEDİĞİM KODLAR
{/_ slider2 _/}

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

-------------------------- hamburgerli navbar----------------

<div className="navbar-light flex justify-center">
<div className="container flex flex-grow justify-between items-center min-h-[58px] max-w-[1440px]">
<div className="navbar-light-left text-darkblue font-bold flex gap-2">
<h3>Bandage</h3>
</div>
<nav className="navbar-light-middle text-darkblue items-center gap-2  ">
<ul className="flex gap-2">
<li>
<Link to="/">Home</Link>
</li>
<li>
<Link to="/ProductList">Shop</Link>
</li>
<i className="fa-solid fa-chevron-down fa-sm self-center"></i>
<li>
<Link to="/about">About</Link>
</li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
                          </ul>
          </nav>
          <div className="navbar-light-right flex text-turku items-center gap-3 ">
            <i className="fa-regular fa-user"></i>
            <p className="">Login / Register</p>
            <i className="fa-solid fa-magnifying-glass"></i>
            <i className="fa-solid fa-cart-shopping"></i>
            <p>1</p>
            <i className="fa-regular fa-heart"></i>
            <p>1</p>
          </div>
        </div>
      </div>




      ------------

<label className="font-bold text-lg">Password</label>
<input className="form-input"
type="password"
placeholder="Password"
{...register("password", {
required: true,
pattern: {
value: /^(?=._\d)(?=._[a-z])(?=._[A-Z])(?=._[!@#$%^&*]).{8,}$/,
message:
"Password needs to be min 8 character including numbers, lower case, upper case and special chars",
},
})}
/>

<p className=" text-red-500">{errors.password?.message}</p>

          <label className="font-bold text-lg">Confirm Password</label>
          <input className="form-input"
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: true,
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
                message:
                  "Password needs to be matched to second pass input field",
              },
            })}
          />
          <p className=" text-red-500">{errors.confirmPassword?.message}</p>

          TODO:
          >SIGNUP FORM TOASTIFY SUCCESS
