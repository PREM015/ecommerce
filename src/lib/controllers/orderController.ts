import { createOrder, getUserOrders } from "../models/Order";
import { orderSchema } from "../validators/orderValidator";
import { NextRequest, NextResponse } from "next/server";
import type { CreateOrderInput } from "../models/Order";

export const handleCreateOrder = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const parsed = orderSchema.parse(body) as CreateOrderInput;

    const order = await createOrder(parsed);

    return NextResponse.json(order, { status: 201 });
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "Order creation failed";
    return NextResponse.json({ message: errorMessage }, { status: 400 });
  }
};

export const handleGetUserOrders = async (req: NextRequest) => {
  const userId = req.nextUrl.searchParams.get("userId");
  if (!userId) {
    return NextResponse.json({ message: "Missing user ID" }, { status: 400 });
  }

  try {
    const orders = await getUserOrders(userId);
    return NextResponse.json(orders);
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "Failed to fetch orders";
    console.error(err);
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
};
