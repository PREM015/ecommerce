// CategorySection.tsx placeholder
'use client';

import React from 'react';
import Link from 'next/link';
import { categories } from '@/constants/categories';

const CategorySection = () => {
  return (
    <section className="w-full py-12 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Shop by Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/products/${category.slug}`}
              className="group rounded-lg overflow-hidden bg-white shadow hover:shadow-md transition duration-200"
            >
              <div className="aspect-square flex items-center justify-center bg-gray-100">
                <span className="text-xl md:text-2xl font-semibold text-gray-600 group-hover:text-indigo-600 transition">
                  {category.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
