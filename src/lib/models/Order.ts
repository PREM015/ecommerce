import { prisma } from "@/lib/db";

// Input type for creating an order
export type CreateOrderInput = {
  userId: string;
  userEmail: string; // Required by your Prisma schema
  adminId: string;   // Required by your Prisma schema
  totalAmount: number;
  status?: "PENDING" | "SHIPPED" | "DELIVERED" | "CANCELLED";
  items: {
    productId: string;
    quantity: number;
    price: number;
  }[];
  shippingAddress: string;
};

// Create a new order
export const createOrder = async (orderData: CreateOrderInput) => {
  return await prisma.order.create({
    data: {
      userId: orderData.userId,
      userEmail: orderData.userEmail,
      adminId: orderData.adminId,
      totalAmount: orderData.totalAmount,
      status: orderData.status ?? "PENDING",
      shippingAddress: orderData.shippingAddress,
      items: {
        create: orderData.items.map((item) => ({
          product: { connect: { id: item.productId } },
          quantity: item.quantity,
          price: item.price,
        })),
      },
    },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
  });
};

// Get all orders for a user
export const getUserOrders = async (userId: string) => {
  return await prisma.order.findMany({
    where: { userId },
    include: {
      items: {
        include: { product: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });
};
