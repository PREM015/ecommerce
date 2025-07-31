'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BRAND_LOGOS = [
  'apple.png',
  'dell.png',
  'hp.png',
  'lg.png',
  'nestle.png',
  'nike.jpg',
  'samsung.png',
  'sony.png',
  'unilever.png',
  'zara.jpg',
];

const FALLBACK_IMAGE = '/images/ui/placeholder.png';

const BrandsShowcase = () => {
  return (
    <section
      className="py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-black"
      style={{
        backgroundImage: "url('/images/ui/texture-bg-dark.png')",
        backgroundSize: 'cover',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-14 text-white tracking-tight drop-shadow">
          Trusted by Leading Brands
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10">
          {BRAND_LOGOS.map((filename, index) => {
            const brandName = filename.split('.')[0];
            return (
              <BrandLogo
                key={index}
                src={`/images/brands/${filename}`}
                alt={brandName}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

type BrandLogoProps = {
  src: string;
  alt: string;
};

const BrandLogo: React.FC<BrandLogoProps> = ({ src, alt }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <motion.div
      whileHover={{ scale: 1.06, rotate: 0.2 }}
      whileTap={{ scale: 0.95 }}
      className="relative group aspect-[4/3] w-full max-w-[140px] sm:max-w-[160px] md:max-w-[180px] mx-auto
        bg-white/5 border border-slate-700 backdrop-blur-sm shadow-inner rounded-xl 
        flex items-center justify-center p-4 overflow-hidden transition-all duration-300
        hover:ring-2 hover:ring-indigo-400"
      aria-label={`${alt} logo`}
    >
      <div className="absolute -inset-0.5 bg-indigo-500 opacity-10 blur-lg group-hover:opacity-20 transition-all duration-500 pointer-events-none" />

      <div className="relative w-full h-full">
        <Image
          src={imgSrc}
          alt={`${alt} logo`}
          title={alt.charAt(0).toUpperCase() + alt.slice(1)}
          fill
          className="object-contain grayscale group-hover:grayscale-0 transition duration-300 ease-in-out"
          onError={() => setImgSrc(FALLBACK_IMAGE)}
          loading="lazy"
        />
      </div>

      {/* Optional Caption for larger screens */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 text-xs text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
        {alt.charAt(0).toUpperCase() + alt.slice(1)}
      </div>
    </motion.div>
  );
};

export default BrandsShowcase;
