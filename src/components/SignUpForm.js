import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import HeaderInnerPages from "./HeaderInnerPages";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onTouched" });
  const onSubmit = (data) => console.log(data);

  // handle password eye
  const [passwordEye, setPasswordEye] = useState(false);

  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };

  // handle confirm password eye
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false);

  const handleConfirmPasswordClick = () => {
    setConfirmPasswordEye(!confirmPasswordEye);
  };
  //    check password event
  const password = watch("password");
  return (
    <>
      <HeaderInnerPages />
      <div className="flex flex-col justify-center items-center gap-5 bg-verylightgray  pt-5">
        <h2 className="text-left">SignUpForm</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-2 "
        >
          {/* name section */}
          <label className="font-bold text-base mt-5">Name:</label>
          <div className="">
            <input
              className="form-input w-full h-12 rounded-lg"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name should be at least 3 characters",
                },
              })}
            />
            <p className=" text-red-400 text-sm">{errors.name?.message}</p>
          </div>

          {/* email section */}
          <label className="font-bold text-base mt-5">Email:</label>
          <div className="">
            <input
              className="form-input w-full h-12 rounded-lg"
              type="email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            <p className=" text-red-400 text-sm">{errors.email?.message}</p>
          </div>

          {/* password section */}
          <label className="font-bold text-base mt-5">Password:</label>
          <div className=" relative">
            <input
              type={passwordEye === false ? "password" : "text"}
              className={`w-full h-12 rounded-lg ${
                errors.password &&
                "focus:border-red-400 focus:ring-red-400 border-red-400"
              } `}
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
                  message:
                    "Password needs to be min 8 character including numbers, lower case, upper case and special chars",
                },
                minLength: {
                  value: 8,
                  message: "Minimum Required length is 8",
                },
              })}
            />
            {errors.password && (
              <span className="text-sm text-red-400">
                {errors.password.message}
              </span>
            )}

            {/* eye section */}
            <div className="text-2xl absolute top-4 right-5">
              {passwordEye === false ? (
                <AiFillEyeInvisible onClick={handlePasswordClick} />
              ) : (
                <AiFillEye onClick={handlePasswordClick} />
              )}
            </div>
          </div>

          {/* confirm password section */}
          <label className="font-bold text-base mt-5" >Confirm password:</label>
          <div className=" relative">
            <input
              type={confirmPasswordEye === false ? "password" : "text"}
              onPaste={(e) => {
                e.preventDefault();
                return false;
              }}
              className={`w-full h-12 rounded-lg ${
                errors.confirmPassword &&
                "focus:border-red-400 focus:ring-red-400 border-red-400"
              } `}
              {...register("confirmPassword", {
                required: "confirm password is required",
                validate: (value) =>
                  value === password || "The passwords do not match",
              })}
            />
            {errors.confirmPassword && (
              <span className="text-sm text-red-400">
                {errors.confirmPassword.message}
              </span>
            )}

            {/* eye section */}
            <div className="text-2xl absolute top-4 right-5">
              {passwordEye === false ? (
                <AiFillEyeInvisible onClick={handleConfirmPasswordClick} />
              ) : (
                <AiFillEye onClick={handleConfirmPasswordClick} />
              )}
            </div>
          </div>

          {/* role section */}
          <label className="font-bold text-base mt-5">Role Selection</label>
          <select className="w-full h-12 rounded-lg" {...register("role")}>
            <option value="customer">customer</option>
            <option value="admin">store</option>
            <option value="store">admin</option>
          </select>
          <p className=" text-red-400">{errors.role?.message}</p>
          <button
            className="w-full h-12 rounded-lg border bg-darkblue text-white"
            disabled={!isValid}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
