// userValidator.ts
// src/lib/validators/userValidator.ts

import { z } from "zod";

// User signup validator — at least one of email or phone is required
export const userSignupSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email").optional(),
    phone: z
      .string()
      .regex(/^[0-9]{10}$/, "Phone must be 10 digits")
      .optional(),
    password: z.string().min(6, "Password must be at least 6 characters"),
    avatar: z.string().url("Invalid avatar URL").optional(),
  })
  .refine((data) => data.email || data.phone, {
    message: "Either email or phone is required",
    path: ["email"],
  });

// User login validator (identifier = email or phone)
export const userLoginSchema = z.object({
  identifier: z.string().min(1, "Email or phone is required"),
  password: z.string().min(1, "Password is required"),
});

// User profile update validator
export const userUpdateSchema = z.object({
  name: z.string().min(1).optional(),
  email: z.string().email().optional(),
  phone: z.string().regex(/^[0-9]{10}$/).optional(),
  avatar: z.string().url().optional(),
  password: z.string().min(6).optional(),
});

// Optional: Validate UUID-style user ID
export const userIdSchema = z.string().uuid({
  message: "Invalid user ID format",
});

// Type exports
export type UserSignupInput = z.infer<typeof userSignupSchema>;
export type UserLoginInput = z.infer<typeof userLoginSchema>;
export type UserUpdateInput = z.infer<typeof userUpdateSchema>;
