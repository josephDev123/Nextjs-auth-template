import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "./app/api/auth/[...nextauth]/route";

export async function middleware(request: NextRequest) {
  const userSession = await getServerSession(authOptions);
  // const userSession = await getSession();
  console.log(`from middleware: ${userSession?.user}`);

  if (!userSession?.user && request.nextUrl.pathname.startsWith("/dashboard")) {
    // return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/dashboard"],
};
