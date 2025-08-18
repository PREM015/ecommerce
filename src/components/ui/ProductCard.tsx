"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
    stock: number;
    isNew: boolean;
    isFeatured: boolean;
    brand: string | null;
    rating: number;
    discountPercentage: number;
    categoryId: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="bg-white shadow-md rounded-2xl p-4 hover:shadow-xl transition-all duration-300"
    >
      <Link href={`/product/${product.id}`}>
        <div className="relative w-full h-48 mb-4">
          <Image
            src={product.image || "/images/placeholder.png"}
            alt={product.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold truncate">{product.title}</h3>
          <p className="text-sm text-gray-500 truncate">
            {product.brand || "Unknown Brand"} • Cat ID: {product.categoryId}
          </p>
          <p className="mt-2 text-lg font-bold text-blue-600">
            ₹{product.price.toLocaleString()}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
