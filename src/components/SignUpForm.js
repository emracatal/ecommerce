import React , {useEffect} from "react";
import { useForm } from "react-hook-form";

export default function SignUpForm() {
  const { 
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="">
        <h3 className="text-center">SignUpForm</h3>
        <form
          className="flex flex-col items-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label>Name</label>
          <input placeholder="name" type="name"
            className="border rounded"
            {...register("name", {
              required: "This field is required",
              minLength: { value: 6, message: "Min 6 char!" },
            })}
          />
      <p>{errors.name?.message}</p>

          <label>Email</label>
          <input placeholder="email" type="email"
            className="border rounded"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />
      <p>{errors.email?.message}</p>

          <label>Password</label>
          <input placeholder="password" type="password"
            className="border rounded"
            {...register("password", { required: "This field is required" ,
            pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
                message: "Password needs to be min 8 character including numbers, lower case, upper case and special chars"
            },
        })}
          />
      <p>{errors.password?.message}</p>

          <label>Role</label>
          <input placeholder="role" type="role"
            className="border rounded"
            {...register("role", { required: "This field is required" })}
          />
      <p>{errors.role?.message}</p>

          <button
            className="border rounded cursor-not-allowed bg-darkblue text-white active:bg-white"
            type="submit"
            disabled={!isValid}
          >
            Gönder
          </button>
        </form>
      </div>
    </>
  );
}
