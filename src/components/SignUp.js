import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import HeaderHome from "./HeaderHome";
import { useHistory } from "react-router-dom";
import axiosInstance from "../api/api";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchRoles } from "../store/actions/globalActions";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onTouched" });

  const dispatch = useDispatch();

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
  const roles = useSelector((store) => store.global.roles);
  const [selectedRole, setSelectedRole] = useState("");
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   axiosInstance
  //     .get("/roles")
  //     .then((response) => {
  //       dispatch(setRoles(response.data));
  //       console.log("roles data:", response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  useEffect(() => {
    roles.length == 0 && dispatch(fetchRoles());
  }, []);

  const onSubmit = (data) => {
    const {
      name,
      email,
      password,
      role_id,
      storename,
      storetaxID,
      storeBankAccount,
    } = data;
    const formData = {
      name,
      email,
      password,
      role_id,
    };
    if (selectedRole == "store") {
      formData.store = {
        name: storename,
        tax_no: storetaxID,
        bank_account: storeBankAccount,
      };
    }
    //console.log("formdata", formData);
    setLoading(true);
    axiosInstance
      .post("/signup", formData)
      .then((response) => {
        toast.success(
          "🦄 You need to click link in email to activate your account!",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
        setLoading(false);
        setTimeout(() => {
          history.goBack();
        }, 3000);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error:", error);
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
      });
  };
  //console.log("selected role:", selectedRole);

  return (
    <>
      <HeaderHome />
      <ToastContainer />
      <div className="flex justify-center bg-verylightgray3 ">
        <div className="container flex justify-between items-center max-w-[1050px] min-h-[48px] mobile:flex mobile:flex-col mobile:py-6 mobile:gap-7 ">
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
            {roles &&
              roles.reverse().map((role, i) => (
                <option key={i} value={role.id}>
                  {role.code}
                </option>
              ))}
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
                <label className=" text-base mt-5 ">Store Bank Account:</label>
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
