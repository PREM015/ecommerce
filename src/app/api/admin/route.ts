// src/app/api/admin/route.ts

import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyJwt } from "@/utils/jwt";

export async function GET(req: NextRequest) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "");
  if (!token)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const payload = verifyJwt(token);
  if (!payload?.userId || !payload?.isAdmin)
    return NextResponse.json({ error: "Unauthorized" }, { status: 403 });

  const admin = await prisma.admin.findUnique({
    where: { userId: payload.userId },
    include: { user: true },
  });

  if (!admin)
    return NextResponse.json({ error: "Admin not found" }, { status: 404 });

  return NextResponse.json(admin);
}
