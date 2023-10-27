import React from "react";
import HeaderHome from "./HeaderHome";
import { useForm } from "react-hook-form";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <HeaderHome />
      <div className="flex justify-center bg-verylightgray3 ">
        <div className="container flex justify-between items-center max-w-[1050px] min-h-[48px] mobile:flex mobile:flex-col mobile:py-6 mobile:gap-7 ">
          <div className="text-darkblue font-bold flex gap-2 ">
            <h3>Login</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-center gap-5 mx-auto h-screen w-screen max-w-[1050px]">
        <form
          className=" container flex flex-col w-full "
          onSubmit={handleSubmit((data) => console.log(data))}
        >
          {/* email section */}
          <label className="text-base mt-5 ">Email:</label>
          <div className="">
            <input
              className="w-full h-12 rounded-lg border border-solid border-darkblue"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <p className=" text-red-400 text-sm">{errors.email?.message}</p>
          </div>

          {/* password section */}
          <label className="text-base mt-5 ">Password:</label>
          <div className="">
            <input
              className="w-full h-12 rounded-lg border border-solid border-darkblue"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 3,
                  message: "Name should be at least 3 characters",
                },
              })}
            />
            <p className=" text-red-400 text-sm">{errors.name?.message}</p>
          </div>

          <input type="submit" />
        </form>
      </div>
    </>
  );
}
