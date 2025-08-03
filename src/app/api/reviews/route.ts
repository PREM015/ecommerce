// route.ts
// src/app/api/reviews/route.ts
import { handleCreateReview, handleGetReviews } from "@/lib/controllers/reviewController";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  return handleCreateReview(req);
}

export async function GET(req: NextRequest) {
  return handleGetReviews(req);
}
