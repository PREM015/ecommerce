import React from "react";
import { Link } from "react-router-dom";
import { Search, User2, ShoppingCart, Store } from "lucide-react";

function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm px-4 pt-2 pb-0 text-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Flipkart
          <span className="text-yellow-400 text-sm ml-1">Explore Plus ✨</span>
        </Link>

        <div className="flex-grow max-w-xl">
          <div className="flex items-center bg-blue-50 rounded px-3 py-1">
            <Search className="text-gray-500 w-4 h-4 mr-2" />
            <input
              type="text"
              placeholder="Search for Products, Brands and More"
              className="w-full bg-transparent outline-none text-gray-700 text-sm"
            />
          </div>
        </div>

        <div className="flex gap-5 items-center text-gray-700">
          <Link to="/login" className="flex items-center gap-1 hover:text-blue-600">
            <User2 size={16} /> Login
          </Link>
          <Link to="/cart" className="flex items-center gap-1 hover:text-blue-600">
            <ShoppingCart size={16} /> Cart
          </Link>
          <Link to="/sell" className="flex items-center gap-1 hover:text-blue-600">
            <Store size={16} /> Become a Seller
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
