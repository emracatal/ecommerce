import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import HeaderHome from "./HeaderHome";
import { useHistory } from "react-router-dom";
import axiosInstance from "../api/api";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onTouched" });

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
  const [roles, setRoles] = useState("customer");
  const [selectedRole, setSelectedRole] = useState("");

  useEffect(() => {
    axiosInstance
      .get("/roles")
      .then((response) => {
        setRoles(response.data);
        console.log("roles data:", roles);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const onSubmit = (data) => {
    console.log("data:", data);
    console.log( "formdata",[
      data.name,
      data.email,
      data.password,
      data.role_id,
      data.storename,
      data.storetaxID,
      data.storeBankAccount,
    ]);
    axiosInstance
      .post("/signup", [data])
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log("selected role:", selectedRole);

  return (
    <>
      <HeaderHome />
      <div className="flex justify-center bg-verylightgray3 ">
        <div className="container  flex justify-between items-center max-w-[1050px] min-h-[92px] pr-10 mobile:flex mobile:flex-col mobile:py-6 mobile:gap-7 ">
          <div className="text-darkblue font-bold flex gap-2 ">
            <h3>SignUp</h3>
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
              className="w-full h-12 rounded-lg border border-solid border-darkblue"
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
              className="w-full h-12 rounded-lg border border-solid border-darkblue"
              type="email"
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
          <label className=" text-base mt-5">Confirm password:</label>
          <div className=" relative">
            <input
              type={confirmPasswordEye === false ? "password" : "text"}
              onPaste={(e) => {
                e.preventDefault();
                return false;
              }}
              className={`w-full h-12 rounded-lg border border-solid border-darkblue ${
                errors.confirmPassword && " border-red-400"
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
          <select
            className="w-full h-12 rounded-lg border border-solid border-darkblue"
            {...register("role_id", {
              onChange: (e) => {
                if (e.target.value == roles[2].id) setSelectedRole("customer");
                else if (e.target.value == roles[1].id)
                  setSelectedRole("store");
                else setSelectedRole("admin");
              },
            })}
          >
            <option value={roles[2].id}>{roles[2].code}</option>
            <option value={roles[1].id}>{roles[1].code}</option>
            <option value={roles[0].id}>{roles[0].code}</option>
          </select>
          <p className=" text-red-400">{errors.role?.message}</p>
          {selectedRole == "store" && (
            <div className="store-info flex flex-row justify-evenly mt-5">
              {/* storename section */}
              <div className="w-1/3">
                <label className=" text-base mt-5 ">Store Name:</label>
                <input
                  className="h-8 rounded-lg border border-solid border-darkblue"
                  {...register("storename", {
                    required: "Store name is required",
                    minLength: {
                      value: 3,
                      message: "Store Name should be at least 3 characters",
                    },
                  })}
                />
                <p className=" text-red-400 text-sm">
                  {errors.storename?.message}
                </p>
              </div>

              {/* storetaxID section */}
              <div className="w-1/3">
                <label className=" text-base mt-5 ">Store Tax ID:</label>
                <input
                  className=" h-8 rounded-lg border border-solid border-darkblue"
                  {...register("storetaxID", {
                    required: "Store TAX ID is required",
                    pattern: {
                      value: /^T\d{4}V\d{6}$/,
                      message:
                        "Store Tax ID should match the pattern TXXXXVXXXXXX",
                    },
                  })}
                />
                <p className=" text-red-400 text-sm">
                  {errors.storetaxID?.message}
                </p>
              </div>
              {/* storeBankAccount section */}
              <div className="w-1/3">
                <label className=" text-base mt-5 ">
                  Store Bank Account-IBAN:
                </label>
                <input
                  className=" h-8 rounded-lg border border-solid border-darkblue"
                  {...register("storeBankAccount", {
                    required: "IBAN is required",
                    pattern: {
                      value: /^[A-Z]{2}\d{2}[A-Z0-9]{1,30}$/,
                      message: "Invalid IBAN format",
                    },
                  })}
                />
                <p className=" text-red-400 text-sm">
                  {errors.storeBankAccount?.message}
                </p>
              </div>
            </div>
          )}

          <button
            className={`w-full h-12 rounded-lg border mt-5 ${
              !isValid ? "bg-zinc-400 text-white" : "bg-darkblue text-white"
            }`}
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
