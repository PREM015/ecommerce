import { NextResponse } from "next/server";
import crypto from "crypto";
import { prisma } from "@/lib/db"; 

export async function POST(req: Request) {
  try {
    const { identifier } = await req.json();

    if (!identifier) {
      return NextResponse.json(
        { message: "Email or phone is required" },
        { status: 400 }
      );
    }

    // Find user by email or phone
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          { email: identifier },
          { phone: identifier }
        ],
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "No account found" },
        { status: 404 }
      );
    }

    // Generate token and expiry
    const token = crypto.randomBytes(32).toString("hex");
    const expires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour from now

    // Save token to DB
    await prisma.passwordResetToken.create({
      data: {
        token,
        userId: user.id,
        expiresAt: expires,
      },
    });

    // Create reset link
    const resetLink = `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password?token=${token}`;

    // TODO: Send email (for now return link in response)
    // await sendResetEmail(user.email, resetLink);

    return NextResponse.json({
      message: "Password reset link generated",
      resetLink, // remove in production
    });
  } catch (error) {
    console.error("Forgot Password Error:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
