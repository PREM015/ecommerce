import { NextResponse } from "next/server";
import { verifyUserCredentials } from "@/lib/controllers/userController";
import { signToken } from "@/utils/jwt";
// import LoginForm from "@/components/auth/login/page";
import LoginForm from "@/components/auth/login/page";

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
    maxAge: 7 * 24 * 60 * 60, // 7 days
    path: "/",
  });

  return res;
}

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Login to BharatCart</h1>
        <LoginForm />
      </div>
    </main>
  );
}
