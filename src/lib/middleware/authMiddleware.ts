// authMiddleware.ts
import { NextRequest, NextResponse } from "next/server";
import { verifyJwt } from "@/utils/jwt";

export const authMiddleware = async (req: NextRequest) => {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({ message: "Unauthorized: No token" }, { status: 401 });
  }

  const decoded = verifyJwt(token);

  if (!decoded) {
    return NextResponse.json({ message: "Unauthorized: Invalid token" }, { status: 401 });
  }

  // Optionally attach user data to request (not available by default in NextRequest)
  return null; // continue
};
