import { NextResponse } from "next/server";
import { verifyUserCredentials } from "@/lib/controllers/userController";
import { signToken } from "@/utils/jwt";

export async function POST(req: Request) {
  const { identifier, password } = await req.json();

  const user = await verifyUserCredentials(identifier, password);

  if (!user) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  const token = signToken({ userId: user.id });

  const res = NextResponse.json({
    message: "Login successful",
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      avatar: user.avatar,
      isAdmin: user.isAdmin,
    },
  });

  res.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 7 * 24 * 60 * 60,
    path: "/",
  });

  return res;
}
