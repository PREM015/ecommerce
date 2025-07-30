'use client';
import React from 'react';
import Link from 'next/link';

function Herosection() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-100 to-purple-100 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Text */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Welcome to <span className="text-purple-600">BhaaratCart</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-6">
            Discover the best products at unbeatable prices.
          </p>
          <Link
            href="/(pages)/product"
            className="inline-block bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition"
          >
            Shop Now
          </Link>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
         
        </div>
      </div>
    </section>
  );
}

export default Herosection;
