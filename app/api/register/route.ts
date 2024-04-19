import { NextResponse } from "next/server";
import UserModel from "@/models/User";
import { UserInterface } from "@/models/User";
import { GlobalErrorHandler } from "@/app/utils/globarErrorHandler";
import { startDb } from "@/lib/startDb";
import bcrypt from "bcrypt";
// import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    await startDb();

    const body = await request.json();

    const User: UserInterface | null = await UserModel.findOne({
      email: body.email,
    });

    if (User) {
      if (User?.email) {
        return Response.json(
          {
            msg: "Email already taken",
            name: "",
            operational: true,
            type: "error",
          },
          { status: 400 }
        );
      } else if (User.password) {
        const isPasswordTaken = await bcrypt.compare(
          body.password,
          User.password
        );
        if (isPasswordTaken) {
          return Response.json(
            {
              msg: "password already taken",
              name: "",
              operational: true,
              type: "error",
            },
            { status: 400 }
          );
        }
      }
    }

    const userDoc = new UserModel({
      email: body.email,
      password: body.password,
      name: body.name,
    });

    await userDoc.save();
    return NextResponse.json(
      { msg: "user register successful", data: "" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        msg: "Something went wrong",
        name: "",
        operational: true,
        type: "error",
      },
      { status: 500 }
    );
  }
}
