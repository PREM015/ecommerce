// NewArrivals.tsx placeholder
// src/components/section/NewArrivals.tsx
'use client';

import React from 'react';
import ProductCard from '@/components/ui/ProductCard';

const newArrivalProducts = [
  {
    id: 101,
    name: 'Bluetooth Neckband',
    price: 1499,
    image: '/images/products/neckband.jpg',
  },
  {
    id: 102,
    name: 'Women’s Handbag',
    price: 2199,
    image: '/images/products/handbag.jpg',
  },
  {
    id: 103,
    name: 'Fitness Smartwatch',
    price: 3299,
    image: '/images/products/smartwatch.jpg',
  },
  {
    id: 104,
    name: 'Air Purifier',
    price: 7599,
    image: '/images/products/airpurifier.jpg',
  },
  {
    id: 105,
    name: 'Hair Dryer',
    price: 1299,
    image: '/images/products/hairdryer.jpg',
  },
  {
    id: 106,
    name: 'Laptop Backpack',
    price: 1799,
    image: '/images/products/backpack.jpg',
  },
];

const NewArrivals = () => {
  return (
    <section className="w-full py-16 px-4 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          New <span className="text-green-600">Arrivals</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {newArrivalProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
