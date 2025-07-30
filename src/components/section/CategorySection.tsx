'use client';

import React from 'react';
import Link from 'next/link';
import { categories } from '@/constants/categories';

const CategorySection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Shop by <span className="text-purple-600">Categories</span>
        </h2>

        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-6xl">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/products/${category.slug}`}
                aria-label={`Go to ${category.label}`}
                className="group flex flex-col items-center justify-center bg-white rounded-xl border border-gray-200 hover:border-purple-500 shadow-sm hover:shadow-md transition-all duration-200 px-4 py-6"
              >
                <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 text-2xl font-bold mb-4">
                  {category.label.charAt(0)}
                </div>
                <span className="text-sm md:text-base font-medium text-gray-700 group-hover:text-purple-700 text-center">
                  {category.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
