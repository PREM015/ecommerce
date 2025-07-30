"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const categories = [
  { label: "Mobiles", image: "/icons/mobiles.png", href: "/product" },
  { label: "Fashion", image: "/icons/fashion.png", href: "/product" },
  { label: "Electronics", image: "/icons/electronics.png", href: "/product" },
  { label: "Furniture", image: "/icons/furniture.png", href: "/product" },
  { label: "Appliances", image: "/icons/tv.png", href: "/product" },
  { label: "Beauty & Grocery", image: "/icons/beauty.png", href: "/product" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-3xl font-extrabold text-blue-700 tracking-wide">
          Bhaarat<span className="text-yellow-500">Cart</span>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 justify-center">
          <input
            type="text"
            placeholder="Search for products, brands, categories..."
            className="w-[420px] px-5 py-2 rounded-full border border-gray-300 bg-gray-50 shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/(auth)/login" className="hover:text-blue-600 transition">Login</Link>
          <Link href="/cart" className="hover:text-blue-600 transition flex items-center gap-1">🛒 Cart</Link>
          <Link href="/admin" className="hover:text-blue-600 transition">Admin</Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 pt-2 space-y-2 text-sm text-gray-700 bg-white border-t shadow-sm">
          <Link href="/(auth)/login" className="block hover:text-blue-600">Login</Link>
          <Link href="/cart" className="block hover:text-blue-600">Cart</Link>
          <Link href="/admin" className="block hover:text-blue-600">Admin</Link>
        </div>
      )}

      {/* Category Pills */}
      <div className="overflow-x-auto border-t bg-white">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-4 px-4 py-3">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="group flex flex-col items-center justify-center px-4 py-2 rounded-full bg-gray-100 hover:bg-blue-50 transition-all duration-200 shadow-sm"
            >
              <Image
                src={cat.image}
                alt={cat.label}
                width={36}
                height={36}
                className="mb-1 transition-transform group-hover:scale-110"
              />
              <span className="text-xs font-medium text-gray-700 group-hover:text-blue-600">
                {cat.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
