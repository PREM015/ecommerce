// useCart.ts placeholder
// src/hooks/useCart.ts
"use client";

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

