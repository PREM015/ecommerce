// src/components/section/Trendingsection.tsx
'use client';

import React from 'react';
import ProductCard from '@/components/ui/ProductCard';

const trendingProducts = [
  {
    id: 101,
    name: 'Bluetooth Speaker',
    price: 1799,
    image: '/images/products/speaker.jpg',
  },
  {
    id: 102,
    name: 'Fitness Smartwatch',
    price: 3999,
    image: '/images/products/watch.jpg',
  },
  {
    id: 103,
    name: 'Gaming Mouse',
    price: 1299,
    image: '/images/products/mouse.jpg',
  },
  {
    id: 104,
    name: 'Cotton Kurta',
    price: 1099,
    image: '/images/products/kurta.jpg',
  },
  {
    id: 105,
    name: 'Ceramic Dinner Set',
    price: 2499,
    image: '/images/products/dinner-set.jpg',
  },
  {
    id: 106,
    name: 'Laptop Stand',
    price: 899,
    image: '/images/products/stand.jpg',
  },
];

const TrendingSection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-10 bg-yellow-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Just In <span className="text-yellow-600">Trending Picks</span>
          </h2>
          <p className="text-sm md:text-base text-gray-500 mt-2">
            Handpicked items people are loving right now
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {trendingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
