"use client";

import { signIn } from "next-auth/react";
import { FormEvent } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

export default function ForgetPassword() {
  return (
    <section className="flex flex-col justify-center items-center h-screen w-full">
      <div className="flex flex-col w-[400px]">
        <h2 className="text-2xl mb-5 text-center">
          <b className="text-customgreen">JOE</b>bank
        </h2>

        <h4 className="text-xl font-semibold text-center">Forget password?</h4>

        <p className="text-center text-gray-400 text-sm my-4">
          Enter your email address to get the password reset link
        </p>
        <form className="space-y-5">
          <div className="flex flex-col ">
            <label htmlFor="email_address" className="font-semibold mb-2">
              Email address
            </label>
            <input
              type="email"
              placeholder="josephuzuegbu55@gmail"
              className="border rounded-md p-2 bg-inherit outline-none border-gray-300"
            />
          </div>

          <button
            type="submit"
            className="rounded-md p-2 w-full bg-darkGreen text-white"
          >
            Password Reset
          </button>
          <button
            type="button"
            className="flex justify-center items-center w-full font-semibold text-gray-500"
          >
            Back to login
          </button>
        </form>
      </div>
    </section>
  );
}
