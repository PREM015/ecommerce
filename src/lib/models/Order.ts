import { prisma } from "@/lib/db";

// Input type for creating an order
export type CreateOrderInput = {
  userId: string;
  totalAmount: number;
  status?: "PENDING" | "SHIPPED" | "DELIVERED" | "CANCELLED";
  items: {
    productId: string;
    quantity: number;
    price: number;
  }[];
  shippingAddress: string;
};

export const createOrder = async (orderData: CreateOrderInput) => {
  return await prisma.order.create({
    data: {
      user: {
        connect: { id: orderData.userId },
      },
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

export const getUserOrders = async (userId: string) => {
  return await prisma.order.findMany({
    where: {
      user: {
        id: userId,
      },
    },
    include: {
      items: {
        include: {
          product: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
};
