import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#180902] text-white border-b shadow-md px-4 py-3">
      <div className="flex flex-wrap items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl font-semibold whitespace-nowrap">
          🛒 MyShop
        </Link>

        {/* Search Bar (desktop only) */}
        <div className="hidden sm:block sm:flex-1 px-4">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full rounded-md px-4 py-2 border border-white bg-white text-black focus:ring-2 focus:ring-blue-300 focus:outline-none"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden sm:flex gap-6 text-sm items-center font-medium">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/cart" className="hover:underline">Cart</Link>
          <Link to="/dashboard" className="hover:underline">Account</Link>
          <Link to="/login" className="hover:underline">Login</Link>
        </div>

        {/* Hamburger Button (Mobile) */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Search Bar (mobile only) */}
        <div className="w-full mt-3 sm:hidden">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full rounded-md px-4 py-2 border border-white bg-white text-black focus:ring-2 focus:ring-blue-300 focus:outline-none"
          />
        </div>

        {/* Mobile Nav Links */}
        {isOpen && (
          <div className="w-full mt-3 flex flex-col gap-2 text-sm sm:hidden font-medium">
            <Link to="/" onClick={toggleMenu} className="hover:underline">Home</Link>
            <Link to="/cart" onClick={toggleMenu} className="hover:underline">Cart</Link>
            <Link to="/dashboard" onClick={toggleMenu} className="hover:underline">Account</Link>
            <Link to="/login" onClick={toggleMenu} className="hover:underline">Login</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
