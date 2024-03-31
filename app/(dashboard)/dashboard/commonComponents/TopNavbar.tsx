"use client";

import React from "react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { useSession } from "next-auth/react";

export default function TopNavbar() {
  const { data: session, status } = useSession();
  console.log(session);
  return (
    <section className="w-full p-4 flex justify-between border-b-2 border-slate-300 items-center sticky top-0">
      <div className="flex justify-between items-center gap-2">
        <p className="text-xl font-bold self-center">
          Hello {session?.user?.name}
        </p>
        <MdOutlineKeyboardDoubleArrowRight className="text-slate-400" />
        <span className="text-xs text-slate-400">May 5, 2024</span>
      </div>

      <div className="flex justify-between gap-4 items-center">
        <IoIosNotifications className="text-xl cursor-pointer" />
        <span className="relative ">
          <input
            type="text"
            name="search"
            id=""
            placeholder="Search here ..."
            className="p-2 rounded-md outline-none"
          />
          <CiSearch className="absolute top-3 text-xl right-2" />
        </span>
      </div>
    </section>
  );
}
