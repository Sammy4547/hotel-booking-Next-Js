import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ message: "Logout successful" });

  response.cookies.set("userToken", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
    sameSite: "lax",
  });

  return response;
}
