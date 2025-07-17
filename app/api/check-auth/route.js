import { NextResponse } from "next/server";

export async function GET(request) {
  const userToken = request.cookies.get("userToken");
  return NextResponse.json({ isLogin: !!userToken });
}
