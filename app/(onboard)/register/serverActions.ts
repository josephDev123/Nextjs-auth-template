import { registerType } from "../Types/registerType";
import axios, { AxiosError } from "axios";
import z from "zod";
import { errorAlert } from "@/lib/Alerts";
import { redirect } from "next/navigation";

type RegType = z.infer<typeof registerType>;
export async function registerAction(data: RegType) {
  try {
    const req = await axios(`http://localhost:3000/api/register`, {
      method: "POST",
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
      },
    });
    return req.data;
  } catch (error: any) {
    const errorObj = error;
    throw errorObj;
  }
}
