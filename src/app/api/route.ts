// route.ts placeholder
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Welcome to the BharatCart API",
    availableRoutes: [
      "/api/auth",
      "/api/users",
      "/api/products",
      "/api/categories",
      "/api/orders",
      "/api/reviews",
      "/api/cart",
      "/api/upload"
    ],
  });
}
