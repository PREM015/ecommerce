'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const offers = [
  {
    title: 'Big Electronics Sale',
    description: 'Up to 50% off on top electronics. Grab the best deals today!',
    image: '/images/banners/electronics-banner.png',
    link: '/products/electronics',
  },
  {
    title: 'Fashion Fiesta',
    description: 'Trendy styles at unbeatable prices. New arrivals just for you!',
    image: '/images/banners/fashion-banner.png',
    link: '/products/clothing',
  },
  {
    title: 'Kitchen Essentials',
    description: 'Upgrade your kitchen with premium appliances and tools.',
    image: '/images/banners/kitchen-banner.png',
    link: '/products/home-kitchen',
  },
  {
    title: 'Grocery Bonanza',
    description: 'Fresh groceries at your doorstep. Everyday low prices!',
    image: '/images/banners/groceries-banner.png',
    link: '/products/groceries',
  },
  {
    title: 'Home & Living',
    description: 'Modern home appliances for smart living and comfort.',
    image: '/images/banners/home-banner.png',
    link: '/products/home-appliances',
  },
  {
    title: 'Beauty & Care',
    description: 'Pamper yourself with top beauty and personal care picks.',
    image: '/images/banners/beauty-banner.png',
    link: '/products/beauty',
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
    <section className="relative w-full py-24 px-6 md:px-12 bg-gradient-to-br from-indigo-100 via-white to-blue-50 overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute w-[30rem] h-[30rem] bg-purple-300 rounded-full blur-3xl opacity-30 -top-24 -left-20 z-0" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${index}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="text-center md:text-left md:w-1/2"
          >
            <h1 className="text-gray-900 font-black leading-tight text-[clamp(2.5rem,6vw,4rem)] mb-6">
              {current.title}
            </h1>
            <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0">
              {current.description}
            </p>
            <Link
              href={current.link}
              className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium text-lg py-3 px-7 rounded-xl shadow-lg transition-all"
            >
              Shop Now →
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Image Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`image-${index}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="w-full md:w-1/2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white p-3">
              <Image
                src={current.image}
                alt={current.title}
                width={640}
                height={400}
                className="rounded-2xl w-full h-auto object-cover hover:scale-[1.03] transition-transform duration-700 ease-in-out"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/30 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center mt-10 gap-3 z-10 relative">
        {offers.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === i ? 'bg-purple-600 scale-125' : 'bg-gray-300'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
