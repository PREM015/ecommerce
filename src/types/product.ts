export interface Product {
  id: number; // ✅ must be number for UI compatibility
  name: string;
  description: string;
  price: number;
  discountPercentage?: number;
  rating: number;
  stock: number;
  brand: string;
  categoryId: string;
  categoryName?: string;
  image: string; // ✅ required for UI
  imageUrl: string; // ✅ optional backend field
  isNew?: boolean;
  isFeatured?: boolean;
  createdAt: string;
  updatedAt: string;
}
