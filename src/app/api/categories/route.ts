// src/app/api/categories/route.ts
import { getAllCategoriesHandler } from "@/lib/controllers/categoryController";
// import { NextRequest } from "next/server";

// ✅ Single GET function that uses controller logic
export async function GET() {
  return getAllCategoriesHandler();
}
