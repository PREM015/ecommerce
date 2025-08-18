// src/types/product.ts
export interface Product {
  id: string; // keep string since Prisma usually uses string/UUID
  slug?: string; // for clean URLs
  name: string;
  description?: string;
  price: number;
  stock: number;
  image: string; // make it required (use placeholder when missing)
  category?: { id: string; name: string };
  brand?: { id: string; name: string };
}
