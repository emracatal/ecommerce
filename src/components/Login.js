import React from "react";
import HeaderHome from "./HeaderHome";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import ClipLoader from "react-spinners/ClipLoader";
import axiosInstance from "../api/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/actions/userActions";
import { useHistory } from "react-router-dom";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onTouched" });

  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const user = useSelector((store) => store.user.user);
  const dispatch = useDispatch();

  // handle password eye
  const [passwordEye, setPasswordEye] = useState(false);
  const handlePasswordClick = () => {
    setPasswordEye(!passwordEye);
  };

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      const formData = {
        email,
        password,
      };
      //console.log("formData", formData);
      setLoading(true);
      const response = await dispatch(login(formData));
      // axiosInstance
      //   .post("/login", formData)
      //   .then(function (response) {
      //console.log(response);
      toast.success("🚀 Welcome " + response.name, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setLoading(false);
      setTimeout(() => {
        history.push("/");
      }, 3000);
    } catch (error) {
      //console.log(error);
      setLoading(false);
      toast.error(`${error.response.data.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <>
      <HeaderHome />
      <ToastContainer />
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
          onSubmit={handleSubmit(onSubmit)}
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
          <label className=" text-base mt-5">Password:</label>
          <div className=" relative">
            <input
              type={passwordEye === false ? "password" : "text"}
              className={`w-full h-12 rounded-lg border border-solid border-darkblue${
                errors.password && " border-red-400"
              } `}
              {...register("password", {
                required: "Password is required",
                // pattern: {
                //   value:
                //     /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
                //   message:
                //     "Password needs to be min 8 character including numbers, lower case, upper case and special chars",
                // },
                // minLength: {
                //   value: 8,
                //   message: "Minimum Required length is 8",
                // },
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

          <button
            className={`w-full h-12 rounded-lg border mt-5 ${
              !isValid ? "bg-zinc-400 text-white" : "bg-darkblue text-white"
            }
            ${loading ? "bg-zinc-400 text-white" : "bg-darkblue text-white"}`}
            disabled={!isValid || loading}
            type="submit"
          >
            {loading ? (
              <ClipLoader size={30} color={"#755680"} loading={loading} />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </>
  );
}
