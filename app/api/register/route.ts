import { NextResponse } from "next/server";
import UserModel from "@/models/User";
import { UserInterface } from "@/models/User";
import { GlobalErrorHandler } from "@/app/utils/globarErrorHandler";
import { startDb } from "@/lib/startDb";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    await startDb();

    const body = await request.json();
    const User: UserInterface | null = await UserModel.findOne({
      email: body.email,
    });

    if (User) {
      if (User?.email) {
        return Response.json({
          msg: "Email already taken",
          name: "",
          code: "400",
          operational: true,
          type: "error",
        });
      } else if (User.password) {
        const isPasswordTaken = await bcrypt.compare(
          body.password,
          User.password
        );
        if (isPasswordTaken) {
          return Response.json({
            msg: "password already taken",
            name: "",
            code: "400",
            operational: true,
            type: "error",
          });
        }
      }
    }

    const userDoc = new UserModel({
      email: body.email,
      password: body.password,
      name: body.name,
    });

    await userDoc.save();
    return NextResponse.json({ msg: "user register successful", data: "" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      msg: "Something went wrong",
      name: "",
      code: "500",
      operational: true,
      type: "error",
    });
  }
}
