'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const offers = [
  {
    title: "Big Electronics Sale",
    description: "Up to 50% off on top electronics. Grab the best deals today!",
    image: "/images/electronics-banner.png",
    link: "/products/electronics",
  },
  {
    title: "Fashion Fiesta",
    description: "Trendy styles at unbeatable prices. New arrivals just for you!",
    image: "/images/fashion-banner.png",
    link: "/products/clothing",
  },
  {
    title: "Kitchen Essentials",
    description: "Upgrade your kitchen with premium appliances and tools.",
    image: "/images/kitchen-banner.png",
    link: "/products/home-kitchen",
  },
];

function Herosection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % offers.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const current = offers[index];

  return (
    <section className="w-full bg-gradient-to-r from-blue-50 via-white to-indigo-50 py-16 px-4 md:py-24 md:px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left md:w-1/2"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
              {current.title}
            </h1>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-6">
              {current.description}
            </p>
            <Link
              href={current.link}
              className="inline-block bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-200 shadow-md"
            >
              Shop Now
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Right Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 flex justify-center"
          >
            <Image
              src={current.image}
              alt={current.title}
              width={500}
              height={500}
              className="rounded-xl shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Herosection;
