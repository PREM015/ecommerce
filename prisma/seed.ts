import { prisma } from "@/lib/prisma";

async function main() {
  // 1. Create categories
  await prisma.category.createMany({
    data: [
      { name: "Clothing" },
      { name: "Electronics" },
      { name: "Beauty" },
      { name: "Groceries" },
      { name: "Home Appliances" },
    ],
  });

  // 2. Get Clothing category ID
  const clothing = await prisma.category.findFirst({ where: { name: "Clothing" } });

  // 3. Insert products with correct categoryId
  await prisma.product.createMany({
    data: [
      {
        name: "Cotton T-Shirt",
        price: 299,
        isNew: false,
        imageUrl: "tshirt-cotton.png",
        categoryId: clothing?.id || "", // fallback to avoid crash
      },
    ],
  });
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
