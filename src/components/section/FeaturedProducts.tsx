'use client';

import React from 'react';
import ProductCard from '@/components/ui/ProductCard';

const featuredProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 3499,
    image: '/images/products/headphones.jpg',
  },
  {
    id: 2,
    name: 'Smartphone 5G',
    price: 19999,
    image: '/images/products/phone.jpg',
  },
  {
    id: 3,
    name: 'Sneakers (Men)',
    price: 2599,
    image: '/images/products/sneakers.jpg',
  },
  {
    id: 4,
    name: 'Kitchen Mixer',
    price: 4499,
    image: '/images/products/mixer.jpg',
  },
  {
    id: 5,
    name: 'LED Smart TV',
    price: 32999,
    image: '/images/products/tv.jpg',
  },
  {
    id: 6,
    name: 'Perfume Spray',
    price: 899,
    image: '/images/products/perfume.jpg',
  },
];

const FeaturedProductsSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Featured <span className="text-indigo-600">Products</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
