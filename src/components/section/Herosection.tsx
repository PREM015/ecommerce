"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

function Herosection() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-50 via-white to-indigo-50 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Welcome to{" "}
            <span className="text-indigo-600">BharatCart</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-6">
            Explore top deals, best brands, and everyday essentials — all in one place.
          </p>
          <Link
            href="/(pages)/product"
            className="inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-200 shadow-md"
          >
            Shop Now
          </Link>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/images/hero-banner.png" // Replace this with your actual hero image path
            alt="Shopping Hero Banner"
            width={500}
            height={500}
            className="rounded-xl shadow-xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default Herosection;
