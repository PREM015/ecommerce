// ProductCard.tsx placeholder
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  slug?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      href={`/products/${product.slug || product.id}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-indigo-500"
    >
      <div className="relative w-full aspect-square bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-3 flex flex-col gap-1">
        <h3 className="text-sm font-medium text-gray-800 group-hover:text-indigo-600 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-sm font-semibold text-gray-900">
          ₹{product.price.toLocaleString()}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
