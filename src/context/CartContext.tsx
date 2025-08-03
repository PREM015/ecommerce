// CartContext.tsx
// src/context/CartContext.tsx
"use client";

import { createContext, useState, useEffect, ReactNode } from "react";
import { Cart, CartItem } from "@/lib/models/Cart";

interface CartContextType {
  cart: Cart;
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Cart>({ items: [] });

  useEffect(() => {
    const storedCart = localStorage.getItem("bharatcart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bharatcart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const existing = prev.items.find(i => i.productId === item.productId);
      if (existing) {
        return {
          items: prev.items.map(i =>
            i.productId === item.productId
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          ),
        };
      } else {
        return { items: [...prev.items, item] };
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => ({
      items: prev.items.filter(item => item.productId !== productId),
    }));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setCart(prev => ({
      items: prev.items.map(item =>
        item.productId === productId ? { ...item, quantity } : item
      ),
    }));
  };

  const clearCart = () => {
    setCart({ items: [] });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
