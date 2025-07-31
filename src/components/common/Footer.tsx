'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' as const }
    })
  };

  return (
    <footer className="bg-gray-950 text-gray-300 pt-14 pb-10 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-500 blur-sm animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 sm:gap-10 mb-10"
        >
          {/* Brand */}
          <motion.div variants={fadeInUp} custom={0} className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">
              Bharat cart
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Your one-stop shop for quality, reliability, and fast delivery from Mumbai, India.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp} custom={1}>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { href: '/', label: 'Home' },
                { href: '/cart', label: 'Cart' },
                { href: '/categories', label: 'Categories' },
                { href: '/contact', label: 'Contact Us' },
                { href: '/privacy', label: 'Privacy Policy' }
              ].map(({ href, label }, i) => (
                <li key={i}>
                  <Link
                    href={href}
                    className="hover:text-white transition duration-200 ease-in-out hover:translate-x-1 block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div variants={fadeInUp} custom={2}>
            <h4 className="text-white font-semibold mb-3">Top Categories</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['clothing', 'electronics', 'beauty', 'groceries', 'home-appliances'].map((cat, i) => (
                <li key={i}>
                  <Link
                    href={`/categories/${cat}`}
                    className="hover:text-white transition duration-200 ease-in-out hover:translate-x-1 block"
                  >
                    {cat.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' ')}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp} custom={3}>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@yourstore.in"
                  className="hover:text-white transition-colors"
                >
                  support@yourstore.in
                </a>
              </li>
              <li>Phone: +91-9876543210</li>
              <li>Location: Mumbai, India</li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={fadeInUp} custom={4}>
            <h4 className="text-white font-semibold mb-3">Newsletter</h4>
            <p className="text-sm mb-2 text-gray-400">Get exclusive offers & updates.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-md bg-gray-800 text-sm placeholder-gray-500 border border-gray-700 focus:ring-2 focus:ring-green-500 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-md text-sm hover:scale-105 transition-transform duration-200"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-500 text-center md:text-left">
            &copy; {currentYear} Bharatcart. All rights reserved.
          </p>
          <div className="flex gap-4 justify-center">
            {[Facebook, Instagram, Twitter, Youtube, Mail].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                whileHover={{ scale: 1.2, color: '#ffffff' }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-tr from-green-500 to-blue-500 blur-2xl opacity-20 pointer-events-none" />
    </footer>
  );
};

export default Footer;
