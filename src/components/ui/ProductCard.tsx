'use client';

import React, { useState } from 'react';
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
  const [imgSrc, setImgSrc] = useState(product.image || '/images/ui/placeholder.png');

  return (
    <Link
      href={`/products/${product.slug || product.id}`}
      className="group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-indigo-500 shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="relative w-full aspect-[4/5] bg-gray-100">
        <Image
          src={imgSrc}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
          onError={() => setImgSrc('/images/ui/placeholder.png')}
        />
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between gap-2">
        <h3 className="text-sm sm:text-base font-semibold text-gray-800 group-hover:text-indigo-600 truncate">
          {product.name}
        </h3>
        <div className="text-gray-900 font-bold text-sm sm:text-base">
          ₹{product.price.toLocaleString()}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-indigo-100 opacity-0 group-hover:opacity-10 transition duration-300 pointer-events-none" />
    </Link>
  );
};

export default ProductCard;
