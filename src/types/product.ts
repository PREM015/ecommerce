// src/types/product.ts
export interface Product {
  id: string; // 🔁 changed from number → string
  name: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  categoryId: string; // 🔁 changed from number → string
  categoryName: string;
  image: string;
  imageUrl: string;
  isNew: boolean;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}
