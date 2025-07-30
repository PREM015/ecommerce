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

export default function Herosection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % offers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const current = offers[index];

  return (
    <section className="relative w-full py-16 px-4 sm:px-6 md:px-10 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-blue-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">

        {/* Text Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${index}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-center md:text-left md:w-1/2"
          >
            <h1 className="text-gray-900 font-extrabold leading-tight tracking-tight text-[clamp(2rem,6vw,3.5rem)] mb-4">
              {current.title}
            </h1>
            <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-6 max-w-xl mx-auto md:mx-0">
              {current.description}
            </p>
            <Link
              href={current.link}
              className="inline-block bg-indigo-600 text-white font-semibold text-base sm:text-lg py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition"
            >
              Shop Now
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Image */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`image-${index}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-white p-2 sm:p-4">
              <Image
                src={current.image}
                alt={current.title}
                width={600}
                height={400}
                className="rounded-2xl w-full h-auto object-cover transition-transform duration-700 ease-in-out hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Decorative Background Glow */}
      <div className="absolute w-[25rem] h-[25rem] bg-indigo-200 rounded-full blur-3xl opacity-30 -top-20 -left-20 z-0" />
    </section>
  );
}
