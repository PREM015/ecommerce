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
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const current = offers[index];

  return (
    <section className="relative w-full py-16 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-100">
      {/* Gradient Circle Decoration */}
      <div className="absolute w-[28rem] h-[28rem] bg-indigo-100 rounded-full blur-3xl opacity-30 -top-24 -left-20 z-0" />
      <div className="absolute w-[20rem] h-[20rem] bg-pink-100 rounded-full blur-2xl opacity-30 bottom-0 right-0 z-0" />

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 relative z-10">
        {/* Left Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index + "-text"}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left md:w-1/2"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
              {current.title}
            </h1>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-6 max-w-xl mx-auto md:mx-0">
              {current.description}
            </p>
            <Link
              href={current.link}
              className="inline-block bg-indigo-600 text-white font-medium text-base sm:text-lg py-3 px-6 rounded-xl shadow-lg hover:bg-indigo-700 transition"
            >
              Shop Now
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Right Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index + "-image"}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white p-3 w-full max-w-[90%] sm:max-w-sm md:max-w-md">
              <Image
                src={current.image}
                alt={current.title}
                width={500}
                height={500}
                className="rounded-2xl object-cover w-full h-auto transition-transform duration-700 hover:scale-105"
                priority
              />
              {/* Optional gradient overlay for subtle effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Herosection;
