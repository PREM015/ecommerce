// productValidator.ts
// src/lib/validators/productValidator.ts
import { z } from "zod";

export const createProductSchema = z.object({
  name: z
    .string()
    .min(3, "Product name must be at least 3 characters long")
    .max(100, "Product name must be less than 100 characters"),
  description: z
    .string()
    .max(2000, "Description must be less than 2000 characters")
    .optional(),
  price: z
    .number()
    .min(0, "Price must be greater than or equal to 0"),
  stock: z
    .number()
    .int()
    .min(0, "Stock must be greater than or equal to 0"),
  categoryId: z
    .string()
    .min(1, "Category ID is required"),
  images: z
    .array(z.string().url("Invalid image URL"))
    .optional(),
  currency: z
    .string()
    .length(3, "Currency must be a 3-letter ISO code"),
});

export const updateProductSchema = createProductSchema.partial();

// Types
export type CreateProductInput = z.infer<typeof createProductSchema>;
export type UpdateProductInput = z.infer<typeof updateProductSchema>;
