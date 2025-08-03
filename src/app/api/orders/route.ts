// src/app/api/orders/route.ts

import { handleCreateOrder, handleGetUserOrders } from "@/lib/controllers/orderController";
import { NextRequest } from "next/server";

// Handle POST: Create a new order
export async function POST(req: NextRequest) {
  return await handleCreateOrder(req);
}

// Handle GET: Fetch orders for a user
export async function GET(req: NextRequest) {
  return await handleGetUserOrders(req);
}
