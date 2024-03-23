"use server";

import { registerType } from "../Types/registerType";
import axios from "axios";
import z from "zod";
import { errorAlert } from "@/lib/Alerts";
import { redirect } from "next/navigation";

type RegType = z.infer<typeof registerType>;
export async function registerAction(data: RegType) {
  const req = await axios(`http://localhost:3000/api/register`, {
    method: "post",
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
    },
  });
  return await req.data;
}
