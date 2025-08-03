import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Product } from "@/types/product";

type Filters = {
  price: {
    gte: number;
    lte: number;
  };
  category?: { name: string };
  isFeatured?: boolean;
  isNew?: boolean;
};

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const category = searchParams.get("category");
    const isFeatured = searchParams.get("featured") === "true";
    const isNew = searchParams.get("new") === "true";
    const priceMin = parseFloat(searchParams.get("min") || "0");
    const priceMax = parseFloat(searchParams.get("max") || "100000");

    const filters: Filters = {
      price: {
        gte: priceMin,
        lte: priceMax,
      },
    };

    if (category) filters.category = { name: category };
    if (isFeatured) filters.isFeatured = true;
    if (isNew) filters.isNew = true;

    const products = await prisma.product.findMany({
      where: filters,
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    const response: Product[] = products.map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description ?? "",
      price: product.price,
      discountPercentage: product.discountPercentage ?? 0,
      rating: product.rating ?? 0,
      stock: product.stock ?? 0,
      brand: product.brand ?? "",
      categoryId: product.categoryId,
      categoryName: product.category?.name ?? "",
      image: product.image ?? "",
      imageUrl: product.image ?? "",
      isNew: product.isNew ?? false,
      isFeatured: product.isFeatured ?? false,
      createdAt: product.createdAt.toISOString(),
      updatedAt: product.updatedAt.toISOString(),
    }));

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { message: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      brand,
      categoryId,
      image,
      imageUrl,
      isNew,
      isFeatured,
    } = body;

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price,
        discountPercentage,
        rating,
        stock,
        brand,
        categoryId,
        image,
        imageUrl,
        isNew,
        isFeatured,
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
