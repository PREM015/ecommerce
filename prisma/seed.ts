// File: prisma/seed.ts
import { prisma } from "@/lib/db";

async function main() {
  console.log("Seeding database...");

  // 1. Create categories
  const categories = [
    "Clothing",
    "Electronics",
    "Beauty",
    "Groceries",
    "Home Appliances",
  ];

  for (const name of categories) {
    await prisma.category.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  // 2. Get the Clothing category
  const clothingCategory = await prisma.category.findUnique({
    where: { name: "Clothing" },
  });

  if (!clothingCategory) {
    throw new Error("Clothing category not found");
  }

  // 3. Create a dummy admin (required for product relation)
  const admin = await prisma.admin.upsert({
    where: { userId: "admin-user-id" }, // Use a fixed ID for seeding
    update: {},
    create: {
      userId: "admin-user-id",
      storeName: "Demo Store",
      isVerified: true,
    },
  });

  // 4. Create products
  await prisma.product.create({
    data: {
      title: "Cotton T-Shirt",
      description: "Comfortable cotton t-shirt",
      price: 299,
      stock: 50,
      isNew: true,
      isFeatured: false,
      image: "tshirt-cotton.png",
      categoryId: clothingCategory.id,
      adminId: admin.id,
      rating: 4.5,
      discountPercentage: 10,
      brand: "Generic",
    },
  });

  console.log("Database seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
