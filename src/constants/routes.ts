// routes.ts
// src/constants/routes.ts

/**
 * Centralized route definitions for your eCommerce app
 * Makes it easier to update paths in one place.
 */
const ROUTES = {
  HOME: "/",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  FORGOT_PASSWORD: "/auth/forgot-password",
  RESET_PASSWORD: "/auth/reset-password",

  PRODUCTS: "/products",
  PRODUCT_DETAIL: (id: string | number) => `/products/${id}`,

  CART: "/cart",
  CHECKOUT: "/checkout",
  ORDERS: "/orders",

  ADMIN: {
    DASHBOARD: "/admin",
    PRODUCTS: "/admin/products",
    USERS: "/admin/users",
    ORDERS: "/admin/orders",
  },

  NOT_FOUND: "/not-found",
} as const;

export type RouteKey = keyof typeof ROUTES;
export default ROUTES;
