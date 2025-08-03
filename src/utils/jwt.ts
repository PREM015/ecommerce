// src/utils/jwt.ts
import jwt from "jsonwebtoken";

export interface JwtPayload {
  userId: string;
  isAdmin?: boolean;
}

const JWT_SECRET = process.env.JWT_SECRET || "your_jwt_secret";
const JWT_EXPIRES_IN = "7d";

export const signToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
};

export const verifyJwt = (token: string): JwtPayload | null => {
  try {
    return jwt.verify(token, JWT_SECRET) as JwtPayload;
  } catch (err) {
    console.error("JWT Verification failed:", err);
    return null;
  }
};

// ✅ Add this to fix the error in admin/page.tsx
export const getTokenPayload = (token: string): JwtPayload | null => {
  return verifyJwt(token);
};
