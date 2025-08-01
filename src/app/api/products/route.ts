import { NextResponse, NextRequest } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const priceMin = parseFloat(searchParams.get("min") || "0");
    const priceMax = parseFloat(searchParams.get("max") || "100000");
    const isNew = searchParams.get("new") === "true";

    const products = await prisma.product.findMany({
      where: {
        price: {
          gte: priceMin,
          lte: priceMax,
        },
        ...(isNew ? { isNew: true } : {}),
      },
      include: {
        category: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { message: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
