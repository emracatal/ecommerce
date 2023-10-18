import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import HeaderInnerPages from "./HeaderInnerPages";
import { useHistory } from "react-router-dom";


export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onTouched" });
  const onSubmit = (data) => {
    axiosInstance
    .post("/SignUpForm", data)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  }

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

  const history = useHistory();

   
  return (
    <>
      <HeaderInnerPages />
      <div className="flex justify-center bg-verylightgray3 ">
        <div className="container  flex justify-between items-center max-w-[1050px] min-h-[92px] pr-10 mobile:flex mobile:flex-col mobile:py-6 mobile:gap-7 ">
          <div className="text-darkblue font-bold flex gap-2 ">
            <h3>SignUpForm</h3>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start items-center gap-5 mx-auto h-screen w-screen max-w-[1050px]">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" container flex flex-col w-full "
        >
          {/* name section */}
          <label className=" text-base mt-5 ">Name:</label>
          <div className="">
            <input
              className="form-input w-full h-12 rounded-lg border border-solid border-darkblue"
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
          <label className=" text-base mt-5">Email:</label>
          <div className="">
            <input
              className="form-input w-full h-12 rounded-lg border border-solid border-darkblue"
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
          <label className=" text-base mt-5">Password:</label>
          <div className=" relative">
            <input
              type={passwordEye === false ? "password" : "text"}
              className={`w-full h-12 rounded-lg border border-solid border-darkblue${
                errors.password &&
                " border-red-400"
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
          <label className=" text-base mt-5" >Confirm password:</label>
          <div className=" relative">
            <input
              type={confirmPasswordEye === false ? "password" : "text"}
              onPaste={(e) => {
                e.preventDefault();
                return false;
              }}
              className={`w-full h-12 rounded-lg border border-solid border-darkblue ${
                errors.confirmPassword &&
                " border-red-400"
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
          <label className=" text-base mt-5">Role Selection:</label>
          <select className="w-full h-12 rounded-lg border border-solid border-darkblue" {...register("role")}>
            <option value="customer">customer</option>
            <option value="admin">store</option>
            <option value="store">admin</option>
          </select>
          <p className=" text-red-400">{errors.role?.message}</p>
          <button
            className="w-full h-12 rounded-lg border bg-darkblue text-white mt-5"
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
