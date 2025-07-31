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
    <section className="w-full py-16 px-4 md:px-10 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Handpicked <span className="text-indigo-500">Favorites</span>
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-500">
            Explore premium picks trending across all categories
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;
