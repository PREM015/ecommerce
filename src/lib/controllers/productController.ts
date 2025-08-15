// src/lib/controllers/productController.ts
import { prisma } from "@/lib/db";
import { Product } from "@prisma/client";

type CreateProductData = Omit<Product, "id" | "createdAt" | "updatedAt">;
type UpdateProductData = Partial<CreateProductData>;

/**
 * Get all products with optional filters
 */
export async function getProducts(filters?: {
  category?: string;
  isFeatured?: boolean;
  isNew?: boolean;
  minPrice?: number;
  maxPrice?: number;
}) {
  return prisma.product.findMany({
    where: {
      ...(filters?.category && { category: { name: filters.category } }),
      ...(filters?.isFeatured !== undefined && {
        isFeatured: filters.isFeatured,
      }),
      ...(filters?.isNew !== undefined && { isNew: filters.isNew }),
      price: {
        gte: filters?.minPrice ?? 0,
        lte: filters?.maxPrice ?? 100000,
      },
    },
    include: {
      category: true,
    },
    orderBy: { createdAt: "desc" },
  });
}

/**
 * Get a single product by ID
 */
export async function getProductById(id: string) {
  return prisma.product.findUnique({
    where: { id },
    include: { category: true },
  });
}

/**
 * Create a new product
 */
export async function createProduct(data: CreateProductData) {
  return prisma.product.create({
    data,
  });
}

/**
 * Update a product by ID
 */
export async function updateProduct(id: string, data: UpdateProductData) {
  return prisma.product.update({
    where: { id },
    data,
  });
}

/**
 * Delete a product by ID
 */
export async function deleteProduct(id: string) {
  return prisma.product.delete({
    where: { id },
  });
}
