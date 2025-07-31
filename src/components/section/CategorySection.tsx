'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/constants/categories';

const CategorySection = () => {
  return (
    <section className="w-full py-16 px-4 md:px-10 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          Shop by <span className="text-purple-600">Categories</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/products/${category.slug}`}
              className="group flex flex-col items-center justify-center text-center bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:border-purple-500 transition-all duration-300 p-5 hover:-translate-y-1 hover:bg-purple-50/20 backdrop-blur-sm"
              aria-label={`Go to ${category.label}`}
            >
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-purple-100 flex items-center justify-center overflow-hidden mb-4 group-hover:shadow-md group-hover:ring-2 group-hover:ring-purple-400 transition-all duration-300">
                <Image
                  src={category.image}
                  alt={category.label}
                  width={80}
                  height={80}
                  className="object-contain w-10 h-10 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span className="text-sm md:text-base font-semibold text-gray-800 group-hover:text-purple-700">
                {category.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
