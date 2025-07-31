'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, User, Search } from 'lucide-react';

const categories = [
  { name: 'Beauty', image: '/images/categories/beauty.png' },
  { name: 'Clothing', image: '/images/categories/clothing.png' },
  { name: 'Electronics', image: '/images/categories/electronics.png' },
  { name: 'Groceries', image: '/images/categories/groceries.png' },
  { name: 'Home', image: '/images/categories/home-appliance.png' },
  { name: 'Kitchen', image: '/images/categories/kitchen.png' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b shadow-sm">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/BharatCart Logo.png"
            alt="BharatCart Logo"
            width={42}
            height={42}
            priority
          />
          <span className="text-2xl font-bold text-gray-900">
            Bharat<span className="text-blue-600">Cart</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6 text-slate-700 text-sm font-semibold">
          <Link
            href="/(auth)/login"
            className="flex items-center gap-1 hover:text-blue-600 transition-colors"
          >
            <User size={20} /> Login
          </Link>
          <Link
            href="/cart"
            className="flex items-center gap-1 hover:text-blue-600 transition-colors"
          >
            <Image
              src="/images/ui/cart-icon.svg"
              alt="Cart"
              width={20}
              height={20}
            />
            Cart
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Toggle Menu"
          className="md:hidden text-slate-700 hover:text-blue-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-gradient-to-r from-white via-slate-50 to-white py-3 border-y">
        <div className="max-w-7xl mx-auto px-6 relative">
          <Search
            className="absolute mx-4 my-2.5 text-gray-400"
            size={18}
            aria-hidden="true"
          />
          <input
            type="text"
            placeholder="Search for products, brands, categories..."
            className="w-full pl-14 pr-4 py-2 rounded-lg border border-slate-300 text-sm shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
            aria-label="Search products"
          />
        </div>
      </div>

      {/* Categories Row */}
      <div className="bg-white border-b overflow-x-auto hide-scrollbar">
        <div className="max-w-7xl mx-auto px-4 py-3 flex gap-3">
          {categories.map((category, idx) => (
            <Link
              key={idx}
              href="/product"
              className="flex items-center min-w-max gap-2 px-3 py-1.5 rounded-full text-sm font-medium text-gray-700 bg-slate-100 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-500 hover:text-white transition-all duration-200 shadow-sm"
            >
              <Image
                src={category.image}
                alt={category.name}
                width={26}
                height={26}
                className="rounded-full"
              />
              <span className="truncate max-w-[80px]">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-6 py-4 space-y-4 text-gray-800 font-medium shadow-lg">
          <Link
            href="/(auth)/login"
            className="flex items-center gap-2 hover:text-blue-600"
          >
            <User size={18} /> Login
          </Link>
          <Link
            href="/cart"
            className="flex items-center gap-2 hover:text-blue-600"
          >
            <Image
              src="/images/ui/cart-icon.svg"
              alt="Cart"
              width={18}
              height={18}
            />
            Cart
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
