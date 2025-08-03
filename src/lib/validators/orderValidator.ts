// orderValidator.ts
// src/lib/validators/orderValidator.ts

import { z } from "zod";

export const orderSchema = z.object({
  userId: z.string(),
  totalAmount: z.number().min(0),
  shippingAddress: z.string().min(1),
  status: z.enum(["PENDING", "PROCESSING", "SHIPPED", "DELIVERED"]).optional(),
  items: z.array(
    z.object({
      productId: z.string(),
      quantity: z.number().min(1),
      price: z.number().min(0),
    })
  ),
});
