// Review.ts
// src/lib/models/Review.ts
import { prisma } from "@/lib/prisma";

export const createReview = async (data: {
  userId: string;
  productId: string;
  rating: number;
  comment?: string;
}) => {
  return await prisma.review.create({ data });
};

export const getReviewsByProductId = async (productId: string) => {
  return await prisma.review.findMany({
    where: { productId },
    include: {
      user: {
        select: { id: true, name: true, avatar: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });
};
