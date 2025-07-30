"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const categories = [
  { label: "Minutes", image: "/icons/minutes.png", href: "/minutes" },
  { label: "Mobiles & Tablets", image: "/icons/mobiles.png", href: "/categories/mobiles" },
  { label: "Fashion", image: "/icons/fashion.png", href: "/categories/fashion" },
  { label: "Electronics", image: "/icons/electronics.png", href: "/categories/electronics" },
  { label: "Home & Furniture", image: "/icons/furniture.png", href: "/categories/furniture" },
  { label: "TVs & Appliances", image: "/icons/tv.png", href: "/categories/appliances" },
  { label: "Flight Bookings", image: "/icons/flight.png", href: "/categories/flights" },
  { label: "Beauty, Food..", image: "/icons/beauty.png", href: "/categories/beauty" },
  { label: "Grocery", image: "/icons/grocery.png", href: "/categories/grocery" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Left Side: Logo + Search */}
        <div className="flex items-center gap-6">
          <Link href="/" className="text-2xl font-bold text-blue-700">
            Bhaarat<span className="text-yellow-500">Cart</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search for Products, Brands and More"
              className="w-[400px] px-4 py-2 border border-gray-300 rounded-md bg-blue-50 focus:outline-blue-500 text-sm"
            />
          </div>
        </div>

        {/* Right Side Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/login" className="hover:text-blue-600">Login</Link>
          <Link href="/cart" className="hover:text-blue-600 flex items-center gap-1">🛒 Cart</Link>
          <Link href="/seller" className="hover:text-blue-600">Become a Seller</Link>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-2 text-sm border-t text-gray-700 bg-white shadow-sm">
          <Link href="/login" className="block hover:text-blue-600">Login</Link>
          <Link href="/cart" className="block hover:text-blue-600">Cart</Link>
          <Link href="/seller" className="block hover:text-blue-600">Become a Seller</Link>
        </div>
      )}

      {/* Category Scroll Bar */}
      <div className="overflow-x-auto whitespace-nowrap border-t border-gray-100 py-2 bg-gray-50">
        <div className="max-w-7xl mx-auto flex gap-6 px-4">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              href={cat.href}
              className="flex flex-col items-center justify-center text-xs text-gray-700 hover:text-blue-600 transition-all duration-150"
            >
              <Image
                src={cat.image}
                alt={cat.label}
                width={40}
                height={40}
                className="mb-1 object-contain"
              />
              <span className="text-center leading-tight">{cat.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
