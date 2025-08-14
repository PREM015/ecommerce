// Product.ts
// src/lib/models/Product.ts
import { Prisma } from "@prisma/client";

/**
 * ProductCreateInput:
 * Defines the required and optional fields for creating a product
 */
export type ProductCreateInput = {
  name: string;
  description?: string;
  price: number;
  stock: number;
  categoryId: string; // Prisma uses string for IDs (UUID or CUID)
  images?: string[];
  currency: string; // e.g., "USD", "INR"
};

/**
 * ProductUpdateInput:
 * All fields optional for partial update
 */
export type ProductUpdateInput = Partial<ProductCreateInput>;

/**
 * ProductWithRelations:
 * Product data with related entities included
 */
export type ProductWithRelations = Prisma.ProductGetPayload<{
  include: {
    category: true;
    reviews: true;
  };
}>;
