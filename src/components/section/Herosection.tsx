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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = offers[index];

  return (
    <section className="relative w-full py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        
        {/* Text Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index + "-text"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left md:w-1/2"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-5 leading-tight tracking-tight">
              {current.title}
            </h1>
            <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-xl">
              {current.description}
            </p>
            <Link
              href={current.link}
              className="inline-block bg-indigo-600 text-white font-medium text-lg py-3 px-6 rounded-xl shadow-lg hover:bg-indigo-700 transition"
            >
              Shop Now
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index + "-image"}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.7 }}
            className="md:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white p-4">
              <Image
                src={current.image}
                alt={current.title}
                width={500}
                height={500}
                className="rounded-2xl object-cover w-full h-auto transition-transform duration-700 hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Decorative Gradient Circle */}
      <div className="absolute w-[30rem] h-[30rem] bg-indigo-100 rounded-full blur-3xl opacity-40 -top-24 -left-32 z-0" />
    </section>
  );
}

export default Herosection;
