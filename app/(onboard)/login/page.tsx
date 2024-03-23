"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { SubmitHandler, useForm } from "react-hook-form";
import { register } from "module";
import { loginInputType } from "../Types/loginInputType";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { errorAlert } from "@/lib/Alerts";
import { useRouter } from "next/navigation";

export default function Login() {
  const [togglePassword, setTogglePassword] = useState(false);
  const redirect = useRouter();
  type loginInferredType = z.infer<typeof loginInputType>;
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<loginInferredType>({ resolver: zodResolver(loginInputType) });
  const handleLogin: SubmitHandler<loginInferredType> = async (data) => {
    try {
      await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });
      return redirect.replace("/");
    } catch (error) {
      return errorAlert("something went wrong");
    }
  };
  return (
    <section className="flex flex-col justify-center items-center h-screen w-full">
      <div className="flex flex-col w-[400px]">
        <h2 className="text-2xl mb-8 text-center">
          <b className="text-customgreen">JOE</b>bank
        </h2>
        <form className="space-y-5" onSubmit={handleSubmit(handleLogin)}>
          <div className="flex flex-col ">
            <label htmlFor="email_address" className="font-semibold mb-2">
              Email address
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="josephuzuegbu55@gmail"
              className="border rounded-md p-2 bg-inherit outline-none border-gray-300"
            />
            <span className="text-xs text-red-400">
              {" "}
              {errors.email && errors.email.message}
            </span>
          </div>

          <div className="flex flex-col relative">
            <span className="flex justify-between mb-2">
              <label htmlFor="email_address" className="font-semibold">
                Password
              </label>
              <span className="text-customgreen">Forgot Password?</span>
            </span>

            <input
              type={!togglePassword ? "password" : "text"}
              {...register("password")}
              placeholder=""
              className="border rounded-md  p-2 bg-inherit outline-none border-gray-300"
            />
            <AiOutlineEye
              className="absolute right-2 cursor-pointer top-10 text-2xl text-gray-400"
              onClick={() => setTogglePassword((prev) => !prev)}
            />
            <span className="text-xs text-red-400">
              {" "}
              {errors.password && errors.password.message}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <input type="checkbox" className="accent-green-700" />
            <p>Keep me signed in</p>
          </div>
          <button
            type="submit"
            className="rounded-md p-2 w-full bg-darkGreen text-white"
          >
            Login
          </button>
          <div className="flex justify-center text-gray-500">
            or signin with
          </div>

          <button
            onClick={() => signIn("google")}
            className="flex justify-center items-center gap-4 rounded-md p-2 w-full bg-gray-300 text-black/70"
          >
            <FcGoogle /> Continue with Google
          </button>

          <Link
            href="/register"
            className="flex justify-center items-center text-customgreen font-semibold p-2 w-full "
          >
            Create an account
          </Link>
        </form>
      </div>
    </section>
  );
}
