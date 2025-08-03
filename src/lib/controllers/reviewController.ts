// reviewController.ts
// src/lib/controllers/reviewController.ts
import { NextRequest, NextResponse } from "next/server";
import { createReview, getReviewsByProductId } from "@/lib/models/Review";

export async function handleCreateReview(req: NextRequest) {
  try {
    const body = await req.json();
    const { userId, productId, rating, comment } = body;

    if (!userId || !productId || typeof rating !== "number") {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const review = await createReview({ userId, productId, rating, comment });
    return NextResponse.json(review, { status: 201 });
  } catch (error) {
    console.error("Create Review Error:", error);
    return NextResponse.json({ error: "Failed to create review" }, { status: 500 });
  }
}

export async function handleGetReviews(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("productId");

    if (!productId) {
      return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
    }

    const reviews = await getReviewsByProductId(productId);
    return NextResponse.json(reviews);
  } catch (error) {
    console.error("Get Reviews Error:", error);
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 });
  }
}
